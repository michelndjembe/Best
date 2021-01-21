  let invoice = [[3,4,6,8],[8,3,2,4]];
  console.log(invoice);
  console.log(invoice[1][1]);
  console.log(invoice[0].length);

 let username = prompt('enter string');
 let modele = /[a-z][0-9]/i;
 console.log();
 if (typeof(username)=='string' && username.length<8 && modele.test(username)){console.log(username)}
    else{
     throw(alert('Error'));
 }

