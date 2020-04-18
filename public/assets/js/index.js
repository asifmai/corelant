$(document).ready(function(){
      $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
          dots: true,
          responsiveClass:true,
          responsive:{
              0:{
                  items:1,
              },
              576:{
                  items:2,
              },
              768:{
                  items:3,
              }
          }
      });
  });