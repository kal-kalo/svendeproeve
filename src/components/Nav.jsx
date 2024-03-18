import { Link } from 'react-router-dom';

import homeIcon from '../assets/home-icon.png'
import searchIcon from '../assets/search-icon.png'
import calendarIcon from '../assets/calendar-icon.png'

export default function Nav() {
    return (
        <nav className='bg-white flex justify-around fixed bottom-0 left-0 right-0 h-12 items-center'>
            <Link to='/'><img src={homeIcon} alt="home icon" /></Link>
            <Link to='/search'><img src={searchIcon} alt="search icon" /></Link>
            <Link to='/my-sechdule'><img src={calendarIcon} alt="calendar icon" /></Link>
        </nav>
    )
}
