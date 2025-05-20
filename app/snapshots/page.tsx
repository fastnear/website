import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Snapshots } from "@/components/snapshots";

export default function SnapshotsPage() {
  return (
    <main>
      <Navbar alwaysScrolled />
      <Snapshots />
      <Footer />
    </main>
  );
}
