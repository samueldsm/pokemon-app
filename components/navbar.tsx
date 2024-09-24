"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { signOut, isAuthenticated, signIn } from "@/utils/auth";
import { redirect, useRouter } from "next/navigation";
import { Logo } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

const userLogged = isAuthenticated();

export const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(userLogged);

  useEffect(() => {
    setIsLoggedIn(userLogged);
  }, [router, userLogged]);

  const handleLogout = () => {
    signOut();
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1"
            href={isLoggedIn ? "/" : "/login"}
          >
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex gap-2">
          <ThemeSwitch />
          {isLoggedIn && ( // Conditional rendering of Login/Logout button
            <Button onClick={handleLogout} color="danger" variant="flat">
              Logout
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
