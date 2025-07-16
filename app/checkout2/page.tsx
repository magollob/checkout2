"use client"

import { memo, useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import {
  Truck,
  CheckCircle,
  Package,
  MapPin,
  Clock,
  CreditCard,
  Zap,
  Phone,
  Mail,
  Shield,
  Award,
  Heart,
  Box,
  ChevronDown,
  ChevronUp,
  Battery,
  Gift,
  X,
} from "lucide-react"

/* -------------------------------------------------------------------------- */
/*                              Helper components                             */
/* -------------------------------------------------------------------------- */

const ProductSummary = memo(() => (
  <Card className="bg-gray-800/70 backdrop-blur-lg border-gray-700 shadow-xl sticky top-6 rounded-xl">
    <CardHeader>
      <CardTitle className="text-xl text-white">Resumo do Pedido</CardTitle>
    </CardHeader>

    <CardContent className="space-y-6">
      <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-gray-700">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gamestick-product-1-JGEMlfVSHRP2Zah7w4hrZ630YtVD8l.jpeg"
          alt="Game Stick Pro 4K"
          fill
          priority
          className="object-cover"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </div>

      <div>
        <h3 className="text-white font-bold text-lg">Game Stick Pro 4K</h3>
        <p className="text-gray-300 text-sm">Console retrô com 20 000+ jogos inclusos</p>
      </div>

      <div className="border-t border-gray-700 pt-4">
        <h4 className="text-white font-medium mb-2">Itens inclusos</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          {["Console Game Stick Pro 4K", "2 Controles sem fio", "Cartão SD 64 GB", "Cabos & acessórios"].map((item) => (
            <li key={item} className="flex items-center">
              <CheckCircle className="w-4 h-4 text-orange-400 mr-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
))

const DeliveryInfo = memo(() => (
  <Card className="bg-gray-800/70 backdrop-blur-lg border-gray-700 rounded-xl">
    <CardHeader>
      <CardTitle className="flex items-center text-white text-xl">
        <Truck className="w-5 h-5 text-orange-400 mr-2" />
        Modalidades de entrega
      </CardTitle>
    </CardHeader>

    <CardContent className="space-y-6">
      {/* Ilha do Governador -------------------------------------------------- */}
      <div className="border border-gray-600 rounded-lg p-4 space-y-3">
        <h4 className="flex items-center text-white font-medium text-lg mb-1">
          <MapPin className="w-5 h-5 text-orange-400 mr-2" />
          Entrega na Ilha do Governador
        </h4>

        <ul className="text-gray-300 text-sm space-y-1">
          <li className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2 shrink-0" />
            Frete grátis via motoboy
          </li>
          <li className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2 shrink-0" />
            Pagamento na entrega
          </li>
          <li className="flex items-center">
            <Clock className="w-4 h-4 text-orange-400 mr-2 shrink-0" />
            Entrega no mesmo dia
          </li>
        </ul>
      </div>

      {/* Sedex Brasil -------------------------------------------------------- */}
      <div className="border border-gray-600 rounded-lg p-4 space-y-3">
        <h4 className="flex items-center text-white font-medium text-lg mb-1">
          <Package className="w-5 h-5 text-orange-400 mr-2" />
          Entrega via Sedex (todo Brasil)
        </h4>

        <ul className="text-gray-300 text-sm space-y-1">
          <li className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2 shrink-0" />
            Frete grátis para todo o RJ
          </li>
          <li className="flex items-center">
            <Clock className="w-4 h-4 text-orange-400 mr-2 shrink-0" />
            RJ capital em até 24 h &nbsp;|&nbsp; Demais regiões 1-5 dias{" "}
          </li>
          <li className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2 shrink-0" />
            Código de rastreamento
          </li>
        </ul>
      </div>
    </CardContent>
  </Card>
))

const WhyChooseUs = memo(() => (
  <div className="py-6 md:py-8">
    {/* Título e subtítulo - Mobile otimizado */}
    <div className="text-center mb-8 md:mb-12 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
        <span className="block">Por que escolher</span>
        <span className="block">
          a{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Smart Ilha
          </span>
          ?
        </span>
      </h2>
      <div className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed space-y-1">
        <p className="block">Oferecemos muito mais que produtos.</p>
        <p className="block">Oferecemos confiança, qualidade e</p>
        <p className="block">suporte completo.</p>
      </div>
    </div>

    {/* Badge central com efeito de brilho */}
    <div className="flex justify-center mb-8 md:mb-12 px-4">
      <div className="relative">
        <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl scale-150"></div>
        <div className="relative bg-gray-700/80 border-2 border-orange-500 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-400 flex-shrink-0" />
            <div className="text-center">
              <div className="text-white font-bold text-base sm:text-lg md:text-xl">Garantia Smart Ilha</div>
              <div className="text-orange-400 text-xs sm:text-sm md:text-base">Qualidade Certificada</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Grid de benefícios - Mobile otimizado */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
      {/* 90 Dias de Garantia */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center border border-gray-700/50">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
          <Clock className="w-6 h-6 md:w-7 md:h-7 text-orange-400" />
        </div>
        <h3 className="text-white font-bold text-base md:text-lg mb-2 md:mb-3">90 Dias de Garantia</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Garantia completa contra defeitos de fabricação com suporte técnico incluído
        </p>
      </div>

      {/* Suporte Vitalício */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center border border-gray-700/50">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
          <Heart className="w-6 h-6 md:w-7 md:h-7 text-orange-400" />
        </div>
        <h3 className="text-white font-bold text-base md:text-lg mb-2 md:mb-3">Suporte Vitalício</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Atendimento especializado via WhatsApp sempre que precisar de ajuda
        </p>
      </div>

      {/* Frete Grátis */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center border border-gray-700/50">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
          <Truck className="w-6 h-6 md:w-7 md:h-7 text-orange-400" />
        </div>
        <h3 className="text-white font-bold text-base md:text-lg mb-2 md:mb-3">Frete Grátis</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Entrega gratuita para todo o Rio De Janeiro com rastreamento completo
        </p>
      </div>

      {/* 5.300+ Entregas */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center border border-gray-700/50">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
          <Box className="w-6 h-6 md:w-7 md:h-7 text-orange-400" />
        </div>
        <h3 className="text-white font-bold text-base md:text-lg mb-2 md:mb-3">5.300+ Entregas</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Mais de 5.300 produtos entregues com sucesso e clientes satisfeitos
        </p>
      </div>
    </div>
  </div>
))

/* -------------------------------------------------------------------------- */
/*                                  Page                                      */
/* -------------------------------------------------------------------------- */

export default function CheckoutPage() {
  const router = useRouter()
  const [showInstallments, setShowInstallments] = useState(false)
  const [showTimer, setShowTimer] = useState(true)

  const originalPrice = 297.0 // Preço original
  const basePrice = 249.9 // Preço promocional atual

  // Juros para parcelamento
  const interestRates = {
    1: 4.2,
    2: 6.09,
    3: 7.01,
    4: 7.91,
    5: 8.8,
    6: 9.67,
    7: 12.59,
    8: 13.42,
    9: 14.25,
    10: 15.06,
    11: 15.87,
    12: 16.66,
  }

  const calculateInstallment = (parcelas) => {
    if (parcelas === 1) {
      return basePrice // À vista sem juros
    }
    const rate = interestRates[parcelas as keyof typeof interestRates] / 100
    const totalWithInterest = basePrice * (1 + rate)
    return totalWithInterest / parcelas
  }

  const redirectToCheckout = () => {
    window.location.href =
      'https://checkout.infinitepay.io/smartilha?items=[{"name":"Game+Stick+Pro+","price":24990,"quantity":1}]&redirect_url=https://smartilha.com.br/obrigado2'
  }

  const goBack = () => {
    window.location.href = "/"
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de fazer o pedido do Game Stick Pro 4K. Podem me ajudar com o atendimento?",
    )
    window.open(`https://wa.me/5521980202797?text=${message}`, "_blank")
  }

  const [showSaleNotification, setShowSaleNotification] = useState(false)
  const [hasShownNotification, setHasShownNotification] = useState(false)

  // Lista de nomes do Rio de Janeiro
  const rjNames = [
    "Carlos Silva",
    "Maria Santos",
    "João Oliveira",
    "Ana Costa",
    "Pedro Lima",
    "Juliana Ferreira",
    "Rafael Souza",
    "Camila Rodrigues",
    "Bruno Almeida",
    "Larissa Pereira",
    "Diego Martins",
    "Fernanda Ribeiro",
    "Lucas Barbosa",
    "Gabriela Nascimento",
    "Thiago Carvalho",
  ]

  // Bairros do Rio de Janeiro
  const rjNeighborhoods = [
    "Copacabana",
    "Ipanema",
    "Barra da Tijuca",
    "Tijuca",
    "Botafogo",
    "Flamengo",
    "Leblon",
    "Centro",
    "Madureira",
    "Campo Grande",
    "Bangu",
    "Ilha do Governador",
    "Recreio",
    "Jacarepaguá",
    "Vila Isabel",
  ]

  // Função para gerar tempo aleatório entre 8 e 30 minutos
  const getRandomTimeAgo = () => {
    const minutes = Math.floor(Math.random() * (30 - 8 + 1)) + 8 // Entre 8 e 30 minutos
    if (minutes === 1) return "1 minuto atrás"
    return `${minutes} mins atrás`
  }

  // Função para tocar o som de notificação
  const playNotificationSound = () => {
    try {
      // Criar um novo áudio a cada chamada para garantir que funcione
      const audio = new Audio(
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mixkit-happy-bell-alert-601-cwibsktSunxOPLKn10AqEIe6fcgCaj.wav",
      )
      audio.volume = 0.3 // Volume mais baixo para não incomodar
      audio.preload = "auto"

      // Adicionar event listeners para capturar erros
      audio.addEventListener("error", (e) => {
        console.log("Erro ao carregar áudio:", e)
      })

      audio.addEventListener("canplaythrough", () => {
        console.log("Áudio carregado com sucesso")
      })

      // Tentar reproduzir o som
      const playPromise = audio.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Som de notificação reproduzido com sucesso")
          })
          .catch((error) => {
            console.log("Erro ao reproduzir som (silenciado):", error)
            // Não fazer nada - falha silenciosa para não quebrar a experiência
          })
      }
    } catch (error) {
      console.log("Erro ao criar o áudio (silenciado):", error)
      // Não fazer nada - falha silenciosa para não quebrar a experiência
    }
  }

  // Efeito para mostrar notificação de venda ao rolar
  useEffect(() => {
    const handleScroll = () => {
      if (!hasShownNotification && window.scrollY > 300) {
        const randomName = rjNames[Math.floor(Math.random() * rjNames.length)]
        const randomNeighborhood = rjNeighborhoods[Math.floor(Math.random() * rjNeighborhoods.length)]

        // Mostrar a notificação
        setShowSaleNotification(true)
        setHasShownNotification(true)

        // Tentar tocar o som, mas não quebrar se falhar
        setTimeout(() => {
          try {
            playNotificationSound()
          } catch (error) {
            // Falha silenciosa - não afetar a experiência do usuário
            console.log("Som não disponível, continuando sem áudio")
          }
        }, 200)

        // Esconder após 7 segundos
        setTimeout(() => {
          setShowSaleNotification(false)
        }, 7000)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasShownNotification])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Timer de Promoção - Sticky */}
      {showTimer && (
        <div className="sticky top-0 z-50">
          <PromotionTimer onClose={() => setShowTimer(false)} />
        </div>
      )}

      <div className="py-10 px-4">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-10">
          {/* Lado esquerdo ----------------------------------------------------- */}
          <div className="lg:col-span-1">
            <ProductSummary />
          </div>

          {/* Lado direito ------------------------------------------------------ */}
          <div className="lg:col-span-2 space-y-10">
            <DeliveryInfo />

            {/* Nova seção: Por que escolher a Smart Ilha */}
            <WhyChooseUs />

            {/* Formas de Pagamento ----------------------------------------------- */}
            <Card className="bg-gray-800/70 backdrop-blur-lg border-gray-700 rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-xl">
                  <CreditCard className="w-5 h-5 text-orange-400 mr-2" />
                  Formas de pagamento disponíveis
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* PIX com preço cortado */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Zap className="w-6 h-6 text-green-400" />
                      <span className="text-white font-bold text-lg">PIX</span>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-sm line-through">R$ {originalPrice.toFixed(2)}</div>
                      <div className="text-green-400 font-bold text-xl">R$ {basePrice.toFixed(2)}</div>
                    </div>
                  </div>
                  <p className="text-green-300 text-sm">Pagamento à vista instantâneo</p>
                </div>

                {/* Cartão de Crédito - Todo o card clicável */}
                <div
                  className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 cursor-pointer hover:bg-blue-500/15 transition-colors"
                  onClick={() => setShowInstallments(!showInstallments)}
                >
                  {/* Header do cartão - Mobile otimizado */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <CreditCard className="w-6 h-6 text-blue-400 shrink-0" />
                      <span className="text-white font-bold text-lg">Cartão de Crédito</span>
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse whitespace-nowrap">
                        ÚLTIMAS HORAS
                      </span>
                    </div>

                    {/* Preços - Mobile otimizado */}
                    <div className="flex items-center justify-between sm:justify-end gap-3">
                      <div className="text-left sm:text-right">
                        <div className="text-gray-400 text-sm line-through">De R$ {originalPrice.toFixed(2)}</div>
                        <div className="text-white font-bold text-xl">Por R$ {basePrice.toFixed(2)}</div>
                      </div>
                      {showInstallments ? (
                        <ChevronUp className="w-4 h-4 text-blue-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-blue-400 shrink-0" />
                      )}
                    </div>
                  </div>

                  {/* Footer do cartão - Mobile otimizado */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="text-blue-400 text-sm">Clique para ver opções de parcelamento</div>
                    <div className="text-orange-400 text-sm font-bold">
                      Economia de R$ {(originalPrice - basePrice).toFixed(2)} 
                    </div>
                  </div>

                  {/* Parcelamentos (expandível) */}
                  {showInstallments && (
                    <div className="mt-4 space-y-3 border-t border-blue-500/20 pt-4">
                      {/* À vista sem juros */}
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-300">À vista</span>
                        <div className="text-right">
                          <div className="text-gray-400 text-xs line-through">R$ {originalPrice.toFixed(2)}</div>
                          <span className="text-white font-semibold">R$ {basePrice.toFixed(2)}</span>
                        </div>
                      </div>

                      {/* Parcelamento com juros para todas as parcelas */}
                      {Object.keys(interestRates)
                        .slice(1)
                        .map((parcelas) => {
                          const numParcelas = Number.parseInt(parcelas)
                          const valorParcela = calculateInstallment(numParcelas)

                          return (
                            <div
                              key={parcelas}
                              className="flex justify-between items-center py-2 border-b border-gray-700"
                            >
                              <span className="text-gray-300">{parcelas}x</span>
                              <span className="text-white font-semibold">
                                {parcelas}x de R$ {valorParcela.toFixed(2)}
                              </span>
                            </div>
                          )
                        })}
                    </div>
                  )}
                </div>

                {/* Oferta especial - Kit de pilhas */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Gift className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-bold text-lg">🎁 Oferta Especial!</h4>
                      <p className="text-purple-300 text-sm">Apenas para os primeiros compradores</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    {/* Imagem dos controles com pilhas */}
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-purple-500/20">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3630C863-B196-4634-B1FA-240D46CA5C76_1_105_c-2B3LbtMgWhtonO3A1J9PYAjaEiGll6.jpeg"
                        alt="Controles Game Stick Pro 4K com pilhas AAA Max instaladas - Smart Ilha"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Texto da oferta */}
                    <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Battery className="w-5 h-5 text-yellow-400" />
                        <span className="text-white font-semibold">Kit Pilhas GRÁTIS</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">
                        As <span className="text-purple-400 font-bold">primeiras 20 pessoas</span> que adquirirem o Game
                        Stick Pro 4K receberão um kit com{" "}
                        <span className="text-yellow-400 font-bold">4 pilhas AAA</span> (2 para cada controle).
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-medium">Oferta ativa - Garante já a sua!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA ----------------------------------------------------------- */}
            <div className="text-center space-y-4">
              <Button
                onClick={redirectToCheckout}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:to-orange-700 text-white font-bold px-12 py-8 text-xl shadow-lg transition-all duration-300 shadow-orange-500/30 w-full sm:w-auto min-h-[60px]"
              >
                Comprar agora
              </Button>

              <div className="flex items-center justify-center space-x-4">
                <div className="h-px bg-gray-600 flex-1"></div>
                <span className="text-gray-400 text-sm">ou</span>
                <div className="h-px bg-gray-600 flex-1"></div>
              </div>

              <Button
                onClick={openWhatsApp}
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500/10 hover:border-green-400 font-bold px-10 py-6 text-lg w-full sm:w-auto bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Comprar via WhatsApp
              </Button>

              <p className="text-gray-400 text-sm mt-4">Atendimento de seg. a sáb. das 8h às 20h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notificação InfinityPay */}
      {showSaleNotification && (
        <div className="fixed left-4 bottom-20 z-50 animate-in slide-in-from-left duration-500">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 border border-gray-200 shadow-2xl max-w-sm">
            <div className="flex items-center gap-3">
              {/* Logo InfinityPay */}
              <div className="relative w-10 h-10 shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border-2 border-transparent bg-gradient-to-br from-green-400 via-green-500 to-yellow-400 p-0.5">
                    <div className="w-full h-full bg-slate-800 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-800 font-semibold text-sm">Última venda realizada.</span>
                </div>
                <p className="text-slate-600 text-xs leading-tight">
                  <span className="font-medium">{rjNames[Math.floor(Math.random() * rjNames.length)]}</span> •{" "}
                  <span className="font-medium">
                    {rjNeighborhoods[Math.floor(Math.random() * rjNeighborhoods.length)]}, RJ
                  </span>
                </p>
                <div className="flex items-center justify-between mt-1">
                  <div className="text-slate-500 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {getRandomTimeAgo()}
                  </div>
                  <div className="text-green-600 font-bold text-sm">R$ {basePrice.toFixed(2)}</div>
                </div>
              </div>

              {/* Botão fechar */}
              <button
                onClick={() => setShowSaleNotification(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Barra inferior com branding */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full"></div>
                <span className="text-slate-500 text-xs font-medium">InfinityPay</span>
              </div>
              <div className="text-slate-400 text-xs">Pagamento seguro</div>
            </div>
          </div>
        </div>
      )}

      {/* Rodapé Profissional ------------------------------------------------- */}
      <footer className="bg-slate-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coluna 1: Logo e Descrição */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SMART%20ILHA-TNkbpZeRtuxJryZ3PloGlGSz23FRXm.png"
                  alt="Smart Ilha"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                A Smart Ilha é sua loja de tecnologia premium, oferecendo produtos inovadores com atendimento
                especializado e qualidade garantida.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-orange-400" />
                </div>
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-orange-400" />
                </div>
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-orange-400" />
                </div>
              </div>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    Política de Troca e Garantia
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    Garantias
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Contato */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-gray-300 text-sm">(21) 98020-2797</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-gray-300 text-sm">contato@smartilha.com.br</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-gray-300 text-sm">Rio de Janeiro</span>
                </li>
                <li className="flex items-center gap-3">
                  <Truck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-gray-300 text-sm">Entrega em todo Brasil</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Linha inferior */}
          <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Smart Ilha - Todos os direitos reservados
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Componente do Timer de Promoção
const PromotionTimer = memo(({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

      // Fim da promoção hoje às 23:00
      const endTime = new Date(today)
      endTime.setHours(23, 0, 0, 0)

      // Se já passou das 23:00, definir para amanhã às 23:00
      if (now > endTime) {
        endTime.setDate(endTime.getDate() + 1)
      }

      const difference = endTime.getTime() - now.getTime()

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ hours, minutes, seconds })
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  // Calcular as datas
  const today = new Date()
  const startDate = new Date(today)
  startDate.setDate(startDate.getDate() - 15)

  const formatDate = (date) => {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white relative">
      <div className="max-w-4xl mx-auto px-4 py-3">
        {/* Título da promoção */}
        <div className="text-center mb-3">
          <h1 className="text-base md:text-lg font-bold mb-1">🔥 PROMOÇÃO DE LANÇAMENTO 🔥</h1>
          <p className="text-xs md:text-sm opacity-90">Iniciada em {formatDate(startDate)}</p>
        </div>

        {/* Timer */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-3">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2 min-w-[50px] md:min-w-[60px]">
              <div className="text-lg md:text-2xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
              <div className="text-xs opacity-80">HORAS</div>
            </div>
          </div>

          <div className="text-lg md:text-2xl font-bold animate-pulse">:</div>

          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2 min-w-[50px] md:min-w-[60px]">
              <div className="text-lg md:text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
              <div className="text-xs opacity-80">MIN</div>
            </div>
          </div>

          <div className="text-lg md:text-2xl font-bold animate-pulse">:</div>

          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2 min-w-[50px] md:min-w-[60px]">
              <div className="text-lg md:text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
              <div className="text-xs opacity-80">SEG</div>
            </div>
          </div>
        </div>

        {/* Mensagem de urgência e botão de fechar */}
        <div className="text-center relative">
          <p className="text-xs md:text-sm font-semibold animate-pulse">⚡ FRETE GRÁTIS termina em breve! ⚡</p>

          {/* Botão de fechar - posicionado no canto inferior direito */}
          <button
            onClick={onClose}
            className="absolute -bottom-1 right-0 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors shadow-lg w-831px]30px]31px]27px]26px]33px]34px]33px]34px]5.5 font-semibold font-normal font-light font-normal font-medium font-thin leading-7 leading-8 leading-9 leading-7 leading-10 leading-4 leading-7 leading-5 leading-4 leading-5 leading-9 leading-9 leading-7 leading-5 leading-7 h-9 w-9"
            aria-label="Fechar timer"
          >
            <X className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
})
