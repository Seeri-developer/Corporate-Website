console.log("Hello World");



const list = [
    {
        id: 1,
        category: "photography",
        class: 1,
        title:"Photography", 

    },
    {
        id: 2,
        category: "graphics",
        class: 2,
        title:"Graphics",

    },
    {
        id: 3,
        category: "branding",
        class: 3,
        title:"Branding",
    },
    {
        id: 4,
        category: "branding",
        class: 4,
        title:"Branding",
    },
    {
        id: 5,
        category: "graphics",
        class: 5,
        title:"Graphics",
    },
    {
        id: 6,
        category: "photography",
        class: 6,
        title:"Photography",
    },
]

const filterbtns = document.querySelectorAll(".category-link");
const gallery= document.querySelector(".portfolio-gallery");
const container = document.querySelector(".portfolio-categories");

window.addEventListener("DOMContentLoaded", function(){
    displayGallery(list);
})




function displayGallery(items) {
    let createItem = items.map(function (item) {
        return `<div class="gallery-item item-${item.class} gallery-divs">
                    <div class="hover-content show-content text-center"> 
                        <p class="hover-title">${item.title}</p>
                        <p class="hover-para"> Lorem ipsum dolor sit. </p>
                    </div>
                </div>` 
 
    })
    createItem = createItem.join("");
    // console.log(createItem);
    // gallery.appendChild(createItem)
    gallery.innerHTML=createItem;
}


container.addEventListener("click", function (e) { 
        const id = e.target.dataset.id;
        if (id !== undefined) { 
            filterbtns.forEach(function (btn) {
                btn.classList.remove("active")
                e.target.classList.add("active");
            })
            const newItems = list.filter(function (item) {
                if (item.category == id) {
                    // console.log("one")
                    return item;
                }
            })
            if (id == "all") {
                displayGallery(list);
            }
            else {
                displayGallery(newItems)
            }
        }
    }) 




























