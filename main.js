import { UI_ELEMENTS } from "./constants.js";
import { getResponse } from "./data-request.js";

function authorize(e) {
    e.preventDefault();
    getResponse()
        .then(users => {
            const foundUser = users.find(user => user.username === UI_ELEMENTS().userName.value && user.password === UI_ELEMENTS().userPassword.value)
            UI_ELEMENTS().infoMessage.classList.remove('show-negative-info');
            UI_ELEMENTS().infoMessage.classList.add('show-positive-info');
            UI_ELEMENTS().infoMessage.textContent = `User "${foundUser.username}" has successfully logged in`;
            console.log(`User ${foundUser.username} has successfully logged in`);
        })
        .catch(error => {
            UI_ELEMENTS().infoMessage.classList.add('show-negative-info');
            UI_ELEMENTS().infoMessage.textContent = 'Error. Please, check your login or password';
                console.error(error);
            
        })
        .finally(() => UI_ELEMENTS().loginForm.reset())
}
UI_ELEMENTS().loginForm.addEventListener('submit', authorize);