// import React from 'react';
import ArtisanProfile from '@/components/about/ArtisanProfile';

// const Artisans = () => {
//   const artisans = [
//     {
//       name: 'JODU CHITRAKAR',
//       image: '/lovable-uploads/c4b4b02c-0dc6-499d-8732-f11ff546d9ea.png',
//       description: 'Jodu Chitrakar is a master Paitkar artist with over 40 years of experience. Born in Amadubi village, he learned the art form from his father at a young age and has since become one of the most respected practitioners of this traditional craft in Jharkhand.',
//     },
//     {
//       name: 'SANJAY CHITRAKAR',
//       image: '/lovable-uploads/2fdf3a0c-2776-44a8-9351-19d5645cb6fb.png',
//       description: 'Sanjay Chitrakar represents the younger generation of Paitkar artists. Blending traditional techniques with contemporary themes, he has helped evolve the art form while maintaining its cultural essence. His works have been exhibited in major cities across India.',
//     },
//     {
//       name: 'MANJU DEVI',
//       image: '/lovable-uploads/b7089c17-3273-4d1d-80ec-79b809e7ecec.png',
//       description: 'Manju Devi is known for her intricate detailing and vibrant color palette. As one of the few women traditional Paitkar artists, she has broken barriers in a traditionally male-dominated art form and mentors young girls from her village in the craft.',
//     },
//     {
//       name: 'RAVI CHITRAKAR',
//       image: '/lovable-uploads/79085d76-3d10-4ca0-8991-1c88556fff15.png',
//       description: 'Ravi Chitrakar specializes in large-format Paitkar scrolls that tell complex mythological narratives. His work is characterized by a dynamic composition style and meticulous attention to narrative continuity across the scroll.',
//     },
//     {
//       name: 'MEENA CHITRAKAR',
//       image: '/lovable-uploads/88bc88e5-d777-4e55-aab2-be6584304d36.png',
//       description: 'Meena Chitrakar has been practicing Paitkar art for over two decades. Her specialty lies in depicting scenes from tribal folklore, blending traditional Paitkar techniques with stories specific to the indigenous communities of Jharkhand.',
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h1 className="text-3xl font-bold text-center mb-16">MEET THE MAKERS</h1>
      
//       <div className="mb-12">
//         <p className="text-lg text-center max-w-3xl mx-auto">
//           Immerse yourself in the rich tapestry of heritage and storytelling, where every stroke of paitkar art weaves a legacy of culture, tradition, and timeless craftsmanship.
//         </p>
//       </div>
      
//       <div className="max-w-4xl mx-auto">
//         {artisans.map((artisan, index) => (
//           <ArtisanProfile 
//             key={index}
//             name={artisan.name}
//             image={artisan.image}
//             description={artisan.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Artisans;
// import React from 'react';

import { Link } from 'react-router-dom';

import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Artisans = () => {

  // Fade-in animation variant
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Text reveal animation variant
  const textReveal = {
    hidden: { opacity: 0, y: 15 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Scroll trigger effect
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.85;
        
        if (isVisible) {
          el.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on mount
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);


  const artisans = [
    {
      name: 'ANIL CHITRAKAR',
      image: 'lovable-uploads/anil.png',
      image2:'/lovable-uploads/anil2.png',
      description: 'Amadobi has many Paitkar artists and at 71, Anil Chitrakar is the oldest painter in the village. " In each of my paintings, there is a song. And we sing that song," explains Anil. Showing us a scroll painting of Karma dance at a major Santhali festival he adds, "Once a story comes to mind, we paint it. The most important thing is to write the song, then make a painting, and finally sing it to people."',
    },
    {
      name: 'ANJANA PATEKAR',
      image: '/lovable-uploads/anjana.png',
      image2:'/lovable-uploads/anjana2.png',
      description: 'A resilient housewife and dedicated Paitkar artist who has been working in the art form since childhood. Despite frequent conflicts and lack of support from her husband, she remains unwavering in her passion for painting. Growing up in a family of Paitkar artists, she honed her skills from a young age, and her deeprooted love for the craft has fueled her perseverance. Balancing household responsibilities with her artistic pursuits, she continues to create beautiful and emotive scroll paintings, contributing to the preservation of Paitkar art and inspiring other women facing similar challenges.',
    },
    {
      name: 'VIJAY CHITRAKAR',
      image: '/lovable-uploads/vijay.png',
      image2:'/lovable-uploads/vijay2.png',
      description: 'Vijay, 41, lives in Amadobi village in Purbi Singhbhum district of Jharkhand. He says Paitkar paintings are based on local Santhali stories, rural lifestyles, nature and mythology. "Our main theme is rural culture; the things we see around us, we depict in our art," says Vijay who has been making Paitkar paintings since he was 10 years old. "Karma dance, Baha dance, or a painting of the Ramayana, Mahabharata, a village scene..." He spells out the different parts to a Santhali painting, "It shows women doing household chores, men in the fields with bullocks, and birds in the sky."',
    },
    {
      name: 'MONI',
      image: '/lovable-uploads/moni.png',
      image2:'/lovable-uploads/moni2.png',
      description: 'A dedicated housewife and talented Paitkar artist, has deep roots in the world of Paitkar painting, coming from a family of skilled artisans. Her journey began as a child, learning the craft from her family before receiving formal training at Kalamandir. Although she does not have an artisan card, her passion for the art form is evident in her intricate and emotive scroll paintings. Alongside her husband, who is also a Paitkar painter, she continues to contribute to the legacy of Paitkar art, balancing her household responsibilities with her artistic pursuits.',
    },
    {
      name: 'KISHORE GAYAN',
      image: '/lovable-uploads/kishore.png',
      image2:'/lovable-uploads/kishore2.png',
      description: 'Kishore Gayan is a renowned Paitkar artist celebrated for his exceptional skill and innovative interpretations of this traditional art form. With a deep connection to his cultural heritage, Gayans vibrant and intricate scroll paintings have been showcased in numerous national and international exhibitions, earning him widespread acclaim. His work brings ancient folklore and mythological stories to life, captivating audiences with their rich narratives and vivid colors. Gayans contributions have significantly promoted and preserved Paitkar art, establishing him as a leading figure and inspiring a new generation of artists.',
    },
    {
      name: 'POORNIMA GOPEY',
      image: '/lovable-uploads/poornima.png',
      image2:'/lovable-uploads/poornima2.png',
      description: 'A 22-year-old Paitkar artist, has spent a year honing their craft at Kalamandir and now boasts one year of professional experience. Their work vividly captures the essence of traditional Paitkar art, drawing inspiration from Santhal folklore and mythology. With a keen eye for detail and a passion for preserving this ancient art form, has begun to make a name for themselves, showcasing their vibrant scroll paintings at local exhibitions and cultural festivals.',
    },
  ];

  
  return (
    <div className=" text-white" style={{ backgroundColor: 'rgb(88, 80, 77)' }}>
      {/* Hero Section */}
      
      {/* Hero Section with Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-96 bg-origin-contain bg-center overflow-hidden"
        style={{ backgroundImage: 'url("/lovable-uploads/backgrounds/bg1.png")' }}
      >
        <div className="absolute inset-0 bg-ankan-brown opacity-75">
          {/* Subtle background pattern animation */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 20, 
              ease: "linear", 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div 
            className="text-center px-4 py-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: "easeOut"
            }}
          >
            <motion.h1 
              className="text-3xl font-mono mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Split text for staggered animation */}
              {["Immerse yourself in the rich tapestry of heritage and storytelling,",
                "where every stroke of Paitkar art weaves a legacy of culture,",
                "tradition, and timeless craftsmanship"].map((line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + (i * 0.2) }}
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
        </div>
      </motion.div>

      {/* Philosophy Section */}
      <div className="bg-ankan-darkBrown py-16 scroll-animate" style={{ backgroundColor: 'rgb(88, 80, 77)' }}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl font-bold mb-6"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
          >
            At ANKAN, we believe that art is not just an expression, but a legacy.
          </motion.h2>
          
          <motion.p 
            className="mb-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Our platform is dedicated to the timeless beauty of Paitkar art, one of India's oldest scroll painting traditions. 
            Rooted in folklore and mythology, each Paitkar painting is a canvas of storytelling, preserving the cultural soul 
            of Jharkhand through intricate brushstrokes and natural hues. At ANKAN, we bridge tradition with modern appreciation, 
            bringing this exquisite craft to the world.
          </motion.p>
          
          <motion.h3 
            className="text-xl font-bold mb-4"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
          >
            Our Philosophy:
          </motion.h3>
          
          <motion.p 
            className="mb-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            At ANKAN, we honor the artisans who breathe life into every scroll. Their stories, passed down through generations, 
            are not just painted—they are lived. We believe in sustaining this artistic heritage by connecting the world to the 
            hands that craft it. Every piece is a testament to tradition, craftsmanship, and cultural richness, ensuring that 
            Paitkar art continues to thrive.
          </motion.p>
          
          <motion.h3 
            className="text-xl font-bold mb-4"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={3}
          >
            Experience the Art of Storytelling:
          </motion.h3>
          
          <motion.p 
            className="mb-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Explore our curated collection and witness the magic of Paitkar art. Whether as an heirloom, a collector's piece, 
            or a unique decor statement, each artwork is a gateway to India's rich artistic past. Embrace the strokes of history, 
            preserve the legacy, and become part of the ANKAN story—where every scroll tells a tale.
          </motion.p>
        </div>
      </div>

      {/* Amadubi Section */}
      <div className="py-6 h-[680px] scroll-animate" style={{ backgroundColor: 'rgb(88, 80, 77)' }}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            AMADUBI
          </motion.h2>
          
          <motion.div 
            className="mt-4 text-center -translate-y-[100px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img 
              src="lovable-uploads/backgrounds/jharkhand.png" 
              alt="Map of Jharkhand" 
              className="mx-auto w-1/4 h-auto"
              whileHover={{ 
                scale: 1.05,
                filter: "drop-shadow(0 0 12px rgba(255,255,255,0.3))",
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>

          <motion.p 
            className="text-center mx-auto mt-4 -translate-y-[100px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Amadubi, a quaint village in Jharkhand's East Singhbhum district, is the heart of Paitkar art, home to generations 
            of skilled Chitrakar artisans. Known as the land of scroll painters, this culturally rich cluster thrives on 
            storytelling through intricate paintings, using natural dyes and handmade paper. Amidst lush landscapes and tribal 
            heritage, Amadubi stands as a living museum of India's artistic legacy, preserving and promoting Paitkar art against 
            the tides of time.
          </motion.p>
        </div>
      </div>

      {/* Add CSS for scroll animations */}
      <style >{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .scroll-animate.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes textGlow {
          0% { text-shadow: 0 0 10px rgba(255,255,255,0.1); }
          50% { text-shadow: 0 0 15px rgba(255,255,255,0.3); }
          100% { text-shadow: 0 0 10px rgba(255,255,255,0.1); }
        }
        
        h2, h3 {
          animation: textGlow 5s infinite;
        }
      `}</style>


      {/* Meet The Makers */}
      <div className="py-16 container px-0 w-full" style={{ backgroundColor: 'rgb(88, 80, 77)' }}>
        {/* <div className="container  px-0 " > */}
          <h2 className="text-3xl font-bold text-center mb-16">MEET THE MAKERS</h2>
          
          <div className="flex flex-wrap justify-between gap-8 mb-16 p-10">
            {artisans.map((artisan, index) => (
              <div key={index} className="w-40 flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden" style={{ backgroundColor: 'rgb(88, 80, 77)' }}>
                  <img src={artisan.image} alt={artisan.name} />
                </div>
                <p className="mt-4 font-bold text-center">{artisan.name}</p>
              </div>
            ))}
          </div>
          
          {/* Artisan Profiles */}
          <div className="text-justify">
            {/* Anil Chitrakar */}
            <div className="mb-16">
              <div className="flex flex-col items-center md:flex-row bg-[#d6d4cd] text-[#58504D]">
                <div className="w-1/2 h-80 md:h-auto">
                  <img src="/lovable-uploads/anil2.png" alt="ANIL CHITRAKAR" />
                </div>
                <div className="w-full md:w-1/2 p-8 -translate-y-[20px] ">
                  <h3 className="text-xl font-bold mb-4">ANIL CHITRAKAR</h3>
                  <p>Amadobi has many Paitkar artists and at 71, Anil Chitrakar is the oldest painter in the village. " In each of my paintings, there is a song. And we sing that song," explains Anil. Showing us a scroll painting of Karma dance at a major Santhali festival he adds, "Once a story comes to mind, we paint it. The most important thing is to write the song, then make a painting, and finally sing it to people."</p>
                </div>
              </div>
            </div>

            {/* Anjana Patekar */}
            <div className="h-[430px] px-10">
              <div className="flex flex-col md:flex-row-reverse">
                <div className="w-full h-80 md:h-auto translate-x-[100px] -translate-y-40">
                  <img src="/lovable-uploads/anjana2.png" alt="ANJANA PATEKAR" />
                </div>
                <div className="w-full md:w-1/2 h-64 translate-x-[70px]">
                  <h3 className="text-xl font-bold mb-4">ANJANA PATEKAR</h3>
                  <p>A resilient housewife and dedicated Paitkar artist who has been working in the art form since childhood. Despite frequent conflicts and lack of support from her husband, she remains unwavering in her passion for painting. Growing up in a family of Paitkar artists, she honed her skills from a young age, and her deeprooted love for the craft has fueled her perseverance. Balancing household responsibilities with her artistic pursuits, she continues to create beautiful and emotive scroll paintings, contributing to the preservation of Paitkar art and inspiring other women facing similar challenges.</p>
                </div>
              </div>
            </div>

            {/* Vijay Chitrakar */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row bg-[#d6d4cd] text-[#58504D] h-[530px]">
                <div className="w-full h-80 md:h-auto -translate-x-[200px] -translate-y-20">
                  <img src="/lovable-uploads/vijay2.png" alt="VIJAY CHITRAKAR" />
                </div>
                <div className="w-full md:w-1/2 p-8 -translate-x-[100px] translate-y-[50px]">
                  <h3 className="text-xl font-bold mb-4">VIJAY CHITRAKAR</h3>
                  <p>Vijay, 41, lives in Amadobi village in Purbi Singhbhum district of Jharkhand. He says Paitkar paintings are based on local Santhali stories, rural lifestyles, nature and mythology. "Our main theme is rural culture; the things we see around us, we depict in our art," says Vijay who has been making Paitkar paintings since he was 10 years old. "Karma dance, Baha dance, or a painting of the Ramayana, Mahabharata, a village scene..." He spells out the different parts to a Santhali painting, "It shows women doing household chores, men in the fields with bullocks, and birds in the sky."</p>
                </div>
              </div>
            </div>

            {/* Moni */}
            <div className="mb-16 h-[320px]">
              <div className="flex flex-col md:flex-row-reverse">
                <div className="w-full h-80 md:h-auto -translate-y-[230px] ">
                  <img src="/lovable-uploads/moni2.png" alt="MONI"/>
                </div>
                <div className="w-full md:w-1/2 p-8 translate-x-[70px] -translate-y-[50px]">
                  <h3 className="text-xl font-bold mb-4">MONI</h3>
                  <p>A dedicated housewife and talented Paitkar artist, has deep roots in the world of Paitkar painting, coming from a family of skilled artisans. Her journey began as a child, learning the craft from her family before receiving formal training at Kalamandir. Although she does not have an artisan card, her passion for the art form is evident in her intricate and emotive scroll paintings. Alongside her husband, who is also a Paitkar painter, she continues to contribute to the legacy of Paitkar art, balancing her household responsibilities with her artistic pursuits.</p>
                </div>
              </div>
            </div>

            {/* Kishore Gayan */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row bg-[#d6d4cd] text-[#58504D] h-[497px]">
                <div className="w-full h-80 md:h-auto -translate-y-40">
                  <img src="/lovable-uploads/kishore2.png" alt="KISHORE GAYAN" />
                </div>
                <div className="w-full md:w-1/2 p-8 -translate-x-[100px] translate-y-[30px]">
                  <h3 className="text-xl font-bold mb-4">KISHORE GAYAN</h3>
                  <p>Kishore Gayan is a renowned Paitkar artist celebrated for his exceptional skill and innovative interpretations of this traditional art form. With a deep connection to his cultural heritage, Gayans vibrant and intricate scroll paintings have been showcased in numerous national and international exhibitions, earning him widespread acclaim. His work brings ancient folklore and mythological stories to life, captivating audiences with their rich narratives and vivid colors. Gayans contributions have significantly promoted and preserved Paitkar art, establishing him as a leading figure and inspiring a new generation of artists.</p>
                </div>
              </div>
            </div>

            {/* Poornima Gopey */}
            <div className="mb-16 h-[222px]">
              <div className="flex flex-col items-end md:flex-row-reverse">
                <div className="w-full h-[300px] translate-x-[350px] -translate-y-[300px]">
                  <img src="/lovable-uploads/poornima2.png" alt="POORNIMA GOPEY" className='h-[600px]'/>
                </div>
                <div className="w-full md:w-1/2 p-8 translate-x-[70px] -translate-y-[40px]">
                  <h3 className="text-xl font-bold mb-4">POORNIMA GOPEY</h3>
                  <p>A 22-year-old Paitkar artist, has spent a year honing their craft at Kalamandir and now boasts one year of professional experience. Their work vividly captures the essence of traditional Paitkar art, drawing inspiration from Santhal folklore and mythology. With a keen eye for detail and a passion for preserving this ancient art form, has begun to make a name for themselves, showcasing their vibrant scroll paintings at local exhibitions and cultural festivals.</p>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>

      {/* Stay Connected */}
      <div className="bg-[#d6d4cd] text-[#58504D] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">STAY CONNECTED</h2>
          <p className="mb-8">Follow us on our social media accounts to get even more fragrant content</p>
          
          <div className="flex justify-center gap-8">
            <Link to="#" className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <Facebook size={24} />
            </Link>
            <Link to="#" className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <Instagram size={24} />
            </Link>
            <Link to="#" className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <Youtube size={24} />
            </Link>
            <Link to="#" className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <Twitter size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artisans;