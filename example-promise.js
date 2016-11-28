function getTempCallback(location,callback){
  callback(undefined,78);
  callback('city not found');

}
getTempCallback('Philadelphia',function(err,temp){
  if(err){
    console.log('error',err);
  }
  else{
    console.log('success',temp)
  }
})

function addPromise(a, b){
  return new Promise(function(resolve,reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }
      else{
        reject('a and b needs to  be numbers');
      }
    
    
  });
}
addPromise(2,3).then(function(sum){
console.log('succes',sum);
},function(err){
console.log('error',err);
});

addPromise('andrew',9).then(function(sum){
console.log('this should not show up');
},function(err){
console.log('this should appear');
})





