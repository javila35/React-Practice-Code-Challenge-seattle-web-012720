import React from 'react';

const Form = (props) => {
    return(
        <div>
            <form onSubmit={(event) => {event.preventDefault();props.addMoney(event.target.budget.value);}}>
                <input 
                type="number" 
                name="budget" 
                placeholder="amount to add" 
                />
                <input type="submit" value="Add Money"/>
            </form>
        </div>
    )
}

export default Form;