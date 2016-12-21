// //============================================================================
// = /*                                  Part 1
// */ //=========================================================================
// ==== /* (1) Think of some way to represent all of the students in RBK cohort2,
// if you know         that each one have the following attributs:         - name
// 	- age - education - nationality         */ 
function meke (n,a,e,na){
	return {
		name:n,  
		age:a,      
		education:e,
		nationality:na    
	} 
}

    // a- represent 2 of your frineds in rbk using the model that you have
    // made and name them as your frineds name 
    var frind=[] 
    var frind2=meke("zainab",22,"foodexpirians","syrian") 
    var frind1=meke("ahmad",23,"comsaians","jordanian")
    var frind3=meke("ruaa",22,"engelsh","phalstain") 
    frind=[frind1,frind2,frind3]

    // b- create a function called showFriend() that accepts one parameter,
// and output representation of your frined like the following     //
// showFriend(frinedData) // "Fatema with the age of 26 and with computer
// engineering education"  function showFriend(obj){     return obj.name+"
// "+obj.age+" "+obj.education+" "+obj.nationality }     // c- create a function
// called avergeStudents() to calculate the average age of your class students,
// is it possible to pass all your class students one by one ? think of a way to
// pass them in your function


function avergeStudents(arr){  
	var x=0   
	for(var i=0;i<arr.length;i++){
		x+=arr[i].age   
	}
	return x/arr.length 
}





//  // b-create a function called rangeSquared in which it will accept two
// parameters, and will output the squared numbers between these two parameter if
// the number is even      
// in order to square the numbers create a function
// called square and call     
// it inside rangeSquared function
// rangeSquared(2)= [4];
 // rangeSquared(3)= null
 // rangeSquared(2,10)=[4,16,36,64,100];
 function squer (x,n){
 var y=0;
 if(n===undefined){
 	n=x
 return Math.pow(x,n) 
 }else{
 	return Math.pow(x,n)

 }
}
function rangeSquared(x,n){
	var arr=[]
	var y=0
	if(x%2===0){
	if(n!==undefined){
	for(var i = x ; i<=n ;i++){
		
			y+=squer(x)
			arr.push(y)
		}
		
	}else{
		for(var i = 0 ; i<=x ;i++ ){

		}
	}
	return arr
}
return null
}
	
//???




/* c- Find all leaders in an array. A leader is an element larger than all
elements to the right of it.     Example:     leader([98, 20, 30, 5, 11, 27])
// output: [98, 30, 27] */

function leader(arr){
	var x=arr[0]
	arr=arr.splice(1);
	arr1=[]
	for(var i = 0 ; i < arr.length ; i++){
    if(x>arr[i]){
     arr.splice(arr[i])
     arr1.push(x)
     x=arr[i]
   
    }else{
    	arr.splice(arr[i])
    }
	}
	return arr1
}



