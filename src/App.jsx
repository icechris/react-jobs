import {Route , createBrowserRouter , createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJobsPage from './pages/AddJobsPage';
import NotFoundPage from './pages/NotFoundPage';




const router = createBrowserRouter (
  createRoutesFromElements (<Route path = '/' element ={<MainLayout />}>
    <Route index element = {<HomePage />}/>
    <Route path ='/jobs'  exact element =  {<JobsPage />}/>
    <Route path ='/addjobs'  exact element =  {<AddJobsPage />}/>
    <Route path ='*'  exact element =  {<NotFoundPage />}/>
  </Route>)
);
const App = () => {
  return (
    <RouterProvider  router={router} />
  )
}

export default App;
