
navButtionsId = ['home-btn-id', 'about-me-btn-id', 'skills-btn-id', 'projects-btn-id', 'achievements-btn-id', 'contact-me-btn-id'];
sectionsId = ['home-section-id', 'about-me-section-id', 'skills-section-id', 'projects-section-id', 'achievements-section-id', 'contact-me-section-id'];

function changingSection(id1, id2) {
    document.getElementById(id1).addEventListener('click', function(event) {
        event.preventDefault();
        for(const sectionId of sectionsId) {
            document.getElementById(sectionId).classList.add('hidden');
        }
        document.getElementById(id2).classList.remove('hidden');

        for(const navButtonId of navButtionsId) {
            document.getElementById(navButtonId).classList.remove('border-b-2');
        }
        document.getElementById(id1).classList.add('border-b-2');

        if(id1=='get-in-touch-id') {
            document.getElementById('contact-me-btn-id').classList.add('border-b-2');
        }
    })
}
changingSection('home-btn-id', 'home-section-id');
changingSection('about-me-btn-id', 'about-me-section-id');
changingSection('skills-btn-id', 'skills-section-id');
changingSection('projects-btn-id', 'projects-section-id');
changingSection('achievements-btn-id', 'achievements-section-id');
changingSection('contact-me-btn-id', 'contact-me-section-id');
changingSection('get-in-touch-id', 'contact-me-section-id');