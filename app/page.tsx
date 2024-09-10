'use client'
import Image from "next/image";
import { skills, contactSOcial, Profile } from "./imagesList";
import { useState } from "react";

export default function Home() {

  interface Empleo {
    empresa: string;
    subtitulo: string;
    acciones: string[];
  }


  const empleos: Empleo[] = [
    {
      empresa: 'Aidprof',
      subtitulo: 'En esta compañia desarrolle la base del proyecto:',
      acciones: ['Diseño de la base de datos relacional: Creación y estructuración de la base de datos para garantizar la integridad y eficiencia en el manejo de datos', 'Configuración inicial del proyecto en Django: Configuración del entorno de desarrollo y estructura base del proyecto utilizando Django para sentar las bases del desarrollo', 'Creación de modelos en Django: Desarrollo de modelos en Django para definir la estructura de los datos y sus relaciones dentro de la aplicación', 'Desarrollo de endpoints: Implementación de endpoints para permitir la interacción entre el cliente y el servidor, facilitando la comunicación y el intercambio de datos']
    },
    {
      empresa: 'Stage On Vr',
      subtitulo: 'En esta compañía, participé activamente en el desarrollo de una aplicación móvil. A continuación, detallo los trabajos que realicé:',
      acciones: ['Creación de nuevas pantallas para mejorar la experiencia del usuario', 'Gestión del estado global de la app utilizando Redux para asegurar un flujo de datos eficiente', 'Incorporación de notificaciones push (firebase) para mantener a los usuarios informados.', 'Modificación de pantallas antiguas para optimizar su funcionalidad y diseño.', 'Actualización y modificación de endpoints en el backend, desarrollado en Flask, para mejorar la integración y el rendimiento.']
    },
    {
      empresa: 'Freelance',
      subtitulo: 'Desarrollo web para un taller mecanico de la zona con Next.js "JARA MOTORS"',
      acciones: ['Diseño y maquetado con html css y tailwind', 'adpatacion del diseño para todas las pantallas (diseño responsive)', 'creacion de un servicio backend para el envio de correos']
    },
    {
      empresa: 'Freeelance',
      subtitulo: 'Desarrollo web para un salon de estetica facial de la zona con Next.js "AJ Piel Genuina',
      acciones: ['Diseño y maquetado con html css y tailwind', 'adpatacion del diseño para todas las pantallas (diseño responsive)', 'creacion de un servicio backend para el envio de correos']
    }
  ]




  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    number: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí podrías hacer una solicitud POST para enviar los datos
    console.log('Form data submitted:', formData);
  };





  return (

    <>
      <header id="cabezera" className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-center text-2xl md:text-5xl text-white font-semibold mb-12 lg:text-7xl ">
          Ingeniero Informático/Desarrollador
        </h1>
        <div className="flex space-x-4">
          <button className="px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]">
            Contactame
          </button>
          <button className="px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]">
            proyectos
          </button>
        </div>
      </header>

      <div className="contenedor ">

        <div className="content flex flex-col md:flex-row mt-10">

          <div className="flex-1 flex items-center justify-center">
            <Image
              src={Profile}
              width={380} // Ajusta el tamaño de la imagen
              height={250} // Ajusta el tamaño de la imagen
              alt=""
              className=""
            />

          </div>

          <div className="about-info flex-1 p-4">
  {/* Nombre fuera del acordeón */}
  <h2 className="text-center text-4xl">Nicolás Rubio</h2>

  {/* Estructura del acordeón */}
  <div className="join join-vertical w-full">
    {/* Primera sección del acordeón */}
    <div className="collapse collapse-arrow join-item border border-primary border-2">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title text-xl font-medium">
        Información Profesional
      </div>
      <div className="collapse-content">
        <p className="md:text-center text-lg">
          Soy ingeniero informático especializado en desarrollo web, apasionado
          por enfrentar desafíos y encontrar soluciones creativas. Mi formación
          autodidacta me ha permitido abordar proyectos de manera versátil, desde
          aplicaciones web complejas hasta interfaces intuitivas. Siempre busco
          explorar nuevas tecnologías y enfrentar problemas que me permitan
          seguir creciendo profesionalmente. Estoy abierto a nuevas oportunidades
          para aplicar mis habilidades y colaborar en proyectos innovadores.
        </p>
      </div>
    </div>

    {/* Segunda sección del acordeón */}
    <div className="collapse collapse-arrow join-item border border-primary border-2">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">
        Redes Sociales
      </div>
      <div className="collapse-content">
        <div className="flex flex-row md:justify-center space-x-4">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.3-1 1.6-3.6 0-5.9-1.6-2.3-4.3-3.3-5.6-2.3zm33.5-3.9c1.6 .6 2.9 2.3 2.9 4.2 0 2-1.3 3.9-2.9 4.2-1.6 .3-3.6-1-4.2-2.9-.3-2 1.3-3.9 4.2-5.2z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>

        <div className="content mt-10">
          <h2 className="text-4xl">EXPERIENCIA LABORAL</h2>
          {
            empleos.map((empleo: any, index: number) => (
              <div key={index} className="mt-16 experience-detail border border-primary border-2 ">
                <h3 className="text-lg font-semibold">{empleo.empresa}</h3>
                <p className="md:text-lg">{empleo.subtitulo}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {
                    empleo.acciones.map((acc: any, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <svg className="flex-shrink-0 w-4 h-4 text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                        </svg>
                        <span className="md:text-lg">{acc}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>

            ))
          }

        </div>

        <div className="content">




        </div>


        <div className="content">
          <h2 className=" text-4xl">skills</h2>
          <h3>A continuación, presento las tecnologías con las que he trabajado y en las que tengo experiencia:
          </h3>
          <div className=" grid grid-cols-2  md:grid-cols-4 gap-4 mt-10">
            {
              skills.map((imax, index) => (
                <div key={index} className="">
                  <Image
                    src={imax}
                    width={100}
                    height={100}
                    alt="" />
                </div>
              ))
            }
          </div>
        </div>

        <div className="content mt-20">
          <div className="flex flex-col md:flex-row">
            <div className="basis-3/4">
              <h2 className="text-4xl">Contactame</h2>
              <form  >
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                  <div className="flex flex-col">
                    <label>Nombre</label>
                    <input type="text" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="flex flex-col">
                    <label>Apellido</label>
                    <input value={formData.lastName} onChange={handleChange} />
                  </div>
                  <div className="flex flex-col">
                    <label>Tú Email</label>
                    <input value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="flex flex-col">
                    <label>Numero Celular</label>
                    <input type="number" value={formData.number} onChange={handleChange} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label>Mensaje</label>
                  <textarea name="" id="" value={formData.message} onChange={handleChange} />
                </div>

              </form>
            </div>

            <div className="basis-1/4">
              <h1 className="text-5xl">Mis Redes</h1>
              <div className="flex flex-row gap-12  md:flex-col ">
                {
                  contactSOcial.map((social, index) => (
                    <Image
                      src={social}
                      width={80}
                      height={80}
                      alt=""
                      className="mt-10"
                    />
                  ))
                }
              </div>

            </div>
          </div>
        </div>

      </div>

    </>

  );
}






