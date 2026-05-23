"use client";

import { Agentation } from "agentation";

export function DevAgentation() {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <Agentation
      endpoint="http://localhost:4747"
      copyToClipboard={false}
      onSessionCreated={(sessionId) => {
        console.log("[Agentation] Session started:", sessionId);
      }}
    />
  );
}