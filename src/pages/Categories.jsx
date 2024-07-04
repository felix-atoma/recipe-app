import React, { useEffect, useState } from 'react'
import CategoryTile from "../components/CategoryTile";
import BottomNavigation from '../components/BottomNavigation';
import axios from 'axios';


const Categories = () => {
  // Define a state to store categories
  const [categories, setCategories] = useState([]);
  // Define a function to get categories
  const getCategories = async () => {
    const response = await axios.get(`${import.meta.env.VITE_RECIPE_API}/categories`);
    setCategories(response.data)
  }
  // Fetch data with useEffect

  useEffect(() => {
    getCategories();
  }, []);
  return (

    <>
      <div>


        <p className='text-center font-bold text-2xl pt-4'>Cathegories</p>


        <div className='grid grid-rows-7 gap-5 pt-16'>
          {categories.map(category => (
            <CategoryTile key={category.id}
              name={category.name}
              image={`${import.meta.env.VITE_RECIPE_API}/`} />
          ))}
        </div>

      </div>
      <div>
        <BottomNavigation />
      </div>
    </>
  )
}

export default Categories