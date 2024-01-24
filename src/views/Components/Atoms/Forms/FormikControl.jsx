import React from 'react'
import Checkbox from './CheckBox';
import CheckboxGroups from './CheckboxGroups';
import DatePicker from './DatePicker';
import DateTimePicker from './DateTimePicker';
import File from './File';
import Input from './Input';
import InputLink from './InputLink';
import MultiselectDropdown from './MultiselectDropdown';
import RadioButtons from './RadioButtons';
import RadioButtonsEmployerQuestions from './RadioButtonsEmployerQuestions';
import Select from './Select';
import Textarea from './Textarea';

export default function FormikControl(props) {
    const { control, ...rest } = props;

    // Using a switch statement to determine which form control to render
    switch (control) {
        case 'input':
            return <Input {...rest} />;
        case 'file':
            return <File {...rest} />;
        case 'inputLink':
            return <InputLink {...rest} />;
        case 'textarea':
            return <Textarea {...rest} />;
        case 'select':
            return <Select {...rest} />;
        case 'radio':
            return <RadioButtons {...rest} />;
        case 'employerQuestion':
            return <RadioButtonsEmployerQuestions {...rest} />;
        case 'checkbox':
            return <Checkbox {...rest} />;
        case 'checkboxgroup':
            return <CheckboxGroups {...rest} />;
        case 'date':
            return <DatePicker {...rest} />;
        case 'dateTime':
            return <DateTimePicker {...rest} />;
        case 'multiselect':
            return <MultiselectDropdown {...rest} />;
        default:
            return null;
    }
}