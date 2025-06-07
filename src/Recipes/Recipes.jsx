import React, { useEffect, useState } from "react";
import axios from "axios";
import Style from "./Recipes.module.css";
export default function Recipes() {
  let [recipes, setRecipes] = useState(null);
  async function getApi() {
    let { data } = await axios.get(
      "https://forkify-api.herokuapp.com/api/search?q=pizza"
    );
    setRecipes(data.recipes);
    console.log(recipes);
  }
  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      <div className="container">
        <div className={`row pt-5 ${Style.roww}`}>
          {recipes?.map((recipe) => {
            return (
              <div className={`${Style.bg} col-md-4 p-0 m-1`}>
                <img src={recipe.image_url} className="w-100" alt="" />
                <h4 className="text-center text-white">
                  {recipe.title.split(" ").slice(0, 2).join(" ")}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
