import { motion } from 'framer-motion';

interface Product {
  id: number;
  dimensions: string;
  label: string;
  weight: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <img src="/images/fireproof-plate.webp" alt={`Шамотна плита ${product.dimensions}`} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Шамотна плита {product.dimensions}</h3>
        <p className="text-gray-600 text-sm mb-2">Маркування: {product.label}</p>
        <p className="text-gray-600 text-sm mb-2">Вага: {product.weight}</p>
        <p className="text-gray-600 text-sm mb-4">
          Ідеально підходить для футерування печей, камінів і промислових установок.
        </p>
        <motion.a
          href={`/products/${product.id}`}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          variants={buttonVariants}
          whileHover="hover"
        >
          Детальніше
        </motion.a>
      </div>
    </motion.div>
  );
}