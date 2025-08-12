import { Card } from "@/components/card/Card";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Página inicial"
};

const Home = () => {
  return (
    <>
    <main className=''>
      <Card />
    </main>
    </>
  )
}

export default Home