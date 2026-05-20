import Image from "next/image";

interface CulturalItem {
  icon: string;
  title: string;
  description: string;
}

interface CultureValueBlockProps {
  items: CulturalItem[];
}

const CultureValueBlock = ({ items }: CultureValueBlockProps) => {
  return (
    // Added space-y-10 here to handle spacing between multiple items dynamically
    <div className="flex flex-col space-y-10">
      {items.map((item, index) => (
        <div key={index}>
          {/* CHANGED: Removed pt-14.5. Added mb-4 to space the title from the paragraph below it */}
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-12 h-12 border p-1.5 rounded-full flex items-center justify-center bg-[#26262B] border-[#26262B]">
              <Image
                src={item.icon}
                alt={item.title}
                width={28}
                height={28}
                className="object-fit"
              />
            </div>
            <h2 className="text-gradient">{item.title}</h2>
          </div>

          {/* Added text-gray-400 to match your left column text color if needed */}
          <p className="body-2 text-muted">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CultureValueBlock;