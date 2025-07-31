
navButtonsId = ['home-btn-id', 'about-me-btn-id', 'skills-btn-id', 'projects-btn-id','achievements-btn-id', 'contact-me-btn-id'];
// sectionsId = ['home-section-id', 'about-me-section-id', 'skills-section-id', 'projects-section-id', 'contact-me-section-id'];

function changingNavButton(id1) {
    document.getElementById(id1).addEventListener('click', function (event) {
        /*         
            if i uncomment event.preventDefault(), the section is not changing by click in the nav button
            but if its comment out , the section is changing but there is an issue, in small height if i click the
            a nav button the whole body jump up and the navbar is not showing. so use event.preventDefault() and implement 
            the code according to it. 
        */
        // event.preventDefault(); 
        new Audio('sound/click2.mp3').play();

        for (const navButtonId of navButtonsId) {
            document.getElementById(navButtonId).classList.remove('border-b-2',);
        }
        document.getElementById(id1).classList.add('border-b-2',);

        if (id1 == 'get-in-touch-id') {
            document.getElementById(id1).classList.remove('border-b-2');
            document.getElementById('contact-me-btn-id').classList.add('border-b-2');
        }
    })
}
changingNavButton('home-btn-id');
changingNavButton('about-me-btn-id');
changingNavButton('skills-btn-id');
changingNavButton('projects-btn-id');
changingNavButton('achievements-btn-id');
changingNavButton('contact-me-btn-id');
changingNavButton('get-in-touch-id');


const container = document.getElementById("type-text-id-1");
const text = "Send a Message";

let i = 0;
function typeText() {
    if(i < text.length) {
        container.innerHTML += text[i];
        i++;
        setTimeout(typeText, 100); // speed
    }
}

// Trigger when visible
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeText();
            observer.disconnect(); // stop observing after one run
        }
    });
});

observer.observe(container);