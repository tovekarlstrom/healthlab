<<<<<<< HEAD

function HomeView() {
  return (
 <>
 </>
  );
}

export default HomeView;
=======
import { useState, useEffect } from "react";
>>>>>>> 2a711fcc78730458e2b5b699ef309408ad8318a7
import RecipeCard from "../components/RecipeCard";
import Info from "../components/Info";

import { Link } from "react-router-dom";
import "../styles/HomeView.css";
export interface Recipe {
  id: number;
  image: string;
  name: string;
  rating: number;
  time: number;
  likes: number;
  comments: number;
  protein: number;
  carbs: number;
  fat: number;
  kcal: number;
  ingredients: [string];
  instructions: [string];
}
function Home() {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  useEffect(() => {
    fetch("http://localhost:8085/recipes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setRecipes(result);
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <Link to={`/login`}>
        <button className="loginButton">logga in</button>
      </Link>
      {recipes !== null && (
        <div>
          {recipes.map((item) => (
            <RecipeCard key={item.id} item={item} />
          ))}
        </div>
      )}
      <Info />
    </div>
  );
}

export default Home;
