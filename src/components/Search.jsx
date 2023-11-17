/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Mode } from "../context";
function Search({ updateSearchValue }) {
    const theme = useContext(Mode);

    

    const [localState, setLocalState] = useState('');
    const handler = (e) => {
        setLocalState(e.target.value);
    }

    const handlerSearch = () => {
        updateSearchValue(localState);
    }

    return <div className="Search" style={{ backgroundColor: theme === 'dark' ? '#1f2a48' : "#333" }}>
        <FaMagnifyingGlass />
        <input placeholder="Search Github username" value={localState} onChange={handler} onKeyDown={(e) => {
            if (e.key === 'Enter') {
                handlerSearch();
            }

            return;
        }} />
        <button onClick={handlerSearch}>Search</button>
    </div>
}

export default Search;