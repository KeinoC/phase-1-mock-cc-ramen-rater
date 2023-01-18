// write your code here

fetch("http://localhost:3000/ramens")
.then(response => response.json())
// .then(data => console.log(data))
.then(data => data.forEach(renderRamen))



function renderRamen(ramen) {

const ramenDiv = document.createElement("div");


const comment = document.createElement("p");
comment.textContent = ramen.comment
comment.id = "new-comment" 

const id = document.createElement("p");   
id.textContent = ramen.id

const image = document.createElement("img");
image.src = ramen.image;
image.id = "new-image";
image.className = "detail-image";


const name = document.createElement("h2");
name.textContent = ramen.name;
name.id = "new-name";
name.className = "name";

const rating = document.createElement("span");
rating.textContent = ramen.rating;
rating.id = "new-rating";

const restaurant = document.createElement("h3");
restaurant.textContent = ramen.restaurant;
restaurant.id = "new-restaurant";
restaurant.className = "restaurant";

ramenDiv.appendChild(comment);

ramenMenu = document.querySelector("#ramen-menu")
ramenDetails = document.querySelector("#ramen-detail")

ramenMenu.append(image)


ramenDetails.append()

const ratingDisplay = document.querySelector("#rating-display")
const commentLocation = document.querySelector("#comment-display")
const commentDisplay = comment
commentDisplay.classList.add("comment-display")


ramenDiv.append(name, restaurant,rating, comment);

image.addEventListener("click", (e) => {
    ramenDetails.append(image, name, restaurant)
    // ramenDetails.replaceChild(image, name, restaurant)
    commentLocation.append(commentDisplay)
    // commentLocation.replaceChild(commentDisplay)
    ratingDisplay.append(rating)
    // ratingDisplay.replaceChild(rating)

})




}


function CreateNewRamen {
    const ramenName = document.querySelector("form").value;
    const ramenComment = document.querySelector("#comment").value;
    const ramenRating = document.querySelector("#rating").value;
    const ramenRestaurant = document.querySelector("#restaurant").value;
    const ramenImage = document.querySelector("#image").value;
    const newRamen = {
        name: ramenName,
        comment: ramenComment,
        rating: ramenRating,
        restaurant: ramenRestaurant,
        image: ramenImage
    }
}



{/* <div id="ramen-detail">
<img class="detail-image" src="./assets/image-placeholder.jpg" alt="Insert Name Here" />
<h2 class="name">Insert Name Here</h2>
<h3 class="restaurant">Insert Restaurant Here</h3>
</div> */}


{/* <form id="new-ramen">
<h4>Add New Ramen</h4>
<label for="name">Name: </label>
<input type="text" name="name" id="new-name" />
<label for="restaurant">Restaurant: </label>
<input type="text" name="restaurant" id="new-restaurant" />
<label for="image">Image: </label>
<input type="text" name="image" id="new-image" />
<label for="rating">Rating: </label>
<input type="number" name="rating" id="new-rating" />
<label for="new-comment">Comment: </label>
<textarea name="new-comment" id="new-comment"></textarea>
<input type="submit" value="Create" />
</form> */}

{/* <form id="edit-ramen">
    <h4>Update the Featured Ramen</h4>
    <label for="rating">Rating: </label>
    <input type="number" name="rating" id="new-rating" />
    <label for="new-comment">Comment: </label>
    <textarea name="new-comment" id="new-comment"></textarea>
    <input type="submit" value="Update" />
</form> */}