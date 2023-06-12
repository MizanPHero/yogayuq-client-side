import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageUsers = () => {

    const {data: users = []} = useQuery(['users'], async()=> {
        const res = await fetch('http://127.0.0.1:5000/users')
        return res.json();
    })

    return (
        <div>
            all user list {users.length}
        </div>
    );
};

export default ManageUsers;