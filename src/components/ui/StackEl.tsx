import { Icon } from "@iconify/react";

interface StackElProps {
  icon_name: string;
  name: string;
  color?: string;  // Сделаем цвет опциональным с дефолтным значением
}

const StackEl: React.FC<StackElProps> = ({ icon_name, name, color = "#52525b" }) => {
  return (
    <div
      className="p-2 flex justify-center items-center gap-1 rounded-md"
      style={{ backgroundColor: color }}
    >
      <Icon icon={icon_name} />
      <p>{name}</p>
    </div>
  );
};

export default StackEl;
