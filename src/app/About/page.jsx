import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import CardCustom from "../components/Card";
import NavBar from "../components/NavBar";
const About = () => {
  const teamMembers = [
    "Akshitha Surya",
    "Alekhya Motta",
    "Amulya Motta",
    "Varshith Reddy",
  ];
  return (
    <>
      <NavBar />
      <div className="mx-40">
        <h1 className="text-4xl text-center">About Us:</h1>
        <p className="p-10">
          Safeguarding Your Financial Future with AI At Your Company Name, we
          are a team of passionate technologists and financial experts dedicated
          to building the future of fraud detection. We believe that the power
          of Artificial Intelligence AI can revolutionize financial security,
          protecting individuals and businesses from ever-evolving financial
          threats.
        </p>
        <br />
        <h1 className="text-4xl text-center">Our Mission:</h1>
        <p className="p-10">
          Our mission is to empower financial institutions and individuals with
          cutting-edge AI-powered solutions that can identify and prevent
          fraudulent activity with unmatched accuracy and efficiency. We are
          committed to fostering a safer financial landscape where trust and
          security are paramount.
        </p>
        <h1 className="text-4xl text-center ">
          The Power of AI in Fraud Detection:
        </h1>
        <p className="p-10">
          Traditional fraud detection methods often rely on static rules and
          manual processes, leaving them vulnerable to sophisticated criminal
          tactics. AI, on the other hand, offers a dynamic and adaptable
          approach. Our AI-powered solutions continuously learn and evolve,
          analyzing vast amounts of data to identify complex patterns and
          anomalies that might signify fraudulent activity.
        </p>
        <div className="flex justify-center mt-10">
          {teamMembers.map((member, index) => (
            <CardCustom
              key={index}
              memberName={member}
              role={member == "Akshitha Surya" ? "Team Lead" : "Team Member"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
