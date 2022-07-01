import './App.css';


const apiKey = process.env.API_KEY;

function App() {
  return (
    <div className="app">
    <input type="text" className='address' placeholder='address'/>
    <input type="text" className='input__lat' placeholder='latitude'/>
    <input type="text" className='input__long' placeholder='longitude'/>
    </div>
  );
}

export default App;

