"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Image,
} from "@nextui-org/react";

export default function NavBar(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src="/logo.svg" alt="Logo" height={40} width={40} />
          <p className="font-bold text-inherit">CyberHawks</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/About" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Services">
            Services
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/Contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item != "Home" ? `/${item}` : "/"}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
