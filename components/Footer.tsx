import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <footer className="mt-14 pt-8 mb-10 max-w-[1200px] mx-auto flex flex-col gap-5 border-t-2 border-light-brown ">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link href={"/"}>
            <Image src={"/logo.png"} width={100} height={80} alt="logo" />
          </Link>
          <Link href={"http://www.veracruz.gob.mx/AGROPECUARIO/"}>
            <Image
              src={"/sedarpa-dorado.png"}
              width={180}
              height={100}
              alt="logo"
            />
          </Link>
          <Link href={"http://www.veracruz.gob.mx/AGROPECUARIO/"}>
            <Image
              src={"/sedarpa2-dorado.png"}
              width={180}
              height={100}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <a className="text-white hover:text-light-brown" href="/#sedes">
            Sedes
          </a>
          <a className="text-white hover:text-light-brown" href="/#programa">
            Programa
          </a>
          <a className="text-white hover:text-light-brown" href="/#about">
            Acerca del festival
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-end mb-5">
        <div className="flex gap-4">
          <Link href={"https://www.facebook.com/SEDARPAVer/"}>
            <BsFacebook className="text-white text-3xl hover:text-light-brown" />
          </Link>
          <Link href={"https://twitter.com/SEDARPA_Ver"}>
            <BsTwitter className="text-white text-3xl hover:text-light-brown" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
