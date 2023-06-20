import Tile from "./Tile";

interface props {
    data: {
        amount: number;
        color: string;
    }[];
    setData:any;
}

const TileMain = ({ data, setData }: props) => {
    return (
        <div className="tiles">
            <div>
                {data.map((d, index) => {
                    return <Tile data={data} setData={setData} id={index} key={index} amount={d.amount} color={d.color} />;
                })}
            </div>
        </div>
    );
};

export default TileMain;
