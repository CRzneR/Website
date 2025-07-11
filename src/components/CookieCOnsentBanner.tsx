"use client";

import React from "react";
import Cookies from "js-cookie";

const CookieConsentBanner: React.FC = () => {
  const [cookieConsent, setCookieConsent] = React.useState<string | null>(null);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [cookieTypes, setCookieTypes] = React.useState<{
    [key: string]: boolean;
  }>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const getCookiePreferences = () => {
    const preferencesStr = Cookies.get("cookiePreferences");
    if (preferencesStr) {
      return JSON.parse(preferencesStr);
    }
    return null;
  };

  React.useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    const preferences = getCookiePreferences();

    if (consent === "denied") {
      setCookieConsent("denied");
      setCookieTypes({
        necessary: false,
        analytics: false,
        marketing: false,
      });
    } else if (preferences) {
      const allDisabled = Object.values(preferences).every((value) => !value);
      if (allDisabled) {
        setCookieConsent("denied");
      } else {
        setCookieConsent("accepted");
      }
    } else {
      setCookieConsent(consent || null);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "accepted");
    setCookieConsent("accepted");
    console.log("User accepted cookies");
    console.log("User-Agent:", window.navigator.userAgent);
    console.log("User Language:", window.navigator.language);
    console.log("User Preferences:", Cookies.get("userPreferences"));
    console.log("Session ID:", Cookies.get("sessionId"));
  };

  const handleDeny = () => {
    Cookies.set("cookieConsent", "denied");
    setCookieConsent("denied");
    Cookies.remove("cookiePreferences");
    setCookieTypes({
      necessary: false,
      analytics: false,
      marketing: false,
    });
  };

  const handleManage = () => {
    setShowModal(true);
  };

  const handleCookieTypeChange = (type: string) => {
    setCookieTypes((prevTypes) => ({
      ...prevTypes,
      [type]: !prevTypes[type],
    }));
  };

  const handleSavePreferences = () => {
    const preferences = JSON.stringify(cookieTypes);
    Cookies.set("cookiePreferences", preferences);

    const allDisabled = Object.values(cookieTypes).every((value) => !value);
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
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50">
      <p>This website uses cookies</p>
      <div className="mt-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
          onClick={handleAccept}
        >
          Accept
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
          onClick={handleDeny}
        >
          Deny
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleManage}
        >
          Manage Preferences
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Cookie Preferences</h2>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="necessary"
                  checked={cookieTypes.necessary}
                  onChange={() => handleCookieTypeChange("necessary")}
                  disabled
                  className="mr-2"
                />
                <label
                  htmlFor="necessary"
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Necessary Cookies
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="analytics"
                  checked={cookieTypes.analytics}
                  onChange={() => handleCookieTypeChange("analytics")}
                  className="mr-2"
                />
                <label
                  htmlFor="analytics"
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Analytics Cookies
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={cookieTypes.marketing}
                  onChange={() => handleCookieTypeChange("marketing")}
                  className="mr-2"
                />
                <label
                  htmlFor="marketing"
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Marketing Cookies
                </label>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={handleSavePreferences}
                >
                  Save Preferences
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsentBanner;
