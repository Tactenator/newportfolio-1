const Contact = () => {
    return ( 
        <div id="contact" class="h-screen text-teal-400 bg-[#0a192f] flex flex-col justify-start items-center">
            <div className="w-3/5 mr-auto ml-auto mt-32 text-center text-5xl text-teal-400">
                <h1>Let&apos;s Chat</h1>
            </div>
            <div className="w-3/5 mt-12 pr-16 pl-16 text-center text-2xl text-slate-100 flex">
                <form className="mr-auto ml-auto">
                    <div className="mb-4">
                        <label class="block text-white text-2xl font-bold mb-2 text-left" for="name">
                            Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                        leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"></input>
                    </div>
                    <div className="mb-4">
                        <label class="block text-white text-2xl font-bold mb-2 text-left" for="email">
                            E-mail
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                        leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="E-mail"></input>
                    </div>
                    <div className="mb-4">
                        <label class="block text-white text-2xl font-bold mb-2 text-left" for="name">
                            Name
                        </label>
                        <textarea rows={6} cols={40} class="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                        leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Got a great idea? Let's make it together"></textarea>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;