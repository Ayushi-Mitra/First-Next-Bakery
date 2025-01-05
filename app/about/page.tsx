import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-amber-50 text-brown-800 relative overflow-hidden">
      {/* Header */}
      <header className="bg-amber-800 text-amber-50 p-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Sweet Delights Bakery</h1>
        </div>
      </header>

      {/* Background Images */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Bakery interior"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Fresh bread"
          layout="fill"
          objectFit="cover"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Pastries"
          layout="fill"
          objectFit="cover"
          className="absolute right-0 bottom-0"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-700 mb-4">
            Welcome to Our Bakery
          </h1>
          <p className="text-xl text-yellow-800">
            Crafting delicious moments since 1995
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              About Us
            </h2>
            <p className="text-brown-700 mb-4">
              Our bakery is a haven for bread enthusiasts and sweet-toothed
              individuals alike. With over 25 years of experience, we pride
              ourselves on using only the finest ingredients to create
              mouthwatering treats that bring joy to our community.
            </p>
            <p className="text-brown-700">
              From artisanal sourdough to decadent pastries, each item is
              crafted with love and attention to detail. Come visit us and
              experience the warmth of freshly baked goods and the aroma of
              happiness!
            </p>
          </section>

          <section className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Contact Us
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-600 mr-2" />
                <span>+91 7003318474</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-600 mr-2" />
                <span>info@ourbakery.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-yellow-600 mr-2" />
                <span>123/4F, Bakery Street, Kol 702345</span>
              </li>
            </ul>
          </section>
        </div>

        <section className="mt-12 bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            Hours of Operation
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-yellow-800">Weekdays</h3>
              <p className="flex items-center">
                <Clock className="w-4 h-4 text-brown-600 mr-2" />
                7:00 AM - 7:00 PM
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-800">Weekends</h3>
              <p className="flex items-center">
                <Clock className="w-4 h-4 text-brown-600 mr-2" />
                8:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-brown-700">
          <p>&copy; 2023 Our Bakery. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
