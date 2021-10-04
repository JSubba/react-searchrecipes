const RecipesMap = ({ recipes }) => {
    return (
        <div>
            {recipes.map((recipe, index) => {
                return (
                    <div
                        key={index}
                        className="recipeCard"
                        onClick={() => {
                            window.open(recipe["recipe"]["url"]);
                        }}
                    >
                        <p>{recipe["recipe"]["label"]}</p>
                        <img
                            src={recipe["recipe"]["image"]}
                            alt="food recipe"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default RecipesMap;
