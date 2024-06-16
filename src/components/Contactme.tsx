import React, { useEffect } from 'react';

import { Toaster, toast } from 'sonner';
import emailJs from 'emailjs-com';

// Tipos personalizados para la función toast.success si sonner no los proporciona
interface Toast {
  success: (message: string) => void;
}

// Asumimos que toast es de tipo Toast
const toastTyped: Toast = toast as Toast;

export const ContactMe: React.FC = () => {
  useEffect(() => {
    emailJs.init('YX4HD6kMy60XgXvhI');
  }, []);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
    emailJs.sendForm('smtp-relay.brevo.com', 'himynamesis', e.target as HTMLFormElement, 'YX4HD6kMy60XgXvhI')
      .then((result) => {
        console.log(result.text);
        if (result.text === 'OK') {
          toastTyped.success('Email sent to pqpiacarreras@gmail.com');
          (e.target as HTMLFormElement).reset();
        }
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contactme' className='min-w-min-w-350px custom:min-w-min-w-600px'>
      <Toaster />
      <section className='my-10 text-3xl'>
        <h3 className='text-3xl'>My info</h3>
        <p>Email: <span className='green-text'>pqpiacarreras@gmail.com</span></p>
        <p>Phone Number: <span className='blue-text'>+34652157195</span></p>
      </section>
      <form className='flex flex-col gap-2' onSubmit={handleForm}>
        <h3 className='yellow-text'>Contact Me</h3>
        <label htmlFor="name">Name</label>
        <input className='w-1/3 text-bright-gray-700' type="text" id="name" name="name" required placeholder='Aitor Carreras' />
        <label htmlFor="email">Email</label>
        <input className='w-1/2 text-bright-gray-700' type="email" id="email" name="email" required placeholder='pqpiacarreras@gmail.com' />
        <label htmlFor="message">Message</label>
        <textarea className='form-input' rows={15} cols={50} id="message" name="message" required placeholder='Hola me gustaria contactar contigo para...'></textarea>
        <div style={{ display: "flex" }}>
          <button className='form-btn' type="submit">Send</button>
          <button className='form-btn' type="reset">Clear</button>
        </div>
      </form>
    </section>
  );
};
