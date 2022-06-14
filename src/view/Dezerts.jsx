import Header from '../components/Header'
import { Dezerty } from '../assets/js/data'
import Contact from '../components/Contact'
import NextPage from '../components/NextPage'

const Dezerts = () => {
  return (
    <>
    <Header/>
    <main>
        <div className="menuWidth sectionExtraPadding">
        <NextPage url1={'/Napojovy_listek'} text1={'Napojovy lístek'}/>
        <NextPage url1={'/Menu'} text1={'Menu'}/>
        <h1>Dezerty</h1>
            {Dezerty().map(x=>
                <div key={x.id} className="listek">
                    <div className="left">
                        <span>{x.g}</span>{x.name}
                    </div>
                    <div className="right">
                        <span>{x.price}</span>
                    </div>
                </div>
                )}


        <br/><br/>
        <NextPage url1={'/Napojovy_listek'} text1={'Napojovy lístek'}/>
        <NextPage url1={'/Menu'} text1={'Menu'}/>


        </div>
    </main>
    <Contact/>
    </>
  )
}

export default Dezerts