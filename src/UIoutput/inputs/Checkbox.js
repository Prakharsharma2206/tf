import React from 'react'

const Checkbox = ({item}) => {
  return (
    <div className='Checkbox'>
        <input type="checkbox" name="Seasoning" value="AddSeasoning" />
        <label htmlFor="Seasoning"><h4>{item.label}</h4></label>
    </div>
  )
}

export default Checkbox