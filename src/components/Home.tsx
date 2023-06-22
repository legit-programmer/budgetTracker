import { useState } from 'react'
import Form from './Form';
import TileMain from './TileMain';

const Home = () => {
    const status:any = localStorage.getItem('transactions');
    const [data, setData] = useState(status===''?[]:JSON.parse(status));
    
    return (
        <div className="home">
            <div className="content">
                <Form data={data} setData={setData} />
                <TileMain data={data} setData={setData}/>
            </div>
        </div>
    );
}

export default Home