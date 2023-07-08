var model = new Model();
var users = [];

function getUsers() {
    model.getAll()
        .then((result) => {
            // Promise resolved
            users = JSON.stringify(result);
        })
        .catch((error) => {
            // Promise rejected
            console.error(error);
        });
}