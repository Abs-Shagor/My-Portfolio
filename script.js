/* show the current screen size */
// function showSize() {
//     const p_container = document.getElementById('screen-size');
//     p_container.innerText = `Screen [Width: ${window.innerWidth}px - Height: ${window.innerHeight}px]`;
// }
// window.addEventListener('resize', showSize);
// showSize();


/* changing section by clicking nav Button */
navButtonsId = ['home-btn-id', 'about-me-btn-id', 'skills-btn-id', 'projects-btn-id', 'achievements-btn-id', 'contact-me-btn-id'];
sectionsId = ['home-section-id', 'about-me-section-id', 'skills-section-id', 'projects-section-id', 'achievements-section-id', 'contact-me-section-id'];

function chnagingSection(id1, id2) {
    document.getElementById(id1).addEventListener('click', function (event) {
        event.preventDefault();
        new Audio('sound/click2.mp3').play();
        document.getElementById(id2).scrollIntoView({ behavior: "smooth" })
        if (id1 == 'home-btn-id') {
            document.getElementById('body-id').scrollIntoView({ behavior: "smooth" })
        }

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
for (let k = 0; k < navButtonsId.length; k++) {
    chnagingSection(navButtonsId[k], sectionsId[k]);
}


/* Open link */
function openLink(id, address) {
    document.getElementById(id).addEventListener('click', function (event) {
        event.preventDefault();
        new Audio('sound/click2.mp3').play();
        window.open(address, '_blank');
    })
}
openLink('sidebar-github-id', 'https://github.com/Abs-Shagor');
openLink('sidebar-linkedin-id', 'https://www.linkedin.com/in/mohammad-abu-bakkar-siddik-829451295/');
openLink('sidebar-facebook-id', 'https://www.facebook.com/absShagor99');
openLink('sidebar-x-id', 'https://x.com/abs_shagor?s=21');

openLink('about-me-cf-id', 'https://codeforces.com/profile/Abs_Shagor56');
openLink('about-me-cc-id', 'https://www.codechef.com/users/abs_shagor56');
openLink('about-me-lc-id', 'https://leetcode.com/u/AbsShagor56/');
openLink('about-me-vj-id', 'https://vjudge.net/user/Abs_Shagor56');

openLink('contact-me-linkedin-id', 'https://www.linkedin.com/in/mohammad-abu-bakkar-siddik-829451295/');
openLink('contact-me-github-id', 'https://github.com/Abs-Shagor');





/* Contact section. Text typing */
const container = document.getElementById("type-text-id-1");
const text = "Send a Message";

let i = 0;
function typeText() {
    if (i < text.length) {
        container.innerHTML += text[i];
        i++;
        setTimeout(typeText, 100); // speed
    }
}
const contactMessageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeText();
            observer.disconnect();
        }
    });
});
contactMessageObserver.observe(container);


/* Changing bottum border/bar of navbar button if the section arrived in screen */
const All_ids = {
    'home-section-id': 'home-btn-id',
    'about-me-section-id': 'about-me-btn-id',
    'skills-section-id': 'skills-btn-id',
    'projects-section-id': 'projects-btn-id',
    'achievements-section-id': 'achievements-btn-id',
    'contact-me-section-id': 'contact-me-btn-id'
};
function changingNavButtonBar(id) {
    for (const navButtonId of navButtonsId) {
        document.getElementById(navButtonId).classList.remove('border-b-2');
    }
    document.getElementById(id).classList.add('border-b-2');
}
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const navId = All_ids[entry.target.id];
            changingNavButtonBar(navId);
        }
    });
});
Object.keys(All_ids).forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) sectionObserver.observe(section);
});


/* profile sidebar Hamburgr and X icon toggling */
const checkbox = document.querySelector('section.collapse input[type="checkbox"]');
const hamburger = document.getElementById('hamburger');
const xIcon = document.getElementById('xIcon');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        // Opened
        hamburger.classList.add('hidden');
        xIcon.classList.remove('hidden');
    } else {
        // Closed
        hamburger.classList.remove('hidden');
        xIcon.classList.add('hidden');
    }
});

