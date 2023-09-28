import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//components
import RecipeCard from "../components/RecipeCard";
import Loading from "../components/Loading";

function Home() {
    const [Recipes , setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchRecipies(3);
      }, [])
    
      const fetchRecipies = async (number) => {
        const appKey = '7e986d49c32641a2b426a2ba4be8d49a';
        const apiUrl = `https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${appKey}`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
            const data = await response.json();
            setRecipes(data.recipes);
            setIsLoading(false);
            console.log(data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setIsLoading(false);
        }
      }

    return ( 
        <main className="bg-gray-100 px-16 py-6 md:col-span-4">
            <div className="flex justify-center md:justify-end">
                <Link href="#" className="text-red-600 font-bold botton border-gray-100 md:border-red-600 hover:text-white hover:bg-red-600 transition ease-out duration-500">Log in</Link>
                <Link href="#" className="text-red-600 ml-4 font-bold botton border-gray-100 md:border-red-600 hover:text-white hover:bg-red-600 transition ease-out duration-500">Sign up</Link>
            </div>

            <header>
                <h2 className="text-gray-700 text-6xl font-semibold my-3 tracking-wider">Recipes</h2>
                <h3 className="text-xl font-semibold">Discreet dishes</h3>
            </header>

            <div>
                <h4 className="font-bold pb-2 my-12 border-b border-gray-200">Latest Recipes</h4>
                <div className="grid md:grid-cols-3 gap-10 cards">
                    {isLoading ? <Loading/> : (Recipes.map((Recipe) => (
                        <RecipeCard key={Recipe.id} Recipe={Recipe} />
                    )))}
                </div>

                <h4 className="font-bold pb-2 my-12 border-b border-gray-200">Most Popular</h4>
                <div className="grid md:grid-cols-3 gap-10 cards">
                    {isLoading ? <Loading/> : (Recipes.map((Recipe) => (
                        <RecipeCard key={Recipe.id} Recipe={Recipe} />
                    )))}
                </div>
            </div>
                
            <div className="mt-12 flex justify-center">
                <Link to="/recipes" className="bg-gray-300 text-gray-500 tracking-wider botton border-stone-400 hover:bg-white hover:text-stone-400 cursor-pointer transform hover:scale-110">Load more</Link>
            </div>    
        </main>
     );
}

export default Home;