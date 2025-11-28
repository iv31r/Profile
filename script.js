// الصفحات المسموح الدخول لها
const allowedPages = ["", "index.html", "index"];

// استخرج اسم الصفحة الحالية
let currentPage = window.location.pathname.split("/").pop();

// إذا الصفحة غير مسموح بها → تحويل للخطأ
if (!allowedPages.includes(currentPage)) {
    window.location.href = "error.html";
}
// ----------------------
// GLOBAL ERROR CATCHER
// ----------------------

let path = window.location.pathname;

// إذا فيه / زيادة مثل: index.html/fd
if (path.includes("/index.html/") || path.split("/").length > 3) {
    window.location.href = "error.html";
}

// الصفحات المسموح الدخول لها
const allowedPaths = ["/", "/index.html"];

// إذا الصفحة غير مسموح بها → إعادة توجيه
if (!allowedPaths.includes(path)) {
    window.location.href = "error.html";
}

/* مؤشر الماوس */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    cursor.style.opacity = "1";
});

document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
});

/* تأثير الماتريكس */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = "01 RAID HACKER MATRIX 10 00 11".split("");

let fontSize = 16;
let columns = canvas.width / fontSize;

let drops = [];
for (let i = 0; i < columns; i++) drops[i] = 1;

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.07)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00b4ff";
    ctx.font = fontSize + "px VT323";

    for (let i = 0; i < drops.length; i++) {
        let text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);
