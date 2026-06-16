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
  className = "",
}: CardProps) => {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl bg-surface-2 border border-border",
        "transition-all duration-500 hover:border-border-light",
        className,
      ].join(" ")}
    >
      <div className="aspect-[16/9] w-full overflow-hidden">
        {image ? (
          <img
            src={image.src}
            alt={image.alt || "Imagen del proyecto"}
            width={image.width}
            height={image.height}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-surface-3" />
        )}
      </div>

      <div className="p-6">
        {title && (
          <h3 className="text-lg font-semibold tracking-tight text-text-primary">
            {title}
          </h3>
        )}
        {content && (
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {content}
          </p>
        )}

        {actionButton && (
          <div className="mt-5">
            {actionHref ? (
              <a
                href={actionHref}
                onClick={onActionClick}
                target={actionHref.startsWith("#") ? undefined : "_blank"}
                rel={
                  actionHref.startsWith("#")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {actionButton}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ) : (
              <button
                type="button"
                onClick={onActionClick}
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {actionButton}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
