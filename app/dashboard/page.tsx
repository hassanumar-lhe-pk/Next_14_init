"use client";
import { FC } from "react";
import { LuTableProperties } from "react-icons/lu";
import { TbReorder } from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";
import Layout from "../components/Layout";
import Widget from "../components/shared/widget";

const Dashboard: FC = () => {
  const items = {
    first: {
      label: "Orders",
      prefix: "$",
      suffix: " USD",
      separator: ",",
      counter: 123456,
      decimals: 2,
      link: "All orders",
      bgColor: "bg-blue",
      icon: <TbReorder color="white" />,
    },
    second: {
      label: "Products",
      prefix: "$",
      suffix: " USD",
      separator: ",",
      counter: 123456,
      decimals: 2,
      link: "All products",
      bgColor: "bg-yellow",
      icon: <LuTableProperties color="black" />,
    },
    third: {
      label: "Customers",
      prefix: "$",
      suffix: " USD",
      separator: ",",
      counter: 123456,
      decimals: 2,
      link: "All customers",
      bgColor: "bg-white",
      icon: <FaUsersGear color="#5E17EB" />,
    },
  };
  return (
    <Layout>
      {/* Header Heading */}
      <div className="flex flex-col p-4">
        <p className="text-2xl font-semibold text-secondary">Hey Admin!</p>
        <p className="text-md font-normal text-secondary">
          Here's what's happening with your store today.
        </p>
      </div>

      {/* Widgets */}
      <div className="flex justify-around gap-5 px-4 flex-col md:flex-row">
        <Widget item={items.first} />
        <Widget item={items.second} />
        <Widget item={items.third} />
      </div>
    </Layout>
  );
};
export default Dashboard;
