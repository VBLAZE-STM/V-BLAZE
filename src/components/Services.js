import { motion } from 'framer-motion';
import React from 'react';
import { BiGlobe } from 'react-icons/bi';
import { BsArrowBarRight } from 'react-icons/bs';
import { fadeIn } from '../variants';

const services=[
  {
    name:'Web Desiging',
    description:'We know from experience that sometimes the look is everything for the client and sometimes robust, trustworthy web processes are the key.',
    logo:'BsArrowBarLeft',
  },
  {
    name:'Mobile Application',
    description:'With rapid technology advancements, the emergence of user-friendly and intuitive smartphones has invoked millions of mobile users to connect via the Internet',
    logo:'BsArrowBarRight',
  }, {
    name:'Web Development',
    description:'We are custom software application development services provide the IT ckbone of our clients business strategieswhen packaged software',
   logo:'BiGlobe',
  },]
const Services = () => {
  return (
    <section className='section'id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row '>
        <motion.div
        variants={fadeIn('right',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}  className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6 '>our services</h2>
          <h3 className='h3 max-w-[400px] text-[20px] mb-16'>We as a Web Design Club are always ready to contribute to the growth of your company by offering a fully functional and appealing web solution, no matter your company is small, medium or a large one.</h3>
          <button className='btn btn-sm'>our works</button>
       
        </motion.div>

          <div>
            <div>
              {services.map((services,index)=>{
                const {name,description}=services
                
                return (
                  <motion.div
                  variants={fadeIn('left',0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.7}}  className='border-b border-white/20 h-[146px] 
                  mb-[38px] flex ' key={index}>
                  
                  
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                   
                   {/* <a href='#' className='btn w-9h-9 mb-[42px] flex justify-center items-center'><BiGlobe/></a> */}
                   {/* <a href='#' className='text-gradient text-sm'>{link}</a> */}
                 </div>
                  
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )}

export default Services;
