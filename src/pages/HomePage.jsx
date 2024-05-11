import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewButton from '../ViewButton';


const homePage = () => {
  return (
    <div>
      <Hero />
      <HomeCards  />
      <JobListings  isHome = {true}/>
      <ViewButton />

    </div>
  )
}

export default homePage;
