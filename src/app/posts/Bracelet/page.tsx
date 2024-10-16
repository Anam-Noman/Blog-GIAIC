
import Image from "next/image";

export default function Post5() {
  return (
    <>
   
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen mt-20">
      <div className="max-w-7xl w-full bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <Image
            src="/6.png"
            alt="Bracelet"
            width={600}
            height={400}
            className="rounded-lg w-full h-96"
          />
        </div>

        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
Bracelet
        </h1>

        <p className="text-gray-700 text-justify leading-7 mb-6">
         
A bracelet is a piece of jewelry worn around the wrist, designed to be decorative or meaningful, often symbolizing style, personality, or a special connection. Bracelets have been worn across cultures and time periods, serving various purposes such as personal adornment, fashion statements, symbols of wealth, or even as amulets for protection. Here’s an overview of bracelets, their types, and significance:
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          1. Chain Bracelets: 
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Made of interlocking metal links, chain bracelets are often crafted from gold, silver, or other metals. They can be worn alone for a simple look or paired with charms for customization.     </p>

       

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          2. Charm Bracelets:
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        These feature small pendants or charms attached to a chain or band, each charm carrying personal significance or representing special moments, interests, or memories. They are popular as personalized or sentimental jewelry.
        </p>


        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
        3. Bangle Bracelets: </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Solid circular bracelets, often worn in multiples, that slide over the hand. They can be made from metal, glass, or plastic and are popular in both traditional and contemporary styles. Bangles are often associated with South Asian cultures but are worn globally.
        </p>

          </div>
    </div>
 
</>
  );
}