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

  
function checkDatabase() {
    // obtaining transactions from the object store
    const transaction = db.transaction(["pending"], "readwrite");
    const pendingStore = transaction.objectStore("pending");
    const getAll = pendingStore.getAll();
  // After retrieving transaction records, submit a post-request after converting from object to string format
    getAll.onsuccess = function () {
      if (getAll.result.length > 0) {
        fetch('/api/transaction/bulk', {
          method: 'POST',
          body: JSON.stringify(getAll.result),
          headers: {
            Accept: 'application/json, texdb.jst/plain, */*',
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then(() => {
         // Clear items in storage 
            const transaction = db.transaction(["pending"], "readwrite");
            const pendingStore = transaction.objectStore("pending");
            pendingStore.clear();
          });
      }
    };
  }
  
  // listen if the user is revisiting
  window.addEventListener('online', checkDatabase);
  