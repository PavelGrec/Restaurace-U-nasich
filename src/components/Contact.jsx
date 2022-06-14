import {BiTime} from 'react-icons/bi'
import {GiClick} from 'react-icons/gi'
import './Contact.scss'


const Contact = () => {
  return (
    <main className='bg sectionPadding'>
      <div className="width flexCenter ">
        <div className="half flexCenter">
          <table>
            <thead>
              <tr>
                <th colSpan="2"><BiTime fontSize="1.5rem"/></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pondeli</td>
                <td>&nbsp;&nbsp;11 – 14</td>
              </tr>
              <tr>
                <td>Uterý</td>
                <td>&nbsp;&nbsp;11 – 22</td>
              </tr>
              <tr>
                <td>Středa</td>
                <td>&nbsp;&nbsp;11 – 14</td>
              </tr>
              <tr>
                <td>Čtvrtek</td>
                <td>&nbsp;&nbsp;11 – 22</td>
              </tr>
              <tr>
                <td>Pátek</td>
                <td>&nbsp;&nbsp;11 – 22</td>
              </tr>
              <tr>
                <td>Sobota</td>
                <td>&nbsp;&nbsp;11 – 22</td>
              </tr>
              <tr>
                <td>Neděle</td>
                <td>&nbsp;&nbsp;zavřeno</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="half flexCenter">
          <article className="textCenter">
            <h3>Kontakt</h3>
            <p>Zborovská 336, 682 05 Kroměříž</p>
            <a href='tel:720 642 611'>tel:720 642 611</a><GiClick/>
            <a href='mailto:Restaurace@seznam.cz'>Restaurace@seznam.cz</a><GiClick/>
          </article>
          

        </div>

      </div>

    </main>
  )
}

export default Contact