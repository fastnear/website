import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Dev Plan",
    price: "$69",
    period: "/month",
    features: ["10M RPC requests/month", "One API key", "Basic support"],
    link: "https://dashboard.fastnear.com/login?redirect=/pricing",
  },
  {
    name: "Pro Plan",
    price: "$199",
    period: "/month",
    features: ["36M RPC requests/month", "One API key", "Priority support"],
    link: "https://dashboard.fastnear.com/login?redirect=/pricing",
  },
  {
    name: "Business Plan",
    price: "$499",
    period: "/month",
    features: [
      "100M RPC requests/month",
      "Multiple API keys",
      "Priority support",
    ],
    link: "https://dashboard.fastnear.com/login?redirect=/pricing",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    featured: true,
    features: ["Unlimited RPC requests", "Custom endpoints", "24/7 support"],
    link: "https://forms.gle/DMuqD8WG4ag33beZ9",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Simple, Transparent Pricing
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative shadow-lg ${
                plan.featured
                  ? "bg-gradient-to-br from-secondary to-primary text-white border-2 border-primary"
                  : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span
                    className={`ml-2 ${
                      !plan.featured ? "text-muted-foreground" : ""
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full hover:scale-105 transform transition-transform duration-200 ${
                    plan.featured
                      ? "bg-white text-secondary hover:bg-white/90"
                      : ""
                  }`}
                >
                  <a href={plan.link}>
                    {plan.name === "Enterprise" ? "Contact Sales" : "Subscribe"}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
