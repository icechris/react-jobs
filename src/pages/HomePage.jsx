import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';


const homePage = () => {
  return (
    <div>
      <Hero />
      <HomeCards />
      <JobListings />

    </div>
  )
}

export default homePage;
