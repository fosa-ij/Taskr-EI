import './App.css'

import Todo from './Todo'

import Login from './Login'
import Header from './components/header'
import Button from './components/Button'


function App() {

  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <>

      <h1>Todo List</h1>
      <Todo/>
    <Header />
      <Login/>
      <h3>Test</h3>
      <Button onClick={handleClick} children={'click me'}/>

    </>
  )
}


export default App
