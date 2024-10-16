
import Image from "next/image";

export default function Post3() {
  return (
    <>
   
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen mt-20">
      <div className="max-w-7xl w-full bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <Image
            src="/4.png"
            alt="Necklace"
            width={600}
            height={400}
            className="rounded-lg w-full h-96"
          />
        </div>

        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
       Necklace </h1>

        <p className="text-gray-700 text-justify leading-7 mb-6">
        A necklace is a decorative piece of jewelry worn around the neck. Necklaces have been used for thousands of years across different cultures, serving as symbols of beauty, status, wealth, and even spiritual significance. They come in a wide range of styles, materials, and designs, making them versatile accessories for various occasions. Here’s a breakdown of key aspects of necklaces:
        A simple design consisting of interlinked metal loops, usually made of gold, silver, platinum, or stainless steel. It can be worn alone or with pendants. </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
        Chain Necklace </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        A simple design consisting of interlinked metal loops, usually made of gold, silver, platinum, or stainless steel. It can be worn alone or with pendants.
         </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
        Pendant Necklace: 
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Features a decorative element or charm (like a gemstone or locket) hanging from a chain. The pendant often carries personal significance, such as initials, religious symbols, or meaningful stones.
        </p>
            </div>
    </div>
 
</>
  );
}