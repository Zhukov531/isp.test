document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
    const answers = document.querySelectorAll('.answer');
    const result = document.getElementById('result');

    answers.forEach(function(answer) {
        answer.draggable = true;

        answer.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
    });

    questions.forEach(function(question) {
        question.addEventListener('dragover', function(event) {
            event.preventDefault();
        });

        question.addEventListener('drop', function(event) {
            event.preventDefault();
            const data = event.dataTransfer.getData('text/plain');
            const element = document.getElementById(data);

            if (element.classList.contains('answer') && !question.contains(element)) {
                event.target.appendChild(element);
                checkAnswers();
            }
        });
    });

    function checkAnswers() {
        let correctCount = 0;

        answers.forEach(function(answer) {
            questions.forEach(function(question) {
                if (question.contains(answer) && answer.id === question.id.replace('question', 'answer')) {
                    correctCount++;
                }
            });
        });

        if (correctCount === answers.length) {
            result.textContent = 'Совмещено правильно!';
            result.style.color = 'green';
        }
    }
});
