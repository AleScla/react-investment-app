import Logo from '../assets/investment-calculator-logo.png'
export default function Header(){
    return(
        <header id='header'>
            <img src={Logo} alt="Logo" />
            <h1>Calcolatore di investimenti</h1>
        </header>
    )
}