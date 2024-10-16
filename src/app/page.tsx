

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import { Button } from "../app/compoents/button";
import Link from "next/link";
import "animate.css";


export default function Home() {
  return (
    <>
     

      <div className="flex justify-center items-center flex-col bg-yellow ">
        <div
          className="image-bg flex justify-center items-center w-full min-h-[300px] sm:min-h-[600px] flex-wrap "
          
        > <Image
        src="/ana.png"
        alt="Blog Post"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ zIndex: -1 }}
      />
          <div className=" text-[30px] sm:text-[50px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-bold text-center p-2">
            <h1 className="bounce-in-fwd  border-t-2 border-b-2 border-blue justify-center">
              Traditional Jewellery
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-16 mb-16">
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/1.png"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
            Rings
            </h2>
            <p className="text-gray-700 mt-1">
            Jewelry is a form of personal adornment that has been used by humans for thousands of years. It includes a wide range of items such as necklaces, rings, bracelets, earrings, and brooches, made from materials like gold, silver, platinum, and gemstones. Jewelry has played a significant role in various cultures, symbolizing wealth, status, beauty, and even spiritual beliefs.  </p>
            <Link href={"/posts/Rings"}>
            <Button  className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/3.png"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
           Kangan
            </h2>
            <p className="text-gray-700 mt-1">
            Jewelry is a form of personal adornment that has been used by humans for thousands of years. It includes a wide range of items such as necklaces, rings, bracelets, earrings, and brooches, made from materials like gold, silver, platinum, and gemstones. Jewelry has played a significant role in various cultures, symbolizing wealth, status, beauty, and even spiritual beliefs.   </p>
            <Link href={"/posts/Kangan"}>
            <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md  hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/4.png"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
      Necklace</h2>
            <p className="text-gray-700 mt-1">
            Jewelry is a form of personal adornment that has been used by humans for thousands of years. It includes a wide range of items such as necklaces, rings, bracelets, earrings, and brooches, made from materials like gold, silver, platinum, and gemstones. Jewelry has played a significant role in various cultures, symbolizing wealth, status, beauty, and even spiritual beliefs.          </p>
            <Link href={"/posts/Necklace"}>
            <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/Ear.png"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
             Earings
            </h2>
            <p className="text-gray-700 mt-1">
            Jewelry is a form of personal adornment that has been used by humans for thousands of years. It includes a wide range of items such as necklaces, rings, bracelets, earrings, and brooches, made from materials like gold, silver, platinum, and gemstones. Jewelry has played a significant role in various cultures, symbolizing wealth, status, beauty, and even spiritual beliefs.         </p>
            <Link href={"/posts/Earings"}>       
                 <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>

          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/6.png"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
             Bracelet      </h2>
            <p className="text-gray-700 mt-1">
            Jewelry is a form of personal adornment that has been used by humans for thousands of years. It includes a wide range of items such as necklaces, rings, bracelets, earrings, and brooches, made from materials like gold, silver, platinum, and gemstones. Jewelry has played a significant role in various cultures, symbolizing wealth, status, beauty, and even spiritual beliefs.     </p>
            <Link href={"/posts/Bracelet"}>
            <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/7.png"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
             Anklet </h2>
            <p className="text-gray-700 mt-1">
            Jewelry is a form of personal adornment that has been used by humans for thousands of years. It includes a wide range of items such as necklaces, rings, bracelets, earrings, and brooches, made from materials like gold, silver, platinum, and gemstones. Jewelry has played a significant role in various cultures, symbolizing wealth, status, beauty, and even spiritual beliefs.       </p>
            <Link href={"/posts/Anklet"}>
            <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
        </div>
      </div>

      
    </>
  );
}