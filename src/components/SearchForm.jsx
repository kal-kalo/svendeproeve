import searchIcon from "../assets/search-icon.png"

export default function SearchForm({ setSearching, setUserInput }) {

    function handleSearch(e) {
        setUserInput(e.target.value);
        // if e.target.value !== '' return true else return false
        setSearching(e.target.value !== '');
    }

    return (
        <div className='search-form ml-6'>
            <h1>Søg</h1>
            <div style={{ position: 'relative', width: 'fit-content' }}>
                <input
                    onChange={handleSearch}
                    type="search"
                    name=""
                    id=""
                    placeholder=''
                    style={{ backgroundColor: 'rgba(120, 93, 115, 0.5)', border: 'none', width: '90vw', padding: '5px' }}
                />
                <img src={searchIcon} alt="" style={{ position: 'absolute', right: '5px', top: '30%' }} />
            </div>
        </div>
    )
}