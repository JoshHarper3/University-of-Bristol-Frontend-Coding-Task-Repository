fetch("data.json")
.then(res => res.json())
.then (data => {
    data.forEach(item => {
    const row = document.querySelector(`.${item.category.toLowerCase()}-row`);
    const score = row.querySelector(".score-value");
    score.textContent = `${item.score} / 100`
    })
})