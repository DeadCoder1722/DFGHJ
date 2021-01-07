export const filterMyClassAction = () => ({
    type: 'FIL_MYCLASS'
});

export const searchClassAction = (name) => ({
    type: 'SEARCH_CLASS',
    name
});

export const allClassAction = () => ({
    type: 'ALLCLASS'
});

export const chooseClass = (key) => ({
    type: 'CHOOSECLASS',
    key
});

export const deleteClass = (key) => ({
    type: 'DELETECLASS',
    key
});

