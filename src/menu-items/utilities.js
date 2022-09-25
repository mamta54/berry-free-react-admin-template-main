// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'module',
   
    type: 'group',
    children: [
        {
            id: 'module-patient',
            title: 'Patient',
            type: 'item',
            url: '/module/module-patient',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'module-scheduleAppointment',
            title: 'Schedule Appointment',
            type: 'item',
            url: '/module/module-scheduleAppointment',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'module-viewAppointment',
            title: 'View Appointment',
            type: 'item',
            url: '/module/module-viewAppointment',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Lab Work',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Lab Work1',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Lab Work2',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default utilities;
