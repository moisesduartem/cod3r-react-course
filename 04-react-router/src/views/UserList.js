import React from 'react'
import users from '../data/users';

function UserList() {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({ id, name, job }, index) => {
                        return (
                            <tr key={index}>
                                <td>{id}</td>
                                <td><a href={`/users/${id}`}>{name}</a></td>
                                <td>{job}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    )
}

export default UserList;
