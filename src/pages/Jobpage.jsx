import { useParams, useLoaderData } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const Jobpage = (deletejob) => {
  // const navigate = useNavigate();
  const { id } =  useParams();
  const job = useLoaderData();

  const onDeleteClick = (jobId) => {
    const comeferm =windo.confirm('are you sure you want to dealet this listing?')
    if (!confirm) return;

    deletejob(jobId);

    navigate('/jobs')
  }

  return  (
    <>
      <section>
         <div className="container m-auto py-6 px-8">
            <Link to="/jobs" className="text-indigo-500 hover:text-indigo-600 flex items-center">

            <FaArrowLeft className="mr-2" /> Back to job listings
            </Link>
         </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
           <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
             <div className="text-gray-500 mb-4 ">{job.type}</div>
            <div className=" flex-col text-3xl font-bold mb-4 flex align-middle justify-center md:justify-start">
              <p className="text-4xl mb-4 font-bold">{job.title}</p>
              <p className="text-orange-700 text-sm">{job.location}</p>
            </div>
           </div>

           <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-indigo-800 text-lg font-bold mb-6">
              jobDescription
            </h3>

            <p className="mb-4">
                 {job.description}
            </p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">
                Salary
              </h3>

              <p className="mb-4">  {job.salary} /year</p>
        </div>
        </main>


        <aside>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl"> {job.company.name}</h2>

              <p className="my-2">
               {job.company.description}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contart Email</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
                {/* {job.contact.email} */}
              </p>

                 <h3 className="text-xl">Contart Phone</h3> 

                 <p className="my-2 p-2 bg-indigo-100">
                  {/* {job.contact.phone} */}
                 </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-mb mt-6">
              <h3 className="font-bold mb-6 text-xl">Manage Job</h3>
              <Link to={`/jobs/edit/${job.id}`} className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                Edit Job
              </Link>

              <button onClick={() => onDeleteClick(job.id)} className="bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  Delete Jobs
              </button>

            </div>
        </aside>

        </div>


        </div>

      </section>


    </>
  )
};

const Jobloader =  async ({params}) => {
 const res = await fetch (`/api/jobs/${params.id}`)
 const data = await res.json();
 return data;
}

export { Jobpage as default, Jobloader}