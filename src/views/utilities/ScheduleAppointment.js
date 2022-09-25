import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Divider, Grid, Paper, Toolbar, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import Appointments from './Appointments';
// ===============================|| COLOR BOX ||=============================== //



// ===============================|| UI COLOR ||=============================== //

const ScheduleAppointment = () => (
    <>
    <MainCard title="Schedule Appointment" secondary={<SecondaryAction link="https://next.material-ui.com/system/palette/" />}>
        <Appointments/>
       
    </MainCard>
     
     </>
);

export default ScheduleAppointment;
