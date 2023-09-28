import { useEffect, useState } from "react";

//components
import Loading from "../../components/Loading";
import RecipeCard from "../../components/RecipeCard";

function Recipes() {
    const [Recipes , setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchRecipies(10);
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
        <div className="bg-gray-100 px-16 py-6 md:col-span-4">
            <header>
                <h2 className="text-gray-700 text-6xl font-semibold my-3 tracking-wider">Recipes</h2>
                <h3 className="text-xl font-semibold">Discreet dishes</h3>
            </header>
            <div className="grid md:grid-cols-3 gap-10 cards mt-10">
                {isLoading ? <Loading/> : (Recipes.map((Recipe) => (
                    <RecipeCard key={Recipe.id} Recipe={Recipe} />
                )))}
            </div>
        </div>
     );
}

export default Recipes;