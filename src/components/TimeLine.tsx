
import {myWork,cursos } from '../data/data.tsx'

export const TimeLine = () => {
  return (
    <section className='text-md'>
    <ul className='flex justify-between w-3/4'>
      <li>
        <p>Experiencia <span className='block text-center  text-gray-800 dark:text-slate-300'>+1 año</span></p>
      </li>
      <li>
        <p>Proyectos <span className='block text-center  text-gray-800 dark:text-slate-300'>{myWork.length}</span></p>
      </li>
      <li>
        <p>Cursos realizados <span className='block text-center  text-gray-800 dark:text-slate-300'>{cursos.length}</span></p>
      </li>
      
    </ul>
  </section>
  )
}
