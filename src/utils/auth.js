export const isAuthenticated = () => {
    let token = localStorage.getItem('user')

    if (!token)
        return false

    token = JSON.parse(token).accessToken

    return Boolean(token !== null && token!== undefined && token)
}

export const getUser = async (login, password) => {

}

export const setUser = async (user) => {
    localStorage.setItem('user', JSON.stringify(user))
}

export const logout = async () => {

    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.replace("/");

}