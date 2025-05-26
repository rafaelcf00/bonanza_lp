"use client";

import Image from "next/image";
import { FaGlobe, FaRegArrowAltCircleDown } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useState } from "react";

export default function Home() {
  const imagens = [
    "/images/galeria/01.webp",
    "/images/galeria/02.webp",
    "/images/galeria/03.webp",
    "/images/galeria/04.webp",
    "/images/galeria/05.webp",
    "/images/galeria/06.webp",
    "/images/galeria/07.webp",
    "/images/galeria/08.webp",
    "/images/galeria/09.webp",
    "/images/galeria/10.webp",
    "/images/galeria/11.webp",
    "/images/galeria/12.webp",
    "/images/galeria/13.webp",
    "/images/galeria/14.webp",
    "/images/galeria/15.webp",
    "/images/galeria/16.webp",
    "/images/galeria/17.webp",
  ];
  const [shouldStartCount, setShouldStartCount] = useState(false);

  return (
    <main className="bg-[#001C34]">
      <motion.section
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="min-h-screen bg-[#001C34] flex flex-col md:flex-row  items-center gap-x-8 px-4 md:px-44 relative z-10 py-16 md:py-0"
      >
        <div className="flex flex-col items-center md:items-start w-full h-full">
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
            <h1 className="uppercase text-white font-bold text-2xl md:text-[2.5rem] leading-10 md:max-w-2xl text-center md:text-start">
              20 anos do Bonanza Clube do Brasil.
            </h1>
            <h2 className="uppercase text-[#FF0000] font-bold text-center md:text-start text-3xl md:text-5xl md:max-w-2xl mt-3">
              A grande festa!
            </h2>
          </div>
          <div className="mt-6 w-full md:w-auto px-4 md:px-0">
            <h1 className="text-white text-lg mb-2 ">Faltam:</h1>
            <div className="flex flex-row gap-4 ">
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
            {/* <div className="mt-8">
              <h1 className="uppercase text-white text-lg text-center md:text-start">
                Você é nosso convidado especial para o Bonanza Fly-in 2024! Clique no botão abaixo e garanta sua presença.
              </h1>
            </div> */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-14 flex flex-col md:flex-row md:gap-x-8 gap-y-6 md:gap-y-0 items-center w-full"
            >
              <NextLink
                href="https://bonanzaclube.com.br/"
                className="bg-[#EF1833] rounded-full px-8 md:px-14 py-2 flex justify-center gap-x-2 items-center flex-1 w-full md:w-[250px] hover:opacity-90 transition-all duration-200"
                target="_blank"
              >
                <FaGlobe color="white" size={18} />
                <span className="text-white text-base font-bold whitespace-nowrap">
                  Bonanza Clube
                </span>
              </NextLink>
              <Link
                className="bg-[#EF1833] cursor-pointer rounded-full px-8 md:px-14 py-2 flex justify-center gap-x-2 items-center flex-1 w-full md:w-[250px] hover:opacity-90 transition-all duration-200"
                to="galeria"
                smooth={true}
                duration={900}
                offset={0}
              >
                <FaRegArrowAltCircleDown color="white" size={18} />
                <span className="text-white text-base font-bold whitespace-nowrap">
                  Galeria
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="w-full h-full mt-8 md:mt-0">
          <Image
            src={"/images/img_hero.png"}
            alt="Bonanza"
            width={800}
            height={800}
            className="w-auto h-auto"
          />
        </div>
      </motion.section>

      <motion.section
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="min-h-screen bg-[#F0F0F0] px-4 md:px-0 flex flex-col items-center justify-center py-16"
      >
        <h1 className="text-[#001C34] font-bold text-3xl md:text-5xl max-w-4xl text-center leading-16">
          Confira o{" "}
          <span className="font-bold text-[#EF1833]">Bonanza Fly-in</span> em
          matéria do programa AutoEsporte na GloboPlay
        </h1>
        <motion.div
          initial={{ opacity: 0, x: -600 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="my-8 flex gap-x-4 items-center"
        >
          <div className="border border-[#787878] w-[200px] "></div>
          <GiCommercialAirplane color="black" size={36} />
          <div className="border border-[#787878] w-[200px] "></div>
        </motion.div>
        <NextLink
          href={"https://globoplay.globo.com/v/12738416/"}
          target="_blank"
        >
          <div className="">
            <button className="cursor-pointer ">
              <Image
                src={"/images/globoesporte.png"}
                alt="Logo do Bonanza"
                width={250}
                height={250}
                className="w-auto h-auto"
              />
            </button>
          </div>
        </NextLink>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          onViewportEnter={() => setShouldStartCount(true)}
          className="md:flex flex-row items-center mt-12 hidden"
        >
          <div className="bg-[#002C52] py-12 flex flex-col items-center justify-center w-[300px]">
            <h1 className="text-7xl font-bold text-white">
              +
              <CountUp
                start={shouldStartCount ? 0 : null}
                end={300}
                duration={2.5}
              />
            </h1>
            <p className="text-2xl text-center mt-2 text-white">Associados</p>
          </div>

          <div className="relative py-12 flex flex-col items-center justify-center h-[250px] w-[450px]">
            <div className="absolute inset-0 bg-[url('/images/img_avioes.jpeg')] bg-cover bg-center z-0" />
            <div className="absolute inset-0 bg-[#002C52] opacity-80 z-10" />
            <div className="relative z-20 text-white flex flex-col items-center">
              <h1 className="text-7xl font-bold text-white">
                +
                <CountUp
                  start={shouldStartCount ? 0 : null}
                  end={1100}
                  duration={2.5}
                  separator=""
                />
              </h1>
              <p className="text-2xl text-center mt-2 text-white">
                Pessoas em nossos eventos
              </p>
            </div>
          </div>

          <div className="bg-[#002C52] py-12 flex flex-col items-center justify-center w-[300px]">
            <h1 className="text-7xl font-bold text-white">
              +
              <CountUp
                start={shouldStartCount ? 0 : null}
                end={30}
                duration={2.5}
              />
            </h1>
            <p className="text-2xl text-center mt-2 text-white">
              Patrocinadores
            </p>
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#001C34]"
      >
        <div className="flex flex-col items-center justify-center  py-16">
          <h1 className="text-[#F0F0F0] font-bold text-3xl md:text-5xl text-center leading-16 max-w-4xl">
            Você é nosso{" "}
            <span className="font-bold text-[#EF1833]">convidado especial</span>{" "}
            para o Bonanza Fly-in 2024!
          </h1>
          {/* <p className="text-[#F0F0F0] text-lg mt-4 text-center max-w-2xl">
             Clique
            no botão abaixo e garanta sua presença.
          </p> */}
          <div className="mt-8">
            <NextLink
              className="bg-[#EF1833] cursor-pointer rounded-full px-8 md:px-14 py-2 flex justify-center gap-x-2 items-center flex-1 w-full  hover:opacity-90 transition-all duration-200"
              href={"https://oticket.com.br/event/7710/bonanza-fly-in-2025"}
              target="_blank"
            >
              <span className="text-white text-xl font-bold whitespace-nowrap uppercase">
                Garanta sua presença
              </span>
            </NextLink>
          </div>
        </div>
      </motion.section>

      <motion.section
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="min-h-screen bg-[#F0F0F0] px-4 md:px-0 flex flex-col items-center justify-center pt-8 md:pt-16"
      >
        <div className="">
          <h1 className="uppercase text-3xl md:text-5xl text-center font-bold text-[#002C52] md:leading-16 max-w-4xl">
            <span className="text-[#B80104]">grandes marcas</span>{" "}
            <span>que vão fazer esse encontro acontecer</span>
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -600 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="my-8 flex gap-x-4 items-center"
        >
          <div className="border border-[#787878] w-[200px] "></div>
          <GiCommercialAirplane color="black" size={36} />
          <div className="border border-[#787878] w-[200px] "></div>
        </motion.div>
        <div>
          <h1 className="text-xl text-black font-light uppercase">
            Patrocinadores
          </h1>
        </div>
        <hr className="border-[#8A9DAD] mt-4 mb-8 w-[80%]" />
        <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
          <Image
            src={"/images/bradesco_logo.webp"}
            alt="Logo do Bradesco"
            width={650}
            height={650}
            className="w-auto h-auto"
          />
        </div>
        <hr className="border-[#8A9DAD] mt-8  w-[80%]" />
        <div className="my-8 grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-12">
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/tam.webp"}
              alt="Logo da TAM"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/robinson.webp"}
              alt="Logo da Robinson"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/perto.webp"}
              alt="Logo da Perto"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/jpmartins.webp"}
              alt="Logo da JP Martins"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/inpaer.webp"}
              alt="Logo da Inpaer"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/vkn.webp"}
              alt="Logo da VKN"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/sarasota.webp"}
              alt="Logo da Sarasota"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/avantto.webp"}
              alt="Logo da Avantto"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/bravo.webp"}
              alt="Logo da Bravo"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/plane.webp"}
              alt="Logo da Plane"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/select.webp"}
              alt="Logo da Select"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/diamond.webp"}
              alt="Logo da Diamond"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/panam.webp"}
              alt="Logo da Panam"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/astonmartin.webp"}
              alt="Logo da Aston Martin"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/stuggart.webp"}
              alt="Logo da Stuggart"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/viaer.webp"}
              alt="Logo da Viaer"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/garmin.webp"}
              alt="Logo da Garmin"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/mclaren.webp"}
              alt="Logo da McLaren"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/mestaa.webp"}
              alt="Logo da Mestaa"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/aerotrading.webp"}
              alt="Logo da Aerotrading"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/gto.webp"}
              alt="Logo da GTO"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/eurobike.webp"}
              alt="Logo da Eurobike"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/0.webp"}
              alt="Logo da 0"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/kn.webp"}
              alt="Logo da Kn"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/connect.webp"}
              alt="Logo da Connect"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/vak.webp"}
              alt="Logo da Vak"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/avionics.webp"}
              alt="Logo da Avionics"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/harleydavidson.webp"}
              alt="Logo da Harley Davidson"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/vittia.webp"}
              alt="Logo da Vittia"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/alper.webp"}
              alt="Logo da Alper"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/timbro.webp"}
              alt="Logo da Timbro"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/rodini.webp"}
              alt="Logo da Rodini"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/las.webp"}
              alt="Logo da Las"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/itutrailer.webp"}
              alt="Logo da Itutrailer"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/stecar.webp"}
              alt="Logo da Stecar"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/flowerdesign.webp"}
              alt="Logo da Flower Design"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/daf.webp"}
              alt="Logo da Daf"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/dedalo.webp"}
              alt="Logo da Dedalo"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/colezione.webp"}
              alt="Logo da Colezione"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/oscarromeo.webp"}
              alt="Logo da Oscar Romeo"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/vadicoaero.webp"}
              alt="Logo da Vadico Aero"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        id="galeria"
        className="bg-[url('/images/bg_galeria.png')] flex flex-col items-center  min-h-[50vh] py-12"
      >
        <div>
          <h1 className="font-bold text-3xl md:text-5xl text-[#002C52] uppercase ">
            Galeria
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -600 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="my-8 flex gap-x-4 items-center"
        >
          <div className="border border-[#787878] w-[200px] "></div>
          <GiCommercialAirplane color="black" size={36} />
          <div className="border border-[#787878] w-[200px] "></div>
        </motion.div>
        <div className="w-full max-w-7xl mt-6 px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="custom-swiper"
          >
            {imagens.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-[230px] object-cover "
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <style jsx global>{`
            .custom-swiper .swiper-pagination {
              margin-top: 32px; /* ajuste conforme necessário */
              position: static !important;
            }
            .custom-swiper .swiper-pagination-bullet-active {
              background: #002c52 !important; /* cor da bolinha ativa */
            }
            .custom-swiper .swiper-button-next,
            .custom-swiper .swiper-button-prev {
              color: #fff !important; /* cor das setas */
              z-index: 50 !important; /* para garantir que as setas fiquem acima das imagens */
              width: 48px;
              height: 48px;
            }
            .custom-swiper .swiper-button-next:after,
            .custom-swiper .swiper-button-prev:after {
              font-size: 32px !important; /* tamanho do ícone da seta */
              font-weight: bold;
            }
          `}</style>
        </div>
      </motion.section>
      <footer className="bg-[#002C52] w-full p-6 flex flex-col items-center justify-center">
        <div className="flex items-center gap-x-8">
          <button className="font-light text-white">Termos & Condições</button>
          <button className="text-white">Políticas De Privacidade</button>
        </div>
        <div className="mt-4">
          <p className="text-center md:text-start text-white">
            Bonanza Fly-in | © Copyright 2024 - Todos os direitos Reservados
          </p>
        </div>
      </footer>
    </main>
  );
}
