window.addEventListener('DOMContentLoaded', () => {
    
    //#region tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent(){
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(numberTab = 0){
        tabsContent[numberTab].style.display = 'block';
        tabs[numberTab].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, number) => {
                if(target == item){
                    hideTabContent();
                    showTabContent(number);
                }
            });
        }
    });
    //#endregion

    //#region Time
    const deadline = '2022-04-13';
    
    function getTimeRemaining(endtime){
        const timeDifferent = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(timeDifferent / (1000 * 60 * 60 * 24)),
              minutes = Math.floor((timeDifferent / (1000 * 60)) % 60),
              hours = Math.floor((timeDifferent / (1000*60*60)) % 24),
              seconds = Math.floor((timeDifferent / 1000) % 60);
    
        return {
            'total': timeDifferent,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds 
        };
    }

    function getZero(num){
        if(num >= 0 && num < 10){
            return `0${num}`;
        }else{
            return num;
        }
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock(){
            const time = getTimeRemaining(endtime);

            days.innerHTML = getZero(time.days);
            hours.innerHTML = getZero(time.hours);
            minutes.innerHTML = getZero(time.minutes);
            seconds.innerHTML = getZero(time.seconds); 

            if(time.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
    //#endregion

    //#region modal
    
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    

    modalTrigger.forEach(btn =>{
        btn.addEventListener('click',openModal);
    });

    modalCloseBtn.addEventListener('click', closeModal);


    modal.addEventListener('click', (e) => {
        if(e.target === modal){
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) =>{
        if(e.code === "Escape" && modal.classList.contains('show')){
            closeModal();
        }
    });

    // const modalTimerId = setTimeout(openModal, 5000);
    
    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement
            .clientHeight >= document.documentElement.scrollHeight -1){
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
    }

    window.addEventListener('scroll', showModalByScroll);
    //#endregion

    //#region Classes for cards

    class MenuCard{
        constructor(src, alt, title, descr, price, parentSelector){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.transfer = 27;
        }

        changeToUAH(){
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="menu__item">
                    <img src="${this.src}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">Меню "Фитнес"</h3>
                    <div class="menu__item-descr">Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>229</span> грн/день</div>
                    </div>
                </div>
            `;
        }
    }

    //#endregion
});