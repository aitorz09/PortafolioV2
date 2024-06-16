
import aitorimg2 from '../assets/1718365327416 (1).jpg'
import { tecnologiasFront,tecnologiasBack,herramientas} from '../data/data.tsx'
import { Link, NavLink } from 'react-router-dom'
import { TimeLine } from './TimeLine.tsx'

export const AboutMe = () => {
  type tec = {
    nombre : string,
    imagenUrl : string,
    tecUrl : string
  }
  return (
    <section id='home' className=" flex gap-6 flex-col custom:flex-row place-content-center mt-10 ">
        <div className='  max-w-2xl flex flex-col m-auto max-w justify-around gap-4 w-3/4'>
          <h2 className=' text-5xl'>Full Stack Junior Developer</h2>
          <p className=' text-lg font-dosis custom:w-2/3'>¡Hola! Soy Aitor Carreras, un apasionado desarrollador de aplicaciones web interactivas con un año de experiencia en el sector. Mi entusiasmo por el desarrollo web me impulsa a crear aplicaciones innovadoras y funcionales. Me enorgullece el trabajo que he realizado y estoy siempre en busca de nuevos desafíos y oportunidades para mejorar mis habilidades.
          </p>
    <TimeLine/>
        </div>
        <div className='m-auto'>
         <img className='max-h-80 rounded-br-3xl rounded-tl-3xl' src={aitorimg2} alt="Una imagen mia." />
         <ul className="flex justify-between p-3">
             <li className='relative'><NavLink className="link" target='_blank' to={'https://github.com/aitorz09'}>GitHub</NavLink></li> 
              <li className='relative'><NavLink className="link" target='_blank' to={'https://www.linkedin.com/in/aitor-carreras/'}>Linkedin</NavLink></li>
              <li className='relative'><NavLink className="link" target='_blank' download to="https://drive.google.com/file/d/1ywjS5I0jA3avQAA1oXVGYX0nzheSzv01/view?usp=drive_link">CV</NavLink></li>
            </ul>
        </div>
        <section className='custom:hidden m-auto gap-4 grid grid-rows-3 grid-cols-2 grid-rows-grid-row-1f5fr'>
        <h3 className=' row-span-1 col-span-2 text-center'>Soft Skills</h3>
        <div className=' relative p-4 row-span-2 border flex-col flex justify-around rounded-br-3xl rounded-tl-3xl'>
          <h4 className='absolute  -top-4 bg-bright-gray-600 p-1'>Tecnologías Front</h4>
          <ul className='flex flex-col gap-4'>
          {
          tecnologiasFront.map((tec : tec,index : number)  =>{
              return (
                <li className='flex gap-2' key={index}>
                  
                  <Link target='_blank' to={tec.tecUrl}><img className='w-8 max-w-8' src={tec.imagenUrl} alt={`Una imagen de ${tec.nombre}`} /></Link>
                  <p>{tec.nombre}</p>
                </li>
              )
            })
            }
          </ul>
        </div>
        <div className='relative p-4  border rounded-br-3xl rounded-tl-3xl'>
          <h4 className='absolute  -top-4 bg-bright-gray-600 p-1'>Tecnologías Back</h4>
          <ul className='flex flex-col gap-4'>
          {
          tecnologiasBack.map((tec : tec,index : number)  =>{
              return (
                <li className='flex gap-2' key={index}>
                  
                  <Link target='_blank' to={tec.tecUrl}><img className='w-8 max-w-8' src={tec.imagenUrl} alt={`Una imagen de ${tec.nombre}`} /></Link>
                  <p>{tec.nombre}</p>
                </li>
              )
            })
            }
          </ul>
        </div>
        <div className='relative p-4  border rounded-br-3xl rounded-tl-3xl'>
          <h4 className='absolute  -top-4 bg-bright-gray-600 p-1'>Herramientas web</h4>
          <ul className='flex flex-col gap-4'>
          {
          herramientas.map((tec : tec,index : number)  =>{
              return (
                <li className='flex gap-2' key={index}>
                  
                  <Link target='_blank' to={tec.tecUrl}><img className='w-8 max-w-8' src={tec.imagenUrl} alt={`Una imagen de ${tec.nombre}`} /></Link>
                  <p>{tec.nombre}</p>
                </li>
              )
            })
            }
          </ul>
        </div>
      </section>
      </section>
  )
}
