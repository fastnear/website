import { Card, CardContent } from "@/components/ui/card";
import { Database, MessageSquare, Eye, Server, Code, ArrowLeftRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Server className="w-16 h-16" />,
    title: "NEAR RPC",
    description:
      "Enterprise-grade infrastructure with superior performance and reliability.",
    features: [
      "Faster query responses and transaction submissions",
      "Increased reliability and fewer downtimes",
      "Enhanced security features",
      "Customizable configurations",
    ],
    link: "#pricing",
    action: "Get started →",
  },
  {
    icon: <Database className="w-16 h-16" />,
    title: "NEARDATA",
    description:
      "Streaming access to NEAR blockchain blocks and data through REST APIs.",
    features: [
      "Finalized and optimistic block data as JSON",
      "Transaction hashes included with receipts",
      "No authentication required",
    ],
    link: "https://neardata.xyz/",
  },
  {
    icon: <Code className="w-16 h-16" />,
    title: "FastNear API",
    description: "Low-latency API for wallets and explorers.",
    features: [
      "Account and token balance lookups",
      "Staking pool information",
      "NFT and fungible token data",
      "Top holder analytics",
    ],
    link: "https://api.fastnear.com",
  },
  {
    icon: <MessageSquare className="w-16 h-16" />,
    title: "Custom Indexer Solutions",
    description: "Tailored database solutions for specific project needs.",
    features: [
      "Dedicated data collection",
      "Customized reports and analytics",
      "Expert support team",
      "Scalable architecture",
    ],
    link: "https://t.me/fast_near",
  },
  {
    icon: <Eye className="w-16 h-16" />,
    title: "Explorer API",
    description: "Transaction and block data for blockchain explorers.",
    features: [
      "Transaction lookup by hash",
      "Account transaction history with filtering",
      "Block and receipt information",
      "Cursor-based pagination",
    ],
    link: "https://tx.main.fastnear.com/",
  },
  {
    icon: <ArrowLeftRight className="w-16 h-16" />,
    title: "Transfers API",
    description: "Query incoming and outgoing token transfers for any account.",
    features: [
      "Filter by time range, asset, and amount",
      "Incoming and outgoing transfer direction",
      "Support for native and token transfers",
    ],
    link: "https://transfers.main.fastnear.com/",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-background relative">
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-background"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">
            Explore our range of offerings designed to accelerate your
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-t-4 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-0.5 transform transition-all duration-300"
            >
              <CardContent className="p-6 flex flex-col h-full min-h-[400px]">
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="mr-2 text-primary">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link}
                  className="mt-auto text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  {service.action || "Learn more →"}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
