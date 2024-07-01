import { BookmarkIcon, HeartIcon, HomeIcon, PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonNav = () => {
  return (
    <div className='flex flex-row justify-evenly items-center h-[95px] fixed bottom-0 w-full bg-[#D9D9D9E5] '>
        <NavLink to="/recipes">
            <HomeIcon className="size-[24px]" />
        </NavLink>
        <NavLink to="/categories">
            <BookmarkIcon className="size-[24px]" />
        </NavLink>
        <NavLink to="/favorites">
            <HeartIcon className="size-[24px]"/>
        </NavLink>
        <NavLink to="/recipes">
            <PlusIcon className="size-[24px]" />
        </NavLink>
    </div>
  )
}

export default ButtonNav