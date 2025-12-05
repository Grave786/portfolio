import React from 'react';
import Slider from 'react-slick';
import About from '../components/about';
import Services from '../components/Services';
import Projects from '../components/project';
import Testimonials from '../components/Testinomial';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Hero from '../components/hero';
import ContactForm from '../components/ContactForm';

const Home = () => {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false, // Hide default arrows to focus on dots
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-accent rounded-full mx-1"></div>
    ),
  };

  return (
    <div>
      <section className="mt-16 ">
      <Hero />
      </section>
      {/* About Section */}
      <section >
        <About />
      </section>

      {/* Services Section */}
      <section >
        <Services />
      </section>

      {/* Projects Section */}
      <section >
        <Projects />
      </section>

      {/* Testimonials Section */}
      <section >
        <Testimonials />
      </section>
      <section  id="contact" >
       <ContactForm/>
      </section>
      

    </div>
  );
};

export default Home;


// import React from 'react';
// import About from '../components/about';
// import Services from '../components/Services';
// import Projects from '../components/project';
// import Testimonials from '../components/Testinomial';
// import Hero from '../components/hero';
// import ContactForm from '../components/ContactForm';

// const Home = () => {
//   return (
//     <div className="bg-primary text-light overflow-hidden">

//       {/* HERO SECTION */}
//       <section className="pt-24 pb-20 md:pt-28 md:pb-24">
//         <Hero />
//       </section>

//       {/* ABOUT SECTION */}
//       <section className="py-20 md:py-28">
//         <About />
//       </section>

//       {/* SERVICES SECTION */}
//       <section className="py-20 md:py-28 bg-secondary/20">
//         <Services />
//       </section>

//       {/* PROJECTS SECTION */}
//       <section className="py-20 md:py-28">
//         <Projects />
//       </section>

//       {/* TESTIMONIALS SECTION */}
//       <section className="py-20 md:py-28 bg-secondary/20">
//         <Testimonials />
//       </section>

//       {/* CONTACT FORM SECTION */}
//       <section className="py-20 md:py-28">
//         <ContactForm />
//       </section>

//     </div>
//   );
// };

// export default Home;
