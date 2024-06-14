import { Link } from 'react-router-dom'
import './App.css'
import aitorimg from './assets/Aitor.png'
import aitorimg2 from './assets/1718365327416 (1).jpg'
import img1 from './assets/1.png'
import { tecnologiasFront,tecnologiasBack,herramientas, myWork } from './data/data.tsx'
function App() {

console.log(myWork);
type tec = {
  nombre : string,
  imagenUrl : string,
  tecUrl : string
}
type work = {
  nombre : string,
  url: string,
  imagenUrl: string,
  descripcion:string,
  tecnologias : string[]
}
  return (
    <>
      <header className='flex items-center justify-between'>
        <h1 className=' text-3xl'>AiThor</h1>
         <nav>
          <ul className=' hidden  sm:flex gap-2 '>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/proyectos'>Proyectos</Link></li>
            <li><Link to='/cursos'>Cursos</Link></li>
            <li><Link to='/contact-me'>Contactame</Link></li>
          </ul>
        </nav> 
        <svg className=' sm:hidden text-3xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#0891b2" d="M17 4H3v2h14zm-4 7H3v2h10zm4 7H3v2h14zm5.01-9.186L20.596 7.4L16 11.996l4.596 4.596l1.414-1.414l-3.182-3.182z"/></svg>      
      </header>
      <main className='flex flex-col gap-14'>
      <section className="flex gap-6 flex-col custom:flex-row place-content-center mt-10 ">
          <div className='  flex flex-col m-auto justify-around gap-4 w-3/4'>
            <h2 className=' text-4xl'>Full Stack Junior Developer</h2>
            <p>Hola, me llamo Aitor Carreras, y me encanta desarollaor aplicaciones web interactivas, con 1 año de experiencia
              en este sector me enorgulleze decir que estoy apasionado por ello y me encanta el trabajo que se puede lograr a hacer.
            </p>
          </div>
          <div className='m-auto'>
           <img className='max-h-80 rounded-br-3xl rounded-tl-3xl' src={aitorimg2} alt="Una imagen mia." />
          </div>
        </section>
        <section className=' gap-4 grid grid-rows-3 grid-cols-2 grid-rows-grid-row-1f5fr'>
          <h3 className=' row-span-1 col-span-2  text-center'>Soft Skills</h3>
          <div className=' relative p-4 row-span-2 border flex-col flex justify-around rounded-br-3xl rounded-tl-3xl'>
            <h4 className='absolute  -top-4 bg-bright-gray-600 p-1'>Tecnologias Front</h4>
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
            <h4 className='absolute  -top-4 bg-bright-gray-600 p-1'>Tecnologias Back</h4>
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
        <section>
          <ul className='flex justify-between'>
            <li>
              <p>Experiencia <span className='block text-center'>+1 año</span></p>
            </li>
            <li>
              <p>Proyectos <span className='block text-center'>4</span></p>
            </li>
            <li>
              <p>Cursos realizados <span className='block text-center'>3</span></p>
            </li>
            
          </ul>
        </section>
        <section className='relative'>
        {/* <svg className='absolute top-1/2 -right-10' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
        <svg className='absolute top-1/2 -left-10' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.8 13H15q.425 0 .713-.288T16 12t-.288-.712T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275t.275-.7t-.275-.7zm.2 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg> */}
          <h3 className=' my-10 text-center'>Proyectos</h3>
          <ul className='flex flex-col gap-10'>
            {
              myWork.map((work:work,index : number)=>{
                return(
                  <li className='flex gap-4 ' key={index}>
                      <img className=' w-1/3' src={work.imagenUrl} alt={`Una imagen de mi proyecto ${work.nombre}`} />
                      <p className='text-sm w-1/2'>{work.descripcion}</p>
                        
                      <div className=' relative grid grid-cols-2 gap 1rem grid-rows-grid-cuadrado gap-2 p-4 place-items-center  border rounded-br-3xl rounded-tl-3xl w-1/3'>
                        <p className='absolute text-sm  -top-4 bg-bright-gray-600 p-1'>Tecnologias usadas</p>
                        {
                          work.tecnologias.map((tec : string,index:number)=>{
                            return (<img className='w-6 max-w-6' key={index} src={tec} alt="" />)
                          })
                        }
                      </div>
                  </li>
                )
              })
            }
          </ul>
        </section>
        <section>
          <h3 className='text-center my-10'>Cursos Realizados</h3>
          <article className=''>
              <h4>Bootcamp FullStack : Hack a Boss</h4>
            <div className='flex'>
              <p className=' w-2/3 my-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur obcaecati eaque non reprehenderit quae! Excepturi magni tempore quo illo ullam impedit in possimus incidunt mollitia dicta adipisci laborum, velit architecto!</p>
              <img className='w-1/3' src={img1} alt="" />
            </div>
          </article>
          <article className=''>
              <h4>Bootcamp FullStack : Hack a Boss</h4>
            <div className='flex'>
              <p className=' w-2/3 my-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur obcaecati eaque non reprehenderit quae! Excepturi magni tempore quo illo ullam impedit in possimus incidunt mollitia dicta adipisci laborum, velit architecto!</p>
              <img className='w-1/3' src={img1} alt="" />
            </div>
          </article>
          <article className=''>
              <h4>Bootcamp FullStack : Hack a Boss</h4>
            <div className='flex'>
              <p className=' w-2/3 my-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur obcaecati eaque non reprehenderit quae! Excepturi magni tempore quo illo ullam impedit in possimus incidunt mollitia dicta adipisci laborum, velit architecto!</p>
              <img className='w-1/3' src={img1} alt="" />
            </div>
          </article>
        </section>
        <section>
          <h3 className='text-center my-10'>Contacta-me</h3>
          <h3 className=''>My info</h3>
          <p>Email: <span className=''>pqpiacarreras@gmail.com</span></p>
          <p>Phone Number: <span className='t'>+34652157195</span></p>
      <form className='flex flex-col gap-2 '>                   
        <label  id='name' htmlFor="name" >Name</label>  
        <input className='w-1/3 text-bright-gray-700 '  type="text" id="name" name="name" required placeholder='Aitor Carreras' />
        <label id='email' htmlFor="email">Email</label>
        <input className='w-1/2 text-bright-gray-700'  type="email" id="email" name="email" required placeholder='pqpiacarreras@gmail.com' />  
        <label htmlFor="message">Message</label>
        <textarea className='form-input text-bright-gray-700' rows={15} cols={50} id="message" name="message" required placeholder='Hola me gustaria contactar contigo para...'></textarea>
        
        <div >
            <button className='form-btn' >Send</button>
          <button className='form-btn' type="reset">Clear</button>
        </div>
      </form>
        </section>
   
      </main>
      <footer>
        <hr />
      </footer>
      
    </>
  )
}

export default App
