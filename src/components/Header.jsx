import './Header.scss'
import { useRef } from 'react'
import pic from './../assets/img/pic1.jpg'
const Header = ({pictures}) => {
    const Roll = useRef()
        
        // for (let index = 0; index < pictures.length; index++) {
        //     if(index===pictures.length+1){index=0}
        //     console.log(heade);
        //     // setInterval(header.style.left=index*(-100)+'px',1000)
        // }

          
          // You can now get a ref directly to the DOM button:
  return (
    <header id='header'>
        <div id="RollingFrame" ref={Roll}>
        <img src={pic} alt=""/>

        </div>

    </header>
  )
}

export default Header