import React from 'react'
import {useSelector} from 'react-redux' 
import HeroSection from '../components/hero/Hero'
import ServicesSection from '../components/services/ServiceSection'
import Blogs from '../components/blogs/Blogs'

const LandingPage = () => {
  const {user} = useSelector((state)=> state.user);
  return (
    <div>
    
      <HeroSection/>
      <ServicesSection/>
      <Blogs/>
    </div>
  )
}

export default LandingPage
