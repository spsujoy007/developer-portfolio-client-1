import React from 'react';
import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import emailimg from '../../../assets/senmail.png'
import './ContactForm.css'
import { Fade } from 'react-reveal';

const ContactForm = () => {
    return (
        <Fade bottom>
          <div className='py-20' id='contactform'>
            <CommonHeading>Contact Form</CommonHeading>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row bg-white  w-full gap-10">
    <div className="text-center lg:text-left text-black">
      <h1 className="text-5xl font-bold">Full free to message</h1>
      <p className="py-6">Do you have any question to me? You can full free to message me. <br /> I will try to answer you. Thank you!</p>
      <div className='flex items-center contactImg'>
        <img className='w-96 ' src={emailimg} alt="email template" />
      </div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm ">
      <form action="https://formsubmit.co/54cffcd395c44072d62b9d1725fee82b" method="POST" className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='Name' placeholder="your name" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input required type="email" name='Email' placeholder="Email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input type="text" name='Subject' placeholder="subject" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea required type="text" name='Message' placeholder="type your message here..." className="min-h-[100px] input input-bordered" />
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