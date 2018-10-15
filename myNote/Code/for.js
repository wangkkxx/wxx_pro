//三角形
for(var i=1,s='';i<=5;i++){
  s+='  *';
  console.log(s);
}

for(var m=1;m<=5;m++){
  var p='';
  for(var n=5;n>=m;n--){
    p+='  *';
  }
  console.log(p);
}

//九九乘法表
for(var a=1;a<=9;a++){
  var d='';
  for(var b=1;b<=a;b++){
	var c=b+'*'+a+'='+a*b+'  ';
	d+=c;
  }
  console.log(d);
}


for(var t=9;t>=1;t--){
  var st='';
  for(var r=1;r<=t;r++){
	st+=r+'*'+t+'='+r*t+'  ';
  }
  console.log(st);
}

//1~4任意三位不同数字的组合
for(var e=1;e<=4;e++){
  for(var f=1;f<=4;f++){
    for(var g=1;g<=4;g++){
	  if(e!=f && e!=g && f!=g){
	    console.log(e*100+f*10+g);
	  }
	}
  }
}

//斐波那契数列
function f(n){
  if(n==1 || n==2){
    return 1;
  }
  return f(n-1)+f(n-2);
}
console.log(f(12));

var n1=1;
var n2=1;
for(var i=3;i<=5;i++){
  var tmp=n2;
  n2 = n1+n2;
  n1 = tmp;
}
console.log(n2);
