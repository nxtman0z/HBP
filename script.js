// Button functionality - Open surprise pages
const surprise1Btn = document.getElementById('surprise1');
const surprise2Btn = document.getElementById('surprise2');

surprise1Btn.addEventListener('click', () => {
    window.location.href = 'surprise1.html';
});

surprise2Btn.addEventListener('click', () => {
    window.location.href = 'surprise2.html';
});
