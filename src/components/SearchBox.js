import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
             className='tc bg-light-green dib ba1 pa3 ma3 grow bw2 colors'
             type='search' 
             placeholder='Search Robots'     
             onChange={searchChange} // cada vez que escribimos va llamar a la funcion searchChange
             />
        </div>

    );
}

export default SearchBox