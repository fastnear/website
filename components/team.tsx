import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import photoEugene from "@/app/images/team/eugene.jpg";
import photoMike from "@/app/images/team/mike.jpg";
import photoVlad from "@/app/images/team/vlad.jpg";

const team = [
  {
    name: "Evgeny Kuzyakov",
    role: "Co-founder & CTO",
    image: photoEugene,
    bio: "Co-founder of FastNEAR and founder of NEAR.social. Previously worked at Proximity, NEAR Protocol, Google, and Facebook. Extensive experience in blockchain architecture and developer tooling.",
  },
  {
    name: "Mike Purvis",
    role: "Head of Infrastructure",
    image: photoMike,
    bio: "Early NEAR ecosystem contributor with extensive blockchain infrastructure experience. Former web3 startup founder with VC backing. Expert in server management and validator operations, specializing in high-stakes migrations and security implementations.",
  },
  {
    name: "Vlad Grichina",
    role: "Chief Duct Tape Officer",
    image: photoVlad,
    bio: "Pioneer in NEAR ecosystem development tools and wallet infrastructure. Built early NEAR dev tools and contributed to core infrastructure. Previously at Human Guild, NEAR, and Google. Driving force behind Web4 and unstoppable websites.",
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
