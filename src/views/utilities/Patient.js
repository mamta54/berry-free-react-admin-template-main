import { Grid, Link,Divider } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import { useState,React } from 'react';
// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import TextField from '@mui/material/TextField';
import {FormControl} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
// ==============================|| TYPOGRAPHY ||============================== //

const Patient = () => {
    const [Dates, setDates] = useState();

    const handleDateChange = (newValue) => {
      setDates(newValue);
    };
    const [Doctor, setDoctor] = useState("");
    const [Service, setService] = useState("");
    const [Title, setTitle] = useState("");
    const [Occupation, setOccupation] = useState("");
    const m = (new Date().getMonth()+1) <= 9 ? "0"+(new Date().getMonth()+1) : (new Date().getMonth()+1);
    const d = new Date().getDate();
    const y = new Date().getFullYear();
    const todayDate = y+"-"+m+"-"+d;

    const values = {
        someDate: todayDate,
        
      };
      var services = {
        Service1: 450,
        Service2: 230,
        Service3: 500,
        Service4 : 560
      };
    const [Dob,setDob] = useState();
    return (
       <FormControl>

        <MainCard title="Basic Typography" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
       <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Case No." id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
        name="someDate"
        label="Some Date"
        InputLabelProps={{ shrink: true, required: true }}
        type="date"
        defaultValue={values.someDate}
        sx={{


            "& .MuiInputBase-root": {
                height: "46px"
            }
            }}
      />
           
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="FirstName" id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
           
            </Grid>

            <Grid item xs={12} sm={6}>

            <TextField fullWidth label="LastName" id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
          style={{ width: "100%" }}
          variant="outlined"
          value={Doctor}
          onChange={(e) => setDoctor(e.target.value)}
          select
          label="Select Service"
          sx={{


            "& .MuiInputBase-root": {
                height: "46px"
            }
            }}
        >
         {Object.keys(services).map(key => (
          <MenuItem key={key} value={key}>
        {key+" "+services[key]}
          </MenuItem>
        
         ))}
        </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
          style={{ width: "100%" }}
          variant="outlined"
          value={Doctor}
          onChange={(e) => setDoctor(e.target.value)}
          select
          label="Select Doctor"
          sx={{


            "& .MuiInputBase-root": {
                height: "46px"
            }
            }}
        >
          <MenuItem key={1} value="Dr. Akshay">
          Dr. Akshay
          </MenuItem>
          <MenuItem key={2} value="Dr. Rakesh">
          Dr. Rakesh
          </MenuItem>
          <MenuItem key={2} value="Dr. Sonal">
          Dr. Sonal
          </MenuItem>
        </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="LastName" id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
        name="someDate"
        label="Date of Birth"
        InputLabelProps={{ shrink: true, required: true }}
        type="date"
        sx={{


            "& .MuiInputBase-root": {
                height: "46px"
            }
            }}
      />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Age" id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
            </Grid>

            </Grid>
            
           
            
           
            <Grid item xs={12} sm={6}>
    <RadioGroup
        row
        // aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        
      >
         <FormLabel id="demo-radio-buttons-group-label" sx={{marginRight:"10px",paddingTop:"9px",fontSize:"16px",color:"black"}}>Gender : </FormLabel>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
            </Grid>
      
           
            
            <Grid item xs={12} sm={6}>
            <TextField
          style={{ width: "100%" }}
          variant="outlined"
          value={Occupation}
          onChange={(e) => setOccupation(e.target.value)}
          select
          sx={{


            "& .MuiInputBase-root": {
                height: "46px"
            }
            }}
          label="Select Occupation"
        >
          <MenuItem key={1} value="Farmer">
       Farmer
          </MenuItem>
          <MenuItem key={2} value="Doctor">
         Doctor
          </MenuItem>
          <MenuItem key={2} value="Engineer">
          Engineer
          </MenuItem>
        </TextField>
            </Grid>
        </Grid>
        {/* <Divider sx={{marginTop:"15px",marginBottom:"15px"}}/> */}
        
    
    </MainCard>
    <MainCard title="Basic Typography" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
       <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Case No." id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Reference No." id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
        name="someDate"
        label="Some Date"
        InputLabelProps={{ shrink: true, required: true }}
        type="date"
        defaultValue={values.someDate}
        sx={{


            "& .MuiInputBase-root": {
                height: "46px"
            }
            }}
      />
           
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
          style={{ width: "100%" }}
          variant="outlined"
          value={Doctor}
          onChange={(e) => setDoctor(e.target.value)}
          select
          label="Select Doctor"
          sx={{


            "& .MuiInputBase-root": {
                height: "46px"
            }
            }}
        >
          <MenuItem key={1} value="Dr. Akshay">
          Dr. Akshay
          </MenuItem>
          <MenuItem key={2} value="Dr. Rakesh">
          Dr. Rakesh
          </MenuItem>
          <MenuItem key={2} value="Dr. Sonal">
          Dr. Sonal
          </MenuItem>
        </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
          style={{ width: "100%" }}
          variant="outlined"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          select
          sx={{


            "& .MuiInputBase-root": {
                height: "46px"
            }
            }}
          label="Select Title"
        >
          <MenuItem key={1} value="Mr.">
         Mr.
          </MenuItem>
          <MenuItem key={2} value="Mrs.">
          Mrs.
          </MenuItem>
          <MenuItem key={2} value="Miss">
          Miss
          </MenuItem>
        </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="FirstName" id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="LastName" id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
        name="someDate"
        label="Date of Birth"
        InputLabelProps={{ shrink: true, required: true }}
        type="date"
        sx={{


            "& .MuiInputBase-root": {
                height: "46px"
            }
            }}
      />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Age" id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
            </Grid>

            </Grid>
            
           
            
           
            <Grid item xs={12} sm={6}>
    <RadioGroup
        row
        // aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        
      >
         <FormLabel id="demo-radio-buttons-group-label" sx={{marginRight:"10px",paddingTop:"9px",fontSize:"16px",color:"black"}}>Gender : </FormLabel>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
            </Grid>
      
           
            
            <Grid item xs={12} sm={6}>
            <TextField
          style={{ width: "100%" }}
          variant="outlined"
          value={Occupation}
          onChange={(e) => setOccupation(e.target.value)}
          select
          sx={{


            "& .MuiInputBase-root": {
                height: "46px"
            }
            }}
          label="Select Occupation"
        >
          <MenuItem key={1} value="Farmer">
       Farmer
          </MenuItem>
          <MenuItem key={2} value="Doctor">
         Doctor
          </MenuItem>
          <MenuItem key={2} value="Engineer">
          Engineer
          </MenuItem>
        </TextField>
            </Grid>
        </Grid>
        {/* <Divider sx={{marginTop:"15px",marginBottom:"15px"}}/> */}
        
    
    </MainCard>

    </FormControl>
    )
};

export default Patient;
