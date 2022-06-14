import React from 'react'
import Header from '../components/Header'
import { MidMenuData } from '../assets/js/data'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const MidMenu = () => {
  return (
    <>
    <Header/>
    <main>
      <div className="menuWidth sectionExtraPadding">
        <h1>Polední menu</h1>
        {MidMenuData().map(x=>
          <>
            <h3 key={x.id}>{x.name}</h3>
            {x.obedy.map(o=>

            {if(o.type==='polevka')return <span>{o.name}</span>
              return <div key={o.key} className="listek">
                <div className="left">
                  <span>{o.g}</span> {o.name}
                  </div>
                  <div className="right"><span>{o.price},-</span></div>
              </div>}
              
            
              )}
          </>
          )}

        
      </div>
    </main>
    <Contact/>
    <Footer/>


    </>
  )
}

export default MidMenu