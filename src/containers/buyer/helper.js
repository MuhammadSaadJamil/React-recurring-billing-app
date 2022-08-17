export const fullNameOrNA = (firstName, lastName) => {
    return firstName || lastName ? `${firstName} ${lastName}` : 'N/A'
}