// meu-portifolio/src/components/Header/index.tsx
import NavItem from "./nav-item";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre" },
  { href: "/skills", label: "Habilidades" },
  { href: "/contact", label: "Contato" },
];

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Meu Portfólio</h1>
        <nav className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 rounded-lg p-1">
          <ul className="flex space-x-4">
            {navigationLinks.map((link) => (
              <NavItem key={link.href} href={link.href} label={link.label} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
