import { MessageCircle } from "lucide-react"

export function WhatsAppWidget() {
  return (
    <a
      href="https://wa.link/kloeo4"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#1fb857] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 md:bottom-7 md:right-7"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
