import './App.css'
import Login from './Login'
import Header from './components/header'

function App() {

  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <>
    <Header />
      <Login/>
      <h3>Test</h3>
    </>
  )
}


export default App
