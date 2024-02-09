var journey_cancle = document.querySelector(".journy-cancle");
var journey_info = document.querySelector(".journey-info");
var journey_info_tab = document.querySelector("#journey-info-tab");
journey_cancle.addEventListener("click", function () {
    if (journey_cancle.classList.contains("journy-cancle-expand")) {
        journey_cancle.classList.remove("journy-cancle-expand");
        journey_info.classList.remove("journey-info-expand");
        journey_info_tab.style.display = "none";
    }
    else {
        journey_cancle.classList.add("journy-cancle-expand");
        journey_info.classList.add("journey-info-expand");
        journey_info_tab.style.display = "block";
    }
});

// var dynamic_div_heading = document.getElementById("dynamic-div-heading");
// var dynamic_div_para = document.getElementById("dynamic-div-para");

// var item1 = document.getElementById("item1");
// var item2 = document.getElementById("item2");
// var item3 = document.getElementById("item3");
// var item4 = document.getElementById("item4");
// var item5 = document.getElementById("item5");

// item2.addEventListener("click", function () { changecontent("h2", "hadadk") });
// item3.addEventListener("click", function () { changecontent("h3", "hadadk") });
// item4.addEventListener("click", function () { changecontent("h4", "hadadk") });
// item5.addEventListener("click", function () { changecontent("h5", "hadadk") });

// function changecontent(heading, paragraph) {
//     dynamic_div_heading.textContent = heading;
//     dynamic_div_para.textContent = paragraph;
// }