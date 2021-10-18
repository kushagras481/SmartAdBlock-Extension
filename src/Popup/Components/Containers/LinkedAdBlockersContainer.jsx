import React, {useState, useEffect} from 'react'

import '../../Styles/Components/LinkedAdBlockersContainerStyles.scss'

import ItemsBox from '../Display/ItemsBox'
import ViewingDoubleContentItem from '../Display/ViewingDoubleContentItem'
import EditingDoubleContentItem from '../Action/EditingDoubleContentItem'

import * as ModeEnums from '../../../Constants/ModeEnums'

import {
    useForm,
    FormProvider,
    useFieldArray
} from 'react-hook-form'

function LinkedAdBlockersContainer(props){
    let linkedAdBlockersData = require('../../../Data/LinkedAdBlockers.json')

    const mode = ModeEnums.MODES.EDITING

    let linkedAdBlockers = linkedAdBlockersData.data['linked_ad_blockers']

    let values = {
        'linked_ad_blockers': linkedAdBlockersData.data['linked_ad_blockers']
    }

    const methods = useForm({
        defaultValues: values
    })

    const control = methods['control']

    const { fields, append, remove } = useFieldArray({
        control,
        name: "linked_ad_blockers"
    })

    return(
        <div id="linkedadblockers-section">
            <div id="linkedadblockers-container">
                <FormProvider {...methods}>
                    <ItemsBox header='Linked AdBlockers' emptyPhrase='No Linked AdBlockers'>
                        {mode == ModeEnums.MODES.VIEWING && 
                            linkedAdBlockers.map((item,idx)=>(
                                <ViewingDoubleContentItem adblockerName={item.adblocker_name} extensionId={item.extension_id} />
                            ))
                        }
                        {mode == ModeEnums.MODES.EDITING && 
                            fields.map((item,idx)=>(
                                <EditingDoubleContentItem item={item} idx={idx} />
                            ))
                        }
                    </ItemsBox>
                </FormProvider>
            </div>
        </div>
    )
}

export default LinkedAdBlockersContainer