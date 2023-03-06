import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  url: string;
  children?: ReactNode;
};

function roundedLink({ url, children }: Props) {
  return (
    <Link
      href={url}
      className="flex h-12 w-12 items-center justify-center rounded-full shadow-md hover:bg-slate-200"
    >
      {children}
    </Link>
  );
}

export default roundedLink;
