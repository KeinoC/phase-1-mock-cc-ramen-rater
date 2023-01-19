fetch("http://localhost:3000/ramens")
.then(res => res.json())
.then(ramen => (renderRamen(ramen)))


const menuDiv = document.querySelector("#ramen-menu")

const featureDiv = document.querySelector("#ramen-detail")
const featureImage = document.querySelector("#ramen-detail > img")
const featureName = document.querySelector("#ramen-detail > h2")
const featureRestaurant = document.querySelector("#ramen-detail > h3")

const rating = document.querySelector("#rating-display")
const comment = document.querySelector("#comment-display")

function renderRamen(ramen) {
    ramen.forEach((ramen) => {
        const menuImage = document.createElement("img")
        menuImage.src = ramen.image; 
        menuDiv.append(menuImage)
            menuImage.addEventListener("click", (e) => {
                featureImage.src = ramen.image;
                featureName.textContent = ramen.name;
                featureRestaurant.textContent = ramen.restaurant;
                rating.textContent = ramen.rating;
                comment.textContent = ramen.comment;
                })
    })
}

function addNewRamen(){
    const form = document.querySelector('#new-ramen');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let newRamen = {
            name: e.target.name.value,
            image: e.target.image.value,
            restaurant: e.target.restaurant.value,
            rating: parseInt(e.target.rating.value),
            comment: e.target["new-comment"].value,
        }
        renderRamen([newRamen])

})
}
addNewRamen();
renderRamen();
