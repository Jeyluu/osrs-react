import React from 'react'
import './Home.css'
import banner from './testbaner.png'
import Footer from '../../Components/Footer/Footer';


export default function Home() {
    


    return (
        <div>
            
            <div>
                <img src={banner} alt="banner-osrs" className="banner" />
            </div>

            <div className="description">
                <h2 className="des-title">Game Introduction</h2>
                <p className="des-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla libero veritatis earum tempore maiores sunt eaque laborum tenetur! Similique, soluta quia. Hic libero provident veritatis temporibus doloribus fugit sed reiciendis adipisci mollitia, ut placeat labore culpa, in nisi laudantium deleniti excepturi accusamus inventore porro nobis vitae fugiat et voluptatibus. Totam voluptatibus amet voluptates eum iure, rem aliquam impedit repellendus. Tempora ratione similique nam! Quae libero mollitia cum facere fuga similique voluptatibus molestiae dignissimos vero. Repellat eum debitis minima veniam at voluptatum possimus ipsa quod ea magni architecto, repudiandae expedita beatae consectetur quaerat natus corrupti dicta harum ut? Labore incidunt esse numquam, molestias maiores temporibus ipsam aliquid! Et, quibusdam iusto ea, eum molestiae labore unde blanditiis soluta molestias nostrum vitae rerum, consequatur qui adipisci accusantium minima reprehenderit. Minima fugit dignissimos rem sunt numquam ipsam veritatis, error, praesentium minus laudantium natus consequatur consequuntur repellendus iure expedita facere earum fugiat veniam ullam! Quod!</p>
            </div>
            <Footer />
        </div>
    )
}
