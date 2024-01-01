const imput = document.querySelector(".imput");
const imputAdd = document.querySelector(".imputAdd");
const containerForTrash = document.querySelector(".blockNotdoThis");
const removeTrash = document.querySelector(".remove");
const dropTresh = document.querySelector(".dropTrash");
const backTrash = document.querySelector(".backTrash");
const containerForDumpster = document.querySelector(".containerForDumpster");
console.log(containerForTrash.childNodes);
function doAddTresh(input) {
    const htmlStructure = `
        <div class="trashthing">
            <div class="close">X</div>
            <div class="imputText">${input}</div>
        </div>
    `;
    containerForTrash.innerHTML += htmlStructure;
}
function handleTreshRemoval() {
    document.querySelectorAll(".close").forEach((btn, i) => {
        btn.addEventListener("click", (event) => {
            event.target.parentElement.remove();
        });
    });
}
imputAdd.addEventListener("mousedown", () => {
    const userInput = imput.value;
    doAddTresh(userInput);
    handleTreshRemoval();
});

dropTresh.addEventListener("click", () => {
    const containerForTrash = document.querySelector(".blockNotdoThis");

    // if (containerForTrash.childElementCount === 4) {
    //     const containerForDumpster = document.querySelector(
    //         ".containerForDumpster"
    //     );
    //     while (containerForTrash.firstChild) {
    //         containerForDumpster.appendChild(containerForTrash.firstChild);
    //     }
    // }
    if (containerForTrash.childElementCount === 4) {
        const containerForTrash = document.querySelector(".blockNotdoThis");
        function recursionDropAnimation() {
            if (containerForTrash.firstChild) {
                containerForDumpster.appendChild(containerForTrash.firstChild);
                animationWithTimeOut();
            }
        }
        recursionDropAnimation();
        function animationWithTimeOut() {
            setTimeout(() => {
                recursionDropAnimation();
            }, 70);
        }
    } else {
        return;
    }
});

backTrash.addEventListener("click", () => {
    const containerForDumpster = document.querySelector(
        ".containerForDumpster"
    );
    const containerForTrash = document.querySelector(".blockNotdoThis");
    while (containerForDumpster.firstChild) {
        containerForTrash.appendChild(containerForDumpster.firstChild);
    }
});

removeTrash.addEventListener("click", () => {
    const containerForDumpster = document.querySelector(
        ".containerForDumpster"
    );
    while (containerForDumpster.firstChild) {
        const containerForDumpster = document.querySelector(
            ".containerForDumpster"
        );
        containerForDumpster.removeChild(containerForDumpster.firstChild);
    }
});
