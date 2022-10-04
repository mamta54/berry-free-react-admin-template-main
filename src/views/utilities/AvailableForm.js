import React, { useState, useEffect } from 'react'
import { Grid, Switch} from '@mui/material';
import Controls from "./controls/Controls";
import { useForm, Form } from './useForm';
import * as employeeService from "./services/employeeService";
import Select from './controls/Select';



const initialFValues = {
    id: 0,
    starttime: '',
    endtime:'',
    ScheduleDate: '',
}

export default function AvailableForm(props) {
    const { addOrEdit, recordForEdit } = props
const [available,setAvailable] = useState(false)
const [isAv,setIsAv] = useState(false)
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
      

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues,  validate);
   
    const handleSubmit = e => {
        e.preventDefault()
        // if (validate()) {
          console.log(values)

            addOrEdit(values, resetForm);
        // }
    }
    
    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                  
            <Grid item xs={12} sm={6}>
                <Controls.DatePicker
                    name="ScheduleDate"
                    label="Date"
                    value={values.ScheduleDate}
                    onChange={handleInputChange}
                     
                />
            </Grid>
            <Grid item xs={12} sm={6}>

            <Switch checked={available}  onChange={(e)=>{setAvailable(!available)}}/>
            </Grid>
      {  available ?  <Grid item xs={12} sm={6}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
                    <Select
                        name="starttime"
                        label="Start Time"
                        value={values.starttime}  
                        options={employeeService.getDoctorCollection()}
                        onChange={handleInputChange}
                        
                    />
                    </Grid> 
                    <Grid item xs={12} sm={6}>
                    <Select
                        name="endtime"
                        label="End Time"
                        onChange={handleInputChange}

                        value={values.endtime}  
                        options={employeeService.getDoctorCollection()}
                        
                    />
                    </Grid> 
                    </Grid>
                    </Grid>
                    : <Grid item xs={12} sm={6}> </Grid>  
                    
                }
                
                <Grid item xs={12} sm={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Controls.Buttons
                            text="Submit"
                            type="submit"
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                        <Controls.Buttons
                            text="Reset"
                            variant="outlined"
                            onClick={resetForm} />
                            </Grid>
                    </Grid>
                </Grid>
          </Grid>
        </Form>
    )
}
