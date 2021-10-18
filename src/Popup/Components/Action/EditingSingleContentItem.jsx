import React from 'react'

import '../../Styles/Components/EditingSingleContentItemStyles.scss'

import {
    useFormContext, 
} from 'react-hook-form'

function EditingSingleContentItem(props){
    const { register } = useFormContext()

    const item = props.item
    const idx = props.idx
    const placeholder = props.placeholder

    return (
        <div class='editing-single-item-div red-border-hover' key={item.id}>
            <div class='editing-single-item-section'>
                <input class='editing-input-field editing-single-input-field'
                    type="text" placeholder={placeholder} defaultValue={item.item_value}
                    {
                        ...register(`items.${idx}.item_value`,{ 
                            required: true,
                            maxLength: 20, 
                            pattern: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
                        })
                    }
                />
            </div>
        </div>
    )
}

export default EditingSingleContentItem