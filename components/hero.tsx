import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#00E5FF] via-[#0052CC] to-[#001F66] animate-gradient">
      <div className="absolute inset-0 animate-float opacity-10">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            fill="currentColor"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,87.6,-1.4C85.2,13.5,77.8,27,68.4,38.4C59,49.8,47.6,59.1,34.7,64.5C21.8,69.9,7.3,71.4,-7.2,70.5C-21.7,69.6,-36.2,66.3,-47.6,58.7C-59,51.1,-67.3,39.2,-74.3,25.7C-81.3,12.2,-87,-2.8,-84.5,-16.3C-82,-29.8,-71.3,-41.8,-58.7,-49C-46.1,-56.2,-31.6,-58.7,-18.9,-67.5C-6.1,-76.3,4.8,-91.4,18.4,-92.6C32,-93.8,48.3,-81.1,44.7,-76.4Z"
          />
        </svg>
      </div>
      <div className="absolute inset-0 animate-float-reverse opacity-5">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            fill="currentColor"
            d="M54.2,-75.7C71.4,-68.1,87.1,-55.4,94.3,-39.1C101.4,-22.8,99.9,-2.9,94.1,14.9C88.3,32.6,78.1,48.2,64.7,59.2C51.3,70.2,34.7,76.6,17.4,79.6C0.1,82.6,-17.9,82.2,-33.6,75.9C-49.3,69.6,-62.7,57.4,-73.6,42.4C-84.5,27.4,-92.9,9.6,-91.8,-8C-90.6,-25.6,-79.9,-43,-66.1,-55.9C-52.3,-68.8,-35.4,-77.2,-17.9,-79.7C-0.4,-82.2,17.7,-78.8,34.7,-75.5C51.7,-72.1,67.6,-68.8,54.2,-75.7Z"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex items-center min-h-screen">
        <div className="max-w-3xl mx-auto text-start text-white pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            The Fastest Gateway to NEAR Protocol
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            High-performance infrastructure enabling seamless blockchain
            interactions. Build faster, scale further, and innovate with
            confidence.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="#pricing">Start Building Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
