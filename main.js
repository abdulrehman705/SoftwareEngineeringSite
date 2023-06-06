
// teachers slidebar
let swiperPortfolio = new Swiper('.teachers_container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

// auto text
// const container = document.querySelector(".home-container-bottom");
// const text = document.querySelector(".text");

// const careers = ["Confident", "You", "Successful", "Productive"];

// let careerIndex = 0;
// let characterIndex = 0;

// updateText();
// function updateText() {
//   characterIndex++;
//   text.innerHTML = `<h3>Be ${careers[careerIndex].slice(0, characterIndex)}</h3>`;

//   if (characterIndex === careers[careerIndex].length) {
//     careerIndex++;
//     characterIndex = 0;
//   }

//   if (careerIndex === careers.length) {
//     careerIndex = 0;
//   }
//   setTimeout(updateText, 400)
// };

var swiper = new Swiper(".card-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      //   spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      //   spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      //   spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      //   spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});


const headerList = document.querySelector(".header-list")
var closeBtn = document.getElementById('icon-close');

// side menu will appear
document.querySelector('#menu-btn').onclick = () => {
  console.log("i am working");
  headerList.classList.add('active');
  closeBtn.classList.add('active');
}

// menu will disappear when click on cross
document.querySelector('#icon-close').onclick = () => {
  headerList.classList.remove('active');
  closeBtn.classList.remove('active');
}

// programs page

const modalViews = document.querySelectorAll('.services_modal'),
  modalBtns = document.querySelectorAll('.services_button'),
  modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
  console.log("i am working")
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
    console.log("i am clicked")
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})