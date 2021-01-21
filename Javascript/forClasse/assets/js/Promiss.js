let myArray = [1,"m",3,4,5,6];
myPromises = new Promise((resolve,reject) =>{
    for (i=0; i<myArray.length; i++){
        if (myArray[i] =="m") resolve(`la lettre m apparait`);
        else reject('il n\'apparait');
    }
});