import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';
import {data} from "../teamdata";
import { fadeIn } from '../variants';


const team = () => {
  return (
	<section className="py-6 mt-40 dark:text-gray-100 section" id='team'>
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<motion.div
		variants={fadeIn('right',0.2)}
		initial='hidden'
		whileInView={'show'}
		viewport={{once:false,amount:0.3}} >
		<h2 className="h2 text-accent text-center ">Our team</h2>
		<p className="max-w-2xl text-center">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
		
		</motion.div>
		<div className="flex flex-row flex-wrap-reverse justify-center">
		{data.map((data) => (
			<motion.div
			variants={fadeIn('down',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}} 
		   className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" 
				src={data.img} />
				<p className="text-xl font-semibold leading-tight">{data.name}</p>
				<p className="dark:text-gray-400">{data.position}</p>
			</motion.div>
		))}
		</div>
		<Link to='/team'><motion.button
		variants={fadeIn('up',0.2)}
		initial='hidden'
		whileInView={'show'}
		viewport={{once:false,amount:0.3}}
		  className=' justify-center btn btn-sm'>view more details</motion.button></Link>
		
	</div>
</section>

  )
}

export default team