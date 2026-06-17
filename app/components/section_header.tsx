type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const isLeft = align === "left";

  return (
    <div className={isLeft ? "max-w-3xl" : "mx-auto max-w-3xl text-center"}>
      {eyebrow && (
        <p
          className={[
            "mb-2 text-xs font-semibold uppercase text-cyan-300 sm:mb-3",
            isLeft ? "" : "mx-auto",
          ].join(" ")}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
