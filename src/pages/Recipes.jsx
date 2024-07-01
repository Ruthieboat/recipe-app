import RecipeCard from "../components/RecipeCard";
import recipeOneImage from "../assets/images/recipeone.png";
import recipeTwoImage from "../assets/images/recipetwo.png";
import recipeThreeImage from "../assets/images/recipethree.png";
import recipeFourImage from "../assets/images/recipefour.png";
import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ButtonNav from "../components/ButtonNav";



 export default function Recipes() {
    return (
        <><div className=" px-10 py-10">
            <h5 className="flex justify-center font-bold py-5 ">Search</h5>
            <div>
                <h4 className="flex font-bold">What is in your kitchen?</h4>
                <p className="font-thin text-xs py-1 ">Enter some ingredients</p>
            </div>
            <div className="flex border-solid border-4 rounded-[5] border-cyan-700 ">
                <MagnifyingGlassIcon className="size-4 " />
                <input type="text" />
            </div>
            <div className="grid grid-cols-2 gap-5">
                <RecipeCard image={recipeOneImage}
                    name="Chorizo & mozzarella gnocchi bake" />
                <RecipeCard image={recipeTwoImage}
                    name="Coconut & squash curry" />
                <RecipeCard image={recipeThreeImage}
                    name="Huevos Rancherose" />
                <RecipeCard image={recipeFourImage}
                    name="Black forest Gateau" />
            </div>
        </div><ButtonNav /></>
    );
}
