var arr=[40,50,223,12,61];  //降序
for(var i=1;i<arr.length;i++){    //比较4轮
        for(var j=0;j<5-i;j++){     //第1轮4次；第2轮3次；第3轮2次；第4轮1次
	      if(arr[j]<arr[j+1]){   
	        var t=arr[j];         //两个数比较，较大的数字排在前面
	        arr[j]=arr[j+1];
	        arr[j+1]=t;
	      }
        }
}
console.log(arr);