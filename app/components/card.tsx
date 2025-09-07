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
    <div
      className="bg-slate-900/70 backdrop-blur-md border border-slate-700 shadow-lg rounded-2xl p-8 hover:shadow-cyan-400/20 transition hover:scale-105 transform duration-300"
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
    </div>
  );
};

export default Card;

