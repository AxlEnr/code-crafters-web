import React from "react";

type CardProps = {
  title?: React.ReactNode;
  content?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  actionButton?: React.ReactNode;
  actionHref?: string;
  onActionClick?: (e: React.MouseEvent) => void;
  href?: string;
  className?: string;
};

const ProjectCard = ({
  title,
  content,
  image,
  actionButton,
  actionHref,
  onActionClick,
  href,
  className = "",
}: CardProps) => {
  const useWrapperLink = Boolean(href) && !Boolean(actionHref);
  const Wrapper: any = useWrapperLink ? "a" : "div";

  return (
    <Wrapper
      {...(useWrapperLink ? { href } : {})}
      className={[
        "group relative overflow-hidden rounded-3xl",
        "bg-gradient-to-b from-slate-900/80 to-slate-900/40",
        "border border-slate-800/70 backdrop-blur-md",
        "shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
        "ring-1 ring-cyan-400/0 hover:ring-cyan-400/20",
        "transition-all duration-300 ease-out",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
        "hover:-translate-y-1 hover:shadow-cyan-400/10",
        className,
      ].join(" ")}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div className="relative">
        <div className="aspect-[16/9] w-full overflow-hidden">
          {image ? (
            <img
              src={image.src}
              alt={image.alt || "Imagen del proyecto"}
              width={image.width}
              height={image.height}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="h-full w-full bg-slate-800/60" />
          )}
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/10 to-slate-900/70" />
          <div className="absolute -inset-x-[20%] -bottom-16 h-32 bg-gradient-to-t from-cyan-400/10 to-transparent blur-2xl transition-opacity duration-300 group-hover:opacity-80 opacity-40" />
        </div>
      </div>

      <div className="p-6 md:p-7">
        {title && (
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
            {title}
          </h3>
        )}
        {content && (
          <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-300/90">
            {content}
          </p>
        )}

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            <span className="inline-block align-middle">Listo para explorar</span>
          </div>

          {actionButton &&
            (actionHref ? (
              <a
                href={actionHref}
                onClick={onActionClick}
                target={actionHref.startsWith("#") ? undefined : "_blank"}
                rel={
                  actionHref.startsWith("#") ? undefined : "noopener noreferrer"
                }
                className={[
                  "inline-flex items-center justify-center",
                  "rounded-xl border border-cyan-400/40",
                  "px-4 py-2 text-sm font-semibold",
                  "text-white",
                  "bg-slate-900/50",
                  "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]",
                  "hover:border-cyan-400/70 hover:shadow-cyan-400/10",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
                  "transition-all duration-200",
                ].join(" ")}
              >
                {actionButton}
              </a>
            ) : (
              <button
                type="button"
                onClick={onActionClick}
                className={[
                  "inline-flex items-center justify-center",
                  "rounded-xl border border-cyan-400/40",
                  "px-4 py-2 text-sm font-semibold",
                  "text-white",
                  "bg-slate-900/50",
                  "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]",
                  "hover:border-cyan-400/70 hover:shadow-cyan-400/10",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
                  "transition-all duration-200",
                ].join(" ")}
              >
                {actionButton}
              </button>
            ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
