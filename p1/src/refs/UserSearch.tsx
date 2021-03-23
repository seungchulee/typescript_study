import {useState, FC, useRef, useEffect} from 'react';

const users = [
    { name: 'Stephen', age: 27},
    {name: 'Mike', age: 25},
    {name: 'Sue', age: 25}
]

const UserSearch: FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<undefined | {name: string, age: number}>();
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus()
    }, [])

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser)
    }

    return (
        <div>
            User Search
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={onClick}>Find User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    )
}
export default UserSearch