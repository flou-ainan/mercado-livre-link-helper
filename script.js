const input = document.getElementById("input");
const output = document.getElementById("output");
const notification = document.getElementById("notification")
input.addEventListener("input", function(event) {
   event.preventDefault();
  // remove()
});
function notifyCopied(){
  notification.classList.remove("hidden");
  notification.classList.remove("reverse-toast-animation");
  void notification.offsetWidth;
  notification.classList.add("reverse-toast-animation")
  // setTimeout(() => notification.classList.add("reverse-toast-animation"), 10)
}
function copy() {
	output.select();
	document.execCommand('copy');
  notifyCopied();
}
function remove() {
  let link = input.value
  link = link.split("?")[0].split("#")[0]
  //.split("#")[0]
  output.innerHTML = link
}
function clean(){
  alert("clean test")
  input.value = ""
}

