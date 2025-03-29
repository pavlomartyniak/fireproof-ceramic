'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '../../components/ProductGrid';

export default function Products() {
  const [filter, setFilter] = useState<string | null>(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Розміри шамотних плит
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Широкий асортимент розмірів для будь-яких потреб – від побутових камінів до промислових печей.
        </motion.p>

        {/* Фільтри */}
        <motion.div
          className="flex justify-center space-x-4 mb-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-lg ${filter === null ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 hover:text-white transition`}
          >
            Усі
          </button>
          <button
            onClick={() => setFilter('ST')}
            className={`px-4 py-2 rounded-lg ${filter === 'ST' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 hover:text-white transition`}
          >
            ST
          </button>
          <button
            onClick={() => setFilter('SP')}
            className={`px-4 py-2 rounded-lg ${filter === 'SP' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 hover:text-white transition`}
          >
            SP
          </button>
        </motion.div>

        {/* Сітка продуктів */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProductGrid filter={filter} />
        </motion.div>

        {/* Заклик до дії */}
        <motion.div
          className="bg-blue-50 rounded-lg p-8 mt-12 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Не знайшли потрібний розмір?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Ми можемо виготовити шамотні плити на замовлення за вашими специфікаціями. Зв’яжіться з нами, і ми допоможемо підібрати ідеальне рішення!
          </p>
          <motion.a
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Зв’язатись із нами
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}