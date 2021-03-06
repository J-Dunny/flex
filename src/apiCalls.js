// const fetchExercises = () => {
//     const fetchCall = fetch('https://wger.de/api/v2/exercise/?language=2')
//         .then(response => {
//             if (response.status === 404) {
//                 throw new Error("404: Not Found")
//             } else if (response.status === 500) {
//                 throw new Error("500: Server is having issues")
//             }
//             return response.json()
//         })
//     return fetchCall
// }

// const fetchCategories = () => {
//     const fetchCall = fetch('https://wger.de/api/v2/exercisecategory/')
//         .then(response => {
//             if (response.status === 404) {
//                 throw new Error("404: Not Found")
//             } else if (response.status === 500) {
//                 throw new Error("500: Server is having issues")
//             }
//             return response.json()
//         })
//     return fetchCall
// }

// const fetchPictures = () => {
//     const fetchCall = fetch('https://wger.de/api/v2/exerciseimage/')
//         .then(response => {
//             if (response.status === 404) {
//                 throw new Error("404: Not Found")
//             } else if (response.status === 500) {
//                 throw new Error("500: Server is having issues")
//             }
//             return response.json()
//         })
//     return fetchCall
// }

const newExercises = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            'X-RapidAPI-Key': '0db63607a1mshb7058632ce290c3p10e57ajsn0d36c557c666'
        }
    };

    const fetchCall = fetch('https://exercisedb.p.rapidapi.com/exercises', options)
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

export { newExercises }