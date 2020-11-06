
// Capitalize the first letter of each word in a string
export const capitalizeString = string => string.split(' ').map(item => item.replace(item.charAt(0), item.charAt(0).toUpperCase())).join(' ')

// Capitalize only first letter of a string
export const capitalize = str => str.charAt(0).toLocaleUpperCase() + str.slice(1)









