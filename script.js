// Define the Project class
class Project {
    constructor(title, description, imageUrl, altText, appLink) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.altText = altText;
        this.appLink = appLink
    }

    // Method to create the HTML structure for the project card
    createProjectCard() {
        // Create the project card
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        // Create the image container
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        // Create the image stack
        const imageStack = document.createElement('div');
        imageStack.classList.add('image-stack');

        // Create the blurred image
        const blurredImg = document.createElement('img');
        blurredImg.classList.add('blurred-img');
        blurredImg.src = this.imageUrl;
        blurredImg.alt = this.altText;

        // Create the normal image
        const normalImg = document.createElement('img');
        normalImg.classList.add('normal-img');
        normalImg.src = this.imageUrl;
        normalImg.alt = this.altText;

        // Append images to the image stack
        imageStack.appendChild(blurredImg);
        imageStack.appendChild(normalImg);

        // Append the image stack to the image container
        imageContainer.appendChild(imageStack);

        // Create the project content
        const projectContent = document.createElement('div');
        projectContent.classList.add('project-content');

        // Create and append the project title
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = this.title;
        projectContent.appendChild(projectTitle);

        // Create and append the project description
        const projectDescription = document.createElement('p');
        projectDescription.textContent = this.description;
        projectContent.appendChild(projectDescription);

        // Append the image container and content to the project card
        projectCard.appendChild(imageContainer);
        projectCard.appendChild(projectContent);

        return projectCard;
    }
}

// Array of project instances
const projects = [
    new Project("Namaz",
        "Namoz is your ultimate companion for precise prayer time calculations, customized to your exact location.",
        "images/namaz-iOS.png",
        "Namaz iOS App"),

    new Project("Badgr",
        "Badgr is designed to bring simplicity and meaning back to your connections making it easier to free yourself from the addiction of traditional social media.",
        "images/badgr-iOS.png",
        "Holr iOS App"),

    new Project("Milonyx",
        "Strength is the currency for aging, collect it now because you'll be paying it later. Join the only global weightlifting society, Milonyx.",
        "images/milonyx-iPad.png",
        "Milonyx"),

    new Project("Holr",
        "Holr is a social platform that allows users to engage with their local community, become a local guide, tune into global conversations, and track favorite users, all in one vibrant network of voices.",
        "images/holr-iOS.png",
        "Holr"),

    new Project("Intime Video Journal",
        "InTime: Video Journal allows users to create their own video journal by answering one question everyday.",
        "images/intime-iOS.png",
        "Intime Video Journal"
    ),

    new Project("SquirrelIt!",
        "Squirrelit away, find it fast!\nTired of fumbling through your phone to find some PDF attached to an old email?\nSquirrelit keeps concert tickets, package-return barcodes, boarding passes and photos one tap away.",
        "images/squirrelit.png",
        "SquirreltIt Image")
];

const projectsGrid = document.querySelector('.projects-grid');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImages = document.getElementById('modalImages');
const closeBtn = document.querySelector('.close');

projectCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const project = projects[index];
        modalTitle.innerText = project.title;
        modalDescription.innerText = project.description;

        // Clear previous images
        modalImages.innerHTML = '';

        // Add images to the modal
        project.images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            modalImages.appendChild(img);
        });

        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Iterate over each project and append its card to the projects grid
projects.forEach(project => {
    const projectCard = project.createProjectCard();
    projectsGrid.appendChild(projectCard);
});

// JavaScript to handle smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});