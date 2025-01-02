import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const productCategories = [
  {
    title: "Cakes",
    description: "Delicious cakes for all occasions",
    image: "/cakes.jpg",
    href: "/products/cakes",
  },
  {
    title: "Pastries",
    description: "Flaky and sweet pastries",
    image: "/pastries.jpg",
    href: "/products/pastries",
  },
  {
    title: "Breads",
    description: "Freshly baked artisan breads",
    image: "/breads.jpg",
    href: "/products/breads",
  },
  {
    title: "Cookies",
    description: "Homemade cookies in various flavors",
    image: "/cookies.jpg",
    href: "/products/cookies",
  },
  {
    title: "Custom Orders",
    description: "Personalized baked goods for special events",
    image: "/custom order.jpeg",
    href: "/products/custom-orders",
  },
  {
    title: "Seasonal Specials",
    description: "Limited-time offerings for each season",
    image: "/season.webp",
    href: "/products/seasonal-specials",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-amber-800">
          Our Delightful Products
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group block transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <Card className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="relative h-48 w-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 bg-gradient-to-b from-amber-100 to-amber-50">
                  <h2 className="text-xl font-semibold mb-2 text-amber-900 group-hover:text-amber-700 transition-colors duration-200">
                    {category.title}
                  </h2>
                  <p className="text-amber-700">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
