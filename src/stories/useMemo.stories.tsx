import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useMemo',
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(53)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <>
            A: <input value={a} onChange={(e) => setA(Number(e.target.value))}/>
            B: <input value={b} onChange={(e) => setB(+e.target.value)}/>
            <hr/>
            <div>
                Result for A: {resultA}
            </div>
            <div>
                Result for B: {resultB}
            </div>
        </>
    )
}


const UsersSecret = React.memo((props: { users: string[] }) => {
    console.log('users secret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})

const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    console.log('HelpsToReactMemo')

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Ansar', 'Karim', 'Ayna'])

    const newArray = useMemo(()=>{
       return users.filter((u) => u.toLowerCase().indexOf('r') !== -1)
    },[users])


    const addUser = () => {
        const newUsers = [...users, 'Murat' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <button onClick={addUser}>Add user</button>
        <Users users={useMemo(()=> users.filter((u) => u.toLowerCase().indexOf('r') !== -1),[users])} />
    </>
}





export const LikeUseCallback = () => {
    console.log('LikeUseCallback')

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const addBook = () => {
        const newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)
    }

    const memoizedAddBook = useMemo(()=> addBook, [ books])

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        {counter}
        <Book books={books} addBook={memoizedAddBook} />
    </>
}

type BooksSecretType = { books: string[], addBook:()=>void }

const BooksSecret = (props: BooksSecretType) => {
    console.log('books secret')
    return <div>
        <button onClick={props.addBook}>Add book</button>
        {props.books.map((b, i) => <div key={i}>{b}</div>)}
    </div>
}

const Book = React.memo(BooksSecret)
