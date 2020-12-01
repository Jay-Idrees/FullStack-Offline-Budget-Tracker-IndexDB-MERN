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

  
function saveRecord(record) {
    // create a transaction on the pending db with readwrite access
    const transaction = db.transaction(["pending"], "readwrite");
    // access your pending object store
    const pendingStore = transaction.objectStore("pending");
    // add record to your store with add method.
    pendingStore.add(record);
  }
  
  function checkDatabase() {
    // open a transaction on your pending db
    const transaction = db.transaction(["pending"], "readwrite");
    // access your pending object store
    const pendingStore = transaction.objectStore("pending");
    // get all records from store and set to a variable
    const getAll = pendingStore.getAll();
  
    getAll.onsuccess = function () {
      if (getAll.result.length > 0) {
        fetch('/api/transaction/bulk', {
          method: 'POST',
          body: JSON.stringify(getAll.result),
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then(() => {
            // if successful, open a transaction on your pending db
            const transaction = db.transaction(["pending"], "readwrite");
            // access your pending object store
            const pendingStore = transaction.objectStore("pending");
            // clear all items in your store
            pendingStore.clear();
          });
      }
    };
  }
  
  // listen for app coming back online
  window.addEventListener('online', checkDatabase);
  