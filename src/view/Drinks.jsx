import Header from "../components/Header"
import { Napoj } from "../assets/js/data"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import NextPage from "../components/NextPage"

const Drinks = () => {
  return (
    <>
        <Header/>
        <main>
            <div className="menuWidth sectionExtraPadding">
            <NextPage url1={'/Menu'} text1={'Menu'} url2={'/Dezerty'} text2={'Dezerty'}/>

            <h1>Nápojový lístek</h1>

            {Napoj().map(x=>
              <>
                <h3 key={x.id}>{x.name}</h3>
                {x.drinks.map(o=>

                  <div key={o.id} className="listek">
                    <div className="left">
                      <span>{o.g}</span> {o.name}
                      </div>
                      <div className="right"><span>{o.price},-</span></div>
                  </div>

                
                  )}
              </>
              )}

               <br/><br/>
<NextPage className="mt" url1={'/Menu'} text1={'Menu'} url2={'/Dezerty'} text2={'Dezerty'}/>

            </div>
        </main>
        <Contact/>
        <Footer/>


    </>
  )
}

export default Drinks