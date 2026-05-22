"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const TechionikChatWidget = dynamic(() => import("@/components/chatBot"), {
  ssr: false,
  loading: () => null,
});

const ExitIntentModal = dynamic(() => import("@/components/exitIntentModal"), {
  ssr: false,
  loading: () => null,
});

const AccessibilityPanel = dynamic(
  () => import("@/components/AccessibilityWidget").then((mod) => mod.AccessibilityWidget),
  {
    ssr: false,
    loading: () => null,
  },
);

export default function ClientOnlyWidgets() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsReady(true);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <ExitIntentModal />
      <TechionikChatWidget />
      <AccessibilityPanel />
    </>
  );
}
