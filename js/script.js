window.addEventListener('DOMContentLoaded', () => {
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

    const deadline = '2022-04-12';
    
    function getTimeRemaining(endtime){
        const timeDifferent = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(timeDifferent / (1000 * 60 * 60 * 24)),
              hours = Math.floor((timeDifferent / (1000*60*60)) % 24),
              minutes = Math.floor((timeDifferent / (1000 * 60)) % 60),
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
});