
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards'
import JobListings from './components/jobListings';
import ViewButton from './ViewButton';

const App = () => {
  return (
    <>
    <Navbar />
    
    < Hero  title = 'JOB HUNT' subtitle = 'Welcome to job hunt'/>

    
    <HomeCards />
    
    <JobListings />
    

    <ViewButton />
    </>
  )
}

export default App
