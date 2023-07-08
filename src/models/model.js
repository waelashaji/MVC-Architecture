class Model {

    constructor() {
        this.users = [
            {
                email: 'email@example.com',
                password: 'password',
                role: 'admin',
            },
            {
                email: 'email2@example.com',
                password: 'password2',
                role: 'super-admin',
            },
        ];
    }


    getAll() {
        return new Promise((resolve, reject) => {
            // Simulating an asynchronous task (e.g., fetching data from an API)
            setTimeout(() => {
              const success = true; // Simulating a successful operation
          
              if (success) {
                // Resolve the promise with a value
                resolve(this.users);
              } else {
                // Reject the promise with an error
                reject('An Error occured while retrieving users!');
              }
            }, 0); // Simulating a 0-second delay
          });
    }
}