export const addContact = (contact) =>({
    
    type: "ADD_CONTACT",
    payload: contact,
});

export const deleteContact = (id) => ({
    type: "DELETE_CONTACT",
    payload: id,
});

export const toggleFavorite = (id) => ({
    type: "TOGGLE_FAVORITE",
    payload: id,
})

export const totalPages = (page) => ({
    type:"TOTAL_PAGE",
    payload: page,
})
