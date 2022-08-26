import React, {useState} from 'react'

const BuyTickets = () => {
 const [books, setBooks] = useState([])

    const getData = async () => {
        try {
            const res = await fetch('http://127.0.0.1:8000/books/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const response = await res.json();
            console.log(response)
            setBooks(response)
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>BuyTickets
            <button onClick={() => getData() }>Buy tic</button>
            {books.lenght > 0 && books.map((item) => (
                <div>
                    {JSON.stringify(item.name)}
                    <br></br>
                </div>
            ))}
        </div>
    )
}



export default BuyTickets