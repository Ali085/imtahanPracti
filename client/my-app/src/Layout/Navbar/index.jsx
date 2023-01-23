import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

function Navbar() {
  return (
    <>
    <nav>
     <div className='navDiv'>
         <div className='navLogo'> <Link to={'/'}>Notary</Link></div>
         <div className='navList'>
             <ul>
                 <li><Link to={'/'}>Home</Link></li>
                 <li><Link to={'/addpage'}>Add</Link></li>
             </ul>
         </div>
     </div>
    </nav>
    </>
  )
}

export default Navbar