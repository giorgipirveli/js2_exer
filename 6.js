let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isLoggedIn: true
  }
  printName();
 function printName(){
    if(user.isLoggedIn==true){
        console.log(user.firstname+" "+ user.lastname)
    }else if(user.isLoggedIn==false){
      console.log(false)
    }
 }
 
 
  
  