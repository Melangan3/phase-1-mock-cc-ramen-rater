const URL = "http://localhost:3000/ramens";
fetch(URL)
    .then(resp=>resp.json())
    .then(ramens=>{ramens.forEach(ramen=>createRamen(ramen))});

function createRamen(ramen){
    const ramenMenu = document.querySelector("#ramen-menu");
    const image = document.createElement("img")
    image.src = ramen.image
    ramenMenu.append(image)
    
    image.addEventListener("click", ()=>clickInfo(ramen))  
}
function clickInfo(ramen){
    const detail = document.querySelector(".detail-image")
    detail.src = ramen.image;
    detail.alt= ramen.name
    const names = document.querySelector(".name")
    names.textContent = ramen.name
    const restaurant = document.querySelector(".restaurant")
    restaurant.textContent = ramen.restaurant
    const rating = document.querySelector("#rating-display")
    rating.textContent = ramen.rating
    const comment = document.querySelector("#comment-display")
    comment.textContent = ramen.comment 
}


const form = document.querySelector("#new-ramen")
form.addEventListener("submit",submitRamen)

function submitRamen(event){
    event.preventDefault();
    const newName = event.target["new-name"].value
    const newRestaurant = event.target["new-restaurant"].value
    const newImage = event.target["new-image"].value
    const newRating = event.target["new-rating"].value
    const newComment = event.target["new-comment"].value

    const ramenObject = {"name": newName, "restaurant": newRestaurant, "image": newImage, "rating": newRating, "comment": newComment}
    createRamen(ramenObject)
}


