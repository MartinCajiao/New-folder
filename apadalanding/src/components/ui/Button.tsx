import React from "react";

// --- Interfaces ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) => {
  // --- Estilos Base ---
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-offset-2";

  // --- Variantes Visuales ---
  const variants = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600 shadow-md shadow-orange-500/30 hover:-translate-y-0.5 focus:ring-orange-500",
    secondary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/30 hover:-translate-y-0.5 focus:ring-blue-600",
    outline:
      "bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 focus:ring-slate-200",
    ghost:
      "bg-transparent text-slate-600 hover:bg-blue-50 hover:text-blue-700 focus:ring-blue-100",
  };

  // --- Tamaños ---
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  return (
    <button className={combinedClasses.trim()} {...props}>
      {children}
    </button>
  );
};
