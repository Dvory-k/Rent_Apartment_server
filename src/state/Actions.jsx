export const setCurrentAdvertiser = (adver) => {
    // type - מחרוזת שמגדירה איזה פעולה רוצים לעשות
    // מקובל לכתוב באותיות גדולות
    // payload - parameters
    return { type: 'SET_CURRENT_ADVERTISER', payload: adver }
}
export const setCurrentApartment = (adver) => {
    // type - מחרוזת שמגדירה איזה פעולה רוצים לעשות
    // מקובל לכתוב באותיות גדולות
    // payload - parameters
    return { type: 'SET_CURRENT_APARTMENT', payload: adver }
}

export const setToken = (t) => {
    return { type: 'SET_TOKEN', payload: t }
}
export const setApartments=(apartments)=>{

    return {type:'SET_APARTMENT',payload:apartments}
}
export const setCity=(cities)=>{

    return {type:'SET_CITIES',payload:cities}
}
export const setCategory=(categories)=>{

    return {type:'SET_CATEGORIES',payload:categories}
}
export const addApartment=(apartment)=>{

    return {type:'ADD_APARTMENT',payload:apartment}
}
export const deleteApartment=(apartment)=>{

    return {type:'DELETE_APARTMENT',payload:apartment}
}