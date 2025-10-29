import {useState, useEffect} from 'react'
import Joblisting from './Joblisting'
import Spinner from './Spinner'


const Joblistings = ({ isHome = false}) => {
  const [jobs, setjob] = useState([])
  const [loading, setloading] = useState(true);
  
  useEffect(() => {
    const fetchjobs = async ()=> {
      try {
        
         const res = await  fetch('http://localhost:8000/jobs');
    const data = await res.json();
    setjob(data);

      } catch (error) {
        console.log('Error fetching data',error);
      }finally{
        setloading(false)
      }
    }

    fetchjobs();
  }, []);

  return ( 
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
         {isHome ? 'Recentjob' : 'Browse Jobs'}
        </h2>
    
          {loading ?(<Spinner loading={loading}/>) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">  
          {jobs.map((job) => (
          <Joblisting key={job.id} job={job} />
))}

          </div>
          
          )}
      
          
       
      </div>
    </section>
  )
}

export default Joblistings
