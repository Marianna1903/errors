// var p = prompt("Type hello!");
// try{
// 	if(p!="hello"){
// 		throw new Error("Oops, you didn't type hello.");
// 	}else{
// 		alert("hi");
// 	}
// }catch(err){
// 	alert(err.message);
// }finally{
// 	alert("Thanks for playing!");
// }


let arr = [1,4,true,8,"hello"];
let error = [];
try{
	for(var i=0;i<arr.length;i++){
		if(typeof arr[i]=="boolean"){
			error.push(new Error("Oops,this item is boolean"));
		}else if(typeof arr[i]=="string"){
			error.push(Error("Oops, this item is string"));
		}
	}
	if(error.length>0){
		throw new Error();
	}
}catch{
	console.log(error.join(""));
}


// let age = prompt("Mutqagreq dzer tariqy");
// try{
// 	if(age<18){
// 		throw new Error("Mutqy 18ic bardzr");
// 	}else{
// 		alert("Mutqy hastatvel e!");
// 	}
// }catch(err){
// 	alert(err);
// }


