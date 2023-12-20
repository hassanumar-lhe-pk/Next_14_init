"use client";
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { LuTableProperties } from "react-icons/lu";
import { TbReorder } from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";
import { logo } from "@/app/utils/images";

interface SidebarProps {
  show: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuItemProps {
  icon: React.ReactNode;
  name: string;
  route: string;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, name, route, setter }) => {
  // Highlight menu item based on currently displayed route
  const colorClass = "text-black/50 hover:text-primary";

  return (
    <Link
      href={route}
      onClick={() => {
        setter((oldVal: any) => !oldVal);
      }}
      className={`flex text-black gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-divider ${colorClass}`}
      passHref
    >
      <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
      <div>{name}</div>
    </Link>
  );
};

const ModalOverlay: React.FC<{
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setter }) => (
  <div
    className="flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
    onClick={() => {
      setter((oldVal) => !oldVal);
    }}
  />
);

const Sidebar: React.FC<SidebarProps> = ({ show, setter }) => {
  // Define our base class
  const className =
    "bg-secondary w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  // Append class based on the state of the sidebar visibility
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="flex justify-center pt-5">
          <Link href="/dashboard" passHref>
            <Image src={logo} alt="Company Logo" width={180} height={70} />
          </Link>
        </div>
        <div className="flex flex-col mt-5">
          <MenuItem
            name="Orders"
            route="/orders"
            icon={<TbReorder />}
            setter={setter}
          />
          <MenuItem
            name="Products"
            route="/products"
            icon={<LuTableProperties />}
            setter={setter}
          />
          <MenuItem
            name="Customers"
            route="/customers"
            icon={<FaUsersGear />}
            setter={setter}
          />
        </div>
      </div>
      {show ? <ModalOverlay setter={setter} /> : <></>}
    </>
  );
};

export default Sidebar;
