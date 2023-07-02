import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import emailimg from '../../../assets/senmail.png'
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
          <div className='py-20 min-h-screen rounded-xl' id='contactform'>
            {/* <CommonHeading>Contact Form</CommonHeading> */}
            <div className="hero mt-6">
  <div className="hero-content flex-col py-[100px] lg:flex-row bg-white rounded-xl w-full gap-10">
    <div className="text-center lg:text-left text-black rounded-xl">
      <h1 className="text-5xl font-bold text-sky-500 capitalize">Feel free to message</h1>
      <p className="py-6">Do you have any question or query? Please message me<br /> I will try to answer you. Thank you!</p>
      <div className='flex items-center contactImg'>
        <img className='w-96 ' src={emailimg} alt="email template" />
      </div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm ">
      {/* <form action="https://formsubmit.co/54cffcd395c44072d62b9d1725fee82b" method="POST" className="card-body"> */}
      <form ref={form} onSubmit={sendEmail} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='user_name' placeholder="your name" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input required type="email" name='user_email' placeholder="john@gmail.com" className="input input-bordered" />
        </div>

        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input type="text" name='Subject' placeholder="subject" className="input input-bordered" />
        </div> */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea required type="text" name='message' placeholder="type your message here..." className="min-h-[100px] input input-bordered" />
        </div>

        <div className="form-control mt-6">
          <button type='submit' className="btn bg-sky-500 text-white border-none">Submit</button>
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