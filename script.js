fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    function summaryItems(data) {
      const summaryContainer = document.getElementById("summary");
      data.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = item.category.toLowerCase();
        itemDiv.innerHTML = `<img src="${item.icon}" alt="${item.category}" />${item.category}
            <span class="score"
              ><strong style="color: black">${item.score}</strong> / 100</span
            >`;
        summaryContainer.insertBefore(
          itemDiv,
          summaryContainer.querySelector("button")
        );
      });
    }
    function totalAvgScore() {
      const totalScore = data.reduce((sum, item) => sum + item.score, 0);
      const avgScore = (totalScore / data.length).toFixed(0);
      return avgScore;
    }
    function showAvgScore() {
      const scoreAreaElement = document.getElementById("score-area");
      const avgScore = totalAvgScore(data);
      scoreAreaElement.textContent = avgScore;
    }
    summaryItems(data);
    showAvgScore();
  })
  .catch((error) => console.error("Error:", error));
