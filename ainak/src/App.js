import './App.css';
import Menspage from './Pages/Menspage';

import Homepage from './Pages/Homepage';
import CartA from './Pages/Cart/CartA';
import Sunglasses from './Pages/Sunglasses/Sunglasses';
import Computerglasses from './Pages/ComputerGlasses/Computerglasses';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <div className="App">

      <h1>Enter</h1>
       {/* <Menspage/> */}
    
       <AllRoutes/>
      {/* <Homepage/> */}

      {/* <Computerglasses/> */}
      {/* <CartA/> */}
     </div>

  );
}

export default App;
