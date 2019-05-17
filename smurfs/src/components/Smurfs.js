import React from 'react';

const Smurfs = (props) => {
    const smurfsList = props.smurfs.map(smurf => { 
        return (
            <div className='smurf' key={smurf.id}>
            <li>Name: {smurf.name}</li>
            <li>Age: {smurf.age}</li>
            <li>Height: {smurf.height}</li>
            </div>
        )
    });

    return (
        <div className="smurfs-list">

       <ul>{smurfsList}</ul>
            
        </div>
    )
}
export default Smurfs;
