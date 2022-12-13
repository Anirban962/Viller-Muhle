// Mobile-Menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// events slider-------------

$('.events_slider').slick({
  dots: false,
  arrows: true,
  speed: 600,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // cssEase: 'linear',
  variableWidth: true,
  responsive: [{
      breakpoint: 992,
      settings: {
        centerMode: false,
        slidesToShow: 2,
        variableWidth: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


// customer slider-------------

$('.customer-slider').slick({
  infinite: true,
  dots: false,
  arrows: true,
  speed: 900,
  centerMode: true,
  centerPadding: '0px',
  cssEase: 'linear',
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  // autoplay:true,
  responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});