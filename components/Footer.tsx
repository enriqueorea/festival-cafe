import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <footer className="mt-14 pt-8 mb-10 max-w-[1200px] mx-auto flex flex-col gap-5 border-t-2 border-light-brown ">
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col flex-wrap md:flex-row items-center gap-4">
          <Image
            src={"/logos cafe-02.png"}
            width={180}
            height={100}
            alt="logo"
          />
          <Image
            src={"/logos cafe-03.png"}
            width={180}
            height={100}
            alt="logo"
          />
          <Image
            src={"/logos cafe-04.png"}
            width={180}
            height={100}
            alt="logo"
          />
          <Image
            src={"/logos cafe-05.png"}
            width={180}
            height={100}
            alt="logo"
          />
          <Image
            src={"/logos cafe-06.png"}
            width={180}
            height={100}
            alt="logo"
          />
          <Image
            src={"/logos cafe-07.png"}
            width={180}
            height={100}
            alt="logo"
          />
          <Image
            src={"/logos cafe-08.png"}
            width={180}
            height={100}
            alt="logo"
          />
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
