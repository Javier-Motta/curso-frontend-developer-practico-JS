const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu );
menuHamIcon.addEventListener("click", toggleMobileMenu );
menuShoppingCart.addEventListener("click", toggleCarritoAside );

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed){
        aside.classList.add("inactive");
    } 
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive");
    
    if (!isAsideClosed){
        aside.classList.add("inactive");
    } 

    mobileMenu.classList.toggle("inactive");
}
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenu = desktopMenu.classList.contains("inactive");

    if (!isDesktopMenu){
        desktopMenu.classList.add("inactive");
    }

    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    } 

    aside.classList.toggle("inactive");
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
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
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