import React from 'react'
import users from '../data/users';

function UserList() {
    return (
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Job</th>
            </thead>
            <tbody>
                {
                    users.map(({ id, name, job }, index) => {
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
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
