var api = {
    getBio(username) {
        username = username.toLowerCase().trim();
        var url = "https://api.github.com/users/" + username;
        return fetch(url).then((res) => res.json()).then((resJSON) => (resJSON));
    },
    getRepos(username) {
        username = username.toLowerCase().trim();
        var url = "https://api.github.com/users/" + username + "/repos";
        return fetch(url).then((res) => res.json()).then((resJSON) => (resJSON));
    }
};

module.exports = api;