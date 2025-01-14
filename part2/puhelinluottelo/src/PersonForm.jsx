export default function PersonForm({onSubmit, newName, personChange, newNumber, numberChange}){
    
    return(
        <div>
            <form onSubmit={onSubmit}>
            <div>
                name: <input 
                value={newName}
                onChange={personChange}
                />
            </div>
            <div>
                number: <input 
                value={newNumber}
                onChange={numberChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
        </div>
    )
}