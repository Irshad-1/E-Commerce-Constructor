function addProduct(name,category,url,price,gender,sold){
    this.name=name;
    this.category=category;
    this.url=url;
    this.price=price;
    this.gender=gender;
    this.sold=sold;
}
document.querySelector('form').addEventListener('submit',()=>{
    event.preventDefault();
    let name=document.getElementById('name').value;
    let category=document.getElementById('category').value;
    let url=document.getElementById('image').value;
    let price=document.getElementById('price').value;
    let gender=document.getElementById('gender').value;
    let sold=document.getElementById('sold').checked;

    let product=new addProduct(name,category,url,price,gender,sold);
     
    let products;
    if(localStorage.getItem('Products')==undefined)
        products=[];
    else
    products=JSON.parse(localStorage.getItem('Products'));


    products.push(product);
    localStorage.setItem('Products',JSON.stringify(products));
    alert("Item added successfully in database");
});