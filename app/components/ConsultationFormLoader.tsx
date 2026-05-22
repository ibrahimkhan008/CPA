"use client";

import dynamic from "next/dynamic";

const ConsultationForm = dynamic(
  () => import("./ConsultationForm"),
  { ssr: false }
);

export default function ConsultationFormLoader() {
  return <ConsultationForm />;
}