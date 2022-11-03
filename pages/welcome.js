import Head from 'next/head';

const Welcome = () => {
    return ( 
        <div id="welcome" class="h-screen bg-[#0a192f]  flex justify-center items-center">
            <Head>
                <title>Trevor McLaurine</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div class="flex flex-col justify-start">
                <p class="text-4xl text-slate-200">Hello, my name is</p>
                <h1 class="pt-4 pb-4 text-6xl"><strong class="text-teal-300">Trevor McLaurine</strong> </h1>
                <p class="text-5xl text-slate-200">A Web Developer</p>
            </div>
        </div>
     );
}
 
export default Welcome;