const roles = [
    "Student UDRU",
    "Student UDRU.",
    "Student UDRU..",
];

let index = 0;

setInterval(() => {
    document.querySelector('.role').textContent = "I'm a " + roles[index];
    index = (index + 1) % roles.length;
}, 500);