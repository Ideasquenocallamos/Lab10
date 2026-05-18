type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
};

export default async function ProductsPage() {
    const res = await fetch('https://fakestoreapi.com/products');
    const productsData: Product[] = await res.json();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Productos</h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {productsData.map((product: Product) => (
                    <li key={product.id} className="border p-4 rounded-lg shadow-md">

                        <a href={`/products/${product.id}`} className="text-xl font-semibold mb-2">
                            {product.title}
                        </a>
                        <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
                        <p className="text-gray-600">{product.description}</p>

                    </li>
                ))}
            </ul>
        </div>
    );
}