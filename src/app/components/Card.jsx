"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
const CardCustom = (props) => {
  return (
    <Card className="py-4 m-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{props.role}</p>
        <h4 className="font-bold text-large">{props.memberName}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default CardCustom;
