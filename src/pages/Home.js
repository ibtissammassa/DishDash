import { Link } from "react-router-dom";

function Home() {
    return ( 
        <main class="bg-gray-100 px-16 py-6 md:col-span-4">
            <div class="flex justify-center md:justify-end">
                <Link href="#" class="text-red-600 font-bold botton border-gray-100 md:border-red-600 hover:text-white hover:bg-red-600 transition ease-out duration-500">Log in</Link>
                <Link href="#" class="text-red-600 ml-4 font-bold botton border-gray-100 md:border-red-600 hover:text-white hover:bg-red-600 transition ease-out duration-500">Sign up</Link>
            </div>

            <header>
                <h2 class="text-gray-700 text-6xl font-semibold my-3 tracking-wider">Recipes</h2>
                <h3 class="text-xl font-semibold">Discreet dishes</h3>
            </header>

            <div>
                <h4 class="font-bold pb-2 my-12 border-b border-gray-200">Latest Recipes</h4>
                <div class="grid md:grid-cols-3 gap-10 cards">
                {/* <!-- cards go here --> */}
                </div>

                <h4 class="font-bold pb-2 my-12 border-b border-gray-200">Most Popular</h4>
                <div class="grid md:grid-cols-3 gap-10 cards">
                {/* <!-- cards go here --> */}
                </div>
            </div>
                
            <div class="mt-12 flex justify-center">
                <div class="bg-gray-300 text-gray-500 tracking-wider botton border-stone-400 hover:bg-white hover:text-stone-400 cursor-pointer transform hover:scale-110">Load more</div>
            </div>    
        </main>
     );
}

export default Home;