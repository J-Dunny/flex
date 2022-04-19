const fetchExercises = () => {
    const fetchCall = fetch('https://wger.de/api/v2/exercise/?language=2')
        .then(response => {
            if (response.status === 404) {
                throw new Error("404: Not Found")
            } else if (response.status === 500) {
                throw new Error("500: Server is having issues")
            }
            return response.json()
        })
    return fetchCall
}

const fetchCategories = () => {
    const fetchCall = fetch('https://wger.de/api/v2/exercisecategory/')
        .then(response => {
            if (response.status === 404) {
                throw new Error("404: Not Found")
            } else if (response.status === 500) {
                throw new Error("500: Server is having issues")
            }
            return response.json()
        })
    return fetchCall
}

export { fetchExercises, fetchCategories }