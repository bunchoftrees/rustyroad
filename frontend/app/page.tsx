"use client";

import { useEffect, useState } from 'react';

export default function Home() {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080';
        console.log(`Fetching data from ${backendUrl}`);
        fetch(`${backendUrl}`)
            .then(response => {
                console.log('Response status:', response.status);
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                console.log('Data fetched successfully:', data);
                setData(data);
            })
            .catch(error => console.error('Error fetching data 3:', error));
    }, []);

    return (
        <div>
            <h1>rustyroad Frontend</h1>
            <p>{data ? data : 'Loading...'}</p>
        </div>
    );
}
