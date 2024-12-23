function getMonthYear(offset = 0) {
    const date = new Date();
    date.setMonth(date.getMonth() + offset);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${year}`;
}

export default getMonthYear