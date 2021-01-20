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