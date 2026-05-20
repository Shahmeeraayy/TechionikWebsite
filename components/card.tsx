import Image from "next/image";

type CardProps = {
  title: string;
  image: string;
  active?: boolean;
};
const Card = ({ title, image, active }: CardProps) => {
  return (
    <div
      className={`
     relative rounded-2xl 
        bg-[#16161A] hover:bg-[#2A2A34]
        transition-all duration-300

        ${active ? "ring-1 ring-[#F05323]" : "ring-2 ring-inset ring-[#2A2A34]"}
      `}
    >

      {/* Image */}
      <div className="rounded-xl overflow-hidden py-6 px-10 ">
        <Image
          src={image}
          alt={title}
          width={500}
          height={280}
          loading="lazy"
          className="w-full h-[220px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-3 px-10 py-4" >
        <h3 className=" font-semibold ">
          {title}
        </h3>

        <ul className="text-sm text-gray-400 space-y-2">
          <li>• Full-scale development handled with expertise.</li>
          <li>• Skilled IT team managing the entire development life cycle.</li>
          <li>• Pain-free project management and delivery assurance.</li>
        </ul>
      </div>
    </div>
  );
};
export default Card