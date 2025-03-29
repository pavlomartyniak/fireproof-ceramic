'use client'
import { motion } from 'framer-motion';

export default function ContactForm() {
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <form className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      <div>
        <label className="block text-lg text-gray-700">Ім’я</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-lg text-gray-700">Email</label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-lg text-gray-700">Повідомлення</label>
        <textarea
          className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        ></textarea>
      </div>
      <motion.button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md"
        variants={buttonVariants}
        whileHover="hover"
      >
        Надіслати
      </motion.button>
    </form>
  );
}