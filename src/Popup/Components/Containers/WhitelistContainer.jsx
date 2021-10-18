import React, {useState, useEffect} from 'react'

import '../../Styles/Components/WhitelistContainerStyles.scss'

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

import { useSelector } from 'react-redux'

function WhitelistContainer(props){
    let itemsData = require('../../../Data/Items.json')
    let whitelistData = require('../../../Data/WhiteListData.json')

    const mode = ModeEnums.MODES.EDITING
    const siteSelected = useSelector(state => state.data.site_selected)

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

    return(
        <div id="whitelist-section">
            <div id="siteselect-container">
                <SiteSelect />
            </div>
            <div id="items-container">
                <FormProvider {...methods}>
                    <ItemsBox header={whitelistSelectedData.header} emptyPhrase={whitelistSelectedData.empty_phrase}>
                        {mode == ModeEnums.MODES.VIEWING && 
                            items.map((item,idx)=>(
                                <ViewingSingleContentItem itemValue={item.item_value} />
                            ))
                        }
                        {mode == ModeEnums.MODES.EDITING && 
                            fields.map((item,idx)=>(
                                <EditingSingleContentItem item={item} idx={idx} placeholder={whitelistSelectedData.placeholder} />
                            ))
                        }
                    </ItemsBox>
                </FormProvider>
            </div>
        </div>
    )
}

export default WhitelistContainer