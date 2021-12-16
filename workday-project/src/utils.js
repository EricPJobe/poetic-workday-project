const encodeZips = (zips) => {
    let zipsString = ''
    zips.forEach((zip, index) => {
        if (index !== zips.length-1) {
            zipsString += `${zip}%2C+`
        } else {
            zipsString += zip
        }
    })
    return zipsString
}

export const getDistance = async (zip1, zips) => {
    // const key = process.env.REACT_APP_ZIP_CODE_API_KEY
    const key = process.env.REACT_APP_ZIP_CODE_API_KEY_LOCAL
    const zipsString = encodeZips(zips)
    const url = `http://www.zipcodeapi.com/rest/${key}/multi-distance.json/${zip1}/${zipsString}/mile`

    return await fetch(url)
}

