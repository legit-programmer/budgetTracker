import { useState, useEffect } from 'react'
import Form from './Form';
import TileMain from './TileMain';

const Home = () => {
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
}

export default Home