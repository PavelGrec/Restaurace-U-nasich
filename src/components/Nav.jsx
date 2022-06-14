import './nav.scss'
import { NavLink,Link} from 'react-router-dom'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { useRef } from 'react'


const Nav = () => {
  const Relative = useRef()

  function prevent(e){
    e.preventDefault()
    const element = document.querySelector('footer')
    element.scrollIntoView()
  }

  function addActive(){
    console.log(Relative);

  }


  return (
    <nav>
        <div className="width">
            <div className="halfhalf">
              <div className="leftNav flex">
                <p id='logo'>Restaurace U&nbsp;našich</p>
                <NavLink to="/">O nás</NavLink>
                <NavLink to="/Poledni_menu">Polední menu</NavLink>

                <NavLink
                  ref={Relative}
                  className="relative" 
                  to="/Menu">Menu
                </NavLink>
                <a href="/" onClick={(e)=>prevent(e)}>Kontakt</a>
              </div>
              <div className="rightNav flex">
                <FaFacebookF/>
                <FaInstagram/>
              </div>
            </div>
        </div>

    </nav>
  )
}

export default Nav