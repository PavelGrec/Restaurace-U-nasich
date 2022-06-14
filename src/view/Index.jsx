//iport react
import { Link } from "react-router-dom"

//import components
import Header from "../components/Header"
import { Card } from "../components/Card"
import { RollImg } from "../assets/js/data"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


const Index = () => {
  return (
    <>
        <Header pictures={RollImg()}/>
        <main>
            <div className="width">
                <h1>Naše nabídka</h1>
                <section className="flexCenter sectionExtraPadding sectionCards">
                    <Link to="/Poledni_menu"><Card text={'Polední menu'} img={'https://imgproxy.mangoweb.org/xiBSkd-0trpYACgk2JrMQ0eYBEBjyquqtL0mI3wFeQY/fill/462/288/no/1/aHR0cHM6Ly9zMy5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS91cGxvYWRzLm1hbmdvd2ViLm9yZy9zaGFyZWQtcHJvZC9qaWRsb2FyYWRvc3QuYW1iaS5jei91cGxvYWRzLzIwMjEvMDMvaW1nXzQ1MTktMi5qcGc.jpg'}/></Link>
                    <Link to="/Menu"><Card text={'Jídelní lístek'} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrGrHOwvqkFOsAslCTce4QtUesmE4vHnAqQ&usqp=CAU'}/></Link>
                    <Link to="/Napojovy_listek"><Card text={'Nápojový lístek'} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48RwUziNLCUwf7b55Bao0igTsnHt6Udk76A&usqp=CAU'}/></Link>
                    <Link to="/Dezerty"><Card text={'Dezerty'} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrGrHOwvqkFOsAslCTce4QtUesmE4vHnAqQ&usqp=CAU'}/></Link>
                </section>
            </div>
        </main>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Index