import Image from "next/image";
import { TeamSection } from "../../data/TeamData";

interface Props {
  data: TeamSection;
}

export default function TeamCardLeft({ data }: Props) {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center gap-10">
      {/* Text */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-3">{data.title}</h2>
        <p className="plain-text">{data.description}</p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 relative image-box h-105">
        <Image
          src={data.member.image}
          alt={data.member.name}
          fill
          className="object-cover rounded-xl"
        />

        <div className="info absolute bottom-0 w-full px-4 py-3 flex justify-between items-center">
          <div>
            <p className="gradient-text">{data.member.name}</p>
            <p className="plain-text1 text-sm">{data.member.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
