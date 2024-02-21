// meu-portifolio/src/components/Header/NavItem.tsx
import Link from "next/link";

interface navItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<navItemProps> = ({ href, label }) => {
  return (
    <li>
      <Link
        className="bg-white/20 hover:bg-white/50 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out"
        href={href}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
