"use client";

import { useEffect } from "react";

export default function WebVitalsReporter() {
  useEffect(() => {
    let cancelled = false;

    void import("@/lib/performance/webVitals").then(({ startWebVitalsReporting }) => {
      if (!cancelled) {
        startWebVitalsReporting();
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
