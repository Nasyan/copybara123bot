let score = 0;

document.getElementById('clickButton').addEventListener('click', () => {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
});
