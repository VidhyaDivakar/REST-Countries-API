const toggleMode = document.getElementById("toggleDark");
const body = document.body;
const toggleIcon = document.getElementById("toggleIcon");
const toggleText = document.getElementById("toggleText");

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark"); // body.classList gives access to all classes applied to body; here adds "dark" class to body
    toggleIcon.classList.remove("fa-regular"); // classList is used to dynamically change classes at run time to use the predefined styles used in newly creted classes.
    toggleIcon.classList.add("fa-solid");
    toggleText.textContent = "Light Mode";
}

toggleIcon.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggleIcon.classList.remove("fa-regular");
        toggleIcon.classList.add("fa-solid");
        toggleText.textContent = "Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleIcon.classList.remove("fa-solid");
        toggleIcon.classList.add("fa-regular");
        toggleText.textContent = "Dark Mode";
    }
});