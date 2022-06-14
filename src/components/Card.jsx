

import './Card.scss'
export const Card = ({img,text}) => {
    

  return (
    <div id="card">
        <img src={img} alt="obrázek"/>
        <h2>{text}</h2>
    </div>
  )
  
}
