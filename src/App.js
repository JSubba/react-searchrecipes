import "./style.css";
import Axios from "axios";
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import RecipesMap from "./components/RecipesMap";

function App() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [healthLabels, setHealthLabels] = useState("vegan");

    const app_id = "22b1f2c3";
    const app_key = "8616dfe83f8cd079c8e33c1a8930e130";

    let url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&calories=591-722&health=${healthLabels}`;

    const searchRecipes = async () => {
        let searchResult = await Axios.get(url);
        setRecipes(searchResult.data.hits);
        console.log(searchResult);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        searchRecipes();
    };

    return (
        <div className="app">
            <Header title="Healthy Foods" />
            <Form
                onSubmit={onSubmit}
                query={query}
                setQuery={setQuery}
                searchRecipes={searchRecipes}
                setHealthLabels={setHealthLabels}
            />
            <RecipesMap recipes={recipes} />
        </div>
    );
}

export default App;
