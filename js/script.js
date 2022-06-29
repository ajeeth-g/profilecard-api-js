fetch('https://api2.binance.com/api/v3/ticker/24hr').then((data) =>{
    // console.log(data);
    return data.json();
}).then((completedata)=>{
    // console.log(completedata[2].priceChange);
    let data1 ="";
    completedata.map((values)=>{
        data1+=`<div class="card">
        <h1 class="title">${values.symbol}</h1>
        <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="image" class="image">
        <p>PriceChange: ${values.priceChange}</p>
        <p>PriceChangePercent: ${values.priceChangePercent}%</p>
        <p>WeightedAvgPrice: ${values.weightedAvgPrice}</p>
        <p>PrevClosePrice: ${values.prevClosePrice}</p> 
        <p>LastPrice: ${values.lastPrice}</p>
    </div>`
    });

    document.getElementById("cards").innerHTML=data1;
    
}).catch((err)=>{    
    // console.log(err);
})