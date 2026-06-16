import React from 'react';

type CardProps = {
  title?: React.ReactNode;
  content?: React.ReactNode;
  icon?: React.ReactNode;
};

const Card = ({
  title,
  content,
  icon
}: CardProps) => {
  return (
    <div className="group relative bg-surface-2 border border-border rounded-2xl p-8 transition-all duration-500 hover:border-border-light">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-1/0 via-surface-1/0 to-surface-1/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        {icon && (
          <div className="mb-5 inline-flex p-3 rounded-xl bg-surface-1 border border-border text-text-secondary group-hover:text-text-primary transition-colors duration-500">
            {icon}
          </div>
        )}

        {title && (
          <h3 className="text-lg font-semibold tracking-tight text-text-primary">
            {title}
          </h3>
        )}

        {content && (
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {content}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
