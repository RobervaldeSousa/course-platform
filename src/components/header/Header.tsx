import Link from "next/link"
import { MdOutlineOpenInNew } from "react-icons/md"

const navigation = [
  { name: "Página inicial", src: "/"},
  { name: "Cursos", src: "/cursos"},
]

export const Header = () => {
  return (
    <>      
      <nav className="flex justify-center py-6 bg-green-500 gap-6 items-center">
        <Link href="https://www.codarse.com/" className="border-2 font-semibold rounded-md py-1 px-2" target="_blank">CODARSE</Link>
        <ul className="flex gap-6">
          {navigation.map((item, index) => (          
            <li key={index} className="">
              <Link href={item.src} className="active:underline focus:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="https://blog.codarse.com" className="flex items-center gap-1" target="blank">
          Blog
          <MdOutlineOpenInNew />
        </Link>
      </nav>
    </>
  )
}
