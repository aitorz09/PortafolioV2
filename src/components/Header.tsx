import  { useState } from 'react'
import { DropDown } from './DropDown'



export const Header  = () => {
  const [dropped,setDropped] = useState(false)

  function handleClick () {
    setDropped(!dropped)
  }
  return (
    <header className='flex items-center justify-between'>
        <h1 className=' text-3xl'>AiThor</h1>
         <nav>
          <ul className=' hidden  sm:flex gap-4 '>
            <li className='relative'><a className='link' href='#home'>Home</a></li>
            <li className='relative'><a className='link' href='#proyectos'>Proyectos</a></li>
            <li className='relative'><a className='link' href='#cursos'>Cursos</a></li>
            <li className='relative'><a className='link' href='#contactme'>Contactame</a></li>
          </ul>
        </nav>  
        <DropDown className={dropped ? `custom:hidden flex flex-col border p-2  absolute right-5 top-16 ` : 'hidden'}/>
        <svg onClick={handleClick} className=' cursor-pointer sm:hidden text-3xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#0891b2" d="M17 4H3v2h14zm-4 7H3v2h10zm4 7H3v2h14zm5.01-9.186L20.596 7.4L16 11.996l4.596 4.596l1.414-1.414l-3.182-3.182z"/></svg>      
      </header>
  )
}
