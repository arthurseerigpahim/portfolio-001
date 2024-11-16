import { motion } from 'framer-motion'
import { Button } from './ui/Button'

const plans = [
  {
    name: 'Básico',
    price: 'R$ 29',
    period: '/mês',
    description: 'Perfeito para começar seus estudos',
    features: [
      'Notas com IA',
      'Resumos automáticos',
      'Biblioteca básica de recursos',
      'Suporte por email'
    ]
  },
  {
    name: 'Pro',
    price: 'R$ 59',
    period: '/mês',
    description: 'Ideal para estudantes dedicados',
    features: [
      'Tudo do plano Básico',
      'Mapas de conhecimento',
      'Recomendações personalizadas',
      'Suporte prioritário',
      'Recursos avançados de IA'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'R$ 99',
    period: '/mês',
    description: 'Para instituições e grupos',
    features: [
      'Tudo do plano Pro',
      'API personalizada',
      'Gerenciamento de equipe',
      'Treinamento dedicado',
      'SLA garantido'
    ]
  }
]

export default function Pricing() {
  return (
    <section id="preços" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Planos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {" "}Para Cada Necessidade
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escolha o plano perfeito para seus objetivos de aprendizado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 ${
                plan.popular ? 'border-2 border-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    Mais Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <Button
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                  className="w-full mb-6"
                >
                  Começar Agora
                </Button>
                <ul className="text-left space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}