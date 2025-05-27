import Image from 'next/image';
import { Mail, Instagram, MessageCircle, Feather, Brain, Coffee, Heart, Home, BookOpenCheck, Shield } from 'lucide-react';

// Define a interface para o mapeamento de ícones
interface IconMap {
  [key: string]: React.ReactNode;
}

const iconMap: IconMap = {
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
    // Aplicando fonte sans-serif (Inter) como padrão e cores de fundo suaves
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 text-gray-700 font-sans">
      {/* Navbar - Ajustes de cor e padding */}
      <nav className="bg-white/90 backdrop-blur-lg shadow-sm fixed w-full z-50 top-0">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Usando fonte serifada para o nome */}
          <a href="#" className="text-2xl font-serif font-semibold text-teal-700 hover:text-teal-800 transition-colors">
            Dra. Natália Ribeiro
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#sobre" className="text-gray-600 hover:text-teal-600 transition-colors">Sobre Mim</a>
            <a href="#servicos" className="text-gray-600 hover:text-teal-600 transition-colors">Serviços</a>
            <a href="#depoimentos" className="text-gray-600 hover:text-teal-600 transition-colors">Depoimentos</a>
            <a href="#contato" className="text-gray-600 hover:text-teal-600 transition-colors">Contato</a>
          </div>
          {/* Botão CTA principal - Ajuste de cor e arredondamento */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow-md transition-transform hover:scale-105 flex items-center text-sm font-medium">
            <MessageCircle size={18} className="mr-2" /> Agendar Sessão
          </a>
        </div>
      </nav>

      {/* Hero Section - Aumento de padding, fonte serifada no H1, ajuste de cores e botão */}
      <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-cover bg-center" /* style={{ backgroundImage: "url('/images/hero-bg-subtle.webp')" }} - Removido para um fundo mais limpo */ >
        <div className="container mx-auto px-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:text-left mb-12 md:mb-0">
              {/* H1 com fonte serifada */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-teal-800 mb-6 leading-tight">
                Encontre seu equilíbrio e <span className="text-emerald-700">bem-estar emocional</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                Psicoterapia Online para Adolescentes, Adultos, Idosos e Casais com Dra. Natália Ribeiro. Um espaço seguro e acolhedor para sua jornada de autoconhecimento e transformação.
              </p>
              {/* Botão CTA secundário - Ajuste de cor e arredondamento */}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-transform hover:scale-105 inline-flex items-center">
                <MessageCircle size={22} className="mr-3" /> Agende Sua Sessão Online
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              {/* Imagem sem moldura */}
              <Image 
                src="/images/natalia_hero_nova_v2.jpeg" 
                alt="Dra. Natália Ribeiro - Psicóloga Clínica"
                width={400} // Mantendo uma base, mas o CSS controlará o aspecto
                height={400}
                className="rounded-lg object-cover w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim Section - Aumento de padding, H2 serifado, ajuste de cores */}
      {/* Correção: Fechamento da div e troca de class por className */}
      <section id="sobre" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="md:flex md:items-center md:space-x-16">
            <div className="md:w-2/5 mb-10 md:mb-0 flex justify-center">
              <Image 
                src="/images/natalia_sobre_v2.jpeg" 
                alt="Dra. Natália Ribeiro"
                width={350}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full max-w-xs md:max-w-sm"
              />
            </div>
            <div className="md:w-3/5"> {/* Trocado class por className */}
              {/* H2 com fonte serifada */}
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-800 mb-8">Conheça a Dra. Natália Ribeiro</h2> {/* Trocado class por className */}
              <p className="text-gray-600 mb-5 leading-relaxed"> {/* Trocado class por className */}
                Sou a Dra. Natália das Graças Ribeiro (CRP 06/194812), Psicóloga Clínica dedicada a guiar você em sua jornada de autoconhecimento e transformação. Minha paixão é auxiliar meus pacientes a redescobrirem sua força interior e a construírem uma vida mais plena e significativa, com um olhar humano, ético e acolhedor.
              </p>
              <h3 className="text-xl font-serif font-semibold text-teal-700 mb-4 mt-6">Abordagem Terapêutica e Especializações</h3> {/* Trocado class por className */}
              <p className="text-gray-600 mb-5 leading-relaxed"> {/* Trocado class por className */}
                Minha prática é fundamentada na <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, uma abordagem comprovadamente eficaz que explora a profunda conexão entre seus pensamentos, emoções e comportamentos. Através da TCC, trabalhamos juntos para identificar padrões, desenvolver novas perspectivas e construir estratégias práticas para superar desafios como ansiedade, depressão, baixa autoestima e dificuldades em relacionamentos.
              </p>
              <p className="text-gray-600 mb-5 leading-relaxed"> {/* Trocado class por className */}
                Com <strong>pós-graduação em Educação Sexual</strong>, ofereço um espaço seguro e informado para abordar questões relacionadas à sexualidade, promovendo bem-estar e autoconhecimento nesta área vital da vida.
              </p>
              <h3 className="text-xl font-serif font-semibold text-teal-700 mb-4 mt-6">Experiência e Compromisso Social</h3> {/* Trocado class por className */}
               <p className="text-gray-600 mb-5 leading-relaxed"> {/* Trocado class por className */}
                Minha trajetória inclui uma experiência marcante na <strong>6ª Delegacia da Mulher</strong>, onde ofereci suporte emocional e orientação a mulheres em situação de vulnerabilidade, reforçando meu compromisso com o acolhimento e a resiliência feminina. Além disso, atuei como <strong>Embaixadora da Felicidade na Heineken</strong>, aplicando princípios da psicologia positiva para promover o bem-estar no ambiente corporativo.
              </p>
              <p className="text-gray-600 font-medium leading-relaxed mt-6"> {/* Trocado class por className */}
                Meu objetivo é que você se sinta compreendido(a), fortalecido(a) e confiante para trilhar seu caminho rumo ao equilíbrio emocional e a uma vida com mais propósito.
              </p>
            </div> {/* Fechamento da div md:w-3/5 */}
          </div>
        </div>
      </section>

      {/* Serviços Section - Aumento de padding, H2 serifado, ajuste de cores e cards */}
      <section id="servicos" className="py-20 md:py-32 bg-teal-50/50"> {/* Fundo mais suave */}
        <div className="container mx-auto px-6">
          {/* H2 com fonte serifada */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-800 mb-16 text-center">Como Posso te Ajudar?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[ 
              { title: "Terapia Individual para Adolescentes", description: "Um espaço seguro para adolescentes explorarem suas emoções, desafios e desenvolverem autoconfiança e habilidades para lidar com as transições da idade.", icon: "teen" },
              { title: "Terapia Individual para Adultos", description: "Apoio para adultos enfrentarem questões como ansiedade, estresse, depressão, transições de vida, buscando autoconhecimento e bem-estar.", icon: "adult" },
              { title: "Terapia Individual para Idosos", description: "Acolhimento e suporte para idosos lidarem com questões específicas do envelhecimento, como solidão, luto, adaptação e saúde mental.", icon: "senior" },
              { title: "Terapia de Casal", description: "Auxílio para casais melhorarem a comunicação, resolverem conflitos, fortalecerem o vínculo e construírem um relacionamento mais saudável e feliz.", icon: "couple" },
              { title: "Terapia Familiar", description: "Intervenção para famílias que buscam melhorar a dinâmica relacional, resolver conflitos e promover um ambiente familiar mais harmonioso e funcional.", icon: "family" },
              { title: "Orientação em Educação Sexual", description: "Espaço para discutir dúvidas, tabus e promover uma vivência da sexualidade mais saudável, informada e positiva.", icon: "sexed" }
            ].map((service, index) => (
              // Cards com sombra mais suave e padding ajustado
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="text-teal-600 mb-5 flex justify-center items-center h-16">
                  {iconMap[service.icon] || <Shield size={48} />}
                </div>
                {/* Título do card com fonte serifada */}
                <h3 className="text-xl font-serif font-semibold text-teal-700 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-12 text-sm">Todas as sessões têm duração de 45 minutos e são realizadas exclusivamente online.</p>
        </div>
      </section>

      {/* Para Quem é a Terapia Section - Aumento de padding, H2 serifado, ajuste de cores */}
      <section id="paraquem" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          {/* H2 com fonte serifada */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-800 mb-16">A Terapia é Para Você Que Busca...</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[ 
              "Superar a ansiedade e o estresse",
              "Combater a depressão e a tristeza",
              "Fortalecer sua autoestima e confiança",
              "Melhorar seus relacionamentos",
              "Desenvolver o autoconhecimento",
              "Aprender a lidar com suas emoções"
            ].map((item, index) => (
              // Itens com fundo suave e texto ajustado
              <div key={index} className="bg-emerald-50/60 p-6 rounded-md shadow-sm">
                <p className="text-lg text-teal-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento Online Section - Aumento de padding, H2 serifado, ajuste de cores */}
      <section id="online" className="py-20 md:py-32 bg-beige-custom"> {/* Usando bege customizado */}
        <div className="container mx-auto px-6">
          <div className="md:flex md:items-center md:space-x-16">
            <div className="md:w-1/2 mb-10 md:mb-0">
              {/* H2 com fonte serifada e cor ajustada */}
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-8">Terapia Online: Cuidado e Acolhimento Onde Você Estiver</h2>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Desfrute dos mesmos benefícios da terapia presencial no conforto da sua casa ou de onde preferir. O atendimento online oferece flexibilidade, privacidade e acesso facilitado ao cuidado com sua saúde mental.
              </p>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Atendo pacientes de todo o Brasil e brasileiros residentes na Europa, utilizando plataformas seguras como Zoom, Google Meet e WhatsApp.
              </p>
              <h4 className="font-semibold text-gray-800 mt-8 mb-3">Para sua sessão online, você precisará de:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Um ambiente tranquilo e privado.</li>
                <li>Conexão de internet estável.</li>
                <li>Celular, tablet ou computador com câmera.</li>
                <li>Fones de ouvido (recomendado).</li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
               <Image 
                src="/images/natalia_online_v2.jpeg" // Imagem diferente para variar
                alt="Terapia Online com Dra. Natália Ribeiro"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section - Aumento de padding, H2 serifado, ajuste de cores */}
      <section id="depoimentos" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          {/* H2 com fonte serifada */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-800 mb-16 text-center">O Que Dizem Meus Pacientes</h2>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Cards de depoimento com estilo refinado */}
            <div className="bg-teal-50/50 p-8 rounded-lg shadow-md border-l-4 border-teal-300">
              <p className="text-gray-600 italic mb-5 leading-relaxed">{"`A Natália me ajudou a ver as coisas de uma perspectiva diferente. Sou muito grata pelo acolhimento e profissionalismo.`"}</p>
              <p className="text-teal-700 font-semibold text-right">- Paciente A.</p>
            </div>
            <div className="bg-teal-50/50 p-8 rounded-lg shadow-md border-l-4 border-teal-300">
              <p className="text-gray-600 italic mb-5 leading-relaxed">{"`Encontrei na terapia com a Dra. Natália um espaço seguro para crescer e me entender melhor. Recomendo muito!`"}</p>
              <p className="text-teal-700 font-semibold text-right">- Paciente B.</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-10">Depoimentos anonimizados e autorizados, em conformidade com as diretrizes do Conselho Federal de Psicologia.</p>
        </div>
      </section>

      {/* Contato Section - Aumento de padding, H2 serifado, ajuste de cores e botão */}
      <section id="contato" className="py-20 md:py-32 bg-teal-700 text-white">
        <div className="container mx-auto px-6 text-center">
          {/* H2 com fonte serifada */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">Vamos Conversar e Iniciar Sua Jornada?</h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            Estou aqui para te ouvir e te acompanhar. Entre em contato para agendar sua primeira sessão ou para esclarecer qualquer dúvida. O primeiro passo para a mudança começa com uma conversa.
          </p>
          {/* Botão CTA com estilo refinado */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-teal-700 px-10 py-4 rounded-lg text-xl font-semibold shadow-lg transition-transform hover:scale-105 inline-flex items-center">
            <MessageCircle size={24} className="mr-3" /> Agendar Sessão via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer - Ajuste de cores e links */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0 md:w-1/3">
              <h4 className="text-lg font-serif font-semibold text-white mb-4">Dra. Natália Ribeiro</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Psicóloga Clínica | CRP 06/194812</p>
              <p className="text-sm text-gray-400 leading-relaxed mt-2">Atendimento Online para todo o Brasil e Europa.</p>
            </div>
            <div className="mb-8 md:mb-0 md:w-1/3">
              <h4 className="text-lg font-serif font-semibold text-white mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#sobre" className="text-gray-400 hover:text-teal-300 transition-colors text-sm">Sobre Mim</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-teal-300 transition-colors text-sm">Serviços</a></li>
                <li><a href="#depoimentos" className="text-gray-400 hover:text-teal-300 transition-colors text-sm">Depoimentos</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-teal-300 transition-colors text-sm">Contato</a></li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <h4 className="text-lg font-serif font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-2">
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-teal-300 transition-colors text-sm">
                    <MessageCircle size={16} className="mr-2" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href="mailto:natalia.ribeiropsi@gmail.com" className="flex items-center text-gray-400 hover:text-teal-300 transition-colors text-sm">
                    <Mail size={16} className="mr-2" /> natalia.ribeiropsi@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/psi.nataliaribeiro/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-teal-300 transition-colors text-sm">
                    <Instagram size={16} className="mr-2" /> @psi.nataliaribeiro
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Dra. Natália Ribeiro. Todos os direitos reservados.</p>
            <p className="mt-1">Desenvolvido por <a href="https://www.lucasfialves.dev.br" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Lucas Fialves</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

