const accrod = () => {
    const accTitle = document.querySelectorAll('.acc_title'),
        accordCont = document.querySelectorAll('.accord_cont'),
        closeAccord = document.querySelectorAll('.fa'),
        accordCard = document.querySelectorAll('.accord_card'),
        imgClose = document.querySelectorAll('.img_close');

        accTitle.forEach((item, index) => {
        item.addEventListener('click', () => {
            accordCont[index].classList.toggle('active');
            accordCard[index].classList.toggle('active');
            closeAccord[index].classList.toggle('active');
            imgClose[index].classList.toggle('active');
        });
    });

    
    



}

accrod();