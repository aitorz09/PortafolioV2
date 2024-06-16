import html5 from '../assets/html5.svg'
import css from '../assets/css.svg'
import mysql from '../assets/mysql.svg'
import nodejs from '../assets/nodejs.svg'
import react from '../assets/react.svg'
import git from '../assets/git.svg'
import github from '../assets/github.svg'
import javascript from '../assets/javascript.svg'
import Thortype from '../assets/Thortype.png'
import emojis from '../assets/emojis.png'
import Country from '../assets/country.png'
import tailwind from '../assets/tailwindcss.svg'
import img1 from '../assets/1.png'
import php from '../assets/Php_dark.svg'
import typescript from '../assets/typescript.svg'
import tsimg from '../assets/ts1.png'
import phpimg from '../assets/php.png'
import travelimg from '../assets/TravelJournal.png'
import travelbackimg from '../assets/travelback.png'
type tecnologies ={
  nombre : string,
  imagenUrl : string,
  tecUrl : string,
}
type curso = {
  name: string,
  descripcion:string,
  cursoImg:string[],
  tecnologias:string[],
  duracion:string
}
export const tecnologiasWeb : tecnologies[] = [
  {
    nombre: "HTML",
    imagenUrl: html5,
    tecUrl: 'https://developer.mozilla.org/es/docs/Glossary/HTML5'
  },
  {
    nombre: "CSS",
    imagenUrl: css,
    tecUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    nombre: "JavaScript",
    imagenUrl: javascript,
    tecUrl: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
  },
  {
    nombre: "React",
    imagenUrl: react,
    tecUrl: 'https://legacy.reactjs.org/'
  },
  {
    nombre: "Node.js",
    imagenUrl: nodejs,
    tecUrl: 'https://nodejs.org/en'
  },
  {
    nombre: "MySQL",
    imagenUrl: mysql,
    tecUrl: 'https://www.mysql.com/'
  },
  {
    nombre: "Git",
    imagenUrl: git,
    tecUrl: 'https://www.git-scm.com/'
  },
  {
    nombre: "GitHub",
    imagenUrl:  github,
    tecUrl: 'https://github.com/'
  }
];
export const tecnologiasFront : tecnologies[] = [
  {
    nombre: "HTML",
    imagenUrl: html5,
    tecUrl: 'https://developer.mozilla.org/es/docs/Glossary/HTML5'
  },
  {
    nombre: "Tailwind CSS",
    imagenUrl: tailwind,
    tecUrl: 'https://v2.tailwindcss.com/'
  },
  {
    nombre: "CSS",
    imagenUrl: css,
    tecUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    nombre: "JavaScript",
    imagenUrl: javascript,
    tecUrl: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
  },
  {
    nombre: "React",
    imagenUrl: react,
    tecUrl: 'https://legacy.reactjs.org/'
  }
]
export const tecnologiasBack : tecnologies[] = [
  {
    nombre: "Node.js",
    imagenUrl: nodejs,
    tecUrl: 'https://nodejs.org/en'
  },
  {
    nombre: "MySQL",
    imagenUrl: mysql,
    tecUrl: 'https://www.mysql.com/'
  },
]
export const herramientas : tecnologies[] = [
  {
    nombre: "Git",
    imagenUrl: git,
    tecUrl: 'https://www.git-scm.com/'
  },
  {
    nombre: "GitHub",
    imagenUrl:  github,
    tecUrl: 'https://github.com/'
  }
]
type Work = {
  nombre : string,
  url: string,
  imagenUrl: string,
  descripcion:string,
  tecnologias : string[]
}
export const myWork: Work[] = [
  
  {
    nombre: "Travel Journal",
    imagenUrl: travelimg,
    url:'https://aitorz09.github.io/ReactTravelJournal1/',
    descripcion: `Una página web diseñada para simular una red social, permitiendo a los usuarios publicar posts que incluyen imágenes. Estos posts pueden ser votados y comentados por usuarios registrados. Además, la aplicación incluye funcionalidad para el registro de nuevos usuarios.
    La aplicación se conecta a una API desarrollada con Node.js utilizando Express como framework y MySQL como base de datos para almacenar y gestionar la información de los usuarios, posts, votos y comentarios.`,
    tecnologias: [react,javascript,css,html5,mysql,nodejs]
  },
  {
    nombre: "API Travel Journal",
    imagenUrl: travelbackimg,
    url:'https://aithorapps.com',
    descripcion: 'Una API creada durante el bootcamp realizado en Hack a Boss, en esta API hemos integrado una gran mayorica de los conocimientos que hemos ido aprendiendo hasta el momento.',
    tecnologias: [javascript,mysql,nodejs]
  },
  {
    nombre: "ThorType",
    url:'https://aitorz09.github.io/ThorType/',
    imagenUrl: Thortype,
    descripcion: 'Una pequeña aplicación para practicar mecanografía basada en código. La aplicación cuenta con un temporizador y un contador de palabras. Además, el usuario puede elegir el nivel de dificultad. Inspirado en MonkeyType.',
    tecnologias: [react,javascript,css,html5]
  },
  {
    nombre: "Country Page",
    imagenUrl: Country,
    url:'https://aitorz09.github.io/RestCountryApi/',
    descripcion: 'Una aplicación que muestra información sobre todos los países del mundo. El usuario puede buscar un país por nombre, ver información detallada sobre un país y ver los países fronterizos. La aplicación consume una API externa.',
    tecnologias: [react,javascript,css,html5]
  },
  {
    nombre: "Parejas de emojis",
    imagenUrl: emojis,
    url:'https://aitorz09.github.io/Proyecto-Memory/',
    descripcion: 'Un juego de memoria en el que el usuario debe encontrar todas las parejas de emojis con el menor intento de errores posibles. Inspirado en el juego de memoria clasico y elaborado durante el BootCamp de Hack a Boss.',
    tecnologias: [javascript,css,html5,git,github]
  }
]
export const cursos: curso[]=[
  {
    name:'Bootcamp HackABoss',
    descripcion:`Durante el bootcamp de Hack a Boss, me enfrenté a un desafío constante que abarcó una amplia gama de tecnologías y herramientas. A lo largo de estos 6 meses intensivos, adquirí conocimientos y habilidades en desarrollo web tanto en el front-end como en el back-end. En la parte del Front-End aprendimos HTML 5, CSS, JavaScript y React y por la parte del Back-End aprendimos Node.js con Express y MySQL, también aprendimos a crear un API desde cero con un front echo con React, fué una experiencia increible que nos ayudo a acoplar todos los conocimientos aprendidos en uno.`,
    cursoImg:[img1],
    tecnologias:[javascript,git,html5,css,react,nodejs,mysql],
    duracion:'16 Semanas'
  },
  {
    name:'Introduccion Php',
    descripcion:'En este curso hemos visto como conectarse con XAAMP, conectar MYSQL y Apache y la implementacion basica de Php asi como las variables, metodos nativos de Php, PSR, arrays, objetos... ',
    cursoImg:[phpimg],
    tecnologias:[php,mysql],
    duracion:'24 Horas.'
  },
  {
    name:'TypeScript',
    descripcion:'Este curso de typescript ha sido bastante interesante ya que hasta ahora solo habia aprendido JavaScript asi como un lenguaje de tipado debil, y viendo las ventajas que te ofrece Typescript con sus normas de tipado hace que los errores se corrigan mucho antes y hace tu codigo muchas mas limpio y legible.',
    cursoImg:[tsimg],
    tecnologias:[typescript],
    duracion:'12 Horas.'
  },
  // {
  //   name:'TailWind CSS',
  //   descripcion:'En este curso de Tailwind CSS hemos visto el potencial de Tailwind al completo, hemos visto que con mucho menos trabajo podemos conseguir diseños magnificos en muy poco tiempo, tiene sus pros y sus contras ya que alomejor el manteniemiento de Tailwind en un proyecto muy grande puede ser mas lento y costoso, pero creo que con una buena linea de trabajo se puede llevar a cualquier nivel y su potencial es inmenso, aparte de la documentacion oficial de Tailwind es increible.',
  //   cursoImg:[tsimg],
  //   tecnologias:[tailwind],
  //   duracion:'12 Horas.'
  // }
]