import {calculateInvestmentResults, formatter} from '../util/investment'
export default function ResultsTable({userInput}){
    const results = calculateInvestmentResults(userInput);
    return(
       <section>
         <table id="result">
            <thead>
                <tr>
                    <th>Anno</th>
                    <th>Valore investimento</th>
                    <th>Interessi (annuali)</th>
                    <th>Interessi totali</th>
                    <th>Capitale investito</th>
                </tr>
            </thead>
            <tbody>
                {
                    results.map((singleResult => {
                        const totalInterest = singleResult.valueEndOfYear - (singleResult.annualInvestment * singleResult.year) - userInput.initialInvestment;
                        const totalInvested = userInput.initialInvestment + (singleResult.annualInvestment * singleResult.year)
                        return (
                            <tr key={singleResult.year}>
                                <td>{singleResult.year}</td>
                                <td>{formatter.format(singleResult.valueEndOfYear)}</td>
                                <td>{formatter.format(singleResult.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalInvested)}</td>
                            </tr>
                        )
                    }))
                }
            </tbody>
        </table>
       </section>
    )
}