import { Motivation } from "@/mainParts/Motivation";
import { Faq } from "@/mainParts/faq";
import { Footer } from "@/mainParts/footer";
import { Header } from "@/mainParts/header";

export function LandingPage() {
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <Motivation />
      <Faq />
      <Footer />
    </div>
  );
}
