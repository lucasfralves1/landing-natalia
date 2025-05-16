import Image from 'next/image';
// import { Mail, Phone, Instagram, Linkedin, Youtube, Facebook, Twitter, MessageCircle, Feather, Brain, Coffee, Heart, Home, BookOpenCheck, Shield } from 'lucide-react';
import { Mail, Instagram, MessageCircle, Feather, Brain, Coffee, Heart, Home, BookOpenCheck, Shield } from 'lucide-react';

const iconMap = {
  teen: <Feather size={48} className="text-teal-600 mb-4" />,
  adult: <Brain size={48} className="text-teal-600 mb-4" />,
  senior: <Coffee size={48} className="text-teal-600 mb-4" />,
  couple: <Heart size={48} className="text-teal-600 mb-4" />,
  family: <Home size={48} className="text-teal-600 mb-4" />,
  sexed: <BookOpenCheck size={48} className="text-teal-600 mb-4" />
};

export default function HomePage() {
  const whatsappLink = "https://wa.me/5511939047286?text=Ol%C3%A1%2C%20Dra.%20Nat%C3%A1lia!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20agendamento%20de%20uma%20sess%C3%A3o.";
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-cyan-50 to-emerald-100 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md fixed w-full z-50 top-0">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-teal-600 hover:text-teal-700 transition-colors">
            Dra. Natália Ribeiro
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="#sobre" className="text-gray-700 hover:text-teal-600 transition-colors">Sobre Mim</a>
            <a href="#servicos" className="text-gray-700 hover:text-teal-600 transition-colors">Serviços</a>
            <a href="#depoimentos" className="text-gray-700 hover:text-teal-600 transition-colors">Depoimentos</a>
            <a href="#contato" className="text-gray-700 hover:text-teal-600 transition-colors">Contato</a>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center">
            <MessageCircle size={20} className="mr-2" /> Agendar Sessão
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg-subtle.webp')" }}>
        <div className="container mx-auto px-6 text-center">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:text-left mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-700 mb-6 leading-tight">
                Encontre seu equilíbrio e <span className="text-emerald-600">bem-estar emocional</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Psicoterapia Online para Adolescentes, Adultos, Idosos e Casais com Dra. Natália Ribeiro. Um espaço seguro e acolhedor para sua jornada de autoconhecimento e transformação.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-transform hover:scale-105 inline-flex items-center">
                <MessageCircle size={24} className="mr-3" /> Agende Sua Sessão Online
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <Image 
                src="/images/natalia_hero_nova.png" 
                alt="Dra. Natália Ribeiro - Psicóloga Clínica"
                width={400} 
                height={400}
                className="rounded-full shadow-2xl border-4 border-white object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section id="sobre" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <Image 
                src="/images/natalia_sobre_v2.jpeg" 
                alt="Dra. Natália Ribeiro"
                width={300}
                height={300}
                className="rounded-xl shadow-xl object-cover w-full max-w-xs md:max-w-sm"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">Olá, sou Natália Ribeiro</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sou a Dra. Natália das Graças Ribeiro (CRP 06/194812), Psicóloga Clínica com especialização em Terapia Cognitivo-Comportamental e pós-graduada em Educação Sexual. Com 3 anos de experiência, minha paixão é auxiliar meus pacientes a redescobrirem sua força interior e a construírem uma vida mais plena e significativa.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Minha abordagem terapêutica é focada no acolhimento e na criação de um ambiente seguro onde você pode explorar suas emoções, pensamentos e comportamentos. Acredito que cada pessoa é única e, por isso, adapto minhas técnicas para atender às suas necessidades individuais, ajudando a superar desafios como ansiedade, depressão, baixa autoestima, conflitos em relacionamentos e a desenvolver o autoconhecimento e o controle emocional.
              </p>
              <p className="text-gray-700 font-semibold leading-relaxed">
                Meu objetivo é que você se sinta acolhido(a), confiante e amado(a) em sua jornada terapêutica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 md:py-24 bg-teal-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-12 text-center">Como Posso te Ajudar?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: "Terapia Individual para Adolescentes", description: "Um espaço seguro para adolescentes explorarem suas emoções, desafios e desenvolverem autoconfiança e habilidades para lidar com as transições da idade.", icon: "teen" },
              { title: "Terapia Individual para Adultos", description: "Apoio para adultos enfrentarem questões como ansiedade, estresse, depressão, transições de vida, buscando autoconhecimento e bem-estar.", icon: "adult" },
              { title: "Terapia Individual para Idosos", description: "Acolhimento e suporte para idosos lidarem com questões específicas do envelhecimento, como solidão, luto, adaptação e saúde mental.", icon: "senior" },
              { title: "Terapia de Casal", description: "Auxílio para casais melhorarem a comunicação, resolverem conflitos, fortalecerem o vínculo e construírem um relacionamento mais saudável e feliz.", icon: "couple" },
              { title: "Terapia Familiar", description: "Intervenção para famílias que buscam melhorar a dinâmica relacional, resolver conflitos e promover um ambiente familiar mais harmonioso e funcional.", icon: "family" },
              { title: "Orientação em Educação Sexual", description: "Espaço para discutir dúvidas, tabus e promover uma vivência da sexualidade mais saudável, informada e positiva.", icon: "sexed" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-teal-600 mb-4 flex justify-center items-center h-16">
                  {iconMap[service.icon as keyof typeof iconMap] || <Shield size={48} />}
                </div>
                <h3 className="text-xl font-semibold text-teal-700 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 mt-10">Todas as sessões têm duração de 45 minutos e são realizadas exclusivamente online.</p>
        </div>
      </section>

      {/* Para Quem é a Terapia Section */}
      <section id="paraquem" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-12">A Terapia é Para Você Que Busca...</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[ 
              "Superar a ansiedade e o estresse",
              "Combater a depressão e a tristeza",
              "Fortalecer sua autoestima e confiança",
              "Melhorar seus relacionamentos",
              "Desenvolver o autoconhecimento",
              "Aprender a lidar com suas emoções"
            ].map((item, index) => (
              <div key={index} className="bg-teal-50 p-6 rounded-lg shadow-md">
                <p className="text-lg text-teal-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento Online Section */}
      <section id="online" className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6">Terapia Online: Cuidado e Acolhimento Onde Você Estiver</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Desfrute dos mesmos benefícios da terapia presencial no conforto da sua casa ou de onde preferir. O atendimento online oferece flexibilidade, privacidade e acesso facilitado ao cuidado com sua saúde mental.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Atendo pacientes de todo o Brasil e brasileiros residentes na Europa, utilizando plataformas seguras como Zoom, Google Meet e WhatsApp.
              </p>
              <h4 className="font-semibold text-amber-700 mt-6 mb-2">Para sua sessão online, você precisará de:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Um ambiente tranquilo e privado.</li>
                <li>Conexão de internet estável.</li>
                <li>Celular, tablet ou computador com câmera.</li>
                <li>Fones de ouvido (recomendado).</li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
               <Image 
                src="/images/natalia_hero_v2.jpeg" 
                alt="Terapia Online com Dra. Natália Ribeiro"
                width={450}
                height={350}
                className="rounded-xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-12 text-center">O Que Dizem Meus Pacientes</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-teal-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">{"`A Natália me ajudou a ver as coisas de uma perspectiva diferente. Sou muito grata pelo acolhimento e profissionalismo.`"}</p>
              <p className="text-teal-700 font-semibold text-right">- Paciente A.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">{"`Encontrei na terapia com a Dra. Natália um espaço seguro para crescer e me entender melhor. Recomendo muito!`"}</p>
              <p className="text-teal-700 font-semibold text-right">- Paciente B.</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">Depoimentos anonimizados e autorizados, em conformidade com as diretrizes do Conselho Federal de Psicologia.</p>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 md:py-24 bg-teal-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Vamos Conversar e Iniciar Sua Jornada?</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Estou aqui para te ouvir e te acompanhar. Entre em contato para agendar sua primeira sessão ou para esclarecer qualquer dúvida. O primeiro passo para a mudança começa com uma conversa.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-teal-600 px-10 py-4 rounded-full text-xl font-semibold shadow-xl transition-transform hover:scale-105 inline-flex items-center">
            <MessageCircle size={28} className="mr-3" /> Agendar pelo WhatsApp
          </a>
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="mailto:depapocomanatipsi@gmail.com" className="hover:text-amber-300 transition-colors flex items-center">
              <Mail size={24} className="mr-2" /> depapocomanatipsi@gmail.com
            </a>
            <a href="https://www.instagram.com/depapocomnati_psi/?next=%2F" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors flex items-center">
              <Instagram size={24} className="mr-2" /> @depapocomnati_psi
            </a>
          </div>
           <p className="text-sm mt-8">Acolhimento inicial por mensagem antes do agendamento da primeira sessão. Atendimento somente particular e reembolso.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-gray-300 text-center">
        <div className="container mx-auto px-6">
          <p className="mb-2">Dra. Natália das Graças Ribeiro - Psicóloga Clínica</p>
          <p className="mb-2">CRP 06/194812</p>
          <div className="flex justify-center space-x-4 my-3">
            <a href="https://www.instagram.com/depapocomnati_psi/?next=%2F" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-teal-400 transition-colors"><Instagram size={24}/></a>
            
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Dra. Natália Ribeiro. Todos os direitos reservados.</p>
          
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Fale Conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50 flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
