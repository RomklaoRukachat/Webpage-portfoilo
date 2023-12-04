// ใช้ JavaScript เพื่อแสดง/ซ่อนเมนู dropdown
document.getElementById("dropdown").addEventListener("mouseover", function() {
    document.querySelector(".dropdown-content").style.display = "block";
});

document.getElementById("dropdown").addEventListener("mouseout", function() {
    document.querySelector(".dropdown-content").style.display = "none";
});

