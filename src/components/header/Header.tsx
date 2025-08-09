import Link from "next/link"
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md"

const navigation = [
  { name: "Página inicial", src: "/", title: "Página inicial"},
  { name: "Cursos", src: "/cursos", title: "Todos os cursos"},
]

export const Header = () => {
  return (
    <>      
      <nav className="flex pl-6 lg:justify-center py-4 md:py-6 bg-green-500 gap-6 items-center">
      <button title="Menu" className="md:hidden text-2xl"><MdMenu /></button>
        <Link href="https://www.codarse.com/" className="border-2 font-semibold rounded-md py-1 px-2" target="_blank">CODARSE</Link>
        <ul className="flex gap-6">
          {navigation.map((item, index) => (          
            <li key={index} className="">
              <h2 className="md:hidden">{item.title}</h2>
              <Link href={item.src} className="active:underline focus:underline hidden md:block">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="https://blog.codarse.com" className="hidden md:flex items-center gap-1" target="blank">
          Blog
          <MdOutlineOpenInNew />
        </Link>
      </nav>
    </>
  )
}
