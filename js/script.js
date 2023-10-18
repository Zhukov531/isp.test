document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
    const answers = document.querySelectorAll('.answer');
    const result1 = document.getElementById('result1');

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
            result1.textContent = 'Совмещено правильно!';
            result1.style.color = 'green';
        }
    }
});

// 2
function checkWords() {
            var word1 = document.getElementById('word1').value;
            var word2 = document.getElementById('word2').value;
            var word3 = document.getElementById('word3').value;

            if (word1.toLowerCase() === 'база данных' && word2.toLowerCase() === 'метаданных' && word3.toLowerCase() === 'данные') {
                document.getElementById('result2').innerHTML = 'Верно! Все ваши ответы правильные.';
            } else {
                document.getElementById('result2').innerHTML = 'Один или несколько из ваших ответов неверны. Попробуйте еще раз.';
            }
        }
// 3
function checkAnswer() {
            var selectedAnswer = document.querySelector('input[name="answer"]:checked');
            if (selectedAnswer) {
                var userAnswer = selectedAnswer.value;
                if (userAnswer === 'C') {
                    document.getElementById('result3').innerHTML = 'Верно! Ответ C) организация, контроль и администрирование базы данных правильный.';
                } else {
                    document.getElementById('result3').innerHTML = 'Неправильный ответ. Попробуйте еще раз.';
                }
            } else {
                document.getElementById('result3').innerHTML = 'Выберите один из вариантов ответа.';
            }
        }

// 4

function checkAnswer() {
            var selectedAnswer = document.querySelector('input[name="answer"]:checked');
            if (selectedAnswer) {
                var userAnswer = selectedAnswer.value;
                if (userAnswer === 'B') {
                    document.getElementById('result4').innerHTML = 'Верно! Ответ правильный.';
                } else {
                    document.getElementById('result4').innerHTML = 'Неправильный ответ. Попробуйте еще раз.';
                }
            } else {
                document.getElementById('result4').innerHTML = 'Выберите один из вариантов ответа.';
            }
        }


// 5

function checkAnswers() {
            var selectedOption1 = document.getElementById('select1');
            var selectedOption2 = document.getElementById('select2');

            var correctOption1 = 'Банк данных';
            var correctOption2 = 'База данных';

            if (selectedOption1.value === correctOption1 && selectedOption2.value === correctOption2) {
                document.getElementById('result').innerHTML = 'Верно! "' + correctOption1 + '" можно использовать для извлечения и анализа информации. Тем временем "' + correctOption2 + '" собирает, управляет и хранит информацию.';
            } else {
                document.getElementById('result').innerHTML = 'Один или оба из ваших ответов неверны. Попробуйте еще раз.';
            }
        }

// 6
function checkAnswer() {
            var selectedAnswer = document.querySelector('input[name="answer"]:checked');

            if (selectedAnswer) {
                var userAnswer = selectedAnswer.value;
                if (userAnswer === 'A') {
                    document.getElementById('result6').innerHTML = 'Верно! Ответ A) централизованное хранение метаданных правильный.';
                } else {
                    document.getElementById('result6').innerHTML = 'Неправильный ответ. Попробуйте еще раз.';
                }
            } else {
                document.getElementById('result6').innerHTML = 'Выберите один из вариантов ответа.';
            }
        }

// 7


function checkAnswers() {
            var selectUser1 = document.getElementById('selectUser1').value;
            var selectUser2 = document.getElementById('selectUser2').value;
            var selectUser3 = document.getElementById('selectUser3').value;

            if (selectUser1 === 'roleB' && selectUser2 === 'roleA' && selectUser3 === 'roleC') {
                document.getElementById('result7').innerHTML = 'Верно! Правильные ответы: 1 - B, 2 - A, 3 - C';
            } else {
                document.getElementById('result7').innerHTML = 'Один или несколько из ваших ответов неверны. Попробуйте еще раз.';
            }
        }

// 8

function checkAnswer() {
            var missingWord = document.getElementById('missingWord').value;

            if (missingWord.toLowerCase() === 'субд') {
                document.getElementById('result8').innerHTML = 'Верно! Правильный ответ: СУБД.';
            } else {
                document.getElementById('result8').innerHTML = 'Неправильный ответ. Попробуйте еще раз.';
            }
        }