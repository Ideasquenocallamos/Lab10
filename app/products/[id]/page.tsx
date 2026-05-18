type Params = {
    params: Promise<{
        id: string
    }>;
};

export async function generateStaticParams() {
    const res = await fetch('https://fakestoreapi.com/products');
    const productsData: { id: number }[] = await res.json();

    return productsData.map((product) => ({
        id: product.id.toString(),
    }));
}

export default async function ProductPage({ params }: Params) {
    const { id } = await params;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const productData: {
        title: string;
        price: number;
        description: string;
    } = await res.json();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">{productData.title}</h1>
            <p className="text-gray-700 mb-2">${productData.price.toFixed(2)}</p>
            <p className="text-gray-600">{productData.description}</p>
        </div>
    );
}