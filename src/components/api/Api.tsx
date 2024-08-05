import { useState, useEffect } from 'react';
interface Post {
    id: number;
    title: string;
    body: string;
}

const Api: React.FC = () => {
    const [data, setData] = useState<Post[]>([]);
    const getData = async (): Promise<void> => {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts');
            const jsonResult: Post[] = await result.json();
            setData(jsonResult);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h2>API Testing</h2>
            <ul>
                {data.map((info) => (
                    <li key={info.id}>
                        <p>Id: {info.id}</p>
                        <p>Title: {info.title}</p>
                        <p>Body: {info.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Api;

