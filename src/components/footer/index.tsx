// meu-portifolio/src/components/Footer/index.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} - Meu Portfólio. Todos os direitos
          reservados.
        </p>
        <div className="mt-2">
          <a
            href="https://github.com/Flavia-Munhoz"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            GitHub
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://www.linkedin.com/in/flaviamunhoz1990/"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
