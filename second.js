// Question-2)Use the rest countries API url  and display all the country flags in console

// Answer-->
//set up an http request
var xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();

// setup a listner where server listen our request
xhr.onload=function(){
    //process the request and server will  return the data in response
    if(xhr.status>=200 && xhr.status<300){
        // console.log(this.response);//by this we will not get readable data
        //convert raw data into js notation format
        var dataCountry=JSON.parse(xhr.response);
        for(var i=0;i<dataCountry.length;i++){
            console.log(dataCountry[i].flag)
        
    }
}
    else{
        //you should print the error 
        console.log("Data is not available")
    }
}
