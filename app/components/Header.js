import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="py-4 px-14 border-b flex items-center justify-center gap-2 bg-slate-200">
      <div className="flex gap-3">
        <Link title="Home" className="hover:text-blue-500  transition-all ease-in-out" href={"/"}>HOME</Link>
        <Link title="Products" className="hover:text-blue-500 transition-all ease-in-out" href={"/products"}>PRODUCTS</Link>
      </div>
    </div>
  );
}

export default Header;
