function adjustMonthYear(dateString, offset = 0) {
    const [month, year] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1); // JavaScript months are 0-based
    date.setMonth(date.getMonth() + offset);

    const adjustedMonth = String(date.getMonth() + 1).padStart(2, '0');
    const adjustedYear = date.getFullYear();

    return `${adjustedMonth}-${adjustedYear}`;
}

export default adjustMonthYear