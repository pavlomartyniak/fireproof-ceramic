'use client'

import { motion } from 'framer-motion';

export default function About() {
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
          Виробництво шамотних плит
        </motion.h1>

        {/* Вступний блок */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-8 mb-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Наші технології</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            У компанії "Термо Кераміка" ми пишаємося сучасним підходом до виробництва шамотних плит. Наші продукти виготовляються з використанням передових технологій, що забезпечують високу якість і довговічність. Кожен етап виробництва ретельно контролюється, щоб гарантувати відповідність найвищим стандартам.
          </p>
        </motion.div>

        {/* Етапи виробництва */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Сировина</h3>
            <p className="text-gray-600">
              Шамотні плити виготовляються на основі високоякісної кальцинованої шамотної глини, вогнетривких глин та каолінів. Ми обираємо лише екологічно чисті матеріали, які забезпечують високу вогнетривкість і міцність.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Технологічний процес</h3>
            <p className="text-gray-600">
              У виробництві застосовуються два методи – сухе і напівсухе пресування. Ці технології дозволяють створювати плити з різними характеристиками, залежно від потреб клієнтів.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Контроль якості</h3>
            <p className="text-gray-600">
              Виробничий процес здійснюється на сучасних лініях із комп’ютерним управлінням. Кожна партія проходить суворий контроль якості, щоб забезпечити стабільність характеристик і відповідність стандартам.
            </p>
          </motion.div>
        </div>

        {/* Додаткова інформація */}
        <motion.div
          className="bg-blue-50 rounded-lg p-8 mt-8 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Чому обирають нас?</h2>
          <p className="text-lg text-gray-700">
            Завдяки багаторічному досвіду, сучасному обладнанню та високоякісним матеріалам, ми створюємо шамотні плити, які відповідають найвищим вимогам промисловості. Наші продукти – це поєднання надійності, екологічності та інновацій.
          </p>
        </motion.div>
      </div>
    </div>
  );
}