import {useState} from 'react';
import Header from './components/Header';
import InputGroup from './components/InputGroup';
function App() {
  // "alzo" questo stato nell'app component perchè l'userInput mi 
  // servirà nei calcoli per stampare gli eventuali risultati.
  const [userInput, setUserInput] = useState({
    initialInvestment: 5000,
    annualInvestment: 1000,
    expectedReturn: 8,
    duration: 5,
  })
  function inputHandle(key, value){
    // il prevUserInput perchè in react è meglio non modificare direttamente
    // la variabile iniziale ma crearne una copia
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [key]: value, // sintassi di js per cambiare la singola coppia chiave/valore
      }
      
    })
    
  }
  return (
    <>
      <Header/>
      <InputGroup inputHandle={inputHandle} userInput={userInput}/>
    </>
  )
}

export default App
