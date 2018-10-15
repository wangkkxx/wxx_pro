//*
//**
//***
//****
//*****
var s='';
for(var i=1;i<=5;i++){
  s+='*  '
  console.log(s);
}

//*****
//****
//***
//**
//*
for(var j=1;j<=5;j++){
  var m='';
  for(var h=5;h>=j;h--){
    m+='*  ';
  }
  console.log(m);
}

//    *
//   **
//  ***
// ****
//*****  1
for(var i=1;i<=5;i++){
  var str='';
  for(var j=1;j<=5-i;j++){
    str+=' ';
  }
  for(var k=1;k<=i;k++){
    str+='*';
  }
  console.log(str);
}

//2
for(var i=1;i<=5;i++){
  var str='';
  for(var j=5;j>0;j--){
    if(j>i){
	  str+=' ';
	}else{
	  str+='*';
	}
  }
  console.log(str);
}

// *****
//  ****
//   ***
//    **
//     * 
for(var i=1;i<=5;i++){
  var str='';
  for(var j=5;j>5-i;j--){
    str+=' ';
  }
  for(var k=5;k>=i;k--){
    str+='*';
  }
  console.log(str);
}

//    *
//   ***
//  *****
// *******
//*********
for(var i=1;i<=5;i++){
  var str='';
  for(var j=1;j<=5-i;j++){
    str+=' ';
  }
  for(var k=1;k<=2*i-1;k++){
    str+='*';
  }
  console.log(str);
}