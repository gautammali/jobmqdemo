import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import YourApplication from './YourApplication'
import JobDescription from './JobDescription'

export default function ApplyJobTab({data}) {
  const tabitems = ['Your application', 'Job description']
  return (
    <Tab.Group>
      <Tab.List className={"container"}>
        {tabitems.map((item,id)=><Tab key={id} as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                (selected ? 'font-bold text-[#051532] border-[#051532]' : ' text-[#051532]  border-transparent') + " border-b-4  py-2 px-6"
              }
            >
               {item}
            </button>
          )}
        </Tab>)}
      
      </Tab.List>
      <Tab.Panels className={"bg-white py-5 px-8"}>
        <Tab.Panel><YourApplication data={data} /></Tab.Panel>
        <Tab.Panel><JobDescription  data={data} /></Tab.Panel>

      </Tab.Panels>
    </Tab.Group>
  )
}