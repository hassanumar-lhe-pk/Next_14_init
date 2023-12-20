"use client";
import React, { ReactElement } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

interface MenuBarMobileProps {
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuBarMobile({
  setter,
}: MenuBarMobileProps): ReactElement {
  return (
    <nav className="md:hidden z-20 fixed top-0 left-0 right-0 h-[70px] bg-secondary flex [&>*]:my-auto px-3 items-center justify-between">
      <Link href="/dashboard">
        <p className="text-black text-2xl font-bold">Stanley Steemer</p>
      </Link>
      <Link
        href={"#"}
        className="text-3xl text-black"
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
      >
        <FiMenu />
      </Link>
    </nav>
  );
}
