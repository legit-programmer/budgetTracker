import { useEffect, useState } from "react";
import Form from "./components/Form";
import TileMain from "./components/TileMain";

const App = () => {
    const status:any = localStorage.getItem('transactions');
    
    const [data, setData] = useState(status===''?[]:JSON.parse(status));
    useEffect(()=>{
        localStorage.setItem('transactions', JSON.stringify(data));
    }, [data])
    return (
        <div className="content">
            <Form data={data} setData={setData} />
            <TileMain data={data} setData={setData}/>
        </div>
    );
};

export default App;
