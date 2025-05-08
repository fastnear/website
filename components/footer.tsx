import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary/90 to-secondary text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-lg font-bold mb-4">FastNear</h4>
            <p className="text-white/80">
              Building the future of NEAR Protocol infrastructure.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <Link
              href="/privacy"
              className="block text-white/80 hover:text-white transition-colors mb-2"
            >
              Privacy Policy
            </Link>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="space-y-2">
              <Link
                href="https://github.com/fastnear"
                className="block text-white/80 hover:text-white transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://x.com/fast_near"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Twitter
              </Link>
              <Link
                href="https://t.me/fast_near"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Telegram
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-white/60 pt-8 border-t border-white/10">
          <p>© {new Date().getFullYear()} FastNear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
