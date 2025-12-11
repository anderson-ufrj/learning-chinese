import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🇨🇳</span>
              <span className="font-chinese text-2xl font-bold">学习中文</span>
            </div>
            <p className="font-portuguese text-gray-400 text-sm leading-relaxed mb-4">
              Aprenda chinês mandarim com o método mais eficaz e divertido. 
              Junte-se a milhares de alunos em sua jornada linguística.
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer">📱</span>
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer">💬</span>
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer">📧</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h6 className="font-portuguese font-bold text-lg mb-4">Links Rápidos</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lições</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          {/* Learning */}
          <div>
            <h6 className="font-portuguese font-bold text-lg mb-4">Aprendizado</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Saudações</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Números</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Família</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cores</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Comidas</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h6 className="font-portuguese font-bold text-lg mb-4">Contato</h6>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 contato@aprendachines.com</p>
              <p>📱 +55 (11) 99999-9999</p>
              <p>📍 São Paulo, Brasil</p>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-2">Receba dicas de chinês!</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-china-red text-sm"
                />
                <button className="bg-china-red hover:bg-red-700 px-4 py-2 rounded-r-md transition-colors text-sm font-semibold">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm text-gray-400">
              © 2024 学习中文. Todos os direitos reservados.
            </span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <div className="flex items-center space-x-2">
              <span>🇨🇳</span>
              <span>🇧🇷</span>
            </div>
          </div>
        </div>
        
        {/* Cultural Note */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <p className="font-chinese text-center text-china-gold text-sm">
            学无止境 (xué wú zhǐ jìng) - O aprendizado nunca tem fim
          </p>
        </div>
      </div>
    </footer>
  )
}