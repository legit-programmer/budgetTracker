import { useState } from "react";

interface props {
    data:any,
    setData:(any)
}

const Form = ({data, setData}:props) => {
    const [amount, setAmount] = useState(0);
    const [color, setColor] = useState('red');
    
    const handleClick = ()=>{
        let temp = data.slice();
        temp.push({amount:amount, color:color});
        setData(temp);
        
    }
    return (
        <div className="form">
            <div>
                <h1>Budget Tracker</h1>
                <div className="c2">
                    <div>
                        <input className="amt" onChange={(e)=>setAmount(Number(e.target.value))}  id="amount" />
                        <br />
                        <div className="rad">
                            <input onChange={(e)=>e.target.value&&setColor('red')} type="radio" name="category" />
                            <label>Expense</label>
                            <br />
                            <input onChange={(e)=>e.target.value&&setColor('green')} type="radio" name="category" />
                            <label>Earnings</label>
                        </div>
                        <br />
                        <button className="but" onClick={handleClick}>Add</button>
                        <button className="but" onClick={()=>setData([])}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;