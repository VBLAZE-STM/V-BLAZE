import React from 'react'
import { Link } from 'react-router-dom';
import {data} from "../teamdata";

const team = () => {
  return (
    <div>
        {/* <section className="py-6 dark:bg-gray-800 dark:text-gray-100"> */}
       <section className="py-6 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="h2 leading-tight  text-accent ">Our team</h1>
		<p className="max-w-2xl text-center dark:text-gray-400">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
		<div className="flex flex-row flex-wrap-reverse justify-center">
		{data.map((item) => (
          
          
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={item.img} />
				<p className="text-xl font-semibold leading-tight">{item.name}</p>
				<p className="dark:text-gray-400">{item.position}</p>
			</div>
			))}
			<Link to='/team'>
             <button  className='btn btn-sm'>view all team members</button></Link>
		</div>
	</div>
</section>
			
		
			
			
		</div>

  )
}

export default team