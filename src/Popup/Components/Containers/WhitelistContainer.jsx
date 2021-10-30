import React, {useState, useEffect} from 'react'

import '../../Styles/Components/WhitelistContainerStyles.scss'
import '../../Styles/Components/ItemsHeaderButtonStyles.scss'

import SiteSelect from '../Action/SiteSelect'
import ItemsBox from '../Display/ItemsBox'
import ViewingSingleContentItem from '../Display/ViewingSingleContentItem'
import EditingSingleContentItem from '../Action/EditingSingleContentItem'

import * as ModeEnums from '../../../Constants/ModeEnums'

import {
    useForm,
    FormProvider,
    useFieldArray
} from 'react-hook-form'

import { useSelector, useDispatch } from 'react-redux'

import { setWhitelistMode } from '../../../Background/Redux/Actions/ExtensionData'

function WhitelistContainer(props){
    const dispatch = useDispatch()

    let itemsData = require('../../../Data/Items.json')
    let whitelistData = require('../../../Data/WhiteListData.json')

    const mode = useSelector(state => state.extensiondata.whitelist_mode)
    const siteSelected = useSelector(state => state.extensiondata.site_selected)

    let whitelistSelectedData = whitelistData.data[siteSelected.value]
    let items = itemsData.data[siteSelected.value]

    let values = {
        items: itemsData.data[siteSelected.value]
    }

    const methods = useForm({
        defaultValues: values
    })

    const control = methods['control']

    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    })

    function edit(){
        dispatch(setWhitelistMode(ModeEnums.MODES.EDITING))
    }

    function save(){
        dispatch(setWhitelistMode(ModeEnums.MODES.VIEWING))
    }

    function cancel(){
        dispatch(setWhitelistMode(ModeEnums.MODES.VIEWING))
    }

    function addItem(){
        append({'item_value': ''})
    }

    function deleteItem(idx){
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
                    <button class='save-button' onClick={save}>Save</button>
                </>
            }
        </>
    )

    return(
        <div id="whitelist-section">
            <div id="siteselect-container">
                <SiteSelect />
            </div>
            <div id="items-container">
                <FormProvider {...methods}>
                    <ItemsBox header={whitelistSelectedData.header} emptyPhrase={whitelistSelectedData.empty_phrase} itemsHeaderButtons={itemsHeaderButtons}>
                        {mode == ModeEnums.MODES.VIEWING && 
                            items.map((item,idx)=>(
                                <ViewingSingleContentItem itemValue={item.item_value} />
                            ))
                        }
                        {mode == ModeEnums.MODES.EDITING && 
                            fields.map((item,idx)=>(
                                <EditingSingleContentItem item={item} idx={idx} placeholder={whitelistSelectedData.placeholder} deleteItem={deleteItem} />
                            ))
                        }
                        {mode == ModeEnums.MODES.EDITING && 
                            <div class='add-button-section'>
                                <button class='add-button' onClick={addItem}></button>
                            </div>
                        }
                    </ItemsBox>
                </FormProvider>
            </div>
        </div>
    )
}

export default WhitelistContainer