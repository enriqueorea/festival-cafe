import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="max-w-[1200px] p-4 mx-auto flex items-center justify-center fixed w-full z-50 bg-dark-purple/50 top-0 left-1/2 -translate-x-1/2">
      <div>
        <Link href={"/"}>
          <Image src={"/logo2.png"} width={80} height={80} alt="logo" />
        </Link>
      </div>
      <div className="flex-1 flex gap-4 items-center justify-center">
        <a className="text-white hover:text-light-brown" href="/">
          Inicio
        </a>
        <a className="text-white hover:text-light-brown" href="/#sedes">
          Sedes
        </a>
        <a className="text-white hover:text-light-brown" href="/#programa">
          Programa
        </a>
      </div>
    </header>
  );
};

export default Header;
