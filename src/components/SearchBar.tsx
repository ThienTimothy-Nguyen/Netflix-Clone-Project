import { Search } from 'lucide-react' 
import React, { useState } from 'react' 
import { useNavigate } from '@tanstack/react-router' 
const SearchBar = () => { const [shouldShowSearch, setShouldShowSearch] = useState(false)
    const navigate = useNavigate()  
    const navigateSearch = (query: string) => {
        query.length > 0 ? 
        navigate({to: '/search', search: {movie: query}}) : 
        window.history.back() }

    function debounce(func: Function, wait: number) { 
        let timeout: ReturnType<typeof setTimeout>; 
        return function (this: any, query: string) 
        { query 
            const args = arguments 
            const thisContext = this 
        if(timeout) clearTimeout(timeout); 
        timeout = setTimeout(() => func.apply(thisContext, args), wait) } 
    } 

    const debouncedSearch = debounce(navigateSearch, 500) 

    const handleSearchQueryChange = ( event: React.ChangeEvent<HTMLInputElement> ) => { 
    const query = event.target.value;

    debouncedSearch(query) } 
    return ( 
    <div className='flex items-center gap-2'> 
        {
            shouldShowSearch && 
            <div className={'relative ease-in-out delay-300'}>
                <button className='absolute left-3 top-1' onClick={() => setShouldShowSearch(!shouldShowSearch)}> 
                    <Search /> 
                </button>
                <input 
                    onChange={handleSearchQueryChange} 
                    onBlur={() => setShouldShowSearch(!shouldShowSearch)} 
                    type="text" 
                    placeholder='titles, people, genres' 
                    className='pl-10 pr-3 py-2 h-8 sm:w-87.5 w-full rounded-md border border-gray-300 focus:outline-none focus:border-red-600' 
                />
            </div>
        } 
        {
            !shouldShowSearch && 
            <button onClick={() => setShouldShowSearch(!shouldShowSearch)}> 
                <Search /> 
            </button>
        }
    </div> ) } 
export default SearchBar