import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Addjobpage = ({ Addjobsubmit}) => {
  const [title , setTitle] = useState('');
  const [ type, setType] = useState('Full-Time');
  const [location , setLocation] = useState('');
  const [ description, setDescription] = useState('');
  const [salary , setSalary] = useState('');
  const [ companyname, setCompanyname] = useState('');
  const [companydescription , setCompanydescription] = useState('');
  const [ contactemail, setContactemail] = useState('');
  const [ contactphone, setContactphone] = useState('');

const navigate = useNavigate();

const SubmitForm = (e) => {
  e.preventDefalt();

  const newjob = {
    title,
    type,
    location,
    description,
    salary,
    company:{
      name: companyname,
      description:companydescription,
      contactemail,
      contactphone,
    },
  };
  Addjobsubmit(newjob);
  
  return navigate('/jobs');
}

  return (
    <>
      <section className='bg-indigo-50'>
        <div className="container m-auto max-w-2xl   py-24">
            <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
              <form onSubmit={SubmitForm}>
                <h2 className="text-3xl text-center font-semibold mb-6">
                  Add Job
                </h2>
                <div className="mb-4">
                    <label htmlFor="type" className="text-3xl text-center font-semibold mb-6">
                        Job Type
                    </label>
                    <select   
                    id='type'
                    name='type'   
                    className='border rounded w-full py-2 px-3' required value={type} onChange={(e) => setType(e.target.value)}>
                  



                      <option value="under $50k">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Remote">Remote</option>
                      <option value="Intership">Intership</option>
                    </select>
                </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Job listing Name</label>
                      <input 
                      type="text"
                      id="title"
                      name="title"
                      className="mb-2 px-3 py-2 rounded border w-full"
                      placeholder="E.g Builtyful apartment in Lagos"
                      required
                      value={title} onChange={(e) => 
                      setTitle(e.target.value)}
                      />
                  </div>
                      
                    <div className="mb-4">
                    <label htmlFor="descrition"
                      className="block text-gray-700 mb-2 font-bold">Description</label>
                      <textarea
                       name=""
                       id=""
                      className="px-3 py-2 rounded border w-full"
                      rows='4' 
                       placeholder="E.g Add anyjob duties,requirement,etc "
                      required
                      value={description} onChange={(e) => 
                      setDescription(e.target.value)}
                      ></textarea>                      
                  </div>

                     <div className="mb-4">
                    <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                        Salary
                    </label>
                    <select   
                    id='salary'
                    name='salary'   
                    className='border rounded w-full py-2 px-3' required value={  salary} onChange={(e) => setSalary(e.target.value)}>
                  



                    <option value="under $50k">under $50k</option>
                      <option value="$50k - $60k">$50k - $60k</option>
                      <option value="$60k - $70k">$60k - $70k</option>
                      <option value="$70k - $80k">$70k - $80k</option>
                      <option value="$80k - $90k">$80k - $90k</option>
                      <option value="$90k - $100k">$90k - $100k</option>
                      <option value="$100k - $125k">$100k - $125k</option>
                      <option value="$125k - $150k">$125k - $150k</option>
                      <option value="$150k - $175k">$175k - $175k</option>
                      <option value="$175k - $80k">$175k - $180k</option>
                      <option value="$180k - $195k">$180k - $195k</option>
                    </select>
                </div>

                    <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">location</label>
                      <input 
                      type="text"
                      id="location"
                      name="location"
                      className="mb-2 px-3 py-2 rounded border w-full"
                      placeholder="E.g Builtyful apartment in Lagos"
                      required
                      value={location} onChange={(e) => 
                      setLocation(e.target.value)}
                      />
                  </div>

                  <h3 className="text-2xl mb-5">Company Info</h3>

                  <div className="mb-4">
                    <label 
                    htmlFor='company'>
                      company name
                    </label>
                      <input 
                      type="text"
                      id="company"
                      name="company"
                      className="px-3 py-2 rounded border w-full"
                      placeholder="Company name"
                      required
                      value={companyname} onChange={(e) => 
                      setCompanyname(e.target.value)}
                      
                      />
                  </div>
                         
                     <div className="mb-4">
                    <label 
                    htmlFor='company'>
                      company_description
                    </label>
                      <textarea
                      type="text"
                      id="company_description"
                      name="company_description"
                      className="px-3 py-2 rounded border w-full"
                      rows='4'
                      placeholder="what does your company do"
                      required
                      value={companydescription} onChange={(e) => 
                      setCompanydescription(e.target.value)}
                      ></textarea>
                  </div>

                   <div className="mb-4">
                    <label 
                    htmlFor='concact'>
                      Concact email
                    </label>
                      <input 
                      type="email"
                      id="Concact email"
                      name="Concact email"
                      className="px-3 py-2 rounded border w-full"
                      placeholder="Email address for appliccants"
                      required
                      value={contactemail} onChange={(e) => 
                      setContactemail(e.target.value)}
                      />
                      </div>

                    <div className="mb-4">
                    <label 
                    htmlFor='concact_phone'>
                      Concact phone
                    </label>
                      <input 
                      type="tel"
                      id="Concact_phone"
                      name="Concact_phone"
                      className="px-3 py-2 rounded border w-full"
                      placeholder="OPtional phone for applicants"
                      required
                      value={contactphone} onChange={(e) => 
                      setContactphone(e.target.value)}
                      />
                  </div>

              </form>
            </div>
        </div>
      </section>
    </>
  )
}

export default Addjobpage