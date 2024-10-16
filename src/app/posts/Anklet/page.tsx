import Image from "next/image";


export default function Post1() {
  return (
    <>
 
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen mt-20">
      <div className="max-w-6xl w-full bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <Image
            src="/7.png"
            alt="Anklet"
            width={600}
            height={400}
            className="rounded-lg w-full h-96"
          />
        </div>

        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
      Anklet  </h1>

        <p className="text-gray-700 text-justify leading-7 mb-6">
        
Anklets, also known as ankle bracelets or payals in some cultures, are decorative ornaments worn around the ankle. They have been a popular form of jewelry across different cultures and time periods. Anklets are available in a wide variety of designs, ranging from simple chains to more elaborate, heavily adorned pieces.
 </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          1. Chain Anklets:</h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        These are simple anklets made from metal chains such as gold, silver, or stainless steel. Chain anklets can be delicate and minimalist or thicker and more pronounced.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          2. Beaded Anklets
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Beaded anklets are made from colorful beads, often using glass, wood, or gemstones. They are commonly worn for casual or bohemian looks and are popular during the summer.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          3. Charm Anklets:
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        These anklets feature small charms or pendants attached to the chain. The charms can be symbols, shapes, or even tiny trinkets like hearts, stars, or initials.
        </p>
     </div>
    </div>
  
    </>
  );
}