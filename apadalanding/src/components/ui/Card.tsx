import React from "react";

// --- Interfaces ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

// --- Componente Principal ---
export const Card = ({
  children,
  className = "",
  hoverable = false,
}: CardProps) => {
  const baseStyles =
    "bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col";
  const hoverStyles = hoverable
    ? "hover:shadow-xl hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    : "shadow-md";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

// --- Subcomponentes ---
Card.Image = ({ src, alt, className = "" }: CardImageProps) => (
  <div
    className={`w-full aspect-video overflow-hidden bg-slate-100 ${className}`}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
);

Card.Content = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`p-6 flex-grow ${className}`}>{children}</div>;

Card.Title = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={`text-xl font-bold text-slate-900 mb-2 leading-tight ${className}`}
  >
    {children}
  </h3>
);

Card.Footer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`px-6 py-4 border-t border-slate-50 bg-slate-50/50 mt-auto ${className}`}
  >
    {children}
  </div>
);
