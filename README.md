# Meu Portfólio

Criei esse site pra mostrar meus projetos e um pouco sobre minha trajetória como desenvolvedor. Queria algo direto, bonito e que funcionasse bem em qualquer dispositivo.

## O que tem aqui

Basicamente é um site de uma página só (SPA) onde você pode navegar pelas seções e ver:
- Meus projetos mais recentes
- Tecnologias que trabalho
- Um pouco da minha experiência
- Formas de entrar em contato

O design é dark com uns gradientes em azul e roxo que achei legal. Também coloquei umas animações sutis pra deixar a navegação mais fluida, nada muito exagerado.

## Stack técnica

Escolhi usar:
- **React 19** - porque facilita muito criar interfaces reativas
- **TypeScript** - ajuda demais a evitar bugs e deixa o código mais seguro
- **Styled Components** - curto muito pra estilizar, deixa tudo organizado
- **Framer Motion** - pras animações ficarem suaves
- **Vite** - build rápido, desenvolvimento ágil

E é claro, tudo responsivo. Testei bastante no celular pra garantir que funciona bem.

## Estrutura do projeto

Organizei assim pra ficar fácil de mexer depois:

```
src/
├── components/       # Componentes que uso em vários lugares
├── sections/         # Cada seção do site (Hero, About, Skills, etc)
├── data/            # Dados tipo projetos
└── styles/          # Tema e estilos globais
```

Os dados do site ficam em arquivos separados na pasta `data/`. Assim fica mais fácil atualizar informações sem mexer no código dos componentes.

## Se quiser personalizar

O legal dessa estrutura é que você pode adaptar pro seu portfólio tranquilamente:

**Pra mudar suas infos:**
- `src/data/personalInfo.ts` - nome, contato, redes sociais
- `src/data/skills.ts` - suas tecnologias
- `src/data/projects.ts` - seus projetos
- `src/data/experiences.ts` - experiências profissionais

**Pra mexer nas cores:**
- Vai em `src/styles/theme.ts` e muda as cores lá. As variáveis são bem auto-explicativas.

## Como rodar na sua máquina

Se quiser dar uma olhada no código ou testar localmente:

```bash
# Clona o repositório
git clone https://github.com/natanaelbalbo/portifolio-natanael.git
cd portifolio-natanael

# Instala as dependências
npm install

# Roda em modo desenvolvimento
npm run dev
```

Vai abrir no `localhost:5173` normalmente.

### Outros comandos úteis

```bash
npm run build    # Gera a build pra produção
npm run preview  # Testa a build localmente
npm run lint     # Checa o código
```

## Deploy

Uso a Vercel porque é bem prático. Só conectar o repositório do GitHub e ele já faz o deploy automático toda vez que você dá push. É de graça e funciona muito bem.

Mas se preferir outras opções:

**Netlify** - Similar à Vercel, bem simples também

**GitHub Pages** - Precisa configurar um pouco mais, mas funciona. Só adicionar isso no `vite.config.ts`:

```ts
export default defineConfig({
  base: '/nome-do-seu-repo/',
})
```

E usar o gh-pages pra publicar a pasta `dist`.

## Contato

Se quiser trocar uma ideia sobre desenvolvimento, oportunidades ou qualquer coisa relacionada a tech:

- **Email**: nfigueredobalbo@gmail.com
- **LinkedIn**: [natanael-figueredo-balbo](https://www.linkedin.com/in/natanael-figueredo-balbo)
- **GitHub**: [natanaelbalbo](https://github.com/natanaelbalbo)


Desenvolvido por [Natanael Figueredo Balbo](https://github.com/natanaelbalbo)
