// example of synchronous functon

var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vikram'
    };
    setTimeout(() => {
        callback(user);
    }, 1000);

};

getUser(31, (userObject) => {
    console.log(userObject);
});