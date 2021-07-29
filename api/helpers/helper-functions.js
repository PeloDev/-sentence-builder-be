// filter function to remove duplicates from array
exports.uniqueValues = (value, index, self) => {
    return self.indexOf(value) === index;
}