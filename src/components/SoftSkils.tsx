import { tecnologiasFront,tecnologiasBack,herramientas} from '../data/data.tsx'
import { Link } from 'react-router-dom'

export const SoftSkils = () => {
  type tec = {
    nombre : string,
    imagenUrl : string,
    tecUrl : string
  }
  return (
    <section className='hidden  min-w-min-w-600px m-auto gap-4 custom:grid grid-rows-3 grid-cols-2 grid-rows-grid-row-1f5fr'>
        <h3 className=' row-span-1 col-span-2 text-3xl  text-center'>Soft Skills</h3>
        <div className=' relative p-4 row-span-2 border dark:border-white border-bright-gray-600 flex-col flex justify-around rounded-br-3xl rounded-tl-3xl'>
          <h4 className='absolute  -top-4  bg-slate-200 dark:bg-bright-gray-600 p-1'>Tecnologias Front</h4>
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
        <div className='relative p-4  border  dark:border-white border-bright-gray-600 rounded-bl-3xl rounded-tr-3xl'>
          <h4 className='absolute -top-4 bg-slate-200 dark:bg-bright-gray-600 p-1'>Tecnologias Back</h4>
          <ul className='flex flex-col gap-4 mt-4'>
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
        <div className='relative p-4  border  dark:border-white border-bright-gray-600 rounded-bl-3xl rounded-tr-3xl'>
          <h4 className='absolute  -top-4 bg-slate-200 dark:bg-bright-gray-600 p-1'>Herramientas web</h4>
          <ul className='flex flex-col gap-4 mt-4'>
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
        {/* <ul className='flex justify-around items-center cursor-pointer'>
          {
            tecnologias.map((tec : tec,index : number)  =>{
              return (
                <li key={index}>
                  <Link target='_blank' to={tec.tecUrl}><img className='w-8 max-w-8' src={tec.imagenUrl} alt={`Una imagen de ${tec.nombre}`} /></Link>
                </li>
              )
            })
          }
        </ul> */}
      </section>
  )
}
