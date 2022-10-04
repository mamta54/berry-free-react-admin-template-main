const KEYS = {
    appointments : 'appointments',
    appointmentId: 'appointmentId',
    employees: 'employees',
    employeeId: 'employeeId'
}

export const getDoctorCollection = () => ([
    { id: '1', title: 'Dr. Rakesh' },
    { id: '2', title: 'Dr. Akshay' },
    { id: '3', title: 'Dr. Snehal' },
    { id: '4', title: 'Dr. Pooja' },
])
export const getTimeCollection = () => ([
    { id: '12:00 am', title: '12:00 am' },
    { id: '12:15 am', title: '12:15 am' },
    { id: '12:30 am', title: '12:30 am' },
    { id: '12:35 am', title: '12:35 am' },
    { id: 'male', title: 'Male' },
    { id: 'male', title: 'Male' },
    { id: 'male', title: 'Male' },
    { id: 'male', title: 'Male' },
    { id: 'male', title: 'Male' },
    { id: 'male', title: 'Male' },
    { id: 'male', title: 'Male' },
    { id: 'male', title: 'Male' },
    { id: 'male', title: 'Male' },

])
export const getServiceCollection = () => ([
    { id: '1', title: 'Service 1', price:'₹ 500' },
    { id: '2', title: 'Service 2',  price:'₹ 400' },
    { id: '3', title: 'Service 3',  price:'₹ 750' },
    { id: '4', title: 'Service 4',  price:'₹ 800' },
])
export const getDepartmentCollection = () => ([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
])
export function insertEmployee(data) {
    let employees = getAllEmployees();
    data['id'] = generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

export function updateEmployee(data) {
    let employees = getAllEmployees();
    let recordIndex = employees.findIndex(x => x.id == data.id);
    employees[recordIndex] = { ...data }
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}
export function deleteEmployee(id) {
    let employees = getAllEmployees();
    employees = employees.filter(x => x.id != id)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
    console.log(localStorage.getItem(KEYS.employeeId))
    if (localStorage.getItem(KEYS.employeeId) == null )
{           
        localStorage.setItem(KEYS.employeeId, '0')}
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    let employees = JSON.parse(localStorage.getItem(KEYS.employees));
    //map departmentID to department title
    let departments = getDepartmentCollection();
    return employees.map(x => ({
        ...x,
    }))
}

export function insertAppointment(data){
    let appointments = getAllappointments();
    data['id'] = generateappointmentId();
    appointments.push(data)
    localStorage.setItem(KEYS.appointments,JSON.stringify(appointments))
}
export function generateappointmentId() {
    if (localStorage.getItem(KEYS.appointmentId) == null)
        {
    
            localStorage.setItem(KEYS.appointmentId, '0')}
    var id = parseInt(localStorage.getItem(KEYS.appointmentId))
    localStorage.setItem(KEYS.appointmentId, (++id).toString())
    return id;
}
export function getAllappointments() {
    if (localStorage.getItem(KEYS.appointments) == null)
        localStorage.setItem(KEYS.appointments, JSON.stringify([]))
        let appointments = JSON.parse(localStorage.getItem(KEYS.appointments));
        //map departmentID to department title
        let doctors = getDoctorCollection();
        let services = getServiceCollection();
        return appointments.map(x => ({
            ...x,
            doctorr: doctors[x.doctor-1].title,
            services: services[x.service - 1].title,
            price: services[x.service - 1].price

        }))
    
}

