// import Login from "./components/Login";
// import React from "react";
// import App from './App';
// import render from  'react-test-renderer';
// import { expect } from "vitest";


// test("First snapshot test", () =>{
// const component =render.create(
//   <App />
// );
// let tree=component.toJSON();
// expect (tree).toMatchSnapshot();
// }
// )


// // function App() {

// //   return (
// //     <>
// //     <h1>
// //       <Hello></Hello></h1>  
// //     </>
// //   )
// // }

// // export default App




import React from 'react';
import Button from './components/Button'


const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>My App</h1>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default App;

