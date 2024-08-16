"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

interface StackElProps {
  icon_name: string;
  name: string;
  color?: string;
}

const StackEl: React.FC<StackElProps> = ({
  icon_name,
  name,
  color = "#52525b",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-2 flex justify-center items-center gap-1 rounded-md transition-all duration-300 cursor-pointer ${
        isHovered ? `shadow-lg` : ""
      }`}
      style={{
        backgroundColor: color,
        boxShadow: isHovered ? `0px 0px 20px 3px ${color}` : "none", // Тень появляется только при наведении
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon icon={icon_name} />
      <p>{name}</p>
    </div>
  );
};

export default StackEl;
