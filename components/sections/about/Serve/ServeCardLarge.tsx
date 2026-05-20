import Image from "next/image";

interface ServeItem {
  icon: string;
  title: string;
  description: string;
  list1?: string[];
  list2?: string[];
  image: string;
  alt?: string;
}

const ServeLargeCard = ({ item }: { item: ServeItem }) => {
  return (
    <div
      className="max-w-412.75 min-h-71.75 rounded-[10px] grid
      bg-[rgba(22,22,26,1)]
      shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]
      lg:grid-cols-[1.5fr_1fr]
      md:grid-cols-[2fr_1fr]
      sm:grid-cols-[3fr_2fr]"
    >
      {/* Content */}
      <div className="py-[38px] space-y-[23px] sm:pl-[48px] pl-[18px]">
        <div className="flex items-center gap-6">
          <div className="w-12.5 h-12.5 
            rounded-full flex items-center justify-center
            bg-[rgba(38,38,43,1)]">
            <Image src={item.icon} alt={item.alt || item.title} width={26} height={26} />
          </div>
          <h3 className="gradient-text">{item.title}</h3>
        </div>

        <div className="pb-[30px] sm:pb-0">
          <span className="caption text-muted">{item.description}</span>

          <div className="flex mt-6 pl-8 sm:flex-row sm:gap-10 flex-col gap-2">
            {item.list1 && (
              <ul className="list-disc text-muted caption space-y-2 sm:space-y-0">
                {item.list1.map((li, i) => <li key={i}>{li}</li>)}
              </ul>
            )}
            {item.list2 && (
              <ul className="list-disc text-muted caption space-y-2 sm:space-y-0">
                {item.list2.map((li, i) => <li key={i}>{li}</li>)}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full hidden sm:block">
        <Image src={item.image} alt={item.alt || item.title} fill className="rounded-r-[10px] object-cover" />
      </div>
    </div>
  );
};

export default ServeLargeCard;
