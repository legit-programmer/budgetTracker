interface props {
    amount: number;
    color: string;
    id: number;
    data: {
        amount: number;
        color: string;
    }[];
    setData: any;
}

const Tile = ({ amount, color, id, data, setData }: props) => {
    const handleClick = () => {
        const temp = data.filter((item, i) => {
            if (i !== id) {
                return item;
            }
        });
        setData(temp);
    };
    const updateTx = ()=>{
        const temp = [...data]
        temp.forEach((item, index)=>{
            if(index==id){
                const temp = prompt('Enter an amount')
                if(temp!=null){
                    item.amount=Number(temp);
                }
            }
        })
        setData(temp);
    }
    return (
        <div className="single">
            <h3
                style={{
                    color:
                        color == "Expense"
                            ? "rgb(220, 83, 83)"
                            : "rgb(18, 155, 112)",
                }}
            >
                {amount}Rs
            </h3>
            <div className="close-btn">
                <button 
                    onClick={updateTx}
                    type="button"
                    className="btn btn-outline-primary"
                    aria-label="Close"
                >Update</button>
            </div>
            <div className="close-btn">
                <button
                    onClick={handleClick}
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                ></button>
            </div>
        </div>
    );
};

export default Tile;
