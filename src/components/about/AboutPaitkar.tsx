
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const AboutPaitkar = () => {
  return (
    <div className="bg-ankan-beige">
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(/lovable-uploads/48a7b3ac-9a2f-4a20-a81d-27296738da82.png)` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-8 tracking-wide">WHAT IS PAITKAR ?</h1>
        </div>
      </div>

      {/* Introduction */}
      <div className="px-6 md:px-16 py-16 bg-[#635651] text-white">
        <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-6xl mx-auto">
          Paitkar painting is a folk art form that is only practised in Amadubi village in the Dhalbhumgarh area of Jharkhand's East Singhbhum district. The paintings are created by Bengali painters known as 'Chitrakars,' which literally means 'picture-makers.' The paintings depict fascinating stories about the origins of life, Hindu history and legends, as well as tribal lifestyles, rituals, and festivals.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-6xl mx-auto">
          Natural elements such as stones, leaves, flowers, and tree bark are utilised to create the colours used in paintings. Even the paint brushes used to be manufactured locally from goat hairs.
        </p>
        <p className="text-lg md:text-xl leading-relaxed max-w-6xl mx-auto">
          Paitkar paintings are traditionally done in scroll style, with a series of pictures that tell a tale. Paitkar is gradually losing its elongated shape and surviving in the tourist industry as a single frame painting.
        </p>
      </div>

      {/* History Section */}
      <div className="px-6 md:px-16 py-16 bg-[#e9e5df]">
        <h2 className="text-2xl font-bold mb-8 uppercase">HISTORY</h2>
        <p className="text-lg leading-relaxed mb-6 max-w-6xl">
          Paitkar art has a long history that may be traced back to the culture of the adjacent state of West Bengal.
        </p>
        <p className="text-lg leading-relaxed mb-6 max-w-6xl">
          The story begins during the reign of King Ramachandra Dhal, who ruled over the Dhalbhumgarh region. A group of 22 Paitkar painters paid him a visit and were quickly apprehended by his men. They were brought before the King and represented themselves as painters/singers who travel from place to place doing performances in exchange for stuff.
        </p>
        <p className="text-lg leading-relaxed mb-6 max-w-6xl">
          When they performed in front of the King, he was so impressed that he requested them to paint her queen's bedroom. The painters did an outstanding job, which pleased the King much. He gave them a permanent plot of land in exchange for their constant singing in front of the royal court. Paitkar painters have since settled in Dhalbhumgarh's Amadubi hamlet.
        </p>
        <p className="text-lg leading-relaxed max-w-6xl">
          They were given the surname "Gayen" because of their singing skills, but they gradually changed their surname to Chitrakar. Singers are known as Gayens, whereas Painterrs are known as Chitrakars. Although the terms Paitkar and Chitrakar are interchangeable, most artists go by the surname Chitrakar, even if they are not related. The Chitrakars were once from the Nava Shaka (group of nine castes) and were degraded because they refused to obey the usual criteria for representing the gods, according to the Brahmavaivarta Purana (ancient mythological literature).
        </p>
      </div>

      {/* Tradition Section */}
      <div className="px-6 md:px-16 py-16 bg-[#635651] text-white">
        <h2 className="text-2xl font-bold mb-8 uppercase">The tradition of Pata paintings</h2>
        <p className="text-lg leading-relaxed mb-6 max-w-6xl">
          Paitkar painting can be thought of as a subset of Pata painting. Long scroll painting is known as pata painting or patachitra. The format of this scroll painting is vertical.
        </p>
        <p className="text-lg leading-relaxed max-w-6xl">
          Other types of Pata paintings include Jharkhand's Jadopatiya paintings, West Bengal's Patachitra, and Odisha's Pattachitra.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full">
        <img
          src="/lovable-uploads/bd9b0822-b1f4-4f08-a237-c07ce0f8fdf6.png"
          alt="Paitkar Scroll Painting"
          className="w-full h-auto"
        />
      </div>

      {/* Origins Section */}
      <div className="px-6 md:px-16 py-16 bg-[#635651] text-white">
        <p className="text-lg leading-relaxed mb-6 max-w-6xl mx-auto">
          Pata painting is one of India's oldest folk paintings. In West Bengal, the Patachitra-painting communities are known as Patua. They are also known as Patidar, Patekar, or Paitkar in Jharkhand. Paitkar is derived from the word patekar. Padya is the source of Patachitra. It can be traced back to the following:
        </p>
        <p className="text-lg leading-relaxed mb-6 max-w-6xl mx-auto">
          Patchitra {'>'}{'>'} Pada chitra {'>'}{'>'} Padya chitra
        </p>
        <p className="text-lg leading-relaxed max-w-6xl mx-auto">
          Padya or Pada is a two-line rhyming poem. Paitkar painting's narrative scroll style is derived from Pandulipi (a scroll in nature), which was once used by kings to deliver messages to other kings.
        </p>
      </div>

      {/* Colors Section */}
      <div className="px-6 md:px-16 py-16 bg-[#e9e5df]">
        <p className="text-lg leading-relaxed mb-6 max-w-6xl mx-auto">
          Paitkar artisans employ a water-based colour obtained from nature as their material for painting their scrolls. Chitrakar's colour palette is restricted to a few hues. They exclusively collect natural primary colours. The artists create more colours by combining the basic primary colours of red, yellow, and blue. These fundamental colours are combined to create secondary colours. Olive green, deep brown, and black dominated older Paitkar paintings. Later, various colours such as Indigo, Ochre yellow, and others were used to create the shift. The colour red is commonly used in religious and mythological paintings. Instead of using white paint, painters sometimes leave their paper as "paper white" or "blank" to specify the white colour.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full">
        <img
          src="/lovable-uploads/40c4a42a-c4e0-40f1-a800-0618d5316a6e.png"
          alt="Paitkar Painting Materials"
          className="w-full h-auto"
        />
      </div>

      {/* Color Sources Section */}
      <div className="px-6 md:px-16 py-12 bg-[#e9e5df]">
        <h3 className="text-xl font-semibold mb-4">Some commonly used colours and their sources:</h3>
        <ul className="list-none text-lg space-y-2 max-w-6xl">
          <li>Red – Hematite (Gerua Patthar)</li>
          <li>Yellow – Yellow Ochre stone (Haldi Patthar), Turmeric (Haldi)</li>
          <li>Black – Lamp Soot (Carbon Black)</li>
          <li>Orange – Palash Flowers</li>
          <li>Brown – Brown Stone</li>
          <li>Green – Bean Leaves (Seem Patta)</li>
          <li>Blue – Indigo</li>
        </ul>
      </div>

      {/* Process Section */}
      <div className="px-6 md:px-16 py-16 bg-[#635651] text-white">
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          The soil and colour stones are plentiful along the riverbank, but they are difficult to locate. To make the colours, artists ground the leaves or flowers into a paste, then squeeze the paste to extract the juice. The juice is then cooked until it reaches the proper consistency. The paint is blended with natural gums collected from the babool tree to make it persistent on paper. The gum also gives the paint a gloss.
        </p>
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          Coconut shells are used to keep the produced colours. Paitkar artisans used to construct brushes from squirrel and goat hairs by tightening them with thread on a bamboo stick in the past. They now use brushes that are commercially accessible.
        </p>
      </div>

      {/* Process Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-16 py-8 bg-[#635651]">
        <img 
          src="/lovable-uploads/a03e7c5d-1ea3-406e-9c52-ec66c54f5e6c.png" 
          alt="Paitkar Painting Process 1" 
          className="w-full h-auto" 
        />
        <img 
          src="/lovable-uploads/e0797e9b-b34b-4e30-8945-4242fc1ebfb8.png" 
          alt="Paitkar Painting Process 2" 
          className="w-full h-auto" 
        />
        <img 
          src="/lovable-uploads/efb577e7-ed54-4980-b5f7-b42251bbc8ff.png" 
          alt="Paitkar Painting Process 3" 
          className="w-full h-auto" 
        />
      </div>

      {/* Techniques Section */}
      <div className="px-6 md:px-16 py-16 bg-[#635651] text-white">
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          Handmade paper and Canvas cloth have taken the position of palm tree leaves as a drawing medium. Various sheets of paper are put together in a row and supported by fabric to produce a scroll. The Paitkar's presentation is frequently backed with antique saris, and the patterns of the fabric lend aesthetic complexity to the Paitkar's performance.
        </p>
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          The majority of Paitkar painters use a pencil to define the characters' forms. Individual frames are separated by ornate borders that depict a certain scenario from the storey. Dark outlines are usually applied at the end of the painting process. Paitkar painters have traditionally been men. Women have traditionally helped with colour preparation, but they have recently begun to paint as well.
        </p>
      </div>

      {/* Style Section */}
      <div className="px-6 md:px-16 py-16 bg-[#e9e5df]">
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          The form is relatively straightforward, with a thick contour line. The majority of the painted space is occupied by human characters. These characters can be found in both profile and semi-profile. The eyes are extended, which is a typical feature of Indian painting. The painted face did not appear until the mid-twentieth century. Paitkars' spontaneous lines have an angularity to them, and anatomical details are not well defined.
        </p>
      </div>

      {/* Style Image */}
      <div className="w-full px-6 md:px-16 py-8 bg-[#e9e5df]">
        <img 
          src="/lovable-uploads/994516c3-2c99-489a-adde-08b3dfa0111f.png" 
          alt="Paitkar Art Style" 
          className="w-full h-auto max-w-4xl mx-auto" 
        />
      </div>

      {/* Style Description */}
      <div className="px-6 md:px-16 py-16 bg-[#e9e5df]">
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          Paitkar's picture has a strong sensuality to it. Paitkar artists prefer to paint with simple contours and representational lines. To minimise shading, the painters focus on volume and colour simplicity. To emphasise the form, thick lines are used. Though the Chitrakars are oblivious of perspective, the painting's sensory composition conceals it. Occasionally, the figurative picture frames are blended to continue the story.
        </p>
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          Roma Chatterji said that Scroll painters follow asynoptic mode of representation, using figural types and standard motifs, which ask viewers to use their imagination to fill in the story in their own way.
        </p>
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-16 py-16 bg-[#635651] text-white">
        <h3 className="text-xl font-semibold mb-4">The usual subjects or contents of Paitkar painting are –</h3>
        <ol className="list-decimal pl-6 text-lg space-y-2 mb-8 max-w-6xl">
          <li>The fairs and festivals, mythology and social life of Santhals.</li>
          <li>Traditional Hindu epics (such as Ramayana and Mahabharata), popular legend and folk tales.</li>
          <li>Flora and Fauna</li>
        </ol>
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          The Paitkars are generally representative of Jharkhand's socio-religious life. Popular topics include social events and festivals such as Karam Puja, Dansai, and Baha. Chitrakars' previous tribe was Santhal, hence their paintings prominently represent the festive moods, mythology, and beliefs of Santhal. Santhal's myths, such as Pilcuirom and Pilsuburi, are also depicted.
        </p>
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          The Paitkar art signifies the relationship between human beings and nature, sex, and the gods. The snake goddess Manasa is the subject of a large void where makes enjoy living. Because of this painters in quest of dye and natural colour are afraid to take it out among the soil and stones. Manasa, the snake deity, is said to protect the family from snake bites and will also bring wealth to the area. That is why the snake goddess Manasa is worshipped and her narrative is depicted in Paitkar. As a result of popular demand, some Paitkar painters have begun to depict modern contemporary themes. Swachh Bharat Abhiyan, the story of liberation fighter Birsa Munda, and many others are among them.
        </p>
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          As a result, Paitkar art has been described as dynamic or evolving in response to the requirements and interests of the audience.
        </p>
      </div>

      {/* Performance Section */}
      <div className="px-6 md:px-16 py-16 bg-[#635651] text-white">
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          Paitkar artists have traditionally relied on storytelling to make a living. The performers mostly worked in tribal areas, displaying their scrolls and singing the storey in exchange for rice and other gifts. The songs were in Bengali, and they were accompanied by Ektara (a one-string musical instrument) and Dotara (a two-string musical instrument) (two string musical instruments).
        </p>
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          Paitkar performers usually carry a large number of scrolls to provide their audience a variety of stories to choose from. The Mangala Kavyas (welfare books) and the story of the Santhal myth are two of Paitkar's recurring topics. The artists selected their painting to perform based on their target audience. In Hindu villages, they sang Mangala Kavyas, and in Santhal communities, they sang mythological stories and beliefs. This was done to entice the crowd into giving the performer daan (gift).
        </p>
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          In today's world, most artists have confined themselves to painting, and the tradition of singing storytelling is on the edge of extinction.
        </p>
      </div>

      {/* Current State Section */}
      <div className="px-6 md:px-16 py-16 bg-[#635651] text-white">
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          The day-to-day struggles of Paitkar practitioners are discouraging. There aren't enough buyers for their art, preventing them from living a secure and better life. It further prevents new generations from participating in this custom. As a result, unlike their forebears, artists of the new age do not rely solely on procedure. Only 7 to 8 artists are practising painting in Amadubi, despite the fact that the majority of the people are aware of this art. The majority of Amadubi villagers abandoned the tradition because it was no longer financially sustainable. They have worked in a variety of fields, including carpentry, idol making, tailoring, agricultural labour, and repair work.
        </p>
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          Because of its cultural value, the Jharkhand government designated Amadubi village as a rural tourism destination in 2013, in partnership with Jharcraft and the Jharkhand Tourism Development Corporation (JTDC). Along with tourist cottages, the then tourism minister also opened a training school to teach the art form to others, particularly children. Because this training institution is currently closed, Paitkar painters are having difficulty selling their paintings, which range in price from Rs 300 to Rs 20,000. The Covid-19 crisis worsened the situation.
        </p>
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          Paitkar painting's future appears to be bleak and unclear. As if the absence of attempts by state governments and private organisations weren't bad enough, the Covid-19 situation exacerbated the issues.
        </p>
        <p className="text-lg leading-relaxed mb-8 max-w-6xl mx-auto">
          To prevent this painting from becoming a thing of the past, the government, business organisations, NGOs, and people must act quickly.
        </p>
      </div>

      {/* Support Section */}
      <div className="py-16 bg-[#635651] text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Support Artisans, Preserve Tradition</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <Link to="/support-artisan">
            <Button className="bg-white text-ankan-brown hover:bg-gray-100 px-8 py-3 text-lg">
              Support an Artisan
            </Button>
          </Link>
          <Link to="/workshops">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              Book a Workshop
            </Button>
          </Link>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="py-16 bg-ankan-beige text-center">
        <h3 className="text-xl font-bold uppercase mb-4">STAY CONNECTED</h3>
        <p className="text-gray-700 mb-8">Follow us on our social media accounts to get even more fragrant content</p>
        
        <div className="flex justify-center gap-8">
          <a href="#" className="text-ankan-brown hover:text-ankan-darkBrown">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-ankan-brown hover:text-ankan-darkBrown">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-ankan-brown hover:text-ankan-darkBrown">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-ankan-brown hover:text-ankan-darkBrown">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPaitkar;

