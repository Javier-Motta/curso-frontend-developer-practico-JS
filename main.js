const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector(".product-detail-close"); 
const mobileMenu = document.querySelector(".mobile-menu");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCarContainer = document.querySelector("#shoppingCarContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu );
menuHamIcon.addEventListener("click", toggleMobileMenu );
menuShoppingCart.addEventListener("click", toggleCarritoAside );
productDetailCloseIcon.addEventListener("click",closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCarContainer.classList.contains("inactive");

    if (!isAsideClosed){
        shoppingCarContainer.classList.add("inactive");
    } 
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    const isAsideClosed = shoppingCarContainer.classList.contains("inactive");
    
    if (!isAsideClosed){
        shoppingCarContainer.classList.add("inactive");
    } 

    mobileMenu.classList.toggle("inactive");
    closeProductDetailAside();
}
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenu = desktopMenu.classList.contains("inactive");    
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    if (!isDesktopMenu){
        desktopMenu.classList.add("inactive");
    }

    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    } 


    if (!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    shoppingCarContainer.classList.toggle("inactive");
}
function openProductDetailAside(){
    shoppingCarContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}
const productList = [];
productList.push({
    name: "Bike",
    price: 220,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=400",
});
productList.push({
    name: "Diademas",
    price: 110,
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
});
productList.push({
    name: "Termo",
    price: 70,
    image: "https://images.pexels.com/photos/14939673/pexels-photo-14939673.jpeg",
});
productList.push({
    name: "Bike",
    price: 220,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=400",
});
productList.push({
    name: "Diademas",
    price: 110,
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
});
productList.push({
    name: "Termo",
    price: 70,
    image: "https://images.pexels.com/photos/14939673/pexels-photo-14939673.jpeg",
});
function renderProducts(arrayElement){
    for (product of arrayElement){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);
    
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        const productName = document.createElement("p");
        productName.innerText = product.name;
        productPrice.innerText = "$" + product.price;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);