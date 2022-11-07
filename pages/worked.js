import Petadventures from '../public/petadventures.png';
import Image from 'next/image';
import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link';
import Head from 'next/head'

const Worked = () => {
    return ( 
        <div id="workedfor" class="h-screen pt-96 text-teal-400 bg-[#0a192f] flex flex-col justify-start items-start sm:p-0">
            <Head>
                <title>Trevor McLaurine</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
             <div class="w-5/5 text-center pt-32 mt-10">
                <div class="text-4xl flex flex-row p-10">
                    <div class="h-[1px] w-3/5 bg-teal-400 mr-5 m-auto"></div>
                    <p class="text-white w-64">Past Work</p>
                    <div class="h-[1px] w-3/5 bg-teal-400 ml-5 m-auto"></div>
                </div>  
            </div>
            <div class="w-5/5 ml-auto mr-auto p-2 sm:p-0 sm:w-3/5">
                <div class="flex flex-col sm:flex-row">
                    <div class="h-5/5 w-5/5 sm:h-1/2 sm:w-1/2">
                        <Image src={Petadventures}  alt="Bellevue Pet Adventures Website"></Image>
                    </div>
                    <article class="w-5/5 sm:w-2/5 sm:ml-20">
                        <h1 class="text-white text-3xl text-center">
                            Bellevue Pet Adventures
                        </h1>
                        <p className='text-slate-300 mt-5'>
                            I had the pleasure of redesigning the website for a local pet store named Bellevue Pet Adventures. Their website had not been updated for some time,
                            so I was given the task of bringing it a more modern look, making it mobile friendly, and making sure that it would still be accessible for their customers.
                            It was a delight to be able to make that happen for them and a great learning experience as well. 
                            <Link href="http://www.bellevuepetadventures.com"><FiExternalLink className='h-6 w-6 mt-3 transition ease-in hover:text-teal-400 hover:cursor-pointer'/></Link>
                        </p>
                    </article>
                </div>
            </div>
        </div>
     );
}
 
export default Worked;