import Image from "next/image";

type ClientCardProps = {
  title: string;
  designation: string;
  description: string;
  image: string;
  color: string; // ← dynamic color
  active?: boolean;
};

const ClientCard = ({
  title,
  designation,
  description,
  image,
  color,
  active = false,
}: ClientCardProps) => {
  return (
    <div
      className={`
        relative rounded-2xl py-6  px-6 b
      bg-[#16161A]  hover:bg-[#222222]
        transition-all duration-300
        ${active ? "ring-1 ring-orange-500" : "ring-1 ring-white/10"}
      `}
    >
      {/* ================= TOP ROW ================= */}
      <div className="flex items-center justify-between gap-4">
        {/* Title + Designation */}
        <div className="space-y-1">
          <h3 className="text-lg md:text-xl font-semibold text-white">
            {title}
          </h3>

          {/* Designation (dynamic color) */}
          <p
            className="text-sm font-medium"
            style={{ color }}
          >
            {designation}
          </p>
        </div>

        {/* Image with colored ring */}
        <div
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full p-[2px] flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${color}, transparent)`,
          }}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0E0E0E]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ClientCard;
