import Image from "next/image";
import { Cake, Coffee, ShoppingBag } from "lucide-react";

export default function BakeryLandingPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-amber-800 text-amber-50 p-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Sweet Delights Bakery</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[60vh] flex items-center justify-center"
      >
        <Image
          src="/bakes.jpeg"
          alt="Delicious baked goods"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-100 mb-4">
            Welcome to Sweet Delights
          </h2>
          <p className="text-xl md:text-2xl text-yellow-100">
            Indulge in our freshly baked treats!
          </p>
        </div>
      </section>

      {/* Seasonal Offers */}
      <section id="seasonal" className="py-12 bg-orange-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            Seasonal Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Pumpkin Spice Muffins",
                image: "/muffins.webp",
              },
              { name: "Apple Cinnamon Pie", image: "/images.jpeg" },
              { name: "Maple Pecan Danish", image: "/danish.jpeg" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-amber-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-amber-700">
                  Limited time offer! Get it while it's hot!
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            Our Specialties
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <Cake size={48} className="text-amber-600 mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-amber-800">Cakes</h3>
            </div>
            <div className="text-center">
              <Coffee size={48} className="text-amber-600 mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-amber-800">Coffee</h3>
            </div>
            <div className="text-center">
              <ShoppingBag size={48} className="text-amber-600 mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-amber-800">Pastries</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-orange-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-amber-900 mb-4 text-center">
            About Us
          </h2>
          <p className="text-amber-800 text-center max-w-2xl mx-auto">
            Sweet Delights Bakery has been serving the community with delicious,
            freshly baked goods for over 20 years. Our passion for quality
            ingredients and traditional recipes makes every bite a moment to
            savor.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-amber-800 text-amber-50 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>123 Bakery Street, Sweet Town, ST 12345</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@sweetdelights.com</p>
          <p className="mt-4">
            &copy; 2023 Sweet Delights Bakery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
