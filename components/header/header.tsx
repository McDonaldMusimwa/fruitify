import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Favicon from '@/app/favicon.ico';

const Header = () => {
  return (
    <div>
      <header>
        <link rel="icon" href='/app/favicon.ico' />
        <link rel="shortcut icon" href="/path/to/your/favicon.ico" />
      </header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
            <Image src={Logo} width={80} height={50} alt="logo"></Image>
          </Link>
          <Menu />
        </div>
      </nav>
    </div>
  );
};

export default Header;
