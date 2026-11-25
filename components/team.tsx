import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import photoEugene from "@/app/images/team/eugene.jpg";
import photoMike from "@/app/images/team/mike.jpg";

const team = [
  {
    name: "Eugene",
    role: "Co-founder",
    image: photoEugene,
    bio: "Co-founder of FastNEAR and founder of NEAR.social. Previously worked at Proximity, NEAR Protocol, Google, and Facebook. Extensive experience in blockchain architecture and developer tooling.",
  },
  {
    name: "Mike",
    role: "Co-founder",
    image: photoMike,
    bio: "Early NEAR ecosystem contributor with extensive blockchain infrastructure experience. Former web3 startup founder with VC backing. Expert in server management and validator operations, specializing in high-stakes migrations and security implementations.",
  },
];

export function Team() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground">
            Industry veterans building the future of blockchain infrastructure
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            FastNEAR is a{" "}
            <Link
              href="https://svrn.net"
              className="text-primary font-medium hover:underline"
            >
              SVRN
            </Link>{" "}
            company (NASDAQ: SVRN).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6 text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-start">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
