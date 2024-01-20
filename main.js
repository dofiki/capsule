//scroll event animation
//for box
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('box')
        }else{
            entry.target.classList.remove('box')
        }
    })
})
//for text
const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('texts')
        }else{
            entry.target.classList.remove('texts')
        }
    })
})

let hiddenBox = document.querySelectorAll('.hiddenBox');
let hiddenDisc = document.querySelectorAll('.hiddenTexts');

hiddenBox.forEach((el)=> observer.observe(el));
hiddenDisc.forEach((el)=> observer2.observe(el));

// for click event
let capsules = document.querySelectorAll(".capsule");

capsules.forEach((uniqueCapsule) => {
    uniqueCapsule.addEventListener('click', () => {
        // Remove 'clicked' class from all capsules
        capsules.forEach((capsule) => {
            capsule.classList.remove('clicked');
        });

        // Add 'clicked' class to the clicked capsule
        uniqueCapsule.classList.add('clicked');
    });
});

