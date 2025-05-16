# Lista de Tarefas - Ajuste Landing Page (Projeto Next.js)

- [x] Analisar a estrutura do projeto Next.js e identificar os componentes e estilos relevantes.
  - Projeto Next.js com TailwindCSS. Arquivo principal: `src/pages/index.tsx`. Estilos globais em `src/styles/globals.css`.
- [x] Identificar os problemas de responsividade no mobile e os locais dos links do WhatsApp.
  - Links do WhatsApp identificados em `src/pages/index.tsx` (Navbar, Hero Section, Contato Section, Floating Button) usando o formato `https://wa.me/message/IOACKLZ4GQYYD1`.
  - Problema de responsividade identificado na "Contato Section": os links de email e Instagram (`depapocomanatipsi@gmail.com` e `@depapocomnati_psi`) estão em uma linha (`flex`) e causam overflow em telas pequenas, cortando o conteúdo. É necessário ajustar para `flex-col` em telas menores.
- [x] Corrigir o CSS/Tailwind e os componentes React para garantir a compatibilidade com dispositivos móveis.
  - Ajustada a "Contato Section" para usar `flex-col md:flex-row` e `space-y-4 md:space-y-0 md:space-x-6` para melhor responsividade.
- [x] Ajustar os links do WhatsApp nos componentes React para incluir a mensagem personalizada: "Olá, Dra. Natália! Vi seu site e gostaria de conversar sobre agendamento de uma sessão."
  - Todos os links `https://wa.me/message/IOACKLZ4GQYYD1` foram substituídos por `https://wa.me/5511939047286?text=Ol%C3%A1%2C%20Dra.%20Nat%C3%A1lia!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20agendamento%20de%20uma%20sess%C3%A3o.` no arquivo `src/pages/index.tsx`.
- [x] Validar as alterações visualmente em diferentes resoluções de tela.
  - Revisão do código (`src/pages/index.tsx`) para confirmar a aplicação dos ajustes de responsividade e a correção dos links do WhatsApp.
- [x] Empacotar os arquivos do projeto Next.js atualizados.