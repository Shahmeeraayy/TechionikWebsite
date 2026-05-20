import Button from "@/components/Button";
import { HoWeCooperate, HowWeCooperateData } from "@/data/how-we-cooperate-data";
import Image from "next/image";

interface CorporateCardProps{
  info: HoWeCooperate[]
}
export const CooperateCard = ({info}: CorporateCardProps) => {
  return (
    <main className="space-y-10">
      {" "}
      {/* spacing between each card */}
      {info.map((data) => (
        <div
          key={data.index}
          className={`flex flex-col lg:flex-row  gap-8 bg-[#16161A] p-6 rounded-2xl ${
            data.layout === "image-right" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* LEFT / RIGHT Content */}
          <div className="flex-1 flex flex-col justify-around gap-4">
            {/* Index and Heading */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-[#26262B] rounded-full font-bold text-lg">
                <span className="bg-gradient-to-r from-[#F05323] to-[#E1E1E1] bg-clip-text font-bold text-transparent">
                  {data.index}
                </span>
              </div>

              <h3 className="text-muted text-2xl font-semibold">
                {data.Heading}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-300 mt-2">{data.Description}</p>

            {/* List */}
            <ul className="mt-4 text-gray-300 space-y-2">
              <li>
                <span className="font-bold text-white">
                  {data.listHeading1}:{" "}
                </span>
                {data.listParagraph1}
              </li>
              <br />
              <li>
                <span className="font-bold text-white">
                  {data.listHeading2}:{" "}
                </span>
                {data.listParagraph2}
              </li>
            </ul>

            {/* Button */}
            <Button
              text={data.buttonText}
              icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
              href="/blog"
              variant="glass"
              className="inline-flex md:inline-flex justify-around w-50"
            />
          </div>

          {/* Image */}
          <div className="flex-1 w-full lg:w-auto">
            <Image
              src={data.image}
              alt={data.Heading}
              width={600}
              height={400}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      ))}
    </main>
  );
};

export default CooperateCard;
