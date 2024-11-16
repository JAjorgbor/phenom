import Container from "@/components/elements/Container";
import Link from "next/link";
import React from "react";
import { FiUserPlus } from "react-icons/fi";

const Header = () => {
  return (
    <header className="py-2 ">
      <Container className="flex justify-between">
        <Link href="#">Logo</Link>
        <Link
          href="#"
          className="bg-white rounded-lg text-slate-950 px-3 py-2 flex justify-center items-center gap-2"
        >
          <FiUserPlus />
          Register
        </Link>
      </Container>
    </header>
  );
};

export default Header;
