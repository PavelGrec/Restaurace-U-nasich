import React from 'react'

const Cont = () => {
  return (
    <div className='flex'>
        <section>
                    <h2>Nebojte se nás kontaktovat</h2>

                    <div className="halfsection halfHeight">
                        <div className="half kontaktAdress">
                            <h3> Nacházíme se na ulici:<br/> Hybešova 2030<br/> Praha<br/>68101</h3>
                        </div>

                        <div className="half">
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.614684345393!2d14.457632115609668!3d50.09350062090125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a71b64cd57%3A0xc8ba52c5eb0a5d36!2sHybe%C5%A1ova%2C%20186%2000%20Praha%208!5e0!3m2!1sen!2scz!4v1654001367221!5m2!1sen!2scz"
                        width="100%" 
                        height="200px" 
                        style="border:none;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"/>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Otevírací doba</h2>
                    {openTime.map(x=>
                    <div key={x.id}>
                        <h4 className="textcenter">{x.name}</h4>
                    </div>
                    )}
                </section>
    </div>
  )
}

export default Cont