"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/contexts/authContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, username, logout } = useAuth();
  console.log(token);
  return (
    <nav className="bg-gradient-to-r from-slate-50 to-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src="/3194592.png" alt="Logo" className="h-8 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-black hover:bg-orange-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-black hover:bg-orange-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/products"
                  className="text-black hover:bg-orange-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              {token ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src="/avatars/01.png"
                          alt={username || ""}
                        />
                        <AvatarFallback>
                          {username?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>{username}</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="border-white hover:bg-white hover:text-[#fc4c4c]"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      variant="outline"
                      className="border-white hover:bg-white hover:text-[#fc4c4c]"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-orange-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-orange-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-white focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Menu as="div" className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Menu.Item>
            {({ active }: { active: boolean }) => (
              <Link
                href="/"
                className={`${
                  active ? "bg-blue-600" : ""
                } text-black block px-3 py-2 rounded-md text-base font-medium`}
              >
                Home
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/about"
                className={`${
                  active ? "bg-blue-600" : ""
                } text-black block px-3 py-2 rounded-md text-base font-medium`}
              >
                About
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/products"
                className={`${
                  active ? "bg-blue-600" : ""
                } text-black block px-3 py-2 rounded-md text-base font-medium`}
              >
                Products
              </Link>
            )}
          </Menu.Item>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          {token ? (
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/avatars/01.png" alt={username || ""} />
                  <AvatarFallback>
                    {username?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  {username}
                </div>
              </div>
              <Button variant="ghost" className="ml-auto" onClick={logout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center px-5">
                <Link href="/login" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-white hover:bg-white hover:text-[#fc4c4c]"
                  >
                    Login
                  </Button>
                </Link>
              </div>
              <div className="flex items-center px-5">
                <Link href="/signup" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-white hover:bg-white hover:text-[#fc4c4c]"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Menu>
    </nav>
  );
};

export default Navbar;
