# 02 - React Fundamentals

2.1. Creating functional components

```
export default function Card() {
    return (
        <div>
        I'm a card!
        </div>
    );
}
```

2.2. Using them as a HTML tag with JSX syntax

```
<Card />
```

2.3. Passing properties (or 'props')

```
export default function Student(props) {
    return (
        <div>
            {props.name}
            {props.age}
        </div>
    );
}

// ...

<Student name={'Moisés'} age={19} />
```

2.4. React Fragment

- A React component MUST be covered with just ONE element. Otherwise, React will throw a error.

WRONG:
```
function MyComponent()
{
    return (
        <h1>My Title</h1>
        <div>My Text</div>
        <small>Copyright</small>
    );
}
```

RIGHT:
```
function MyComponent()
{
    return (
        <div>
            <h1>My Title</h1>
            <div>My Text</div>
            <small>Copyright</small>
        </div>
    );
}
```

- If you want avoid create randomic divs for each component (even if it's not the best solution for you problem), React provides the React Fragment (`<> or <Fragment>`), which create a invisible capsule for you component content.

Example:
```
function MyComponent()
{
    return (
        <>
            // Content ...
        </>
    );
}
```

2.5. Lists & repetition

```
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
```

Use the list as `<StudentList />`.