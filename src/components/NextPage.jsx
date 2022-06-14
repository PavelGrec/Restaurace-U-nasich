import React from 'react'
import { Link } from 'react-router-dom'
import {FcNext,FcPrevious} from 'react-icons/fc'

const NextPage = ({text1, url1, text2, url2}) => {
    console.log(text1)

    const section = {width:'100%', display:'flex'}
    const next = {width:'inherit',display:'flex',justifyContent: 'flex-end'}
    const link = {display:'flex',alignItems: 'center',width: 'max-content'}

  return (
       <div className='next' style={section}>
         
         {text1===undefined||url1===undefined?'':<div className="prev">
          <Link style={link} to={url1}> <FcPrevious/><FcPrevious/>{text1}</Link>
            </div>}
         
            
            {text2===undefined||url2===undefined?'':<div className="next" style={next}>
                <Link style={link} to={url2}>{text2}<FcNext/><FcNext/></Link>
            </div>}
    </div>
  )
}

export default NextPage