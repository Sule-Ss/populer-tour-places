import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import data from './components/data';

function App() {
  return (
   <div>
     <Header/>
     <Body veri = {data}/>
   </div>
   
  );
}

export default App;
