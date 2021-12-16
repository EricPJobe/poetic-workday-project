import React, {useState} from 'react';
import "./search.css"
import SearchResults from "../../components/SearchResults/searchResults";

const Search = () => {
    const [myLocation, setMyLocation] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [searchTermFormValue, setSearchTermFormValue] = useState('')
    const [myLocationFormValue, setMyLocationFormValue] = useState('')

    const onSearch = () => {
       setMyLocation(myLocationFormValue)
       setSearchTerm(searchTermFormValue)
    }

    return (
        <div className={"search-container"}>
            <div className="search-hero">
                <div className="search-form">
                    <div className="search-field">
                        <input
                            className="search-control"
                            type={"text"}
                            name={"search-term"}
                            placeholder={"Enter a search term"}
                            value={searchTermFormValue}
                            onChange={(event) =>  setSearchTermFormValue(event.target.value)}/>
                    </div>
                    <div className="search-field">
                        <input
                            className="search-control"
                            type={"text"}
                            name={"search-term"}
                            placeholder={"Enter your zip code"}
                            value={myLocationFormValue}
                            onChange={(event) => setMyLocationFormValue(event.target.value)}/>
                    </div>
                </div>
                <div className={"form-button-row"}>
                    <div className={"search-button"} onClick={onSearch}>
                        Search
                    </div>
                </div>
                <div className="search-results">
                    {searchTerm !== '' && <SearchResults searchTerm={searchTerm} myLocation={myLocation} />}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Search;
