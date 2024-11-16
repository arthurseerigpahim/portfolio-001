import { motion } from 'framer-motion'

const testimonials = [
  {
    content: "O GreekMind transformou completamente minha forma de estudar. As notas geradas por IA são incrivelmente precisas e me poupam horas de trabalho.",
    author: "Ana Silva",
    role: "Estudante de Medicina"
  },
  {
    content: "Os mapas de conhecimento me ajudam a entender tópicos complexos ao visualizar conexões que eu não teria percebido de outra forma.",
    author: "João Santos",
    role: "Pesquisador"
  },
  {
    content: "Como professora, recomendo o GreekMind para todos os meus alunos. É uma ferramenta indispensável para a educação moderna.",
    author: "Dra. Maria Oliveira",
    role: "Professora Universitária"
  }
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Amado por
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {" "}Estudantes e Educadores
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Veja o que nossos usuários dizem sobre sua experiência com o GreekMind
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}