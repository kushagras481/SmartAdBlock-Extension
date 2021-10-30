import React from 'react'

import '../../Styles/Components/LinkedAdBlockersContainerStyles.scss'
import '../../Styles/Components/ItemsHeaderButtonStyles.scss'

import ItemsBox from '../Display/ItemsBox'
import ViewingDoubleContentItem from '../Display/ViewingDoubleContentItem'
import EditingDoubleContentItem from '../Action/EditingDoubleContentItem'

import * as ModeEnums from '../../../Constants/ModeEnums'

import {
    useForm,
    FormProvider,
    useFieldArray
} from 'react-hook-form'

import { useSelector, useDispatch } from 'react-redux'

import { setLinkedAdBlockersMode, setLinkedAdBlockersData } from '../../../Background/Redux/Actions/ExtensionData'

function LinkedAdBlockersContainer(props){
    const dispatch = useDispatch()

    const linkedAdBlockersData = useSelector(state => state.extensiondata.linked_ad_blockers_data)
    const mode = useSelector(state => state.extensiondata.linked_adblockers_mode)

    let linkedAdBlockers = [...linkedAdBlockersData]

    let values = {
        'linked_ad_blockers': [...linkedAdBlockersData]
    }

    const methods = useForm({
        defaultValues: values
    })

    const control = methods['control']
    const handleSubmit = methods['handleSubmit']

    const { fields, append, remove } = useFieldArray({
        control,
        name: "linked_ad_blockers"
    })

    function edit(){
        dispatch(setLinkedAdBlockersMode(ModeEnums.MODES.EDITING))
    }

    function save(data){
        dispatch(setLinkedAdBlockersData(data.linked_ad_blockers))
        dispatch(setLinkedAdBlockersMode(ModeEnums.MODES.VIEWING))
    }

    function cancel(){
        dispatch(setLinkedAdBlockersMode(ModeEnums.MODES.VIEWING))
    }

    function addLinkedAdBlocker(){
        append({ 'adblocker_name': '', 'extension_id': '' })
    }

    function deleteLinkedAdBlocker(idx){
        remove(idx)
    }

    const itemsHeaderButtons = (
        <>
            {mode == ModeEnums.MODES.VIEWING && 
                <button class='edit-button' onClick={edit}>Edit</button>
            }
            {mode == ModeEnums.MODES.EDITING && 
                <>
                    <button class='cancel-button' onClick={cancel}>Cancel</button>
                    <button class='save-button' onClick={handleSubmit(save)}>Save</button>
                </>
            }
        </>
    )

    return(
        <div id="linkedadblockers-section">
            <div id="linkedadblockers-container">
                <FormProvider {...methods}>
                    <ItemsBox header='Linked AdBlockers' emptyPhrase='No Linked AdBlockers' itemsHeaderButtons={itemsHeaderButtons}>
                        {mode == ModeEnums.MODES.VIEWING && 
                            linkedAdBlockers.map((item,idx)=>(
                                <ViewingDoubleContentItem adblockerName={item.adblocker_name} extensionId={item.extension_id} />
                            ))
                        }
                        {mode == ModeEnums.MODES.EDITING && 
                            fields.map((item,idx)=>(
                                <EditingDoubleContentItem item={item} idx={idx} deleteItem={deleteLinkedAdBlocker}/>
                            ))
                        }
                        {mode == ModeEnums.MODES.EDITING && 
                            <div class='add-button-section'>
                                <button class='add-button' onClick={addLinkedAdBlocker}></button>
                            </div>
                        }
                    </ItemsBox>
                </FormProvider>
            </div>
        </div>
    )
}

export default LinkedAdBlockersContainer