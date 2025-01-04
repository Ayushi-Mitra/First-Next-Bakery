import { categories } from "@/app/data/product"; // Adjust the path based on your file structure

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Find the category based on the string ID
  const category = categories.find((cat) => cat.id === id);

  if (!category) {
    return (
      <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-amber-800">
          Category Not Found
        </h1>
        <p className="text-lg text-amber-600 mt-4">
          Please check the URL or select a valid category.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-amber-800">
          {category.name}
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {category.products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-amber-900">
                  {product.name}
                </h2>
                <p className="text-amber-700 mt-2">{product.description}</p>
                <p className="text-amber-900 font-bold mt-4">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
