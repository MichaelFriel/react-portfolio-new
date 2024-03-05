import React from 'react'

const ContactMe = () => {
  return (
    <section id="about-contact-me" className="bg-dark">

  <div className="container my-5">
    <div className="row my-3 justify-content-around py-5">
      <div className="col-12 col-lg-8 text-light">
        <h2>About Me</h2>
        <p>Hi there! I'm currently navigating the world of digital project management as a Digital Delivery Manager. My role involves a lot of coordination, problem-solving, and ensuring that everything we deliver is up to scratch. I've learned a lot about teamwork and the importance of keeping up with the ever-changing digital landscape. I'm proud of the work I do, but am always looking for ways to improve and make more of a difference...
          <br/><br/>
        I've got my sights set on branching out into Front End Development. I'm intrigued by the creativity and technical skill it requires to make websites not just functional, but also visually appealing and user-friendly. It's a journey I'm just beginning, and I'm eager to get my hands dirty with coding and designing. When I'm not wrapped up in the digital world, you'll probably find me lost in music. My playlist is a mix of grunge, post-hardcore, and folk – a little bit of everything, really. Music is my way of unwinding and finding new inspiration. It's a big part of who I am and, in a way, influences how I approach my work – with passion and an open mind.</p>
      </div>

      <div className="col-12 col-lg-3 text-light border border-light border-3 py-3">
        <h2>Contact Me</h2>
        <p>If you have any opportunities which would help me grow my portfolio, it would be great to hear from you!</p>
        <div className="d-flex justify-content-around">
          <a className="m-3" target="_blank" href="https://www.linkedin.com/in/michael-friel-b44b8799/"><img src="Images/linkedin.png" alt="LinkedIn Icon" /></a> 
          <a className="m-3" target="_blank" href="tel:+07951470028"><img src="Images/phone-call.png" alt="Phone Icon" /></a> 
          <a className="m-3" target="_blank" href="mailto:mikefriel92@hotmail.com"><img src="Images/email.png" alt="Email Icon" /></a> 
        </div>
        <p>Or if you want to listen to some grunge...</p>
        <div className="text-center">
          <a className="mx-3" target="_blank" href="https://open.spotify.com/user/1167462053?si=ae6f453f28744c0c"><img src="Images/spotify.png" alt="Spotify Icon" /></a> 
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default ContactMe