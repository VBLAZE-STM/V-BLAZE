import Header from "../components/Header";

import {data} from "../teamdata";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export const Team = () => {


  return (
    
    <section className="bg-site">
      <Header/>
     
	<div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
  <motion.div
  variants={fadeIn('right',0.3)}
  initial='hidden'
  whileInView={'show'}
  viewport={{once:false,amount:0.3}} >
    <h2 className="h2 text-accent  text-center uppercase">Development team</h2>
		<h3 className="h3 font-bold leading-none text-center ">The talented people behind the scenes</h3>
		</motion.div>
    <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
    
    {data.map((data) => {
            return(
              
      <motion.div
      variants={fadeIn('down',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}  
          className="flex flex-col justify-center w-full px-8 mx-6 my-12 
          text-center rounded-md  md:w-96 lg:w-80 xl:w-84 dark:dark:bg-gray-100 dark:dark:text-gray-800">

				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:dark:bg-gray-500" src={data.img} />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leading-snug">{data.name}</p>
					<p>{data.position}</p>
					<p>{data.position2}</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
	
          <a href={data.GitHub}>
                <FaGithub />
              </a>
              <a href={data.LinkedIn}>
                <FaLinkedin />
              </a>
              <a href={data.Instagram}>
                <FaInstagram />
              </a>
				</div>
			</motion.div>
            )
		})}
		</div>
	</div>
</section>
  );
};export default Team;
