import Tile from "./Tile";

interface props {
    data: {
        amount: number;
        color: string;
    }[];
}

const TileMain = ({ data }: props) => {
    return (
        <div className="tiles">
            <div>
                {data.map((d) => {
                    return <Tile amount={d.amount} color={d.color} />;
                })}
            </div>
        </div>
    );
};

export default TileMain;
