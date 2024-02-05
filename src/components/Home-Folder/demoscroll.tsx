"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Relevant <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Coursework
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Discrete Math",
    designation: "CMSC250",
    image: "https://picsum.photos/id/10/300/300",
    badge: "Mentor",
  },
  {
    name: "Linear Algebra",
    designation: "MATH240",
    image: "https://picsum.photos/id/11/300/300",
    badge: "Mentor",
  },
  {
    name: "Object Oriented Programming 1",
    designation: "CMSC131",
    image: "https://picsum.photos/id/12/300/300",
    badge: "Mentor",
  },
  {
    name: "Object Oriented Programming 1",
    designation: "CMSC132",
    image: "https://picsum.photos/id/13/300/300",
    badge: "Mentor",
  },
  {
    name: "Computer Systems",
    designation: "CMSC216",
    image: "https://picsum.photos/id/14/300/300",
    badge: "Mentor",
  },
  {
    name: "Statistics and Probability",
    designation: "STAT400",
    image: "https://picsum.photos/id/15/300/300",
    badge: "Mentor",
  },
  {
    name: "Organization of Programming Languages",
    designation: "CMSC330",
    image: "https://picsum.photos/id/16/300/300",
    badge: "Mentor",
  },
  {
    name: "Algorithms",
    designation: "CMSC351",
    image: "https://picsum.photos/id/17/300/300",
  },
  {
    name: "Advanced Data Structures",
    designation: "CMSC420",
    image: "https://picsum.photos/id/18/300/300",
    badge: "Something",
  },
  {
    name: "Data Science",
    designation: "CMSC320",
    image: "https://picsum.photos/id/19/300/300",
    badge: "Mentor",
  },
  
];
