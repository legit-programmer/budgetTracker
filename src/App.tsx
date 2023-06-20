import { useState } from "react";
import Form from "./components/Form";
import TileMain from "./components/TileMain";

const App = () => {
    const [data, setData] = useState([]);
    return (
        <div className="content">
            <Form data={data} setData={setData} />
            <TileMain data={data} setData={setData}/>
        </div>
    );
};

export default App;
