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
    },
    getNotes(username) {
        username = username.toLowerCase().trim();
        var url = "https://githubnotes-976a7.firebaseio.com/" + username + ".json";
        return fetch(url).then((res) => res.json()).then((resJSON) => (resJSON));
    },
    addNote(username, note) {
        username = username.toLowerCase().trim();
        var url = "https://githubnotes-976a7.firebaseio.com/" + username + ".json";
        return fetch(url, {
            method: "post",
            body: JSON.stringify(note)
        }).then((res) => res.json()).then((resJSON) => (resJSON));
    }
};

module.exports = api;