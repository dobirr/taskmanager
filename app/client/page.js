'use client';
import {useState} from "react";

const ClientPage = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1 className="text-5xl mb-8 font-bold">{count}</h1>
            <buton className="btn btn-primary" onClick={() => setCount(count + 1)}>increase</buton>
        </div>
    );
};

export default ClientPage;
