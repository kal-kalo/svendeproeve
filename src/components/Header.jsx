import { Link } from 'react-router-dom';

import { useAuthContext } from "../hooks/useAuthContext";

export default function Header() {
    const { user } = useAuthContext()

    return (
        <header className='flex gap-2 justify-end mr-6 '>
            <p>{user ? user.role : ""}</p>
            <Link to={user ? '/logout' : '/login'}>{user ? 'log out' : 'log in'}</Link>
        </header>
    )
}
