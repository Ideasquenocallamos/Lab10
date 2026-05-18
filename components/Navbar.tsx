import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <Link href="/" className="text-xl font-bold">
                    Inicio
                </Link>
                <Link href="/about" className="ml-4 text-xl font-bold">
                    Acerca de
                </Link>
                <Link href="/products" className="ml-4 text-xl font-bold">
                    Productos
                </Link>
            </div>
        </nav>
    );
}
