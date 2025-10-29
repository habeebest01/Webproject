import { NavLink } from 'react-router-dom'
import imag from '/src/assets/react.svg'

const Navbar = () => {
  const Linkstyle = ({isActive}) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 h-10 text-center' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 h-10 text-center';

  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='flex justify-between item-center'>
        <div className='flex h-20 item-center justify-center py-4 pl-4'>

          <img src={imag} alt="" className='h-10 w-auto  ' />
          <p className='font-bold px-2 text-3xl text-white hidden md:block'>React job</p>
        </div>

        <div className='py-4 flex item-center justify-between gap-4 p-12'>

          <NavLink to="/" className={Linkstyle}>Home</NavLink>
          <NavLink to="/jobs" className={Linkstyle}>Jobs</NavLink>
          <NavLink to="/addjob" className={Linkstyle}>Add Jobs</NavLink>

        </div>

      </div>
    </nav>
  )
}

export default Navbar