import React from 'react';
import {FilterBarContainer, SelectsContainer, 
    SearchBoxContainer, InputStyle, 
    ButtonStyle} from "../styles/filter-bar-style"
import Select from '../components/select'
import {useState} from 'react';


function FilterBar({blade, battery, search}){
    return(
        <FilterBarContainer>
            <SelectsContainer>
                <Select name='Blade' options={['metal', 'nylon']} state={blade} />
                <Select name='Battery' options={['10000', '20000', '30000', '40000']}
                    state={battery} />
            </SelectsContainer>
            <SearchBox state={search} />
        </FilterBarContainer>
    );
}

function SearchBox({ state: [searchText, setSearchText] }) {
    const [text, setText] = useState('');

    return(
        <SearchBoxContainer>
                <InputStyle value={text} placeholder="Search.." onChange={e => (setText(e.target.value))}/>
                <ButtonStyle onClick={e => (setSearchText(text))}>Search</ButtonStyle>
        </SearchBoxContainer>

    )

}



export default FilterBar;