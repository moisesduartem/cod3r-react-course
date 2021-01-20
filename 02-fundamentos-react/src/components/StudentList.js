import React from 'react';
import students from '../data/students';

export default function StudentList() {

    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>
                    {student.id} {student.name} {student.age}
                </li>
            })}
        </ul>
    );
}
