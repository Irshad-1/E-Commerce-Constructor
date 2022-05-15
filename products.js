var productsData=JSON.parse(localStorage.getItem('Products'));

document.querySelector('#counter').innerText="Total no. of Products are "+productsData.length

productsData.forEach((product,productIndex)=>{
    var box=document.createElement('div');
    var image=document.createElement('img');
    var name=document.createElement('p');
    var price=document.createElement('p');
    var rmBtn=document.createElement('button');
    var soldbtn=document.createElement('button');
    box.setAttribute('class','product');

    image.src=product.url;
    name.innerText=product.name;
    price.innerText="Rs. "+product.price;
    rmBtn.innerText="Remove";
    rmBtn.setAttribute('id',"remove");
    soldbtn.setAttribute('id',"sold");
    if(product.sold){
        soldbtn.innerText="Sold Out";
        soldbtn.style.backgroundColor="red";
    }
    else{
        soldbtn.innerText="In stock";
        soldbtn.style.backgroundColor="green";
    }


    var innerBox=document.createElement('div');
    innerBox.append(name,price);
    innerBox.setAttribute('class',"innerBox");
    

    var buttonBox=document.createElement('div');
    buttonBox.append(rmBtn,soldbtn);
    buttonBox.setAttribute('class',"innerBox");

    rmBtn.addEventListener('click',()=>{
        productsData.splice(productIndex,1);
        localStorage.setItem("Products",JSON.stringify(productsData));
        window.location.reload();
    })
    soldbtn.addEventListener('click',()=>{
        if(product.sold)
        product.sold=false;
        else
        product.sold=true;
        localStorage.setItem('Products',JSON.stringify(productsData));
        window.location.reload();
    })

    box.append(image,innerBox,buttonBox);
    document.getElementById('container').append(box);

})