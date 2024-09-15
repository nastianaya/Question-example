const ans = document.querySelector('.answer');
const btn = document.querySelector('.answer_btn');
const text = document.querySelector('.text');
const que = document.querySelector('.question')

let count = 5;

btn.addEventListener('click', ()=>{
    let value = ans.value;
    value = value.toLowerCase().trim(); // trim - удаляет все пробелы справа и слева от текста
    if (value == "css"){
        text.innerHTML = "Правильно!";
        text.style.color = "green"
        que.style.borderColor = "green"
    } else{
        count = count - 1;
        text.innerHTML = `Неверно! Осталось ${count} попытки`;  
        text.style.color = "darkred"
        que.style.borderColor = "darkred"
        if (count == 0){
            text.innerHTML = "Попыток больше не осталось";
 //           btn.style.display = "none"; - кнопка пропадает
            btn.disabled = true;  //disabled - становится не активной
        }
    }
   
})