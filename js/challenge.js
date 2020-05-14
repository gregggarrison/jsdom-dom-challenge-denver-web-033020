document.addEventListener("DOMContentLoaded", () => {

    const likesHash = {}

    let counter = document.getElementById("counter")

    let count = setInterval(function () {
        counter.innerText++;
    }, 1000);

    let minus = document.getElementById("minus")
    let plus = document.getElementById("plus")
    let heart = document.getElementById("heart")
    let pause = document.getElementById("pause")
    let likes = document.querySelector(".likes")

    let submitButton = document.getElementById("submit")
    let commentList = document.getElementById("list")

    minus.addEventListener("click", function (e) {
        counter.innerText--
    })

    plus.addEventListener("click", function (e) {
        counter.innerText++
    })

    pause.addEventListener("click", function (e) {
        if (pause.innerText === "pause") {
            pause.innerText = "resume"
            clearInterval(count)

            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            submitButton.disabled = true;

        } else {
            count = setInterval(function (e) {
                counter.innerText++;
            }, 1000);
            pause.innerText = "pause"

            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            submitButton.disabled = false;
        }
    })

    submitButton.addEventListener("click", function (e) {
        e.preventDefault()
        let commentInput = document.getElementById("comment-input")
        let p = document.createElement("p")
        p.innerText = commentInput.value
        commentList.appendChild(p)
        document.getElementById("comment-form").reset()
    })

    heart.addEventListener("click", function (e) {
        removeAllLi()
        const number = counter.innerText
        if (likesHash[number] === undefined) {
            likesHash[number] = 1
        }
        else {
            likesHash[number]++
        }

        const keys = Object.keys(likesHash)
        keys.forEach((key) => {

            let li = document.createElement("li")
            li.className = "count-display"
            li.innerHTML = `${key} has this many likes: ${likesHash[key]}`
            likes.appendChild(li)
        })

        function removeAllLi() {
            const display = document.getElementsByClassName('count-display')
            Array.from(display).forEach((li) => {
                li.remove()
            })
        }

    })

});


