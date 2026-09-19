import type { Metadata } from "next";

import { Chat } from "./_components/chat";
import { conversations } from "./_components/data";

export const metadata: Metadata = {
  title: "Customer messages — Swish",
  description: "Text Swish customers about quotes, schedules, and follow-ups. Ready to connect Twilio later.",
};

export default function Page() {
  return <Chat conversations={conversations} />;
}
