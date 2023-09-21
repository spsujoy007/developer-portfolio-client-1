import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import emailimg from '../../../assets/contactIconsBg.png'
import './ContactForm.css'
import { Fade } from 'react-reveal';
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
        <Fade bottom>
          <div className='py-20 min-h-screen rounded-xl contactBg shadow-xl' id='contactform'>
            {/* <CommonHeading>Contact Form</CommonHeading> */}
            <div className="hero mt-6">
  <div className="hero-content flex-col py-[100px] lg:flex-row  rounded-xl w-full gap-10">
    <div className="text-center lg:text-left text-black rounded-xl">
      <h1 className="text-5xl font-bold text-[#ffbc5e] capitalize">Feel free to message</h1>
      <p className="py-6">Do you have any question or query? Please message me<br /> I will try to answer you. Thank you!</p>
      <div className='flex items-center justify-center contactImg'>
        <img className='w-80' src={emailimg} alt="email template" />
      </div>
    </div>

    <div className="card flex-shrink-0 w-full max-w-sm contactLetter">
      {/* <form action="https://formsubmit.co/54cffcd395c44072d62b9d1725fee82b" method="POST" className="card-body"> */}
      <form ref={form} onSubmit={sendEmail} className="h-[500px] ml-14">
        <div className="pt-[115px]">
          <span className='font-bold text-[#739E47]'>Name:</span>
          <input type="text" name='user_name' placeholder="type your name" className="  bg-transparent text-[18px] ml-2 border-none outline-none text-[#3E6B7E]" />
        </div>

        <div className="-mt-1">
        <span className='font-bold text-[#739E47]'>Email:</span>
          <input required type="email" name='user_email' placeholder="john@gmail.com" className="text-[18px] ml-2 text-[#3E6B7E] bg-transparent border-none outline-none " />
        </div>

        <div className="pt-6">
          <textarea required type="text" name='message' placeholder="type your message here..." className="min-h-[180px] w-[92%]  text-[18px] bg-transparent border-none outline-none " />
        </div>

        <div className="w-full mt-6">
          <button type='submit' className="btn w-[85%] bg-[#9c3130] text-white border-none">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
        </Fade>
    );
};

export default ContactForm;