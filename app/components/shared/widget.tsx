import React from "react";
import CountUp from "react-countup";
import Link from "next/link";
import { Card, CardBody } from "reactstrap";
import { WidgetItem } from "@/app/types/types";

interface WidgetProps {
  item: WidgetItem;
}

const Widget: React.FC<WidgetProps> = ({ item }) => {
  return (
    <div className="bg-secondary w-full rounded-xl lg:w-1/3 p-4">
      <Card className="transition-transform transform hover:scale-105">
        <CardBody>
          <div className="flex items-center">
            <div className="flex-grow overflow-hidden">
              <p className="text-uppercase font-medium text-gray-500 truncate">
                {item.label}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start mt-3 gap-2">
            <CountUp
              start={0}
              prefix={item.prefix}
              suffix={item.suffix}
              separator={item.separator}
              end={item.counter}
              decimals={item.decimals}
              duration={4}
              className="text-md"
            />
            <div className="flex w-full justify-between items-center">
              <Link href="#" className="underline text-primary">
                {item.link}
              </Link>
              <div className={`flex justify-center items-center rounded-full w-8 h-8 ${item.bgColor}`}>
                {item.icon}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Widget;
