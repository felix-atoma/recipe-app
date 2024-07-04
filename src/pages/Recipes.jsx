import React from 'react'
import RecipeCard from '../components/RecipeCard';
import recipeOneImage from "../assets/images/recipe1.png"
import recipeTwoImage from "../assets/images/recipe2.png"
import recipeThreeImage from "../assets/images/recipe3.png"
import recipeFourImage from "../assets/images/recipe4.png"

import BottomNavigation from '../components/BottomNavigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';




const Recipes = () => {
  return (
    <>
      <div className='px-10 py-10 flex flex-col gap-y-5'>
        <div className='flex justify-center text text-black'>

          <h2 className='text-center font-bold'> Search</h2>

        </div>

        <div className='grid justify-center items-center'>
          <h3 className='text text-black font font-bold'>What is in your kitcten?</h3>
          <p className='text text-black font font-thin'>Enter your ingredients</p>

        </div>
        <div className='flex justify-center items-centerm w-full'>


          <input
            className='py-2 px-4 border-2 border-blue-600 focus:outline-none rounded-lg'
            type="text"/>
            
          <MagnifyingGlassIcon className='size-[15px]' />
          <h3>Type your ingredients here</h3>
        </div>
        <div className='flex justify-center items-center gap-5'>
          <div>
            <RecipeCard image={recipeOneImage} name="Chorizo & mozzarela gnocchi bake" />
            <RecipeCard image={recipeTwoImage} name="Coconut & squash curry" />
          </div>
          <div>
            <RecipeCard image={recipeThreeImage} name="Huevos Rancheros" />
            <RecipeCard image={recipeFourImage} name="Black forest gateau" />
          </div>
        </div>
      </div>
      <div>
        <BottomNavigation />
      </div>
    </>
  );
}

export default Recipes