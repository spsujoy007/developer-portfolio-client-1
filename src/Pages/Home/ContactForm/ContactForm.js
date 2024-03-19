import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import emailimg from '../../../assets/contactIconsBg.png'
import './ContactForm.css'
// import { Fade } from 'react-reveal';
import useTitle from '../../../MyHooks/useTitle';
import { toast } from 'react-hot-toast';

const ContactForm = () => {
  useTitle('CONTACT')

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ijk27d4',
      'template_rr7fqek',
      form.current,
      'sfMuH8Z-vjmwzLJP0'
      )
      .then((result) => {
          toast.success('Message sended')
          e.target.reset()
      }, (error) => {
          console.error(error.text);
      });
  };


    return (
        <div >
          <div className='py-20 min-h-screen contactBg ' id='contactform'>
            {/* <CommonHeading>Contact Form</CommonHeading> */}
            <div className="hero mt-6">
  <div className="hero-content flex-col py-[100px] lg:flex-row  rounded-xl w-full gap-10">
    <div className="text-center lg:text-left text-black rounded-xl">
      <h1 className="text-5xl font-bold text-[#e7a242] capitalize">Feel free to message</h1>
      <p className="py-6">Do you have any question or query? Please message me<br /> I will try to answer you. Thank you!</p>
      <div className='flex items-center justify-center contactImg'>
        <img className='md:w-80 w-full' src={emailimg} alt="email template" />
      </div>
    </div>

    <div className="card flex-shrink-0 w-full max-w-sm contactLetter">
      {/* <form action="https://formsubmit.co/54cffcd395c44072d62b9d1725fee82b" method="POST" className="card-body"> */}
      <form ref={form} onSubmit={sendEmail} className="h-[500px] ml-10">
        <div className="pt-[115px] border-b-[1px] w-[90%] border-[#739E47] flex items-center mt-[8px] md:mt-0">
          <span className='font-bold text-[#739E47]'>Name:</span>
          <input type="text" name='user_name' placeholder="type your name" className="  bg-transparent text-[18px] ml-2 border-none outline-none text-[#3E6B7E]" />
        </div>

        <div className="border-b-[1px] w-[90%] border-[#739E47] flex items-center mt-[8px]">
        <span className='font-bold text-[#739E47]'>Email:</span>
          <input required type="email" name='user_email' placeholder="john@gmail.com" className="text-[18px] ml-2 text-[#3E6B7E] bg-transparent border-none outline-none " />
        </div>

        <div className="pt-6">
          <textarea required type="text" name='message' placeholder="type your message here..." className="min-h-[180px] w-[92%]  text-[18px] bg-transparent text-[#3E6B7E] border-none outline-none " />
        </div>

        <div className="w-full mt-6">
          <button type='submit' className="py-3 rounded-md w-[85%] bg-[#5C9F3E] hover:bg-[#b14343] duration-200 text-white border-none">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default ContactForm;