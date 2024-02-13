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
            <h1 className="text-4xl font-semibold text-white dark:text-white">
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
    image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1815&fit=crop&crop=faces",
    badge: "Mentor",
  },
  {
    name: "Linear Algebra",
    designation: "MATH240",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS231rth89-3MagEGY2njJGQD8kyZApsu7Dxky-wsZ8EsoKDLZ3egQLRZTFE4l2CX8TkCY&usqp=CAU",
    badge: "Mentor",
  },
  {
    name: "Object Oriented Programming 1",
    designation: "CMSC131",
    image: "https://meshgradient.com/gallery/1.png",
    badge: "Mentor",
  },
  {
    name: "Object Oriented Programming 1",
    designation: "CMSC132",
    image: "https://images.unsplash.com/photo-1639493115941-a70fcef4f715?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGllbnQlMjBtZXNofGVufDB8fDB8fHww",
    badge: "Mentor",
  },
  {
    name: "Computer Systems",
    designation: "CMSC216",
    image: "https://img.freepik.com/premium-vector/abstract-background-vector-mesh-gradient-pattern-design-card-invitation-poster-t-shirt-silk-neckerchief-printing-textile-fabric-bag-print-etc_292734-2097.jpg",
    badge: "Mentor",
  },
  {
    name: "Statistics and Probability",
    designation: "STAT400",
    image: "https://img.freepik.com/premium-photo/turquoise-abstract-background-illustration-your-graphic-design_970631-1895.jpg",
    badge: "Mentor",
  },
  {
    name: "Organization of Programming Languages",
    designation: "CMSC330",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9m_w1DN8KohXFAAjM7YmSFc9rfgEl1ocU7gyCRG90cALjAhfkH_uQbAxCjV4EobOPAA&usqp=CAU",
    badge: "Mentor",
  },
  {
    name: "Algorithms",
    designation: "CMSC351",
    image: "https://us.123rf.com/450wm/saiful007/saiful0071709/saiful007170900481/86488902-summer-sky-blurred-background.jpg?ver=6",
  },
  {
    name: "Advanced Data Structures",
    designation: "CMSC420",
    image: "https://img.freepik.com/free-vector/blurred-abstract-background-design_1107-169.jpg?w=1060&t=st=1707775544~exp=1707776144~hmac=18f204e4183e0fd2944abaaae46ad0492bbac01eb6fa788f50d50ef5dc2ac6b4",
    badge: "Something",
  },
  {
    name: "Data Science",
    designation: "CMSC320",
    image: "https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30471.jpg?w=1060&t=st=1707775601~exp=1707776201~hmac=89fd8d673922c9de70d6ec377dc324948e29c82f9444a2b050f8ca45f2d6df04",
    badge: "Mentor",
  },
  
];
