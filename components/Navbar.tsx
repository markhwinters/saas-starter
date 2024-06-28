"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between p-6">
      <Link className="text-2xl font-bold no-underline" href="/">
        Saas<span className="text-primary">Starter</span>
      </Link>
      <div className="flex flex-row gap-x-5 items-center">
        <ThemeToggle />
        <Button asChild>
          <Link href="/login">Log In</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
