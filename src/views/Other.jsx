
import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Other = () => {

    const getBikesData = async () => {
        let response = await axios.get('http://127.0.0.1:5000/auth/bikes');
        return response.status === 200 ? response.data : null;
    }
    const loadBikesData = async () => {
        let data = await getBikesData();
        setBikes(data.bikes);
    }

    const [bikes, setBikes] = useState(() => loadBikesData());
    //console.log(bikes)

    return (
         <div>
            <h1>Time to go for a ride on a Transition Mountain Bike!!</h1>
            <div className="conatiner" style={{color:"purple"}}>
                {bikes && bikes.length? bikes.map((b, index) => {
                    return <Card key={index} id={b.id} style={{ width: '13rem' }}>
                        <Card.Img variant="top" src={b.pic} />
                        <Card.Body>
                            <Card.Title>{b.name}</Card.Title>
                        </Card.Body>
                    </Card>


                })
                    :
                    <h1>Loading please be patient</h1>
            
            }   
            </div>

        </div>
    )
};


export default Other;


