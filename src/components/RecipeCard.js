

function RecipeCard({Recipe}) {
    return ( 
        <div className="card">
            <img className="w-full object-cover h-32 sm:h-28" src={Recipe.image} alt="" />
            <div className="m-4">
                <span className="block font-bold">{Recipe.title}</span>
                <span className="text-sm text-gray-400">{Recipe.dishTypes[0]}</span>
            </div>
            <div className="badge">
                <svg className="mr-1 w-4 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{Recipe.readyInMinutes} Mins</span>
            </div>
        </div>
     );
} 

export default RecipeCard;