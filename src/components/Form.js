const Form = ({
    onSubmit,
    query,
    setQuery,
    searchRecipes,
    setHealthLabels,
}) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="enter your search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" onClick={searchRecipes}>
                Search
            </button>
            <select>
                <option onClick={() => setHealthLabels("vegan")}>Vegan</option>
                <option onClick={() => setHealthLabels("vegetarian")}>
                    Vegetarian
                </option>
                <option onClick={() => setHealthLabels("paleo")}>Paleo</option>
                <option onClick={() => setHealthLabels("dairy-free")}>
                    Dairy-Free
                </option>
                <option onClick={() => setHealthLabels("gluten-free")}>
                    Gluten-Free
                </option>
                <option onClick={() => setHealthLabels("peanut-free")}>
                    Peanut-Free
                </option>
                <option onClick={() => setHealthLabels("low-sugar")}>
                    Low-Sugar
                </option>
                <option onClick={() => setHealthLabels("fat-free")}>
                    Fat-Free
                </option>
            </select>
        </form>
    );
};

export default Form;
