import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

function roundedButton({ children, onClick }: Props) {
  return (
    <button
      aria-label=""
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-full shadow-md hover:bg-slate-200"
    >
      {children}
    </button>
  );
}

export default roundedButton;
