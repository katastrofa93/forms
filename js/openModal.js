const header = document.querySelector('header');
const openModal = document.querySelector('.header__button > input');
const modal = document.querySelector('.modal');
const form = document.querySelector('.form');
const send = document.querySelector('.buttons__send > input');
const saveModal = document.querySelector('.buttons__save > input');
const closeModal = document.querySelector('.buttons__close > input');
const message = document.querySelector('.message');
let heightHeader = header.clientHeight;
let switcher = 1;

function viewMessage(className, ...session){
    if(localStorage.getItem(session[0]) || localStorage.getItem(session[1])){
        className.innerHTML = 'Данные сохранены';
    }else{
        className.innerHTML = '';
    }
}
function addClass(){
    modal.classList.add('modal_active');
    switcher = 0;
}
function removeClass(){
    modal.classList.remove('modal_active');
    switcher = 1;
}

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    if(switcher == 1){
        if(localStorage.name){
            form.name.value = localStorage.name;
        }else{
            delete localStorage.name;;
        }
        if(localStorage.phone){
            form.phone.value = localStorage.phone;
        }else{
            delete localStorage.phone;
        }
        addClass();
    }else{
        removeClass();
    }
});

saveModal.addEventListener('click', (e)=>{
    e.preventDefault();
    removeClass();
    if(form.name.value == ''){
        delete localStorage.name;
    }else{
        localStorage.name = form.name.value;
    }
    if(form.phone.value == ''){
        delete localStorage.phone;
    }else{
        localStorage.phone = form.phone.value;
    }
    viewMessage(message, 'name', 'phone')
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.clear();
    removeClass();
    form.reset();
    viewMessage(message, 'name', 'phone')
});
viewMessage(message, 'name', 'phone')
