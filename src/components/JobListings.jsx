import {useState , useEffect} from 'react'
import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'


const JobListings = ({isHome = false}) => {
const [jobs, setJobs] = useState([]);
const [loading , setLoading] = useState(true);

    useEffect(() => {
      try {
        const fetchJobs =  async  () => {
          const res = await fetch('http://localhost:8000/jobs');
          const data = await res.json();
          setJobs(data);
        }
        fetchJobs();
      } catch (error) {
        console.log('Error fetching data', data)
      }
      setLoading(false);
    }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {jobs.map((job)=>(
            <JobListing  key={job.id} job={job}/>
       ))}
        
        </div>
      </div>
    </section>
  )
}

export default JobListings;
