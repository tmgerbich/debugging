const storeOwners = [
    {
      name: 'Danny Shavez',
      stores: 1,
      location: "AZ",
    },
    {
      name: 'Sally Ride',
      stores: 1,
      location: "CA",
    },
    {
      name: 'Neil Armstrong',
      stores: 1,
      location: "TX",
    },
    {
      name: 'Buzz Aldrin',
      stores: 1,
      location: "TN",
    },
  ];
  
  const listNumberOfStores = function () {
    let totalLocations = 0;
    for (let i = 0; i < storeOwners.length; i++) {
      totalLocations = totalLocations + storeOwners[i].stores;
    }
    return totalLocations;
  };

  let locations = listNumberOfStores();


  function tellMeMyStores() {
    console.log('Hey, can you tell me how many stores you have?');
    if (locations > 0) {
      console.log('Of course, we have ' + locations + ' stores');
    }
  }
  
  function hasStore() {
    for (let i = 0; i < storeOwners.length; i++) {
      let person = storeOwners[i].name;
      let location = storeOwners[i].location;
      console.log('Yes, ' + person + ' has one in ' + location);
    }
  
  }
  
  tellMeMyStores();
  hasStore();

