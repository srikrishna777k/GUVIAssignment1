let request = new XMLHttpRequest()
request.open("GET","https://restcountries.eu/rest/v2/all")
request.onload = function(){
    let data = JSON.parse(request.responseText)
    for (let i=0;i<data.length;i++)           
        console.log(data[i]["name"])         //one loop

    /*
    for (let i=0;i<data.length;i++)
    for (let keys in data[i])
        if (keys == "name")
            console.log(data[i][keys])       //two loops
     */       
    }
request.send()


