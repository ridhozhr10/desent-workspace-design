import ThreeColumnLayout, { NavItem } from "./_component/ThreeColumnLayout";
import { CgSmartHomeLight } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { IoMdFitness } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuAudioWaveform } from "react-icons/lu";
import { MdOutlineKeyboardAlt } from "react-icons/md";
import { PiOfficeChairLight } from "react-icons/pi";

const navItems: NavItem[] = [
  { icon: <FiMonitor />, label: "Monitors", children: <>Monitors</> },
  {
    icon: <PiOfficeChairLight />,
    label: "Furniture",
    children: <>Furniture</>,
  },
  {
    icon: <MdOutlineKeyboardAlt />,
    label: "Office Accesories",
    children: <>Office Accessories</>,
  },
  {
    icon: <CgSmartHomeLight />,
    label: "Smart Home",
    children: <>Smart Home</>,
  },
  { icon: <FaLaptopCode />, label: "Computer", children: <>Computer</> },
  {
    icon: <IoGameControllerOutline />,
    label: "Gaming",
    children: <>Gaming</>,
  },
  {
    icon: <LuAudioWaveform />,
    label: "Audio & Video",
    children: <>Audio & Video</>,
  },
  {
    icon: <IoMdFitness />,
    label: "Health & Fitness",
    children: <>Health & Fitness</>,
  },
];

export default function Home() {
  return <ThreeColumnLayout navItems={navItems} />;
}
