//imports
import React from 'react'
import Header from '../components/Header'
import { MenuData } from '../assets/js/data'
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import NextPage from '../components/NextPage';


const Menu = () => {
  return (
    <>
    <Header/>
    <main>
      <div className="menuWidth sectionExtraPadding">
      <NextPage url2={'/Napojovy_listek'} text2={'Napojovy lístek'}/>
      <NextPage url2={'/Dezerty'} text2={'Dezerty'}/>
        <h1>Jídelní lístek</h1>
        <h3>Předkrmy:</h3>
        {MenuData().Predkrmy.map(x=>
        <div key={Math.random()} className="listek">
          <div className="left">
            <span>{x.g}</span> {x.name}
          </div>
          <div className="right"><span>{x.price},-</span></div>
        </div>)}

        <h3>Polévky:</h3>
        {MenuData().Polevky.map(x=>
        <div key={Math.random()} className="listek">
          <div className="left">
            <span>{x.g}</span> {x.name}
          </div>
          <div className="right"><span>{x.price},-</span></div>
        </div>)}

        <h3>Steaky:</h3>
        {MenuData().Steaky.map(x=>
        <div key={Math.random()} className="listek">
          <div className="left">
            <span>{x.g}</span> {x.name}
          </div>
          <div className="right"><span>{x.price},-</span></div>
        </div>)}

        <h3>Burgery:</h3>
        {MenuData().Burgery.map(x=>
        <div key={Math.random()} className="listek">
          <div className="left">
            <span>{x.g}</span> {x.name}
          </div>
          <div className="right"><span>{x.price},-</span></div>
        </div>)}
       
       
       
        
        <br/><br/><br/><br/>
        <NextPage url2={'/Napojovy_listek'} text2={'Napojovy lístek'}/>
        <NextPage url2={'/Dezerty'} text2={'Dezerty'}/>


      </div>
    </main>
    <Contact/>
    <Footer/>

    </>
  )
}

export default Menu
