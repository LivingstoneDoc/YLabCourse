const url = 'http://localhost:3000/users';

export function getResponse() {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching user data:', error);
        })
}