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

export function getDateText(date : Date){
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

export function addCommasToNumber(_number : string) {
    // Convert number to string
    const numberStr = _number.toString();
    
    // Split the string into integer and decimal parts (if any)
    const parts = numberStr.split(".");
    
    // Get the integer part
    const integerPart = parts[0];
    
    // Add commas to the integer part
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // Check if there is a decimal part
  //   const decimalPart = parts.length > 1 ? "." + parts[1] : "";
    
    // Combine the formatted integer and decimal parts
    const formattedNumber = formattedInteger
    
    return formattedNumber;
  }