import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Card from './Component/Card';

// import logo from './Images/Katie-Zaferes.png'
import data from './data';



function App() {
  

  const cards = data.map(item => {
    return(
    
      <Card
      key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        country={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />


    )
  })


  return (
    <div >
      <Navbar />
      <Hero />
      <div className='cards--list'>
      {cards}      
      </div>
    </div>
  );
}

export default App;
