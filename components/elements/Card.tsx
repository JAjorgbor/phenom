import type { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-slate-900 border border-purple-900 px-5 p-10 md:px-10 rounded-3xl ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;
