
import Image from "next/image";

export default function Post4() {
  return (
    <>
   
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen mt-20">
      <div className="max-w-7xl w-full bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <Image
            src="/ear.png"
            alt="Earings"
            width={600}
            height={400}
            className="rounded-lg w-full h-96"
          />
        </div>

        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
        Earing  </h1>

        <p className="text-gray-700 text-justify leading-7 mb-6">
        Earrings are a popular form of jewelry worn on the ears, typically attached through a piercing in the earlobe, but they can also be worn on the upper ear or other parts of the ear through piercings or as clip-ons. Earrings come in a wide variety of styles, shapes, and materials, making them versatile accessories for different occasions and personal styles.
         </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          1. Stud Earrings:
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        These are small, simple earrings that sit directly on the earlobe. They typically feature a single gemstone, pearl, or metal design. Studs are subtle and versatile, making them perfect for everyday wear.
        </p>

 

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          2.Hoop Earrings:
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Circular or semi-circular earrings that resemble a ring. Hoops can range in size from small and delicate to large and bold. They are a classic design that adds a chic and stylish touch to both casual and formal outfits.    </p>

     

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          3. Tassel Earrings:
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        These earrings feature dangling tassels made of threads, beads, or chains, often adding a fun, bohemian vibe to an outfit. Tassel earrings can be colorful and playful or more elegant, depending on the material used.</p>

           </div>
    </div>
    
</>
  );
}