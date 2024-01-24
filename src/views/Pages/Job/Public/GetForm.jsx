import React from 'react'
import City from './Forms/City'
import MultiSelect from './Forms/MultiSelect'
import SingleSelect from './Forms/SingleSelect'
import SubIndustry from './Forms/SubIndustry'
import ProfileSelect from './Forms/ProfileSelect'

export default function GetForm({ name, ...rest }) {

    switch (name) {
        case "Country": return <SingleSelect {...rest} />
        case "City": return <City {...rest} />
        case "Job Type": return <SingleSelect {...rest} />
        case "Experince Level": return <SingleSelect {...rest} />
        case "Years of Experince": return <SingleSelect {...rest} />
        case "Category": return <SingleSelect {...rest} />
        case "Profile": return <ProfileSelect {...rest} />
        case "Highest Degree": return <SingleSelect {...rest} />
        case "Industry": return <SingleSelect {...rest} />
        case "Sub-Industry": return <SubIndustry {...rest} />
        case "Professional Skill": return <SingleSelect {...rest} />
        case "Skill Set": return <MultiSelect {...rest} />
        case "Language": return <MultiSelect {...rest} />
        case "Nationality": return <SingleSelect {...rest} />
        default: return null;
    }
}