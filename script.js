const imput = document.querySelector(".imput");
const imputAdd = document.querySelector(".imputAdd");
const containerForTrash = document.querySelector(".blockNotdoThis");
const containerForDumpster = document.querySelector(".containerForDumpster");
const fireTresh = document.querySelector(".fire");
const buttoncont = document.querySelector(".buttonCont");
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

containerForTrash.addEventListener("click", (e) => {
    if (e.target.classList.contains("close")) {
        e.target.parentElement.remove();
    }
});

// imput.addEventListener("keydown", function (event) {
//     if (event.key === "Enter" && !(containerForTrash.childElementCount === 4)) {
//         const userInput = imput.value;
//         doAddTresh(userInput);
//     }
// });

imputAdd.addEventListener("mousedown", () => {
    if (
        !(containerForTrash.childElementCount === 4) &&
        !containerForDumpster.children.length > 0
    ) {
        const userInput = imput.value;
        if (userInput.trim()) {
            doAddTresh(userInput);
        } else {
            alert("Маша сказала щось ввести!");
        }
    } else {
        alert("спочатку позбудься того що в смітнику");
    }
});

buttoncont.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropTrash")) {
        const containerForTrash = document.querySelector(".blockNotdoThis");
        if (containerForTrash.childElementCount === 4) {
            const containerForTrash = document.querySelector(".blockNotdoThis");
            function recursionDropAnimation() {
                if (containerForTrash.firstChild) {
                    containerForDumpster.appendChild(
                        containerForTrash.firstChild
                    );
                    animationWithTimeOut();
                }
            }
            recursionDropAnimation();
            function animationWithTimeOut() {
                setTimeout(() => {
                    recursionDropAnimation();
                }, 70);
            }
        }
    }
    if (e.target.classList.contains("backTrash")) {
        const containerForDumpster = document.querySelector(
            ".containerForDumpster"
        );
        const containerForTrash = document.querySelector(".blockNotdoThis");
        while (containerForDumpster.firstChild) {
            containerForTrash.appendChild(containerForDumpster.firstChild);
        }
    }
    if (e.target.classList.contains("remove")) {
        const containerForDumpster = document.querySelector(
            ".containerForDumpster"
        );
        while (containerForDumpster.firstChild) {
            const containerForDumpster = document.querySelector(
                ".containerForDumpster"
            );
            containerForDumpster.removeChild(containerForDumpster.firstChild);
        }
        fireTresh.style.display = "block";
        setTimeout(() => {
            fireTresh.style.transform = "scale(0.001)";
        }, 500);
        setTimeout(() => {
            fireTresh.style.transform = "scale(1)";
            fireTresh.style.display = "none";
        }, 1000);
    }
});
