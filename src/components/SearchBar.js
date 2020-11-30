import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(term);
    };

    return (
        <div className="ui segment search-bar">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            setTerm(event.target.value);
                        }}
                        value={term}
                    ></input>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
