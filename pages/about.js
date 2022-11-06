import Me from '../public/me.JPG'
import Image from 'next/image'
import Head from 'next/head';
import { DiReact, DiMongodb, DiNodejs, DiGithubBadge, DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiThreedotjs } from "react-icons/si";

const About = () => {
    return ( 
        <div id="about" class="h-screen text-slate-100 bg-[#0a192f] flex justify-start items-start sm:justify-center sm:items-center">
            <div class="text-start flex flex-col sm:flex-row">
                <div class="w-5/5 h-auto rotate-90 sm:w-2/5">
                    <Image src={Me} objectFit="contain" style={{borderRadius: '25px', overflow: 'hidden'}} alt="Issa Me!"></Image>
                </div>
                <div class="w-5/5 p-2 sm:w-3/5">
                    <div class="text-4xl flex flex-row items-center">
                        <p class="text-white">About me</p>
                        <div class="h-[1px] w-4/5 bg-teal-400 mr-5 sm:ml-5 sm:mr-0"></div>
                    </div>
                    <div class="text-xl text-left pt-4 w-3/5 text-slate-200">
                         Hello! My name is Trevor McLaurine. I am currently a student at Bellevue University 
                         in Bellevue, Nebraska for my degree in Web Development. I am also a freelance Web Developer
                         looking to help small businesses create the web experience they need for their customers. 
                    </div>
                    <div class="text-xl text-left pt-4 w-3/5 text-slate-200">
                         When I&apos;m not studying in school or coding, I enjoy relaxing with loved ones, biking, cooking, 
                         or playing a good video game or board game.  
                    </div>
                    <div class="text-xl text-left pt-4 w-3/5 text-slate-200">
                        I&apos;m always learning! Here&apos;s what I&apos;m learning now:
                    </div>
                     <div className='flex flex-row mt-10 items-center'> 
                            <DiReact className='h-12 w-12'/>
                            <SiExpress className='h-12 w-12'/>
                            <DiMongodb className='h-12 w-12'/>
                            <DiNodejs className='h-12 w-12'/>
                            <SiThreedotjs className='h-12 w-12' />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;