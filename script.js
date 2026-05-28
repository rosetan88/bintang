document.querySelector(".close-btn").addEventListener("click", function(){
  document.querySelector(".app-bar").style.display = "none";
});

document.querySelectorAll(".category button").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".category button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
  });
});
