const modifyURL = (urlName) => {
    return `${urlName
        .replace(/[^\w\s]/gi, "")
        .toLowerCase()
        .replace(/\s+/g, "-")}`
}

export default modifyURL