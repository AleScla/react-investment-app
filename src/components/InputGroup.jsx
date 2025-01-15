export default function InputGroup({inputHandle, userInput}){
    return(
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label>Investimento iniziale</label>
                    <input type="number" required 
                    value={userInput.initialInvestment} 
                    onChange={(event)=> inputHandle('initialInvestment', event.target.value)} />
                </div>
                <div>
                    <label>Investimento annuale</label>
                    <input type="number" required 
                    value={userInput.annualInvestment} 
                    onChange={(event)=> inputHandle('annualInvestment', event.target.value)}/>
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>Profitto previsto percentuale</label>
                    <input type="number" required  
                    value={userInput.expectedReturn} 
                    onChange={(event)=> inputHandle('expectedReturn', event.target.value)}/>
                </div>
                <div>
                    <label>Durata</label>
                    <input type="number" required min='1' 
                    value={userInput.duration} 
                    onChange={(event)=> inputHandle('duration', event.target.value)} />
                </div>
            </div>
        </section>
    )
}