export const API_RM = {
    URL: "https://rickandmortyapi.com/api",

    CHARACTERS: function (page, name,status,gender,species) {
        return `${this.URL}/character/?page=${page}&name=${name}&status=${status}&gender=${gender}&species=${species}`
    },
    CHARACTER_BY_ID: function (id) {
        return `${this.URL}/character/${id}`
    },
    EPISODES: function (id) {
        return `${this.URL}/episode/${id}`
    },
    LOCATION: function (id) {
        return `${this.URL}/location/${id}`
    }
    
}