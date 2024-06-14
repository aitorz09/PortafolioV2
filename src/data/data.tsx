import html5 from '../assets/html5.svg'
import css from '../assets/css.svg'
import facebook from '../assets/facebook.svg'
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
type tecnologies ={
  nombre : string,
  imagenUrl : string,
  tecUrl : string,
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