import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react' 
import emailjs from 'emailjs-com'

const Contact = () => { 
    const form =useRef();
    const sendEmail = (e) => {
      console.log('BDSLKDJF')
        e.preventDefault();
        // emailjs.sendForm('service_v9u43ar', 'template_700hi4o', form.current, '');
      e.target.reset();
    };

return (
  <section id='Contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
    <div className="contact_options">
      <article className="contact_option">
      <MdOutlineEmail className='contact_option-icon'/>
      <h4>Email</h4>
      <h5>bibhude2@gmail.com</h5>
      <a href="mailTo:bibhude2@gmail.com" target="_blank">Send a massage</a>
      </article>
      <article className="contact_option">
      <BsMessenger className='contact_option-icon'/>
      <h4>Messenger</h4>
      <h5>bibhude</h5>
      <a href="https://m.me/bibhu.dey.98" target="_blank">Send a massage</a>
      </article>
      <article className="contact_option">
      <BsWhatsapp className='contact_option-icon'/>
      <h4>Whatsapp</h4>
      <h5>+918918841797</h5>
      <a href="https://api.whatsapp.com/send?phone+918918841797" target="_blank">Send a massage</a>
      </article>
    </div>
    {/* END OF CONTACT OPTIONS */}
    <from ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required /> 
      <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
      <button type='submit' className = 'btn btn-primary'>Send Message</button>
    </from>
 </div>
</section>
  )
}

export default Contact