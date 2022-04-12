import React from "react";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import Card from "./Card";

function HeadingHero({ title, description }) {
  return (
    <Card>
      <div className="flex flex-wrap justify-between items-center px-3 pt-3 pb-3">
        <h3 className="text-md font-semibold text-gray-500 uppercase">
          {title}
        </h3>
        <BadgeCheckIcon className="w-5" />
      </div>
      <div className="flex px-3 pb-3 text-sm text-gray-500">{description}</div>
    </Card>
  );
}

export default HeadingHero;
