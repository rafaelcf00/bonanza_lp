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
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";

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

  const schema = yup.object().shape({
    pilotoemcomando: yup.string().required("Piloto em comando é obrigatório"),
    datadechegada: yup.string().required("Data de chegada é obrigatória"),
    horarioestimadochegada: yup
      .string()
      .required("Horário estimado de chegada é obrigatório"),
    diadesaida: yup.string().required("Dia de saída é obrigatório"),
    codigoanac: yup.string().required("Código ANAC é obrigatório"),
    aeroportoorigem: yup.string().required("Aeroporto de origem é obrigatório"),
    matriculaaeronave: yup
      .string()
      .required("Matrícula da aeronave é obrigatória"),
    horarioestimadodesaida: yup
      .string()
      .required("Horário estimado de saída é obrigatório"),
    telefonecontato: yup.string().required("Telefone de contato é obrigatório"),

    personsonboard: yup
      .string()
      .required("Número de pessoas a bordo é obrigatório"),

    modeloaeronave: yup.string().required("Modelo da aeronave é obrigatório"),
    precisaraabastecimento: yup
      .string()
      .required("Precisará de abastecimento é obrigatório"),
  });

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-06-27T08:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = String(
      Math.floor(difference / (1000 * 60 * 60 * 24))
    ).padStart(2, "0");
    const hours = String(
      Math.floor((difference / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((difference / (1000 * 60)) % 60)
    ).padStart(2, "0");
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
      2,
      "0"
    );

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("Watch data: ", watch());

  const onSubmit = async (data) => {
    console.log("Data submitted: ", data);
    try {
      const formData = new URLSearchParams();
      formData.append("pilotoemcomando", data.pilotoemcomando);
      formData.append("datadechegada", data.datadechegada);
      formData.append("horarioestimadochegada", data.horarioestimadochegada);
      formData.append("diadesaida", data.diadesaida);
      formData.append("codigoanac", data.codigoanac);
      formData.append("aeroportoorigem", data.aeroportoorigem);
      formData.append("matriculaaeronave", data.matriculaaeronave);
      formData.append("horarioestimadodesaida", data.horarioestimadodesaida);
      formData.append("telefonecontato", data.telefonecontato);
      formData.append("personsonboard", data.personsonboard);
      formData.append("modeloaeronave", data.modeloaeronave);
      formData.append("precisaraabastecimento", data.precisaraabastecimento);

      console.log(formData.toString());

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw7wXexk-Y7teAKmTeJRnMtGvtcs3imqTVP4nJJWLZ3AEzoyqLAlwhLSL5mO7n_t0J2/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Tipo correto para formulário
          },
          body: formData.toString(),
        }
      );

      console.log(response);

      if (response.ok) {
        setMessage("Informações recebidas com sucesso!");
        reset();
      } else {
        setMessage("Erro ao enviar informações.");
      }
    } catch (error) {
      setMessage("Erro na conexão com o Google Sheets.");
      console.log(error);
    }

    // Resetar a mensagem após 5 segundos
    setTimeout(() => {
      setMessage("");
    }, 20000);

    //Link Planilha de Dados
    //https://docs.google.com/spreadsheets/d/10XSOJdU7IgMn0rryzACb447Hrq-Cs4CfiNkbcXMmj8Q/edit?usp=sharing
  };

  const [motionX, setMotionX] = useState(-600);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMotionX(1); // valor menor para mobile
    } else {
      setMotionX(-600);
    }
  }, []);

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
            <h1 className="uppercase text-white font-bold text-3xl md:text-[2.5rem] leading-10 md:max-w-2xl text-center md:text-start">
              20 anos do Bonanza Clube do Brasil.
            </h1>
            <h2 className="uppercase text-[#FF0000] font-bold text-center md:text-start text-4xl md:text-5xl md:max-w-2xl mt-3">
              A grande festa!
            </h2>
          </div>
          <div className="mt-6 w-full md:w-auto px-4 md:px-0">
            <h1 className="text-white text-lg mb-2 ">Faltam:</h1>
            <div className="flex flex-row gap-4">
              <div className="rounded-lg bg-[#B80104] w-full flex flex-col items-center justify-center">
                <h1 className="text-white font-bold text-3xl">
                  {timeLeft.days}
                </h1>
                <span className="text-center text-white">Dias</span>
              </div>
              <div className="rounded-lg bg-[#B80104] w-full flex flex-col items-center justify-center">
                <h1 className="text-white font-bold text-3xl">
                  {timeLeft.hours}
                </h1>
                <span className="text-center text-white">Horas</span>
              </div>
              <div className="rounded-lg bg-[#B80104] w-full flex flex-col items-center justify-center">
                <h1 className="text-white font-bold text-3xl">
                  {timeLeft.minutes}
                </h1>
                <span className="text-center text-white">Minutos</span>
              </div>
              <div className="rounded-lg bg-[#B80104] w-full flex flex-col items-center justify-center">
                <h1 className="text-white font-bold text-3xl">
                  {timeLeft.seconds}
                </h1>
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
                <div>
                  <FaGlobe color="white" size={22} />
                </div>
                <div>
                  <span className="text-white text-xl font-bold whitespace-nowrap">
                    Bonanza Clube
                  </span>
                </div>
              </NextLink>
              <Link
                className="bg-[#EF1833] cursor-pointer rounded-full px-8 md:px-14 py-2 flex justify-center gap-x-2 items-center flex-1 w-full md:w-[250px] hover:opacity-90 transition-all duration-200"
                to="galeria"
                smooth={true}
                duration={900}
                offset={0}
              >
                <div>
                  <FaRegArrowAltCircleDown color="white" size={22} />
                </div>
                <div>
                  <span className="text-white text-xl font-bold whitespace-nowrap">
                    Galeria
                  </span>
                </div>
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
        className="h-auto md:min-h-screen bg-[#F0F0F0] px-4 md:px-0 flex flex-col items-center justify-center py-8 md:py-16"
      >
        <h1 className="text-[#001C34] font-bold text-2xl md:text-5xl max-w-5xl text-center md:leading-16 uppercase">
          Confira o{" "}
          <span className="font-bold text-[#EF1833]">Bonanza Fly-in</span> em
          matéria do programa AutoEsporte na GloboPlay
        </h1>
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="my-8 flex gap-x-4 items-center  w-full md:justify-center"
        >
          <div className="border border-[#787878] w-full md:w-[200px] "></div>
          <div>
            <GiCommercialAirplane color="black" size={36} />
          </div>
          <div className="border border-[#787878] w-full md:w-[200px] "></div>
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
        className="bg-[#001C34] px-4 md:px-0"
      >
        <div className="flex flex-col items-center justify-center  py-16">
          <h1 className="text-[#F0F0F0] font-bold text-2xl md:text-5xl text-center md:leading-16 max-w-5xl uppercase">
            Você é nosso{" "}
            <span className="font-bold text-[#EF1833]">convidado especial</span>{" "}
            para o Bonanza Fly-in 2025!
          </h1>
          {/* <p className="text-[#F0F0F0] text-lg mt-4 text-center max-w-2xl">
             Clique
            no botão abaixo e garanta sua presença.
          </p> */}
          <div className="mt-8 flex flex-col md:flex-row items-center gap-x-4 gap-y-4">
            <div className="w-full md:w-auto">
              <NextLink
                className="bg-[#EF1833] cursor-pointer rounded-full px-8 md:px-14 py-2 flex justify-center gap-x-2 items-center flex-1 w-full  hover:opacity-90 transition-all duration-200"
                href={"https://oticket.com.br/event/7710/bonanza-fly-in-2025"}
                target="_blank"
              >
                <span className="text-white text-base font-bold whitespace-nowrap uppercase">
                  Garanta sua presença
                </span>
              </NextLink>
            </div>
            <div className="w-full md:w-auto">
              <Link
                className="bg-transparent border border-[#EF1833] cursor-pointer rounded-full px-8 md:px-14 py-2 flex justify-center gap-x-2 items-center flex-1 w-full  hover:opacity-90 transition-all duration-200"
                to="formulariopilotos"
                smooth={true}
                duration={900}
                offset={0}
              >
                <span className="text-[#EF1833] text-base font-bold whitespace-nowrap uppercase">
                  Formulário para pilotos
                </span>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="min-h-screen bg-[#F0F0F0] px-4 md:px-0 flex flex-col items-center justify-center pt-8 md:pt-16"
      >
        <div className="">
          <h1 className="uppercase text-2xl md:text-5xl text-center font-bold text-[#002C52] md:leading-16 max-w-4xl">
            <span className="text-[#B80104]">grandes marcas</span>{" "}
            <span>que vão fazer esse encontro acontecer</span>
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="my-8 flex gap-x-4 items-center w-full md:justify-center"
        >
          <div className="border border-[#787878] w-full md:w-[200px] "></div>
          <div>
            <GiCommercialAirplane color="black" size={36} />
          </div>
          <div className="border border-[#787878] w-full md:w-[200px] "></div>
        </motion.div>
        <div>
          <h1 className="text-xl text-black font-light uppercase">
            Patrocinadores
          </h1>
        </div>
        <hr className="border-[#8A9DAD] mt-4 mb-8 w-[80%]" />
        <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
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
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/tam.webp"}
              alt="Logo da TAM"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          {/* <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/robinson.webp"}
              alt="Logo da Robinson"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div> */}
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/perto.webp"}
              alt="Logo da Perto"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          {/* <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/jpmartins.webp"}
              alt="Logo da JP Martins"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div> */}
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/inpaer.webp"}
              alt="Logo da Inpaer"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/vkn.webp"}
              alt="Logo da VKN"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/sarasota.webp"}
              alt="Logo da Sarasota"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/avantto.webp"}
              alt="Logo da Avantto"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          {/* <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/bravo.webp"}
              alt="Logo da Bravo"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div> */}
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/plane.webp"}
              alt="Logo da Plane"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/select.webp"}
              alt="Logo da Select"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/diamond.webp"}
              alt="Logo da Diamond"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          {/* <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/panam.webp"}
              alt="Logo da Panam"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div> */}
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/astonmartin.webp"}
              alt="Logo da Aston Martin"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/stuggart.webp"}
              alt="Logo da Stuggart"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/viaer.webp"}
              alt="Logo da Viaer"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/garmin.webp"}
              alt="Logo da Garmin"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/mclaren.webp"}
              alt="Logo da McLaren"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/mestaa.webp"}
              alt="Logo da Mestaa"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/aerotrading.webp"}
              alt="Logo da Aerotrading"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/gto.webp"}
              alt="Logo da GTO"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/eurobike.png"}
              alt="Logo da Eurobike"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/0.webp"}
              alt="Logo da 0"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/kn.webp"}
              alt="Logo da Kn"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          {/* <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/connect.webp"}
              alt="Logo da Connect"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div> */}

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/vak.webp"}
              alt="Logo da Vak"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/avionics.webp"}
              alt="Logo da Avionics"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          {/* <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/harleydavidson.webp"}
              alt="Logo da Harley Davidson"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div> */}
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/vittia.webp"}
              alt="Logo da Vittia"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          {/* <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/alper.webp"}
              alt="Logo da Alper"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div> */}

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/timbro.webp"}
              alt="Logo da Timbro"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/rodini.webp"}
              alt="Logo da Rodini"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/las.webp"}
              alt="Logo da Las"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/itutrailer.webp"}
              alt="Logo da Itutrailer"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/stecar.webp"}
              alt="Logo da Stecar"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/flowerdesign.webp"}
              alt="Logo da Flower Design"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <NextLink
            className="flex items-center"
            href="https://www.sotreq.com.br/"
            target="_blank"
          >
            <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
              <Image
                src={"/images/patrocinadores/sotreq.jpeg"}
                alt="Logo da Sotreq"
                width={180}
                height={180}
                className="w-auto h-auto "
              />
            </div>
          </NextLink>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/daf.webp"}
              alt="Logo da Daf"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          {/* <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/dedalo.webp"}
              alt="Logo da Dedalo"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div> */}
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/colezione.webp"}
              alt="Logo da Colezione"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          {/* <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src={"/images/patrocinadores/oscarromeo.webp"}
              alt="Logo da Oscar Romeo"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div> */}

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/vadicoaero.webp"}
              alt="Logo da Vadico Aero"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/aerospeed.png"}
              alt="Logo da Aerospeed"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/bonanzaclube.png"}
              alt="Logo da Bonanza Clube"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/hangar33.png"}
              alt="Logo da Hangar 33"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/Aeromagazine.png"}
              alt="Logo da Aeromagazine"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/Aviair.png"}
              alt="Logo da Aviair"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/CAvok-logo.png"}
              alt="Logo da CAvok"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/Charlie-O.png"}
              alt="Logo da Charlie-O"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/escrow.png"}
              alt="Logo da Escrow"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/flightsafety.png"}
              alt="Logo da Flight Safety"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/limabravo.png"}
              alt="Logo da Lima Bravo"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/Logo-Fenix.png"}
              alt="Logo da Logo-Fenix"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/quasar.png"}
              alt="Logo da Quasar"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/Reserva-Pituba.png"}
              alt="Logo da Reserva Pituba"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/veloce.png"}
              alt="Logo da Veloce"
              width={180}
              height={180}
              className="w-auto h-auto"
            />
          </div>

          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center">
            <Image
              src={"/images/patrocinadores/logo-altamogiana.webp"}
              alt="Logo da Altamogiana"
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
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="my-8 flex gap-x-4 items-center w-full md:justify-center"
        >
          <div className="border border-[#787878] w-full md:w-[200px] "></div>
          <div>
            <GiCommercialAirplane color="black" size={36} />
          </div>
          <div className="border border-[#787878] w-full md:w-[200px] "></div>
        </motion.div>
        <div className="w-full max-w-7xl mt-2 md:mt-6 px-4">
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

      <motion.section
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          id="formulariopilotos"
          className="w-full m-auto py-12 px-4 md:px-24 bg-[#F0F0F0] inline-flex flex-col justify-center items-center gap-2 "
        >
          <h1 className=" text-2xl uppercase md:text-5xl text-center font-bold text-[#002C52] md:leading-16 max-w-5xl mb-4 md:mb-16">
            <span className="">Você é piloto?</span>{" "}
            <span className="text-[#B80104] font-bold">
              Preencha o formulário
            </span>{" "}
            abaixo e venha voar com a gente!
          </h1>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="order-2 lg:order-1 p-2 hidden md:block">
              <div className="mb-4 ">
                <Image
                  src={"/images/logo_bonanza.png"}
                  alt="Logo do Bonanza"
                  width={250}
                  height={250}
                  className="w-auto h-auto"
                />
              </div>
              <div>
                <h1 className="text-[#002C52] font-bold text-3xl md:text-4xl  md:leading-16 max-w-4xl text-center md:text-start">
                  Coleta de informações{" "}
                  <span className="text-[#B80104] font-bold">para pilotos</span>
                </h1>
                <p className="text-[#002C52] text-lg mt-2  max-w-xl text-center md:text-start">
                  Preencha o formulário para sua melhor experiência no Bonanza
                  Fly-in 2025. As informações serão utilizadas para organizar a
                  chegada e saída dos aviões, bem como para garantir que você
                  tenha uma experiência incrível durante o evento.{" "}
                  <span className="text-[#B80104] font-bold">
                    Não se preocupe, seus dados estarão seguros conosco!
                  </span>
                </p>
              </div>
            </div>
            <div className=" order-1 lg:order-2 ">
              <div className="flex flex-col items-center ">
                {/* <link
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                  rel="stylesheet"
                /> */}
                <div className="w-full bg-[#1a2e47] bg-opacity-95 p-6 rounded-2xl shadow-2xl">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="custom-scrollbar space-y-6 overflow-auto max-h-[500px] pr-2"
                  >
                    {message ? (
                      <p className="mt-4 p-5 bg-green-500 text-white text-center border-green-700">
                        <i
                          className="fa fa-check-circle fa-3x"
                          aria-hidden="true"
                        ></i>
                        <h4 className="text-lg mt-3">{message}</h4>
                      </p>
                    ) : (
                      <>
                        <div>
                          <label className="block text-white mb-2">
                            Piloto em comando
                          </label>
                          <input
                            {...register("pilotoemcomando")}
                            type="text"
                            className={`w-full px-4 py-2 border border-[#FFF] bg-white/90 placeholder:text-[#002C52] text-[#002C52] rounded-xl outline-none transition ${
                              errors.pilotoemcomando
                                ? "border-red-500"
                                : "border-[#FFF]"
                            }`}
                          />
                          {errors.pilotoemcomando && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.pilotoemcomando.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-white mb-2">
                            Data de chegada
                          </label>
                          <select
                            {...register("datadechegada")}
                            className={`w-full px-4 py-3 pr-8 border border-[#FFF] bg-white/90 placeholder:text-[#002C52] text-[#002C52] rounded-xl outline-none transition ${
                              errors.datadechegada
                                ? "border-red-500"
                                : "border-[#FFF]"
                            }`}
                          >
                            <option defaultChecked value="">
                              Selecione
                            </option>
                            <option value="sexta-27-06">Sexta 27/06</option>
                            <option value="sabado-28-06">Sábado 28/06</option>
                            <option value="domingo-29-06">Domingo 29/06</option>
                          </select>
                          {errors.datadechegada && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.datadechegada.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-white mb-2">
                            Horário estimado de chegada (Hora Local - GMT -3)
                          </label>
                          <input
                            {...register("horarioestimadochegada")}
                            type="text"
                            // autoComplete={false}
                            className={`w-full px-4 py-2  bg-white placeholder:text-[#002C52] text-[#002C52] outline-none rounded-lg ${
                              errors.horarioestimadochegada
                                ? "border-red-500"
                                : "border-[#FFF]"
                            }`}
                          />
                          {errors.horarioestimadochegada && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.horarioestimadochegada.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-white mb-2">
                            Dia de saída
                          </label>
                          <select
                            {...register("diadesaida")}
                            className={`w-full px-4 py-3 outline-none bg-white placeholder:text-[#002C52] text-[#002C52] rounded-lg ${
                              errors.diadesaida
                                ? "border-red-500"
                                : "border-[#FFF]"
                            }`}
                          >
                            <option value="">Selecione</option>
                            <option value="sexta-27-06">Sexta 27/06</option>
                            <option value="sabado-28-06">Sábado 28/06</option>
                            <option value="domingo-29-06">Domingo 29/06</option>
                          </select>
                          {errors.diadesaida && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.diadesaida.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-white mb-2">
                            Código ANAC do piloto em comando
                          </label>
                          <input
                            {...register("codigoanac")}
                            type="text"
                            // autoComplete={false}
                            className={`w-full px-4 py-2 outline-none bg-white placeholder:text-[#002C52] text-[#002C52] rounded-lg ${
                              errors.codigoanac
                                ? "border-red-500"
                                : "border-[#FFF]"
                            }`}
                          />
                          {errors.codigoanac && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.codigoanac.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-white mb-2">
                            Aeroporto de origem
                          </label>
                          <input
                            {...register("aeroportoorigem")}
                            type="text"
                            // autoComplete={false}
                            className={`w-full px-4 py-2 outline-none bg-white placeholder:text-[#002C52] text-[#002C52] rounded-lg ${
                              errors.aeroportoorigem
                                ? "border-red-500"
                                : "border-[#FFF]"
                            }`}
                          />
                          {errors.aeroportoorigem && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.aeroportoorigem.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-white mb-2">
                            Matrícula da aeronave
                          </label>
                          <input
                            {...register("matriculaaeronave")}
                            type="text"
                            // autoComplete={false}
                            className={`w-full px-4 py-2 outline-none bg-white placeholder:text-[#002C52] text-[#002C52] rounded-lg ${
                              errors.matriculaaeronave
                                ? "border-red-500"
                                : "border-[#FFF]"
                            }`}
                          />
                          {errors.matriculaaeronave && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.matriculaaeronave.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-white mb-2">
                            Horário estimado de saída (Hora Local - GMT -3)
                          </label>
                          <input
                            {...register("horarioestimadodesaida")}
                            type="text"
                            // autoComplete={false}
                            className={`w-full px-4 py-2 outline-none bg-white placeholder:text-[#002C52] text-[#002C52] rounded-lg ${
                              errors.horarioestimadodesaida
                                ? "border-red-500"
                                : "border-[#FFF]"
                            }`}
                          />
                          {errors.horarioestimadodesaida && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.horarioestimadodesaida.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-white mb-2">
                            Telefone de contato (com código de área)
                          </label>
                          <input
                            {...register("telefonecontato")}
                            type="text"
                            // autoComplete={false}
                            className={`w-full px-4 py-2 outline-none bg-white placeholder:text-[#002C52] text-[#002C52] rounded-lg ${
                              errors.telefonecontato
                                ? "border-red-500"
                                : "border-[#FFF]"
                            }`}
                          />
                          {errors.telefonecontato && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.telefonecontato.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-white mb-2">
                            POB - Persons On Board (Será necessário o cadastro
                            individual de todos)
                          </label>
                          <input
                            {...register("personsonboard")}
                            type="text"
                            // autoComplete={false}
                            className={`w-full px-4 py-2 outline-none bg-white placeholder:text-[#002C52] text-[#002C52] rounded-lg ${
                              errors.personsonboard
                                ? "border-red-500"
                                : "border-[#FFF]"
                            }`}
                          />
                          {errors.personsonboard && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.personsonboard.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-white mb-2">
                            Modelo da Aeronave
                          </label>
                          <input
                            {...register("modeloaeronave")}
                            type="text"
                            // autoComplete={false}
                            className={`w-full px-4 py-2 outline-none bg-white placeholder:text-[#002C52] text-[#002C52] rounded-lg ${
                              errors.modeloaeronave
                                ? "border-red-500"
                                : "border-[#FFF]"
                            }`}
                          />
                          {errors.modeloaeronave && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.modeloaeronave.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-white mb-2">
                            Precisará de abastecimento?
                          </label>
                          <select
                            {...register("precisaraabastecimento")}
                            className={`w-full px-4 py-2 outline-none bg-white placeholder:text-[#002C52] text-[#002C52] rounded-lg ${
                              errors.precisaraabastecimento
                                ? "border-red-500"
                                : "border-[#FFF]"
                            }`}
                          >
                            <option value="">Selecione</option>
                            <option value="sim-avgas">Sim, Avgas</option>
                            <option value="sim-jetfuel">Sim, Jet Fuel</option>
                            <option value="nao">Não</option>
                            <option value="nao-sei">Ainda não sei</option>
                          </select>
                          {errors.precisaraabastecimento && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.precisaraabastecimento.message}
                            </p>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex rounded-xl justify-center items-center gap-2 px-4 py-3 bg-white text-[#002C52] font-bold text-xl cursor-pointer transition hover:bg-white/90 disabled:bg-gray-400"
                        >
                          {isSubmitting ? (
                            <>
                              <i className="fa fa-circle-notch fa-spin"></i>
                              Salvando...
                            </>
                          ) : (
                            "Enviar"
                          )}
                        </button>
                        <div className="flex items-center justify-end text-center gap-2">
                          <p className="font-medium text-lg text-white">
                            Processado por
                          </p>
                          <img
                            src="https://cdn.oticket.com.br/logo_light.png"
                            alt="Imagem"
                            className="w-[100px]"
                          />
                        </div>
                      </>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="bg-[#002C52] w-full p-6 flex flex-col items-center justify-center">
        {/* <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-2 md:gap-y-0">
          <button className="font-light text-white">Termos & Condições</button>
          <button className="text-white">Políticas De Privacidade</button>
        </div> */}
        <div className="mt-4">
          <p className="text-center md:text-start text-white">
            Bonanza Fly-in | © Copyright 2025 - Todos os direitos Reservados
          </p>
        </div>
      </footer>
    </main>
  );
}
