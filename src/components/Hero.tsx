import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-blue-600/20 opacity-30" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-6">
            Decole Sua Vida Acadêmica com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Inteligência Artificial
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Alcance seu potencial máximo de forma mais rápida, prática e intuitiva com nossa plataforma de aprendizado potencializada por IA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all">
              Começar Gratuitamente
            </button>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-700 transform hover:scale-105 transition-all">
              Ver Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}