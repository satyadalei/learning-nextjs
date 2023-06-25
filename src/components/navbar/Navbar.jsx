import Link from "next/link";
import React from "react";

const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Contact", url: "/contact" },
  // { id: 4, title: "Dashboard", url: "/dashboard" },
  { id: 5, title: "Portfolio", url: "/portfolio" },
];
const Navbar = () => {
  return (
    <>
      <div>
      {navLinks.map((link,index) => {
       return <Link key={index} href={link.url} >{link.title}</Link>
      })}
      </div>
      <button>Click me</button>
    </>
  );
};

export default Navbar;
