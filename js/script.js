fetch('https://fakestoreapi.com/products').then((data) =>{
    // console.log(data);
    return data.json();
}).then((completedata)=>{
    // console.log(completedata[2].title);
    let data1 ="";
    completedata.map((values)=>{
        data1+=`<div id="cards">
        <div class="card">
            <h1 class="title">${values.title}</h1>
            <img src="${values.image}" alt="Profile" class="image">
            <p>description</p>
        </div>`
    });

    document.getElementById("cards").innerHTML=data1;
    
}).catch((err)=>{    
    // console.log(err);
})