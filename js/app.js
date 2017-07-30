$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function() {
    // var hasHeartClass = $(this).hasClass("heart-clicked");
    // if (hasHeartClass) {
    //   $(this).removeClass("fa-heart");
    //   $(this).removeClass("heart-clicked");
    //   $(this).addClass("fa-heart-o");
    // } else {
    //   $(this).removeClass("fa-heart-o");
    //   $(this).addClass("fa-heart");
    //   $(this).addClass("heart-clicked");
    // }
     $(this).toggleClass("heart-clicked fa-heart fa-heart-o");
  });

  var $cog = $(".fa-cog");
  var $profile__overlay = $(".profile__overlay");
  $cog.click(function() {
      $profile__overlay.fadeIn();
    // $(this).toggleClass("heart-clicked fa-heart fa-heart-o");
  });

  var $times = $(".times");
  $times.click(function() {
    var HasTimesClass = $(this).hasClass("fa-times");
    if (HasTimesClass) {
      $(this).removeClass("fa-times");
      $(this).removeClass("profile__overlay");
      $(this).removeClass("profile__overlay-container");
      $(this).removeClass("profile__overlay-link");
    }
    // $(this).toggleClass("heart-clicked fa-heart fa-heart-o");
  });

});



// var weapons = ["Magic Wand", "The Legendary Sword","Hobbit Army"];
// var soldier = {
//   name: "coco",
//   age: 2,
//   weapon: weapons[2],
//   isKorean: false,
//   isDead: false,
//   sayHi: function(){
//     console.log("Hello, my names is" + this.name + "and I'm:" + this.age);
//   }
// };
//
// function multiply(aa,bb){
//   return(aa*bb);
// }
//
// function sum(a,b){
//   return a+b;
// }
//
// function substrac(c,d){
//   return c-d;
// }
//
// function divide(e,f){
//   return e/f;
// }
//
// function expo(g,h){
//   return g**h;
// }
