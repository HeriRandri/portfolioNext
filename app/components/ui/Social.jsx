import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaYoutube />, path: "" },
];
const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={iconStyle}>
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
