import React from 'react'
import { useParams } from 'react-router-dom'

import users from '../data/users';

function User() {
    const { id } = useParams();

    const user = users.filter((el, i) => el.id == id)[0] ?? null;

    console.log(user);

    return (
        <>
            {
                (!!user) ? (
                    <div>
                        <h1>{user.name}</h1>
                        <li>{user.job}</li>
                    </div>
                ) : (
                        <div>
                            <h1>User with id {id} was not found.</h1>
                        </div>
                    )
            }
            <br />
            <a href="/users">Return to users list</a>
        </>
    );
}

export default User;
