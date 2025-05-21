import Image from "next/image";
import { FaGlobe } from "react-icons/fa";
import { GiAirplaneDeparture, GiCommercialAirplane } from "react-icons/gi";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen bg-[#001C34] flex  items-center gap-x-8 px-44">
      <div className="flex flex-col w-full h-full">
        <div className="mb-6">
          <Image
            src={"/images/logo_bonanza.png"}
            alt="Logo do Bonanza"
            width={180}
            height={180}
            className="w-auto h-auto"
          />
        </div>
        <div>
          <h1 className="uppercase text-white font-bold text-[2.5rem] leading-10 max-w-2xl">
            20 anos do Bonanza Clube do Brasil.
          </h1>
          <h2 className="uppercase text-[#FF0000] font-bold text-5xl max-w-2xl mt-3">
            A grande festa!
          </h2>
        </div>
        <div className="mt-6">
          <h1 className="text-white text-lg mb-2">Faltam:</h1>
          <div className="flex flex-row gap-4">
            <div className="rounded-lg bg-[#B80104] w-full  flex flex-col items-center justify-center">
              <h1 className="text-white font-bold text-3xl">36</h1>
              <span className="text-center text-white">Dias</span>
            </div>
            <div className="rounded-lg bg-[#B80104] w-full  flex flex-col items-center justify-center">
              <h1 className="text-white font-bold text-3xl">09</h1>
              <span className="text-center text-white">Horas</span>
            </div>
            <div className="rounded-lg bg-[#B80104] w-full flex flex-col items-center justify-center">
              <h1 className="text-white font-bold text-3xl">35</h1>
              <span className="text-center text-white">Minutos</span>
            </div>
            <div className="rounded-lg bg-[#B80104] w-full  flex flex-col items-center justify-center">
              <h1 className="text-white font-bold text-3xl">09</h1>
              <span className="text-center text-white">Segundos</span>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="uppercase text-white text-lg">
              Aguarde mais informações
            </h1>
          </div>
          <div className="mt-6 flex gap-x-8 items-center">
            <div className="bg-[#EF1833] rounded-xl rounded-tl-full rounded-tr-3xl px-14 py-2 flex justify-center gap-x-2 items-center w-full">
              <div>
                <FaGlobe color="white" size={18} />
              </div>
              <div>
                <h1 className="text-white text-base font-bold">
                  Bonanza Clube
                </h1>
              </div>
            </div>
            <div className="bg-[#EF1833] rounded-xl rounded-tr-full  px-14 py-2 flex justify-center gap-x-2 items-center w-full">
              <div>
                <FaGlobe color="white" size={18} />
              </div>
              <div>
                <h1 className="text-white text-base font-bold">
                  Galeria
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <Image
          src={"/images/img_hero.png"}
          alt="Bonanza"
          width={800}
          height={800}
          className="w-auto h-auto"
        />
      </div>
    </section>
    <section className="min-h-screen bg-[#F0F0F0]">
      <div className="flex flex-col items-center justify-center pt-16">
        <h1 className="text-[#B80104] font-bold text-2xl">
          Confira o Bonanza Fly-in em matéria do programa AutoEsporte na GloboPlay
        </h1>
        <div className="my-8 flex gap-x-4 items-center">
           <div className="border border-[#787878] w-[200px] ">

           </div>
           <GiCommercialAirplane size={36} />
            <div className="border border-[#787878] w-[200px] ">

           </div>
        </div>
        <div className="">
          <button className="cursor-pointer">
            <Image
            src={"/images/globoesporte.png"}
            alt="Logo do Bonanza"
            width={180}
            height={180}
            className="w-auto h-auto"
          />
          </button>
        </div>
      </div>
    </section>
    </main>
  );
}
