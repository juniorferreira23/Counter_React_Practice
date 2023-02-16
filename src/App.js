import './App.css';
import Header from './Header.js'
import Contador from './Contador.js'
import { useEffect, useState } from 'react';

function App() {

  const [show, setShow] = useState(true)

  let time = 0

  useEffect(() => {
    let timer = setInterval(() => {
      
      if(time >= 5){
        setShow(false)
        clearInterval(timer)
      }else{
        time++
        console.log(time)
      }

    }, 1000)
  }, [time])

  if(show){
    return (
      <div className="App">
        <Header logo={'ProgBr'} links={['Sobre', 'Compra', 'Contato', 'Login']}></Header>
        <Contador count={0}></Contador>
      </div>
    );
  }else{
    return (
      <div className="App">
        <Header logo={'ProgBr'} links={['Sobre', 'Compra', 'Contato', 'Login']}></Header>
        <div>Sem contador</div>
      </div>
    )
  }
}

export default App;
