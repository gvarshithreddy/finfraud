import Image from "next/image";
import NavBar from "./components/NavBar";
import { Button, Link } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <NavBar />
      <h1 className="text-5xl text-center font-bold mt-56">
        Welcome To Cyberhawks
      </h1>
      <p className="text-center pt-3">Where security meets speed</p>
      <div className="flex justify-center pt-5">
        <Button className="m-5 bg-primary " as={Link} href="/Services">
          Get Started
        </Button>
        <Button className="m-5" variant="bordered" as={Link} href="/About">
          About Us
        </Button>
      </div>
    </>
  );
}
