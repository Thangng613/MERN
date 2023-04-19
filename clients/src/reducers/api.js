export const apiUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8000/api' : 'deploy'

export const LOCAL_STORAGE_TOKEN_NAME = 'mern-project'

export const POST_LOADED_SUCCESS = 'POST_LOADED_SUCCESS'
export const POST_LOADED_FAIL = 'POST_LOADED_FAIL'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const FIND_POST = 'FIND_POST'