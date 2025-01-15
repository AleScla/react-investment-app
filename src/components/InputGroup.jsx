export default function InputGroup(){
    return(
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label>Investimento iniziale</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Investimento annuale</label>
                    <input type="text" />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>Profitto previsto</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Durata</label>
                    <input type="text" />
                </div>
            </div>
        </section>
    )
}