'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md"

const navigation = [
  { name: "Página inicial", src: "/"},
  { name: "Cursos", src: "/cursos"},
  { name: "Blog", src: "/blog", icon: <MdOutlineOpenInNew />},
]

export const Header = () => {
  const [title, setTitle] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    setTitle(document.title);
    setDrawerOpen(false);
  }, [currentPath]);

  return (
    <>      
      <nav 
      className="flex pl-6 lg:justify-center bg-gradient-to-l from-green-600 py-4 md:py-6 md:bg-green-500 gap-6 items-center">
        <button title="Menu" className="md:hidden text-2xl cursor-pointer" onClick={() => setDrawerOpen(true)}>
          <MdMenu />
        </button>
        <Link href="https://www.codarse.com/" className="border-2 font-semibold rounded-md py-1 px-2" target="_blank">CODARSE</Link>
        <ul className="flex gap-6" tabIndex={drawerOpen ? -1 : undefined}>
          {navigation.map((item, index) => (          
            <li key={index} className="hidden md:block">
              <Link href={item.src} className="active:underline focus:underline hidden md:flex items-center gap-1">
                {item.name} {item.icon}
              </Link>
            </li>            
          ))}
        </ul>
        <div 
        data-open={drawerOpen} 
        tabIndex={drawerOpen ? undefined : -1}
        onClick={() => setDrawerOpen(false)}
        className="md:hidden fixed left-0 top-0 bottom-0 right-0 data-[open=false]:-translate-x-full transition-transform duration-300 ease-in-out z-50">
          <ul
            onClick={e => e.stopPropagation()}
            className="p-4 flex flex-col gap-6 w-48 h-screen bg-zinc-800/90">
            {navigation.map((item, index) => (          
              <li key={index} className="flex flex-col">
                <Link href={item.src} className="flex flex-col md:hidden gap-1 ">
                  {item.name}
                </Link>
              </li>            
            ))}
          </ul>
        </div>
        <h1 className="md:hidden">{title}</h1>

      </nav>
    </>
  )
}
