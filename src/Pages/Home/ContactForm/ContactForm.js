import React from 'react';
import CommonHeading from '../../../Components/CommonHeading/CommonHeading';

const ContactForm = () => {
    return (
        <div className='py-20' id='contactform'>
            <CommonHeading>Contact Form</CommonHeading> <hr />
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left text-base-100">
      <h1 className="text-5xl font-bold">Email Me</h1>
      <p className="py-6">Do you have any question to me? You can full free to message me. I will try to answer you. Thank you!</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
          <input type="email" name='Email' placeholder="Email" className="input input-bordered" />
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
          <textarea  type="text" name='Message' placeholder="type your message here..." className="min-h-[100px] input input-bordered" />
        </div>

        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactForm;