
//  Create an email pattern 


let txt = "mssharminakter@gmail.com";
let pettern = /^[a-z0-9_\.]*@[a-z]*\.[a-z0-9-]{3,5}/;
console.log(pettern.test(txt));


//   Create a  username pattern

   let username = "sharmin_akter@";
   let userPettern = /^[a-z0-9_$@#]*$/;
   console.log(userPettern.test(username));


  //  Create a Bangladeshi phone number pattern

  let phone = "01790169442";
  let phonepettern = /^(01|8801|\+8801)[0-9]{9}$/;
  console.log(phonepettern.test(phone));


//   Create a password pattern 

let passward = "Developersharmin";
let passwordpettern = /^[a-zA-Z0-9-@#$&]{4,16}$/;
console.log(passwordpettern.test(passward));


//   Create a zipcode pattern  

let zipcode = "3610";
let zipcodepettern = /^[0-9]{4,}$/;
console.log(zipcodepettern.test(zipcode));



