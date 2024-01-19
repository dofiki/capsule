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
