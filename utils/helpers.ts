const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

export function getDateNow(){
    const date = new Date()

    return `${daysOfWeek[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`
}