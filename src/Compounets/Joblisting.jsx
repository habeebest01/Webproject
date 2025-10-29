import { useState } from "react"
import { Link } from "react-router-dom"
import {FaMapMarker} from 'react-icons/fa'

const Joblisting = ({ job }) => {
const [showfulldescription, setshowfulldescription] = useState(false)

let description = job.description;

if (!showfulldescription) {
  description = description.substring(0, 90) + '...'
}
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-6">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold text-indigo-500 my-2">{job.title}</h3>
          <div className='mb-5'>{description}</div>
          <button onClick={() => setshowfulldescription((prevState)=> !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">{ showfulldescription ? 'Less' : 'More' }</button>
          <h3 className='text-indigo-500 mb-4'>{job.salary} / Year</h3>
          <div className='border border-gray-200 mb-6 '></div>
          <p className="text-red-500 mb-5">
            < FaMapMarker className="inline text-lg me-1 mb-1"/>
            {job.location}
            
            </p>
       <Link
  to={`/jobs/${job.id}`}
  className='flex justify-center h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-24 py-2 rounded-lg text-center text-sm'
>
  Read More
</Link>

        </div>
      </div>
    </div>
  )
}

export default Joblisting
