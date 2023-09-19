import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
<div className='contact-container'>
      <div className="contact-info">
        <p>If you'd like to get in touch with me, feel free to use the following contact information:</p>

        <ul>
          <li>Email: karthik00832@gmail.com</li>
          <li>Phone: 6379991846</li>
          <li>Address: #2/68-1, Pattithevanpatti, Thoothukudi-628904</li>
        </ul>
      </div>

      <div className="contact-form">
        <h3>Send me a message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name" className='pe-2'>Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
<br/>
          <div className="form-group">
            <label htmlFor="email" className='pe-2'>Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
<br/>
          <div className="form-group bg-dark p">
            <label htmlFor="message" className='bg-light'>Message</label>
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          </div>
<br/>
          <button type="submit">Send Message</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default ContactPage;
