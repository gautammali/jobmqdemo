import React from 'react'
import Select from 'react-select'

const options = [
    { value: '4', label: 'Chocolate' },
    { value: '3', label: 'Strawberry' },
    { value: '2', label: 'Vanilla' }
]
export default function ReactSelect() {
    return (
        <Select
            isMulti
            onChange={value => console.log(value)}
            getOptionLabel={option => option.label}
            getOptionValue={option => option.value}
            options={options}
        />
    )
}


