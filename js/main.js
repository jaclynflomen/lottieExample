(() => {
//get a ref to the lottie container
const preloader = document.querySelector('.preloader');

let preloadAnim = bodymovin.loadAnimation({
    wrapper : preloader,
    animType : 'svg',
    loop : true, //change to false to stop loop and repeats
    autoplay : false,
    path : './data/search.json'

});

function playAnimation () {
    preloadAnim.play();
};

preloader.addEventListener("mouseover", playAnimation);

})();