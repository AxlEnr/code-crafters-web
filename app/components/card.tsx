import React from 'react';
import SpotlightCard from "./SpotlightCard";

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
    <SpotlightCard
      className="rounded-lg border border-slate-700 bg-slate-900/70 p-8 shadow-lg backdrop-blur-md transition duration-300 hover:scale-105 hover:shadow-cyan-400/20"
      style={{
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <div className="flex justify-center">
        {icon && (
          <div className="w-12 h-12 text-cyan-400">{icon}</div>
        )}
      </div>
      <div className="mt-6 text-xl font-bold text-white">
        {title && (
          <h3>{title}</h3>
        )}
      </div>
      <div className="mt-3 text-gray-400">
        {content && (
          <p>{content}</p>
        )}
      </div>
    </SpotlightCard>
  );
};

export default Card;

