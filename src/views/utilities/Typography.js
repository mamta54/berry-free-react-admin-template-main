import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import { useState,React } from 'react';
// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import TextField from '@mui/material/TextField';
import {FormControl} from '@mui/material';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => {
    const [Dates, setDates] = useState();

    const handleDateChange = (newValue) => {
      setDates(newValue);
    };
  
    const m = (new Date().getMonth()+1) <= 9 ? "0"+(new Date().getMonth()+1) : (new Date().getMonth()+1);
    const d = new Date().getDate();
    const y = new Date().getFullYear();
    const todayDate = d+"-"+m+"-"+y
    return (
        <MainCard title="Basic Typography" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
       <FormControl>
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
        id="datetime-local"
        label="Next appointment"
        type="date"
        defaultValue={todayDate}
        sx={{
            "& .MuiInputBase-root": {
                height: "46px"}
              }}
        InputLabelProps={{
          shrink: true,
        }}
      />
           
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="fullWidth" id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="fullWidth" id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="fullWidth" id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="fullWidth" id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="fullWidth" id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="fullWidth" id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="fullWidth" id="fullWidth" sx={{


"& .MuiInputBase-root": {
    height: "46px"
}
}}/>
            </Grid>
        </Grid>
        </FormControl>
    </MainCard>
    )
};

export default Typography;
