import React from 'react'
import { Link } from 'react-router-dom'

const Breadcumbs = ({previousPage, currentPage, goTo}) => {

  return (
    <div className='flex items-center gap-2'>
      <Link to={goTo} className='dark:text-slate-100 font-semibold text-slate-900 cursor-pointer hover:underline '>{previousPage}</Link>
      <i class="fa-solid fa-angle-right dark:text-slate-100 text-slate-900"></i>
      <p className='dark:text-slate-100 text-slate-900 font-semibold'>{currentPage}</p>
    </div>
  )
}

export default Breadcumbs
