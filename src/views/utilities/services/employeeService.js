const KEYS = {
    appointments : 'appointments',
    appointmentId: 'appointmentId'
}

export const getDepartmentCollection = () => ([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
])

export function insertAppointment(data){
    let appointments = getAllappointments();
    data['id'] = generateappointmentId();
    appointments.push(data)
    localStorage.setItem(KEYS.appointments,JSON.stringify(appointments))
}
export function generateappointmentId() {
    if (localStorage.getItem(KEYS.appointmentId) == null)
        localStorage.setItem(KEYS.appointmentId, '0')
    var id = parseInt(localStorage.getItem(KEYS.appointmentId))
    localStorage.setItem(KEYS.appointmentId, (++id).toString())
    return id;
}
export function getAllappointments() {
    if (localStorage.getItem(KEYS.appointments) == null)
        localStorage.setItem(KEYS.appointments, JSON.stringify([]))
        let appointments = JSON.parse(localStorage.getItem(KEYS.appointments));
        //map departmentID to department title
        let doctors = getDepartmentCollection();
        return appointments.map(x => ({
            ...x,
            doctor: doctors[x.doctor - 1].title
        }))
    
}

