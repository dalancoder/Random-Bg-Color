const body = document.querySelector("body");
const colorText = document.getElementById("colorText");
const input = document.querySelector("#colorInput");
const click = document.querySelector(".btn-click");
const mouseOver = document.querySelector(".btn-over");
const copyIcon = document.getElementById("copy");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const randomColor = getRandomColor() 
const fonkRandom = function () {
  body.style.backgroundColor = getRandomColor();
  colorText.textContent = getRandomColor();
}

// body.onload = function(){
//     body.style.backgroundColor = getRandomColor();
//  } //body.onload Kullanımı: Bu kullanım genellikle window.onload ile tercih edilir ve body öğesinin load olayını dinlerken sorunlar yaşanabilir. Bu nedenle DOMContentLoaded olayı daha güvenilir bir yöntemdir.
document.addEventListener("DOMContentLoaded", fonkRandom); //DOMContentLoaded Olayı: Bu olay, HTML içeriği tamamen yüklendiğinde tetiklenir ve arka plan rengini hemen rastgele bir renkle değiştirir. Bu sayede sayfa yüklenirken arka plan renginin aniden beyazdan rastgele renge değişmesi engellenir.

click.addEventListener("click", fonkRandom);

mouseOver.addEventListener("mouseover", fonkRandom);

input.addEventListener("input", fonkRandom); //input olayı, kullanıcı bir form elemanına veri girdiğinde, veriyi değiştirdiğinde veya seçtiğinde tetiklenir. Bu olay, veri değişikliği anında tetiklenir, yani kullanıcı her veri girişi yaptığında veya seçimde bulunduğunda çalışır.

body.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    body.style.backgroundColor = randomColor;
  }
});

copyIcon.addEventListener("click", function () {
  navigator.clipboard.writeText(input.value);
});
