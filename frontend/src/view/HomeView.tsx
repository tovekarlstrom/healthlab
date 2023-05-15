import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
export interface Recipe {
  id: number;
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
      {recipes !== null && (
        <div>
          {recipes.map((item) => (
            <RecipeCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
