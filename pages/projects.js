import Image from 'next/image';
import Chillona from '../public/chillona.png'
import Rock from '../public/rockpaper.png';
import { DiReact, DiMongodb, DiNodejs, DiGithubBadge, DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link'

const Projects = () => {
    return ( 
        <div id="projects" class="h-screen pt-24 text-slate-100 bg-[#0a192f] flex flex-col justify-center items-center p-2 sm:p-0">
            <div class="w-5/5 sm:w-3/5">
                <div class="text-4xl flex flex-row p-10">
                    <div class="h-[1px] w-3/5 bg-teal-400 mr-5 m-auto"></div>
                    <p class="text-white">Projects</p>
                    <div class="h-[1px] w-3/5 bg-teal-400 ml-5 m-auto"></div>
                </div>  
            </div>
            <div class="w-5/5 sm:w-3/5">
                <div class="flex flex-col sm:flex-row">
                    <div class="h-5/5 w-5/5 m-auto sm:h-1/2 sm:w-1/2 sm:m-0">
                        <Image src={Chillona}  alt="Chillona Website"></Image>
                    </div>
                    <article class="w-5/5 sm:w-2/5 sm:ml-20">
                        <h1 class="text-white text-3xl text-center">
                            Chillona
                        </h1>
                        <p className='text-slate-300 mt-5 text-center sm:text-left'>
                            My first react project that I created using a database! My girlfriend is a native Spanish speaker and wants to learn English. 
                            With that in mind, I wanted to make a website where I could add vocabulary, articles and quizzes to help her learn. 
                        </p>
                        <div className='flex flex-row mt-10 items-center justify-center sm:justify-start'>
                            <DiReact className='h-12 w-12'/>
                            <SiExpress className='h-12 w-12'/>
                            <DiMongodb className='h-12 w-12'/>
                            <DiNodejs className='h-12 w-12'/>
                            <Link href="https://github.com/Tactenator/chillona"><DiGithubBadge className='h-12 w-12 ml-10 transition ease-in hover:text-teal-400 hover:cursor-pointer'/></Link>
                            <Link href="#"><FiExternalLink className='h-9 w-9 transition ease-in hover:text-teal-400 hover:cursor-pointer'/></Link>
                        </div>
                    </article>
                </div>
            </div>
            <div class="w-5/5 mt-10 sm:w-3/5">
                <div class="flex flex-col justify-end sm:flex-row">
                    <article class="w-5/5 sm:w-2/5 sm:mr-20">
                        <h1 class="text-white text-3xl text-center sm:text-left">
                            Rock, Paper, Scissors, Lizard, Spock
                        </h1>
                        <p className='text-slate-300 mt-5 text-center sm:text-right'>
                            A fun Frontend Mentor Project that intrigued me. I started learning coding by making games in Unity. Jumping back into that, but with Javascript, 
                            was a great learning experience and allowed me to practice animations as well as hone my CSS skills. 
                        </p>
                        <div class="h-5/5 w-5/5 m-auto sm:h-1/2 sm:w-1/2 sm:m-0 sm:hidden">
                            <Image src={Rock}  alt="Rock, Paper, Scissors, Spock, Lizard Website"></Image>
                        </div>
                        <div className='flex flex-row mt-10 items-center justify-center sm:justify-end'>
                            <DiHtml5 className='h-12 w-12'/>
                            <DiCss3 className='h-12 w-12'/>
                            <DiJavascript1 className='h-12 w-12'/>
                            <Link href="https://github.com/Tactenator/rockpaperscissors"><DiGithubBadge className='h-12 w-12 ml-10 transition ease-in hover:text-teal-400 hover:cursor-pointer'/></Link>
                            <Link href="https://euphonious-semifreddo-f050db.netlify.app/"><FiExternalLink className='h-9 w-9 transition ease-in hover:text-teal-400 hover:cursor-pointer'/></Link>
                        </div>
                    </article>
                    <div class="hidden h-4/5 w-4/5 m-auto sm:h-1/2 sm:w-1/2 sm:m-0 sm:block">
                        <Image src={Rock}  alt="Rock, Paper, Scissors, Spock, Lizard Website"></Image>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;