

interface props {
    amount: number;
    color:string;
}

const Tile = ({ amount, color }: props) => {
    return (
        <div className="single">
            <h3 style={{color:color=='red'?'rgb(220, 83, 83)':"rgb(18, 155, 112)"}}>{amount}Rs</h3>
        </div>
    );
};

export default Tile;
