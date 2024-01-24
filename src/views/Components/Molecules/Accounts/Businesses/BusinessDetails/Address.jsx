import React, { useState } from 'react'
import { useGetKeywordValuesQuery } from '../../../../../../features/keyword/keywordApi'
import { useGetProfileDetailsQuery } from '../../../../../../features/profile/profileApi'
import Modal from '../../../../Atoms/Modal/Modal'
import AddressForm from './Forms/AddressForm'
import { FaRegEdit } from 'react-icons/fa'

export default function Address() {
    const [open, setOpen] = useState(false)
    const { data } = useGetProfileDetailsQuery()
    const { address1, address2, country, city } = data?.data || {}
    return (
        <>
            <h1 className='text-2xl font-medium font-roboto text-site-text-200'>Company Details</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse border border-site-border-300 ">
                    <thead className="text-xs uppercase bg-site-bg-300 text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3 border border-site-border-300">
                                Address 1
                            </th>
                            <th scope="col" className="px-6 py-3 border border-site-border-300">
                                Address 2
                            </th>
                            <th scope="col" className="px-6 py-3 border border-site-border-300">
                                City
                            </th>
                            <th scope="col" className="px-6 py-3 border border-site-border-300">
                                Country
                            </th>
                            <th scope="col" className="px-6 py-3 border border-site-border-300">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr className="bg-[#f8f8f8] border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-[#E9E9E9]">
                                {(address1 === null && "-") || address1}
                            </th>

                            <td className="px-6 py-4 border border-[#E9E9E9]">
                                {(address2 === null && "-") || address2}
                            </td>
                            <td className="px-6 py-4 border border-[#E9E9E9]">
                                {(city === null && "-") || city}
                            </td>
                            <td className="px-6 py-4 border border-[#E9E9E9]">
                                {(country === null && "-") || <CountryDetails country={country} />}
                            </td>
                            <td className="px-6 py-4 border border-[#E9E9E9]">
                                <button onClick={() => setOpen(true)} className='bg-site-bg-300 cursor-pointer text-white text-xl p-2 rounded text-center' >
                                    <FaRegEdit />
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>




                <Modal open={open} setOpen={setOpen}>
                    <AddressForm setOpen={setOpen} prevData={data?.data} />
                </Modal>


            </div>
        </>

    )
}


const CountryDetails = ({ country }) => {
    const { data } = useGetKeywordValuesQuery(1001)
    const coun = data?.data?.find(i => i.valueID === country)

    return (
        <span className='text-[#646464] font-normal'>{coun?.value}</span>
    )
}