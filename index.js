var menuObj = [
    "https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465__480.jpg",
    "https://cdn.pixabay.com/photo/2017/02/03/03/54/burger-2034433__340.jpg",
    "https://cdn.pixabay.com/photo/2019/10/10/14/51/hamburger-4539716__480.jpg",
    "https://cdn.pixabay.com/photo/2017/03/23/03/58/burger-2167270__480.jpg",
    "https://cdn.pixabay.com/photo/2020/05/31/04/49/food-5241278__480.jpg",
    "https://cdn.pixabay.com/photo/2019/11/15/14/57/burger-4628604__480.jpg",
    "https://cdn.pixabay.com/photo/2021/03/02/08/21/beef-6061801__480.jpg",
    "https://cdn.pixabay.com/photo/2017/04/23/09/02/hamburger-2253345__480.jpg"
]
var ordered = [];
menuObj.forEach(element => {
    var card = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src", element);

    var menuSelect = document.createElement("input");
    menuSelect.setAttribute("type", "checkbox");
    menuSelect.setAttribute("value", "checked");

    menuSelect.addEventListener("change", function () {
        if (menuSelect.checked) ordered.push(element);
        console.log(ordered);
    });
    card.append(image, menuSelect);
    document.getElementById("allcards").append(card);

    document.getElementById("orderBT").addEventListener("click", orderIT)
});

function orderIT() {
    document.getElementById("orderR").innerText = "Your Order has been placed..";
    var takeOrder = new Promise((res, rej) => {
        setTimeout(() => {
            res(ordered);
        }, 3000);
    })
    takeOrder
        .then((ordered) => {
            ordered.forEach(element => {
                document.getElementById("orderR").innerText="Your Order is Ready..";
                var card = document.createElement("div");

                var image = document.createElement("img");
                image.setAttribute("src", element);

                card.append(image);

                document.getElementById("allcardsR").append(card);
            });
        });

}


