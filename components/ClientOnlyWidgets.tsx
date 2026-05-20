"use client";

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
  return (
    <>
      <ExitIntentModal />
      <TechionikChatWidget />
      <AccessibilityPanel />
    </>
  );
}
