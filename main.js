const unReadMessages = document.querySelectorAll(".box-colour");
const unread = document.getElementById("notification");
const markAll = document.getElementById("mark_all");

unread.innerHTML = unReadMessages.length;

unReadMessages.forEach((message) => {
    message.addEventListener("click", () => {
           message.classList.remove("box-colour");
           const newUnreadMessages = document.querySelectorAll(".box-colour");
           unread.innerHTML = newUnreadMessages.length;

  })
})

markAll.addEventListener("click", () => {
    unReadMessages.forEach((message) => {
      message.classList.remove("box-colour");

    })
    const newUnreadMessages = document.querySelectorAll(".box-colour");
    unread.innerHTML = newUnreadMessages.length;
})




























var acc = document.getElementsByClassName("box-heading");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}