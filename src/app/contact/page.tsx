'use client'

import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Зв’яжіться з нами
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ContactForm />
          <div className="space-y-4">
            <p className="text-lg text-gray-700">Телефон: +380 994 407 123</p>
            <p className="text-lg text-gray-700">Email: info@thermo-ceramics.com</p>
            <p className="text-lg text-gray-700">Адреса: м. Київ, вул. Промислова, 10</p>
            <p className="text-lg text-gray-700">
              Ми працюємо з понеділка по п’ятницю з 9:00 до 18:00. Звертайтесь, і ми з радістю відповімо на всі ваші запитання!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}