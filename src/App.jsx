import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Mainlayout from './Layouts/Mainlayout';
import Jobspage from './pages/Jobspage';
import NotFoundpage from './pages/NotFoundpage';
import Jobpage, { Jobloader  } from './pages/Jobpage';
import Addjobpage from './pages/Addjobpage';




const App = () => {
  const addjob = async (newjob) => {

};

const deletejob = async (id) => {

   const res = await fetch(`/api/jobs/${id}`,{
    method:'DELETE',
   });
   return;
};

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Mainlayout/>}>
  <Route index element={<Homepage />}/>
  <Route path='/Jobs' element={<Jobspage/>}/>
  <Route path='/addjob' element={<Addjobpage Addjobsubmit={addjob}/>}/>
  <Route path='/jobs/:id' element={<Jobpage deletejob={deletejob}/>} loader={Jobloader}/>
  <Route path='*' element={<NotFoundpage/>} />
  </Route>)
);
  return <RouterProvider router={router} />;  
}

export default App
