import React from 'react'

import '../../Styles/Components/EditingDoubleContentItemStyles.scss'

import {
    useFormContext, 
} from 'react-hook-form'

function EditingDoubleContentItem(props){
    const { register } = useFormContext()

    const item = props.item
    const idx = props.idx

    return (
        <div class='editing-double-item-div red-border-hover' key={item.id}>
            <div class='editing-double-item-section'>
                <input class='editing-input-field editing-double-input-field' 
                    type="text" placeholder="AdBlocker Name" 
                    {
                        ...register(`linked_ad_blockers.${idx}.adblocker_name`,{ 
                            required: true,
                            maxLength: 20, 
                            pattern: /^[a-zA-Z0-9]+$/
                        })
                    }
                />
            </div>
            <div class='editing-double-item-section left-border'>
                <input class='editing-input-field editing-double-input-field' 
                    type="text" placeholder="Extension ID" 
                    {
                        ...register(`linked_ad_blockers.${idx}.extension_id`,{ 
                            required: true,
                            maxLength: 32, 
                            pattern: /^[a-zA-Z0-9]+$/
                        })
                    }
                />
            </div>
        </div>
    )
}

export default EditingDoubleContentItem