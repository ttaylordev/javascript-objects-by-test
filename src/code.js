/* LITERALS */
function makeEmptyObject(){
  return{};
}

/* NEW OBJECT */
function makeEmptyObjectNew(){
  var myObj = new Object({});
  return myObj;
}

/* KEY VALUE PAIRS */
function makeFirstObject(){
  return {
    keyOnTheLeft: "Value on the right"
  };
}

function makeNumberObject(){
  return {
    numberKey: 9001
  };
}

function makeStringObject(){
  return {
    stringKey: "We are the champions"
  };
}

function makeBooleanObject(){
  return {
    booleanKey: true
  };
}

function makeObjectObject(){
  return {
    objectKey: {
      innerObject: "This works"
    }
  };
}

function makeArrayObject(){
  return {
    arrayKey: [1,2,3]
  };
}

function makeFunctionObject(){
  return {
    sayHi: function(){
      "Hi";
    }
  };
}

function makeObjception(){
  return {
    objectKey: {
      inceptionLevel1: {
        inceptionLevel2: {
          inceptionLevel3: "Objception Complete!"
        }
      }
    }
  };
}

function makeMultikeyObject(){
  return {
    prop1: "So beaucoup",
    prop2: "So mucho",
    prop3: "So many"
  };
}

/* DOT PROPERTY */
function returnUrlProperty(obj){
  return obj.url;
}

function returnSubdomainUserCount(obj) {
  return obj.subdomain.userCount;
}

function getUserCount(obj){
  return obj.userCount;
}

function setUserCount(obj){
  obj.userCount =7;
}

/* SQUARE BRACKET NOTATION */
function returnUrlPropertySquare(obj){
  return obj["url"];
}

function returnSubdomainUserCountSquare(obj){
  return obj["subdomain"]["userCount"];
}

function getUserCountSquare(obj){
  return obj["userCount"];
}

function setUserCountSquare(obj){
  obj["userCount"] = 7;
}

/* DELETE */
function deleteSecond(obj){
  delete obj["second"];
  return obj;
}

/* LOOP */
function getValuesFromObject(obj){
  var arr = [];
  for (var P in obj){
    arr.push (obj[p]);
  }
  return arr;
}

/* FUNCTIONS ARE OBJECTS */
function invokeAnObject(){
  var obj ={};
  obj();
}



var flyFisherman = {
  clothing: ["hat", "vest", "waiders", "rubber boots"],
  set:  {
    rod: "glass fiber",
    reel: "awesome5x2",
    line: "shark strength",
    fly: [{
      nickname: "little lady",
      type: "sparkly"
    },
    {
      nickname: "dirty politician",
      type: "bribery"
    }
    ]
  }
};









var coverBands = [
  {
    bandName: 'Tuneyards',
    contact: 'dave@tunyards.com',
    covering: 'yard birds'
  },

  {
    bandName: 'Petty Theft',
    contact: 'steve@petty.com',
    covering: 'Tom Petty'
  },
  {
    bandName: 'Metalachi',
    contact: 'arriche@wewannametalica.com',
    covering: 'Metalica'
  },
  {
    bandName: 'Led Zeppagain',
    contact: 'Mike@Journagain.com',
    covering: 'Journey'
  },
  {
    bandName: 'Heartbreakers',
    contact: 'breakers@breakers.com',
    covering: 'Tom Petty'
  },
  {
    bandName: 'Arnel',
    contact: 'Arnel@Arnel.com',
    covering: 'Journey'
  },
  {
    bandName: 'Meatloaf',
    contact: 'dameat@loafs.com',
    covering: 'Journey'
  }
];


function CountCoverBands(arrayOfCoverBands){
  var resultsObj ={};
    for (var i = 0; i < arrayOfCoverBands.length; i++){
      var bandName = arrayOfCoverBands[i].covering;
      if (resultsObj.hasOwnProperty()){
        resultsObj[bandName]++;
      }
      else {
        resultsObj[bandName] =1;
      }
  return resultsObj;
  }
}



var expectedResult = {
  Yardbirds: 1,
  TomPetty: 2,
  Metalica: 1,
  Journey: 3
};
