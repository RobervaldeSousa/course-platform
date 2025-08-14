import Image from "next/image"
import Link from "next/link"


const cards = [
    {
        url: '/cursos/', icon: <Image src={'https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg'} className="aspect-video object-cover rounded-2xl" alt={"Imagem do card"} width={1000} height={0} draggable={false}/>,  title: 'Curso de API Rest, Node e Typscript', description: `Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que usaremos no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend. Links referenciados no vídeo: 📖 Repositório do projeto - https://github.com/lvsouza/youtube-cu... 
        🗨️ Discord -  /discord      
        Outros cursos no canal: 🎩 Figma para DEVs -   • Figma para DEVs: #00 - Apresentação do curso   
        ☪️ Curso de estilização no React -   • Estilização no React: Aula 00 - Curso de f...   
        ⭐️ Curso de React com Typescript -   • Curso de react: Aula 01 - Começando com Re...   
        👑 React, Material UI 5 e Typescript -   • React, Material UI 5 e Typescript: #00 - Eu...   
        🏆 Curso de API Rest, Node e Typescript -   • API Rest, Node e Typescript: #00 - Apresen...     
        Livros recomendados: 📘 Código limpo - https://amzn.to/43Xiick 
        📘 Arquitetura limpa - https://amzn.to/3ZMCStr 📘 
        Migrando sistemas monolíticos - https://amzn.to/45ByPDZ 📘 The Micro SaaS 
        Handbook - https://amzn.to/4jCan93  
        Conteúdo:
         0:00 | Introdução
         0:27 | Apresentação das tecnologias usadas no curso
         2:20 | Pra quem é o curso?
         4:30 | Sobre a API Rest em Node JS que vamos desenvolver
         5:32 | Qual a proposta do curso?
         7:24 | A cereja do bolo
         8:44 | Outros cursos do canal 
         10h00 | Vendo como ficou o projeto
         10:48 | Testando no insominia
         15:30 | Apresentando o frontend de testes
         19:50 | Considerações finais CODARSE - Introdução e apresentação do projet 
         #typescript #cursotypescript #javascript #cursodejavascript #reactetypescript #learningtypescript #learningjavascript`,
    },
];
    
 
export const Card = () => {
  return (
    <section>
        {cards.map((card, index) => (
            <div key={index}>            
            <Link href={card.url}>
                <article className="card flex flex-col gap-2 p-4 rounded-md lg:hover:bg-green-600 shadow-lg ">
                    <div>{card.icon}</div>
                    <h4 className="text-2xl font-extrabold">{card.title}</h4>
                    <p className="line-clamp-3 text-sm text-justify">{card.description}</p>        
                </article>
            </Link>
            </div>
        ))}        
    </section>    
  )
}
