// Close top app bar
document.querySelector(".close-btn").addEventListener("click", function(){
  document.querySelector(".app-bar").style.display = "none";
});

// Category active button effect
document.querySelectorAll(".category-tabs button").forEach(function(btn){
  btn.addEventListener("click", function(){
    document.querySelectorAll(".category-tabs button").forEach(function(b){
      b.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
