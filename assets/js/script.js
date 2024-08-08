const coverImg=document.querySelector(".container .coverImg");
const viewBt=coverImg.querySelector("button");

coverImg.addEventListener("mouseover", ()=>{
    viewBt.style.display="block";
    coverImg.classList.add("hovered");
});

coverImg.addEventListener("mouseout", ()=>{
    viewBt.style.display="none";
    coverImg.classList.remove("hovered");
});

