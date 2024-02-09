import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserByIdAPI } from '../../redux/slice/profile-slice'

const HeaderDashboard = ({ openMenu, toggleMenu }) => {
  const userId = JSON.parse(Cookies.get('responLogin')).user.id 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserByIdAPI(userId))
  }, [])

  const user = useSelector(state => state.profile).userById.data

  return (
    <>
      <nav className="fixed top-0 z-50 w-full">
        <div className='bg-white flex justify-between items-center border-b-2 p-6 md:px-10'>
          <div className='flex items-center gap-2'>
            <div className='flex md:hidden items-center border rounded-lg p-2'>
              <button onClick={toggleMenu}>
                {openMenu ? (<img src="/Close.svg" alt="" srcSet="" />) : (<img src="/Menu.svg" alt="" srcSet="" />)}
              </button>
            </div>
            <Link to={'/'}>
              <div><img className='w-24 md:w-32' src="/LOGODIPI.png" alt="" srcSet="" /></div>
            </Link>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-10 md:w-10 h-10 md:h-10'>
              <img className='w-full h-full rounded-full object-cover' src={ user?.profile || "/BlankData.jpg"} alt="" srcSet="" />
            </div>
            <p className='hidden sm:flex text-base font-semibold'>{user?.name.replace(/\b\w/g, match => match.toUpperCase()) || "Nama User"}</p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderDashboard