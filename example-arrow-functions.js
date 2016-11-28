var names=['Varun','Julie','jen'];
names.forEach(function(name){
console.log('forEach',name);
});

names.forEach((name) =>{
console.log('arrow func',name);
});

names.forEach((name) => console.log(name));