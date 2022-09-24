import { TextField ,Grid} from '@mui/material';
import React,{useState,useEffect} from 'react'
import {useForm,Form} from './useForm';
import * as employeeService from "./services/employeeService";
import Controls from './controls/Controls';
import Select from './controls/Select';
// import Date from './controls/Date';



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

    const validate = (fieldValues = values) => {
       let temp = {...errors}
       if('firstname' in fieldValues)
            temp.firstname = fieldValues.firstname ? "": "This Field is required."
       if('mobno' in fieldValues)
            temp.mobno = (fieldValues.mobno.length  == 10)  ? "": "This Field is required."
       if('email1' in fieldValues)
            temp.email1 = (/$^|.+@.+..+/).test(fieldValues.email1) ? "": "This Field is required."
       if('doctor' in fieldValues)
            temp.doctor = fieldValues.doctor.length !=0 ? "":"This Field is required."
        setErrors({
            ...temp
        })
        if(fieldValues == values)
            return  Object.values(temp).every(x => x == "")
    }


    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }= useForm(initialFormValues,true,validate);

    useEffect(() => {
        console.log(values);
        }, [values.appointmentdate]);
  
        
    
    const handleSubmit = e => {
        e.preventDefault()
        if(validate())
        {
            console.log(values)
            employeeService.insertAppointment(values);
            resetForm()
            window.alert('testing...')

        }
    }    

    return (
            <Form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Controls.Input
                        name='firstname'
                        label="First Name"
                        value={values.firstname}
                        onChange={handleInputChange}
                        error={errors.firstname}
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
                        error={errors.doctor}
                        options={employeeService.getDepartmentCollection()}
                        
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Controls.DatePicker
                    name="appointmentdate"
                     label="date"
                     value={values.appointmentdate}
                      onChange={handleInputChange}  
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Controls.Input
                    name="mobno"
                     label="Mobile No"
                     value={values.mobno}
                      onChange={handleInputChange}  
                      error={errors.mobno}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Controls.Input
                    name="city"
                     label="city"
                     value={values.city}
                      onChange={handleInputChange}  
                    />
                   
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div>
                    <Controls.Button
                            type="submit"
                            text="Submit"
                            
                            />
                    </div>
                   
                    </Grid>
                    
                </Grid>
            </Form>
        )
}

export default Appointments