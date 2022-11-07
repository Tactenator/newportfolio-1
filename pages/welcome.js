import Head from 'next/head';


const Welcome = () => {
    return ( 
        <div id="welcome" class="min-h-screen bg-[#0a192f]  flex justify-center items-center overflow-hidden">
            <div class="flex flex-col text-center sm:text-left">
                <p class="text-3xl text-slate-200">Hello, my name is</p>
                <h1 class="pt-4 pb-4 text-5xl"><strong class="text-teal-300">Trevor McLaurine</strong> </h1>
                <p class="text-4xl text-slate-200">A Web Developer</p>
            </div>
            
        </div>
     );
}
 
export default Welcome;