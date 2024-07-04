
import { BookmarkIcon } from '@heroicons/react/24/solid'

import { HeartIcon } from '@heroicons/react/24/solid'
import { PlusSmallIcon } from '@heroicons/react/24/solid'



import { HomeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { NavLink } from 'react-router-dom'

const BottomNavigation = () => {
    return (
        <div className='flex justify-evenly items-center h-[96px] fixed  bottom-0 w-full bg-slate-50'>
            <NavLink to={"./recipes"}>
                <HomeIcon className='size-[24px]' />
            </NavLink>
            
            <NavLink to={"./cathegories"}>
                <BookmarkIcon className='size-[24px]' />
            </NavLink>
            <NavLink to={"./favorite"}>
                <HeartIcon className='size-[24px]' />
            </NavLink>
            <NavLink to={"./ new/favorite"}>
                <PlusSmallIcon className='size-[24px]' />
            </NavLink>

        </div>
    )
}

export default BottomNavigation