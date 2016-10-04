const api = {};

api.fetchBio = function (username) {
    username = username.toLowerCase().trim();
    const url = "https://api.github.com/users/" + username;
    fetch(url).then((res) => res.json()).catch((err) => {console.log(err + "error")})
}

export default api;