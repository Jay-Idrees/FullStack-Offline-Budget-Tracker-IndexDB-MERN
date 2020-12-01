// Setting up request to create new indexdb called budget
let db
const request = window.indexDB.open("budget", 1)

request.onupgradeneeded = function (event) {
    db = event.target.result;
    const pendingStore = db.createObjectStore("pending", {
      autoIncrement: true
    });

  };