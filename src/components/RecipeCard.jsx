import { HeartIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"



const RecipeCard = ({image,name}) => {
  return (
    <div className="relative">
        <div className="h-[27px] w-[23px] bg-white absolute top-0 right-0rounded-[7px] flex justify-center items-center m-0 p-0">
        <HeartIcon className="size-[15px]"/>
      
        </div>
        <img src={image} alt={name} />
        <p className="absolute left-2 bottom-2 text-white font-bold">{name}</p>
         <div>
          
         </div>
    </div>
  )
}

export default RecipeCard