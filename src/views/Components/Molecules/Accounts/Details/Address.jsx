import React, { useState } from 'react'
import { useGetKeywordValuesQuery } from '../../../../../features/keyword/keywordApi'
import { useGetProfileDetailsQuery } from '../../../../../features/profile/profileApi'
import Modal from '../../../Atoms/Modal/Modal'
import AddressForm from './Forms/AddressForm'

export default function Address() {
    const [open, setOpen] = useState(false)
    const { data } = useGetProfileDetailsQuery()
    const { address1, address2, country, city } = data?.data || {}
    return (
        <div className='p-8 border w-full flex flex-col space-y-4'>
            <h4 className='text-[#051532] font-semibold text-lg'>Address Details</h4>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Address 1</h6>
                <p className='text-[#646464] font-normal'>{(address1 === null && "-") || address1}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Address 2</h6>
                <p className='text-[#646464] font-normal'>{(address2 === null && "-") || address2}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>City</h6>
                <p className='text-[#646464] font-normal'>{(city === null && "-") || city}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Country</h6>
                <p className='text-[#646464] font-normal'>{(country === null && "-") || <CountryDetails country={country} />}</p>
            </div>


            <Modal open={open} setOpen={setOpen}>
                <AddressForm setOpen={setOpen} prevData={data?.data} />
            </Modal>
            <div className="">
                <button onClick={() => setOpen(true)} className='btn-outline py-[10px]'>Edit</button>
            </div>

        </div>
    )
}


const CountryDetails = ({ country }) => {
    const { data } = useGetKeywordValuesQuery(1001)
    const coun = data?.data?.find(i => i.valueID === country)

    return (
        <span className='text-[#646464] font-normal'>{coun?.value}</span>
    )
}