import React from 'react'; // hay que importar react para que JSX funcione

// this is JSX
const Card = ({ name, email, id}) => { // destructuring con parametros
    return (
        <div className='robots-box tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}testing?150x150`} /> 
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;