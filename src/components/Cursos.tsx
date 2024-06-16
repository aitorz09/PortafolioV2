
import { cursos } from '../data/data.tsx'
export const Cursos = () => {
  type curso = {
    name: string,
    descripcion:string,
    cursoImg:string[],
    tecnologias:string[],
    duracion:string
  }
  return (
    <section id='cursos' className='flex flex-col place-items-center gap-10 '>
    <h3 className='text-center my-10 text-3xl'>Cursos Realizados</h3>
    {
      cursos.map((curso:curso,index:number)=>{
        return (
          <article key={index} className=''>
        <h4 className='text-xl font-medium'>{curso.name}</h4>
        <p className=' text-gray-800 dark:text-slate-300'>Duracion : {curso.duracion}</p>
      <div className='flex flex-col place-items-center custom:flex-row custom:m-auto gap-10'>
        <p className=' w-2/3 my-10 max-w-lg'>{curso.descripcion}</p>
        {
          curso.cursoImg.map((img:string,index:number)=>{
            return (
              <img className=' max-h-80 max-w-80' key={index} src={img} alt="" />
            )
          })
        }
      </div>
    </article>
        )
      })
    }
    
  </section>
  )
}
