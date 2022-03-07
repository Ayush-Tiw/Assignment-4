// Question-3) Use the same rest countries and print all countries name, region, sub region and population

// Answer-->


var xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        var dataCountry=JSON.parse(xhr.response);
        for(var i=0;i<dataCountry.length;i++){
            console.log(dataCountry[i].name);
            console.log(dataCountry[i].region);
            console.log(dataCountry[i].population);
            console.log(dataCountry[i].subregion);
        
    }
}
    else{
        console.log("Data is not available")
    }
}
