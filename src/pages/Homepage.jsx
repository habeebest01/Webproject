import Hero from '../Compounets/Hero' 
import Homecard from '../Compounets/Homecard'
import Joblistings from '../Compounets/Joblistings'
import Viewjobs from '../Compounets/Viewjobs'
const Homepage = () => {
  return (
     <>
     
      <Hero />
      <Homecard/>
       <Joblistings isHome={ true }/>
       <Viewjobs/>
     </>
  );
};

export default Homepage;