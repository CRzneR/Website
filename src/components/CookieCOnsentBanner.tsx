"use client";

import React from "react";
import Cookies from "js-cookie";

type CookieTypes = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CookieConsentBanner: React.FC = () => {
  const [cookieConsent, setCookieConsent] = React.useState<string | null>(null);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [cookieTypes, setCookieTypes] = React.useState<CookieTypes>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const getCookiePreferences = (): CookieTypes | null => {
    const preferencesStr = Cookies.get("cookiePreferences");
    if (preferencesStr) {
      try {
        return JSON.parse(preferencesStr);
      } catch {
        return null;
      }
    }
    return null;
  };

  React.useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    const preferences = getCookiePreferences();

    if (preferences) {
      setCookieTypes(preferences);
      const allDisabled = Object.values(preferences).every((v) => !v);
      setCookieConsent(allDisabled ? "denied" : "accepted");
    } else {
      setCookieConsent(consent || null);
    }
  }, []);

  const handleAccept = () => {
    const preferences: CookieTypes = {
      necessary: true,
      analytics: true,
      marketing: false,
    };

    Cookies.set("cookieConsent", "accepted");
    Cookies.set("cookiePreferences", JSON.stringify(preferences));

    setCookieTypes(preferences);
    setCookieConsent("accepted");
  };

  const handleDeny = () => {
    const preferences: CookieTypes = {
      necessary: false,
      analytics: false,
      marketing: false,
    };

    Cookies.set("cookieConsent", "denied");
    Cookies.set("cookiePreferences", JSON.stringify(preferences));

    setCookieTypes(preferences);
    setCookieConsent("denied");
  };

  const handleManage = () => {
    setShowModal(true);
  };

  const handleCookieTypeChange = (type: keyof CookieTypes) => {
    if (type === "necessary") return;

    setCookieTypes((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleSavePreferences = () => {
    Cookies.set("cookiePreferences", JSON.stringify(cookieTypes));

    const allDisabled = Object.values(cookieTypes).every((v) => !v);

    if (allDisabled) {
      Cookies.set("cookieConsent", "denied");
      setCookieConsent("denied");
    } else {
      Cookies.set("cookieConsent", "accepted");
      setCookieConsent("accepted");
    }

    setShowModal(false);
  };

  if (cookieConsent === "accepted" || cookieConsent === "denied") {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 sm:p-6 text-sm sm:text-base z-50">
      <p className="max-w-5xl mx-auto">
        Diese Website verwendet Cookies. Einige sind technisch notwendig,
        während andere uns helfen, die Website zu verbessern. Sie können selbst
        entscheiden, welche Kategorien Sie zulassen möchten. Weitere
        Informationen finden Sie in der Datenschutzerklärung.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        <button
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
          onClick={handleAccept}
        >
          Alle akzeptieren
        </button>

        <button
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
          onClick={handleDeny}
        >
          Ablehnen
        </button>

        <button
          className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded"
          onClick={handleManage}
        >
          Einstellungen
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Cookie-Einstellungen
            </h2>

            <div className="space-y-3 mb-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked disabled />
                Notwendige Cookies
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={cookieTypes.analytics}
                  onChange={() => handleCookieTypeChange("analytics")}
                />
                Analytics Cookies
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={cookieTypes.marketing}
                  onChange={() => handleCookieTypeChange("marketing")}
                />
                Marketing Cookies
              </label>
            </div>

            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Abbrechen
              </button>

              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                onClick={handleSavePreferences}
              >
                Speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsentBanner;