'use client'

import { motion } from 'framer-motion';

export default function Applications() {
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
          Застосування шамотних плит
        </motion.h1>

        {/* Вступний блок */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-8 mb-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Широкий спектр використання</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Шамотні плити від "Термо Кераміка" – це універсальний вогнетривкий матеріал, який використовується в різних галузях промисловості. Вони забезпечують надійний захист від високих температур і агресивних середовищ, що робить їх незамінними для багатьох застосувань.
          </p>
        </motion.div>

        {/* Галузі застосування */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Металургійна промисловість</h3>
            <p className="text-gray-600">
              Шамотні плити використовуються для футерування печей гарячого дуття, доменних печей, ковшів, пустотілих виробів, керамічних рекуператорів і нагрівальних печей. Вони витримують екстремальні температури до 1460°C, забезпечуючи довговічність і безпеку.
            </p>
            <p className="text-gray-600 mt-2">
              Наприклад, у доменних печах плити захищають стінки від термічних і хімічних впливів, що подовжує термін служби обладнання.
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Керамічна промисловість</h3>
            <p className="text-gray-600">
              У керамічній промисловості шамотні плити застосовуються для створення печей і рекуператорів, які потребують стійкості до високих температур. Їхня пористість і міцність забезпечують ефективну теплоізоляцію.
            </p>
            <p className="text-gray-600 mt-2">
              Наприклад, плити використовуються для футерування печей для випалу керамічних виробів, що гарантує рівномірний розподіл тепла.
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Хімічна промисловість</h3>
            <p className="text-gray-600">
              У хімічній промисловості шамотні плити використовуються в печах і реакторах, де потрібна стійкість до агресивних хімічних речовин. Маркування "K" (кислотостійкість) робить їх ідеальними для таких умов.
            </p>
            <p className="text-gray-600 mt-2">
              Наприклад, плити застосовуються в печах для виробництва хімічних реагентів, де вони захищають обладнання від корозії.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Інші галузі</h3>
            <p className="text-gray-600">
              Шамотні плити також використовуються в енергетиці, скляній промисловості та навіть у побутових печах і камінах. Їхня універсальність дозволяє адаптувати матеріал до різних умов експлуатації.
            </p>
            <p className="text-gray-600 mt-2">
              Наприклад, у побутових камінах плити забезпечують довговічність і безпеку, зберігаючи тепло протягом тривалого часу.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}