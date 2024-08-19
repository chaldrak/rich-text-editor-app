import "./styles.scss";

import React from "react";
import Editor from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-24 w-full md:max-w-6xl mx-auto">
      <Editor />
    </main>
  );
}
