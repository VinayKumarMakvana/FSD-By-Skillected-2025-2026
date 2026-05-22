import UserCard from './UserCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    setUsers(response.data);
                    setError(null);
                })
            .catch(() => {
                setError('Error fetching users');
            })
            .finally(() => {
                setLoading(false);
            });
        };
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
                setError(null);
            })
        .catch(() => {
            setError('Error fetching users');
        })
        .finally(() => {
            setLoading(false);
        });
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }
  return (
    <div>
        <button onClick={fetchUsers}>Refresh Users</button>
        <div className='grid'>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    </div>
  )
}

export default UserList