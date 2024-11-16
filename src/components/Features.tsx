import { motion } from 'framer-motion'

const features = [
  {
    title: 'Gravar Aulas',
    description: 'Grave suas aulas ou faça upload dos vídeos das aulas com apenas um clique.',
    icon: '🎥'
  },
  {
    title: 'Upload de Materiais',
    description: 'Analise diversos tipos de mídia, incluindo documentos, livros, artigos ou conteúdo do seu LMS.',
    icon: '📤'
  },
  {
    title: 'Resumos Inteligentes',
    description: 'Vá direto ao ponto com resumos gerados por IA do seu material de estudo.',
    icon: '📝'
  },
  {
    title: 'Notas Detalhadas',
    description: 'Crie instantaneamente notas precisas de qualquer documento, vídeo do YouTube, reunião do Zoom e muito mais.',
    icon: '📚'
  },
  {
    title: 'Questionários',
    description: 'Use questionários gerados automaticamente para testar seu conhecimento e melhorar sua retenção.',
    icon: '❓'
  },
  {
    title: 'Flashcards',
    description: 'Gere flashcards automaticamente ou crie os seus próprios para memorizar tópicos complexos mais rapidamente.',
    icon: '🗂️'
  },
  {
    title: 'Tutor com IA',
    description: 'Obtenha ajuda instantânea com leituras específicas, tarefas ou navegação pelo material do curso.',
    icon: '🤖'
  },
  {
    title: 'Recursos Extras',
    description: 'Descubra todos os benefícios do GreekMind através do nosso período de teste gratuito.',
    icon: '✨'
  }
]

export default function Features() {
  return (
    <section id="recursos" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Recursos Poderosos para
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {" "}Aprendizado Aprimorado
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nossa plataforma com IA fornece todas as ferramentas necessárias para você se destacar em seus estudos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}