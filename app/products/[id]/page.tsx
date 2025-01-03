import { categories } from "../../data/product";
import ProductList from "@/components/ProductList";

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const categoryId = await params.id;
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <div className="container mx-auto p-4">Category not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      <ProductList products={category.products} />
    </div>
  );
}

export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id.toString(),
  }));
}
