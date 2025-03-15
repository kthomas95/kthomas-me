import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2 flex items-center justify-center h-dvh w-dvw">
      <h3 className="italic text-6xl font-black">Kyle Thomas</h3>
    </div>
  );
}
