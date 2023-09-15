import movieBox from './assets/tv.png'
import searchBtn from './assets/Search.png'
import menu from './assets/menu.svg'
import { useState } from 'react'

const Navbar = ()=>{
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     }

     return (
          <div className="navbar" style={{
               color:'white',
               padding:'30px 40px'
               }}>
               <div className="moviebox flex">
                    <img src={movieBox} alt="" />
                    <h3>MovieBox</h3>
               </div>
               <div className={`menu ${menuOpen ? 'open' : ''}`} style={{position:'relative'}}>
                    <input type="search" name="" id="search" placeholder='what do you want to watch' style={{
                         background:'none',
                         border:'1px solid white',
                         borderRadius:'5px',
                         padding:'8px 10px',
                         width:'500px',
                    }}/>
                    <button style={{
                         position:'absolute',
                         right:'2px',
                         top:'-17px'
                    }}><img src={searchBtn} alt="" /></button>
               </div>

               <div className="sign flex">
                    <h3 className="sign">Sign in</h3>
                    <div className="signBtn" style={{
                         background:'#BE123C',
                         borderRadius:'50%',
                         cursor:'pointer',
                         padding:'6px'
                         }}>
                         <img onClick={toggleMenu} className='hamburger-menu' src={menu} width={24} height={24} alt="" />
                    </div>
                </div>
          </div>
     )
}

export default Navbar;