'use client'

import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart, Search, Menu, X, ChevronRight, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const popularProducts = [
    { id: 1, name: 'Ключ Steam: Cyberpunk 2077', price: 1999, image: '/placeholder.svg?height=300&width=300', badge: 'Хит продаж' },
    { id: 2, name: 'VPN Премиум: Годовая подписка', price: 2999, image: '/placeholder.svg?height=300&width=300', badge: 'Выгодно' },
    { id: 3, name: 'Adobe Creative Cloud: Лицензия', price: 4999, image: '/placeholder.svg?height=300&width=300', badge: 'Новинка' },
    { id: 4, name: 'Электронные книг: Фантастика', price: 1299, image: '/placeholder.svg?height=300&width=300', badge: 'Бестселлер' },
  ]

  const reviews = [
    { id: 1, name: 'Иван Петров', content: 'Потрясающий сервис! Купил ключ для игры, активировал без проблем. Буду рекомендовать друзьям!', rating: 5 },
    { id: 2, name: 'Анна Сидорова', content: 'Очень удобный сайт и отличные цены. VPN работает отлично, скорость интернета не падает.', rating: 4 },
    { id: 3, name: 'Михаил Иванов', content: 'Приобрел подписку на ПО, все работает как часы. Служба поддержки ответила очень быстро.', rating: 5 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Head>
        <title>DigitalGoods - Ваш премиум магазин цифровых товаров</title>
        <meta name="description" content="Купите цифровые товары премиум-класса: ключи Steam, VPN подписки и многое другое." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-slate-900/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg?height=40&width=40" alt="Логотип DigitalGoods" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">DigitalGoods</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {['Главная', 'Каталог', 'О нас', 'Контакты', 'Поддержка'].map((item) => (
              <Link key={item} href={item === 'Главная' ? '/' : `/${item.toLowerCase()}`} className="text-gray-300 hover:text-purple-400 transition-colors">
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/20">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/20">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-purple-400 hover:bg-purple-500/20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-slate-900/90 backdrop-blur-md py-4"
        >
          <nav className="flex flex-col items-center space-y-4">
            {['Главная', 'Каталог', 'О нас', 'Контакты', 'Поддержка'].map((item) => (
              <Link key={item} href={item === 'Главная' ? '/' : `/${item.toLowerCase()}`} className="text-gray-300 hover:text-purple-400 transition-colors">
                {item}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}

      <main>
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-pink-600/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              >
                Откройте мир цифровых возможностей
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-gray-300"
              >
                Премиум ключи, VPN-сервисы и программное обеспечение — все в одном месте
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Начать покупки
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/20">
                  Узнать больше
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-800/50 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Популярные товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: product.id * 0.1 }}
                >
                  <Card className="bg-slate-700/50 backdrop-blur-sm border-0 overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                    <div className="relative">
                      <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover" />
                      <Badge className="absolute top-2 right-2 bg-purple-600">{product.badge}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-2 text-gray-200">{product.name}</h3>
                      <p className="text-2xl font-bold text-purple-400 mb-4">{product.price} ₽</p>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        В корзину
                        <ShoppingCart className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Отзывы клиентов</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <motion.div 
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: review.id * 0.1 }}
                >
                  <Card className="bg-slate-700/50 backdrop-blur-sm border-0 h-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mr-4"></div>
                        <div>
                          <h3 className="font-semibold text-gray-200">{review.name}</h3>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 flex-grow">{review.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-800/50 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Подпишитесь на наши новости</h2>
              <p className="text-xl mb-8 text-gray-300">Будьте в курсе наших последних предложений и эксклюзивных скидок</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Input type="email" placeholder="Ваш email" className="bg-slate-700/50 border-purple-500 text-white placeholder-gray-400" />
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Подписаться</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900/80 backdrop-blur-md text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">О DigitalGoods</h3>
              <p>Ваш надежный источник премиальных цифровых продуктов, включая ключи для игр, VPN подписки и многое другое.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">Быстрые ссылки</h3>
              <ul className="space-y-2">
                
                {['Каталог', 'О нас', 'Контакты', 'Поддержка'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">Свяжитесь с нами</h3>
              <p>Email: support@digitalgoods.com</p>
              <p>Телефон: +7 (800) 123-45-67</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">Следите за нами</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Image src={`/${social}-icon.svg`} alt={`${social} icon`} width={24} height={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2023 DigitalGoods. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}