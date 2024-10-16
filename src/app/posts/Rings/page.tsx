
import Image from "next/image";

export default function Post6() {
  return (
    <>
  
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen mt-20">
      <div className="max-w-7xl w-full bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <Image
            src="/1.png"
            alt="Rings"
            width={600}
            height={400}
            className="rounded-lg w-full h-96"
          />
        </div>

        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          Beautiful Rings 
        </h1>

        <p className="text-gray-700 text-justify leading-7 mb-6">
        Rings are circular bands, typically made of metal, that are worn around the finger. They hold significance in various cultures and can serve different purposes, including as decorative accessories, symbols of commitment or status, or religious artifacts. Here's a breakdown of different types and meanings of rings:

</p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          1. Wedding Rings: 
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Often made of gold, platinum, or silver, wedding rings symbolize the union of marriage and are exchanged during wedding ceremonies. They are typically worn on the fourth finger of the left hand in many cultures, known as the "ring finger."

</p>

       

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          2. Engagement Rings:
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Traditionally given as a symbol of a proposal of marriage, engagement rings often feature a diamond or other gemstone. They signify a promise of marriage.   </p>
   </div>
</div>
</>
  );
}