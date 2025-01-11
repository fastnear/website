import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import photoEdward from "@/app/images/customers/edward.jpg";
import photoPeter from "@/app/images/customers/peter.jpg";

const testimonials = [
  {
    name: "Edward Chew",
    role: "Founder, Meteor Wallet",
    image: photoEdward,
    quote:
      "FastNEAR offers stable and reliable RPC services, even during peak times and network congestion.",
  },
  {
    name: "Peter Volnov",
    role: "Founder, HERE Wallet",
    image: photoPeter,
    quote:
      "We were able to scale HOT Wallet to over 8 million weekly users with FastNEAR having our back covered and all NEAR data on-app side. We use FastNEAR RPC to cover 95% users's requests and FastNEAR api to index token balances.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary to-secondary/80 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl opacity-90">
            Join hundreds of satisfied developers building on NEAR
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur border-0 text-white"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white/10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm opacity-80">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-lg opacity-90">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
