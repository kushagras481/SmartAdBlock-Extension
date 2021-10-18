import React, { useEffect } from 'react'

import Select from 'react-select'

import { useSelector, useDispatch } from 'react-redux'

import {
    selectSite
} from '../../../Background/Redux/Actions/Data'

function SiteSelect(props){
    const dispatch = useDispatch()

    const siteSelected = useSelector(state => state.data.site_selected)
    const colorMode = useSelector(state => state.user.color_mode)

    const options = [
        { value: 'youtube', label: 'YouTube' },
    ]

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            background: 'var(--primary-color)',
            borderColor: 'transparent',
            minHeight: '3.094rem',
            height: '3.094rem',
            boxShadow: state.isFocused ? null : null,
            'font-size': '1.4rem',
            color: 'var(--font-color)'
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            height: '3.094rem',
            padding: '0 6px'
        }),
        input: (provided, state) => ({
            ...provided,
            margin: '0',
            padding: '0',
            color: 'var(--font-color)',
            'font-weight': 'bold'
        }),
        indicatorSeparator: state => ({
            display: 'none',
        }),
        indicatorsContainer: (provided, state) => ({
            ...provided,
            height: '2.942rem',
        }),
        placeholder: (provided,state) => ({
            ...provided,
            color: 'var(--font-color)',
            'font-weight': 'bold'
        }),
        menu: (provided,state) => ({
            ...provided,
            color: 'var(--font-color)',
            background: 'var(--menu-color)',
        }),
        option: (provided,state) => ({
            ...provided,
            'font-size': '1.2rem',
            color: 'var(--font-color)',
            backgroundColor: state.isSelected ? 'red' : state.isFocused ? 'rgba(255,0,0,0.2)' : 'transparent',
            ':active': {
                ...provided[':active'],
                backgroundColor: state.isSelected ? 'red' : 'rgba(255,0,0,0.5)'
            },
        }),
        dropdownIndicator: provided => ({
            ...provided,
            color: 'rgba(255,0,0,0.8)',
            '&:hover': {
                color: 'red'
            }
        }),
        singleValue: provided => ({
            ...provided,
            color: 'var(--font-color)',
            'font-weight': 'bold',
        }),
    };
    
    function handleChange(selectedOption){
        console.log(selectedOption)
        dispatch(selectSite(selectedOption))
    }

    return (
        <>
            <Select
                defaultValue={siteSelected}
                onChange={handleChange}
                options={options}
                styles={customStyles}
                isSearchable={true}
            />
        </>
    )
}

export default SiteSelect