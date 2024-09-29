'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Code, Github, Linkedin, Phone, MapPin, GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from 'next/link';

export default function Home() {






  interface FormData {
    name: string;
    email: string;
    message: string
  }

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()


    // Aquí iría la lógica para enviar el formulario
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (response.ok) {
      setFormData({ name: '', email: '', message: '' })


    }
    console.log(result);

  }


  const handlechange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }





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

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}


      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/portafolio.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ingeniero de Software</h2>
          <p className="text-xl mb-8">Creando soluciones innovadoras con código</p>
          <div className="flex space-x-4">




          </div>
        </div>
      </section>


      {/* About Me Section */}
      <section className="py-16 bg-white" id="sobremi">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mí</h2>
          <div className="max-w-3xl mx-auto">
            <p className="md: text-lg mb-6">

              Hola, soy Nicolás, un ingeniero de software entusiasta con experiencia en desarrollo web y aplicaciones móviles. Aunque sigo aprendiendo y mejorando mis habilidades, me esfuerzo por crear soluciones eficientes utilizando tecnologías modernas.
            </p>
            <p className=" md:text-lg mb-6">
              Me enfoco en escribir código lo más limpio posible y en mejorar la experiencia del usuario, además de optimizar el rendimiento de las aplicaciones cuando es necesario.            </p>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-100" id="estudios">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Educación</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2" />
                  Ingeniería en Informatica
                </CardTitle>
                <CardDescription>AIEP, 2014-2019</CardDescription>
              </CardHeader>

            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2" />
                  Certificaciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>React de 0 a experto - Udemy</li>
                  <li>Nodejs-Udemy</li>

                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Mis Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'JavaScript', icon: '🌟' },
              { name: 'React', icon: '⚛️' },
              { name: 'Node.js', icon: '🚀' },
              { name: 'Python', icon: '🐍' },
              { name: 'CSS', icon: '🎨' },
              { name: 'HTML', icon: '🌐' },
              { name: 'Git', icon: '🔀' },
              { name: 'SQL', icon: '🗄️' }
            ].map((skill) => (
              <div key={skill.name} className="bg-gray-100 rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-4xl mb-2">{skill.icon}</div>
                <div className="font-semibold">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 bg-gray-100" id="experiencia">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Experiencia Laboral</h2>
          <Accordion type="single" collapsible className="w-full">
            {
              empleos.map((empleo, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className=" md:text-lg">{empleo.empresa}</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2 text-sm md:text-lg">{empleo.subtitulo}</p>
                    <ul className="list-disc list-inside">{

                      empleo.acciones.map((accion, index) => (
                        <li key={index}>{accion}</li>
                      ))

                    }


                    </ul>
                  </AccordionContent>
                </AccordionItem>

              ))
            }



          </Accordion>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white" id="proyectos">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Mis Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-48 bg-gray-300"> {/* Clase relative añadida */}
                <Image
                  src={'/img/jaramotors.png'}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>JARAMOTORS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 md:text-base">
      
Creé un sitio web moderno y eficiente para Jara Motors, un taller mecánico destacado en la industria automotriz. Implementé Next.js y Tailwind CSS para desarrollar una plataforma ágil y completamente optimizada para dispositivos móviles.</p>
              </CardContent>
              <CardFooter>
                <Image
                  src={'/img/enlace.png'}
                  width={20}
                  height={20}
                  alt=""
                />
                <a href="https://jaramotors.cl" target="_blank" >Haz click aqui para visitar</a>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-48 bg-gray-300"> {/* Clase relative añadida */}
                <Image
                  src={'/img/ajpielgenuina.png'}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>AJ Piel Genuina</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600  md:text-base">

Este proyecto consistió en crear un sitio web moderno y responsivo para el Centro de Estética Facial Piel Genuina, especializado en el cuidado de la piel. Utilicé Next.js y Tailwind CSS para desarrollar una plataforma atractiva con información detallada sobre los tratamientos, ubicación y contacto del centro.
                </p>
              </CardContent>
              <CardFooter>
                <Image
                  src={'/img/enlace.png'}
                  width={20}
                  height={20}
                  alt=""
                />
                <a href="https://ajpielgenuina.cl" target="_blank" >Haz click aqui para visitar</a>
              </CardFooter>
            </Card>

          </div>
        </div>
      </section>


      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100" id="contacto">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contáctame</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Envíame un mensaje</CardTitle>
                <CardDescription>Completa el formulario y me pondré en contacto contigo pronto.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      name="name"
                      id="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handlechange}
                      required
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="tu email"
                      value={formData.email}
                      onChange={handlechange}
                      required

                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      name="message"
                      placeholder="Tu mensaje"
                      value={formData.message}
                      onChange={handlechange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Enviar mensaje</Button>
                </form>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
                <CardDescription>Otras formas de ponerte en contacto conmigo.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">

                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <a href="tel:+56934640426"> +56934640426</a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span>Las Cabras, Chile</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <Link href="https://github.com/nicorubiotsx" target="_blank">
                    <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-200">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/nicolas-rubio/" target="_blank">
                    <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-200">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </Button>
                  </Link>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Nicolas Rubio. Todos los derechos reservados.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-300">Inicio</a>
            <a href="#sobremi" className="hover:text-gray-300">Sobre mí</a>
            <a href="#estudios" className="hover:text-gray-300">Estudios</a>
            <a href="#skills" className="hover:text-gray-300">Skills</a>
            <a href="#experiencia" className="hover:text-gray-300">experiencia</a>
            <a href="#proyectos" className="hover:text-gray-300">Proyectos</a>
            <a href="#contacto" className="hover:text-gray-300">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  )
}






