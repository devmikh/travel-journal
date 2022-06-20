import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

export default function App() {

  const cards = data.map(entry => {
    return <Card {...entry} />
  })

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}
