"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Analytics } from "@vercel/analytics/next";

export default function AnalyticsWrapper() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");

    if (consent === "accepted") {
      setEnabled(true);
    }
  }, []);

  if (!enabled) return null;

  return <Analytics />;
}