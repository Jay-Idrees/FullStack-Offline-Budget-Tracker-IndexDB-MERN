// Setting up request to create new indexdb called budget
let db
const request = window.indexDB.open("budget", 1)

request.onupgradeneeded = function (event) {
    db = event.target.result;
    const pendingStore = db.createObjectStore("pending", {
      autoIncrement: true
    });

  };


  request.onsuccess = function (event) {
    db = event.target.result;
  
    if (navigator.onLine) {
      checkDatabase();
    }
  };
  
  request.onerror = function (event) {
    // log error here
  };
  
  /////////////////////////////////////////////////

  // Adding transaction record
  function saveRecord(record) {
    const transaction = db.transaction(["pending"], "readwrite");
    const pendingStore = transaction.objectStore("pending");
    pendingStore.add(record);
  };

  