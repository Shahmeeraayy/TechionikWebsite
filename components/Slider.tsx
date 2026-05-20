type Props = {
  count: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
};

const SliderDots = ({ count, activeIndex, onDotClick }: Props) => {
  return (
    <div className="flex justify-center mt-10 gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`
            w-[18px] h-[18px] rounded-full transition
            ${activeIndex === i ? "bg-[var(--color-primary)]" : "bg-gray-600"}
          `}
          aria-label={`Slide ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default SliderDots;
