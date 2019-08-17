const groupAdultsByRange = (grouping) => {
    let adultRange = grouping.filter(adultRange => adultRange.age > 18)
    return adultRange
}

const groupAdultsByRange = (grouping) => {
    return grouping.map(grouping => grouping.age)
}
module.exports = {
    groupAdultsByRange
}