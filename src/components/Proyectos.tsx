import { Link } from 'react-router-dom'
import {myWork } from '../data/data.tsx'


export const Proyectos = () => {
  type work = {
    nombre : string,
    url: string,
    imagenUrl: string,
    descripcion:string,
    tecnologias : string[]
  }
  return (
    <section id='proyectos' className='relative'>
    {/* <svg className='absolute top-1/2 -right-10' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
    <svg className='absolute top-1/2 -left-10' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.8 13H15q.425 0 .713-.288T16 12t-.288-.712T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275t.275-.7t-.275-.7zm.2 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg> */}
      <h3 className=' my-10 text-center text-3xl'>Proyectos</h3>
      <ul className='flex flex-col gap-10'>
        {
          myWork.map((work:work,index : number)=>{
            return(
              <>
              <span className='relative w-fit'><Link to={work.url} target='_blank' className='link text-2xl'>{work.nombre}</Link></span>
              <li className='flex flex-col justify-center place-items-center custom:flex-row gap-4 ' key={index}>
                 <Link className='w-2/3 custom:w-1/3' to={work.url}><img className=' border rounded-br-3xl rounded-tl-3xl' src={work.imagenUrl} alt={`Una imagen de mi proyecto ${work.nombre}`} /></Link> 
                  <p className='text-md max-w-80 custom:text-md text-center custom:w-1/2'>{work.descripcion}</p>
                  <div className=' relative max-w-52 grid grid-cols-2  dark:border-white border-bright-gray-600 gap 1rem grid-rows-grid-cuadrado gap-2 p-4 place-items-center  border rounded-bl-3xl rounded-tr-3xl w-1/3'>
                    <p className='absolute text-md text-nowrap -top-4   bg-slate-200 dark:bg-bright-gray-600 p-1'>Tecnologias usadas</p>
                    {
                      work.tecnologias.map((tec : string,index:number)=>{
                        return (<img className='w-6 max-w-6 ' key={index} src={tec} alt="" />)
                      })
                    }
                  </div>
              </li>
              </>
            )
          })
        }
      </ul>
    </section>
  )
}
