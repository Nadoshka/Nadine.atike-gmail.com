import {React, useState }from 'react';


export default function FilteredTraveldWith (props) {
    const {state, setState} = useState([]);

    const {reviews} = props;

      handleChange () = event =>{
        const filterdValue = event.target.value
      }
    return (
        <div>
            <select>
                <option value= 'all' >all</option>
            </select>

        </div>
    )
}
  