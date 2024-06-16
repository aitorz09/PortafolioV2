



import { AboutMe } from './AboutMe.tsx'
import { SoftSkils } from './SoftSkils.tsx'
import { Proyectos } from './Proyectos.tsx'
import { Cursos } from './Cursos.tsx'

export const Main = () => {
 
  return (
    <main id='main' className='flex flex-col gap-14 place-items-center'>
      <a href="#home"><svg className='fixed text-2xl right-1 custom:right-10 top-2/4' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16h2v-4.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6zm1 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg></a>
    <AboutMe/>
    <SoftSkils/> 
    <Proyectos/>
    <Cursos/>
       <section id='contactme' className= ' min-w-min-w-350px custom:min-w-min-w-600px'>
        <h3 className='my-10 text-3xl'>Contacta-me</h3>
        <h3 className='text-3xl'>My info</h3>
        <p>Email: <span className=''>pqpiacarreras@gmail.com</span></p>
        <p>Phone Number: <span className='t'>+34652157195</span></p>
    <form className='flex flex-col gap-2 '>                   
      <label  id='name' htmlFor="name" >Name</label>  
      <input className='w-1/3 text-bright-gray-700 '  type="text" id="name" name="name" required placeholder='Aitor Carreras' />
      <label id='email' htmlFor="email">Email</label>
      <input className='w-1/2 text-bright-gray-700'  type="email" id="email" name="email" required placeholder='pqpiacarreras@gmail.com' />  
      <label htmlFor="message">Message</label>
      <textarea className='form-input text-bright-gray-700' rows={10} id="message" name="message" required placeholder='Hola me gustaria contactar contigo para...'></textarea>
      
      <div >
          <button className='form-btn' >Send</button>
        <button className='form-btn' type="reset">Clear</button>
      </div>
    </form>
      </section> 
      {/* <ContactMe/> */}
      <hr />
    </main>
  )
}
