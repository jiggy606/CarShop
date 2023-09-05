"use client"

import React from 'react'
import { SearchManufacturer } from '.';

import { useState } from 'react';
import Image from 'next/image';

const SearchButton = ({ otherClasses }: { otherClasses: 
string }) => (
    <button type='button' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src='/magnifying-glass.svg'
            width={40}
            height={40}
            alt='magnifying glass'
            className=' object-contain'
        />
    </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');

    const handleSearch = () => {}
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />    
                <SearchButton otherClasses="sm:hidden" />
            </div>
        </form>
    );
}

export default SearchBar