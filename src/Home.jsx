import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardProduct from "./components/CardProduct";
import React, {useState} from 'react'





const Home = () => {



  const [products, setProducts] = useState([

    {id:1, image:'http://picsum.photos/id/100/200/120', title:'Product 1', price: 100000, buttonText:'Agregar al carro'},
    {id:2, image:'http://picsum.photos/id/200/200/120', title:'Product 2', price: 200000, buttonText:'Agregar al carro'},
    {id:3, image:'http://picsum.photos/id/300/200/120', title:'Product 3', price: 300000, buttonText:'Agregar al carro'},
    {id:4, image:'http://picsum.photos/id/400/200/120', title:'Product 4', price: 400000, buttonText:'Agregar al carro'},
    {id:5, image:'http://picsum.photos/id/500/200/120', title:'Product 5', price: 500000, buttonText:'Agregar al carro'},
    {id:6, image:'http://picsum.photos/id/600/200/120', title:'Product 6', price: 600000, buttonText:'Agregar al carro'},
    {id:7, image:'http://picsum.photos/id/700/200/120', title:'Product 7', price: 700000, buttonText:'Agregar al carro'},
    {id:8, image:'http://picsum.photos/id/800/200/120', title:'Product 8', price: 800000, buttonText:'Agregar al carro'},
    
  ])
  
 

  return (
          
    <>
      <Nav />
      <Header />
      {/* <!-- Section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

          { 

           products.length >= 0 ? products.map((product)=>{ return( <div className="col mb-5" key={product.id}> <CardProduct {...product}/></div>  )})  : <div>No hay productos para mostrar</div> 
                      
          }

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
  
};


export default Home;
