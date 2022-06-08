const dateFormat = (dateParam) => {

    const date = new Date(dateParam)
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()

    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`
}

export default dateFormat