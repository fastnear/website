import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Privacy } from "@/components/privacy";

export default function PrivacyPage() {
  return (
    <main>
      <Navbar alwaysScrolled />
      <Privacy />
      <Footer />
    </main>
  );
}
