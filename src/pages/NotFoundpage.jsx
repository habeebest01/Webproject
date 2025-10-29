import { Link } from "react-router-dom"
import { FaExclamationTriangle } from "react-icons/fa"

const NotFoundpage = () => {
  return (
        <section className="flex flex-col items-center justify-center h-96 text-center">
            <FaExclamationTriangle className="text-yellow-400 mb-4 text-6xl"/>
            <h1 className="text-6xl font-bold mb-4 ">404 Not Found</h1>
            <p className="text-xl mb-4">This Page Does Not Exist</p>
            <Link to="" className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-xl px-3 py-2 mt-4">
              Go Back
            </Link>
        </section>
  )
}

export default NotFoundpage