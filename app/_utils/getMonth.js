function getMonth(offset = 0, currentValue = null) {
    // Array of month abbreviations
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    // Determine the starting month index
    let currentMonthIndex;

    if (currentValue !== null) {
        // If currentValue is provided, find the index of this month in the array
        currentMonthIndex = months.indexOf(currentValue.toLowerCase());
        if (currentMonthIndex === -1) {
            throw new Error("Invalid month abbreviation provided for currentValue.");
        }
    } else {
        // If no currentValue is provided, use the actual current month
        currentMonthIndex = new Date().getMonth();
    }

    // Calculate the adjusted month index and handle negative offsets
    let adjustedMonthIndex = (currentMonthIndex + offset) % 12;
    if (adjustedMonthIndex < 0) {
        adjustedMonthIndex += 12; // Adjust for negative indices to wrap around to the end of the array
    }

    // Return the month name from the array
    return months[adjustedMonthIndex];
}

export default getMonth