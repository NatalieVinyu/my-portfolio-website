import Navbar from './/navbar/page';
import Homepage from './/home/page';
import About from './/about/page';
import Mywork from './/mywork/page';
import Contact from './/contact/page';
import Footer from './/footer/page';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <About />
      <Mywork />
      <Contact />
      <Footer />
    </div>
    
  );
};
