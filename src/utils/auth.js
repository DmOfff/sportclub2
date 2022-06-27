export const isAuthenticated = () => {
    const token = localStorage.getItem('token')
    return Boolean(token !== null && token!== undefined && token)
}

export const getUser = async (login, password) => {



}

export const logout = async () => {

    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.replace("/");

}