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
    return (
        <div className="single">
            <h3
                style={{
                    color:
                        color == "red"
                            ? "rgb(220, 83, 83)"
                            : "rgb(18, 155, 112)",
                }}
            >
                {amount}Rs
            </h3>
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
