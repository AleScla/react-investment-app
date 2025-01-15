import {useState} from 'react';
import Header from './components/Header';
import InputGroup from './components/InputGroup';
import ResultsTable from './components/ResultsTable'
function App() {
  // "alzo" questo stato nell'app component perchè l'userInput mi 
  // servirà nei calcoli per stampare gli eventuali risultati.
  const [userInput, setUserInput] = useState({
    initialInvestment: 5000,
    annualInvestment: 1000,
    expectedReturn: 8,
    duration: 5,
  })
  let validation = userInput.duration > 0;
  function inputHandle(key, value){
    // il prevUserInput perchè in react è meglio non modificare direttamente
    // la variabile iniziale ma crearne una copia
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [key]: +value, // sintassi di js per cambiare la singola coppia chiave/valore
        //oltretutto, aggiungere "+" prima del valore, trasforma converte il valore da string a number
      }
      
    })
    
  }
  return (
    <>
      <Header/>
      <InputGroup inputHandle={inputHandle} userInput={userInput}/>
      {validation ? <ResultsTable userInput={userInput}/> : <p className="center">Valore non valido, inserisci un valore superiore ad 1</p>}
    </>
  )
}

export default App
