const tem = document.querySelector('.test-menu');
const trm = document.querySelector('.training-menu');

function testSub() {
    document.querySelector('.test-sub-menu').classList.toggle("sub-menu-open");
    trm.classList.toggle("move");
    document.querySelector('.training-sub-menu').classList.remove("sub-menu-open");
};
function trainingSub() {
    document.querySelector('.training-sub-menu').classList.toggle("sub-menu-open");
    document.querySelector('.test-sub-menu').classList.remove("sub-menu-open");
    trm.classList.remove("move");
};
tem.addEventListener('click', testSub);
trm.addEventListener('click', trainingSub);