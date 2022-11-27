import './App.css';


import FoodsMenu from './Components/FoodsMenu';
import OrderCard from './Components/OrderCard';

function App() {

  

  return (    
    <div className="App">
      <FoodsMenu/>      
      <OrderCard/>

      {/* <div className='w-full h-full bg-black sm:bg-red-500 md:bg-green-500 lg:bg-blue-500 xl:bg-white'>test</div> */}
    </div>
  );
}

export default App;