import { TextField ,Grid} from '@mui/material';
import React,{useState,useEffect} from 'react'
import {useForm,Form} from './useForm';
import * as employeeService from "./services/employeeService";
import Controls from './controls/Controls';
import Select from './controls/Select';
import Date from './controls/Date';

const m = (new Date().getMonth()+1) <= 9 ? "0"+(new Date().getMonth()+1) : (new Date().getMonth()+1);
    const d = new Date().getDate();
    const y = new Date().getFullYear();
    const todayDate = y+"-"+m+"-"+d;
const initialFormValues = {
    id:0,
    caseno:0,
    appointmentdate:todayDate,
    firstname:"",
    lastname:"",
    service:"",
    doctor:"",
    gender:"male",
    mobno:"",
    continue:"",
    time:"",
    blockno:0,
    street:"",
    city:"anand",
    country:"india",
    email1:"",
    village:"",
    area:"",
    state:"gujarat",
    pincode:"",
    email2:"",
    allergy:[]

}

const genderItems =[
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const Appointments = () => {

    const {
        values,
        setValues,
        handleInputChange
    }= useForm(initialFormValues);

    
    return (
            <Form >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Controls.Input
                        name='firstname'
                        label="First Name"
                        value={values.firstname}
                        onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controls.Input
                        name='lastname'
                        value={values.lastname}
                        label="Last Name"
                        onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controls.Input
                        name='city'
                        value={values.city}
                        label="City"
                        onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Controls.RadioGroup
                    name="gender"
                    label="Gender"
                    value={values.gender}
                    onChange={handleInputChange}
                    items={genderItems}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Select
                        name="doctor"
                        label="Department"
                        value={values.doctor}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Date
                         name="appointmentdate"
                         label="Some Date"
                         defaultValue="values.appointmentdate"
                         
                    />
                    </Grid>
                </Grid>
            </Form>
        )
}

export default Appointments