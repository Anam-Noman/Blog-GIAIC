
import Image from "next/image";

export default function Post2() {
  return (
    <>
  
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen mt-20">
      <div className="max-w-7xl w-full bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <Image
            src="/3.png"
            alt="Kangan"
            width={600}
            height={400}
            className="rounded-lg w-full h-96"
          />
        </div>

        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
        Kangan   </h1>

        <p className="text-gray-700 text-justify leading-7 mb-6">
        Kangan (also spelled Kada or Bangle) is a traditional piece of jewelry worn around the wrist, commonly found in South Asian cultures, particularly in India, Pakistan, and Bangladesh. Kangans are typically circular and can be made from a variety of materials such as gold, silver, glass, or brass. They hold significant cultural, religious, and fashion importance and are often associated with celebrations, ceremonies, and personal adornment.    </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          1. Metal Kangans
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        These are often made of precious metals like gold or silver and are usually thicker in design. Gold kangans are particularly significant in weddings and special occasions. </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          2. Glass Kangans:
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Made from colorful glass, these are delicate and often worn in multiple layers to produce a jingling sound. They are popular during festivals and traditional events.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          3.      Stone-Studded Kangans: </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        These feature embedded gemstones or beads, adding a decorative and opulent touch. They are worn to complement specific outfits and are often used for formal events.</p>
            </div>
    </div>
   
    </>
  );
}