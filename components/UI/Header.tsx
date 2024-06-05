import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="max-w-[1200px] p-4 mx-auto">
      <div>
        <Link href={"/"}>
          <Image src={"/logo2.png"} width={80} height={80} alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
