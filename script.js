// Define the Project class
class Project {
    constructor(title, description, imageUrl, altText, appLink, tools) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.altText = altText;
        this.appLink = appLink
        this.tools = tools
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
        "Namaz iOS App",
        "https://apps.apple.com/pk/app/badgr/id6466749795",
        ["SwiftUI, Firestore, Rest API, Widget Extension, WatchOS App"]),

    new Project("Badgr",
        "Badgr is designed to bring simplicity and meaning back to your connections making it easier to free yourself from the addiction of traditional social media.",
        "images/badgr-iOS.png",
        "Holr iOS App",
        "https://apps.apple.com/pk/app/badgr/id6466749795",
        "SwiftUI, Firestore"),

    new Project("Milonyx",
        "Strength is the currency for aging, collect it now because you'll be paying it later. Join the only global weightlifting society, Milonyx.",
        "images/milonyx-iPad.png",
        "Milonyx",
        "https://apps.apple.com/pk/app/milonyx/id1526697857",
        "SwiftUI, Firestore, CoreData, Live Activity"),

    new Project("Holr",
        "Holr is a social platform that allows users to engage with their local community, become a local guide, tune into global conversations, and track favorite users, all in one vibrant network of voices.",
        "images/holr-iOS.png",
        "Holr",
        "https://apps.apple.com/pk/app/holr/id1606620254",
        "SwiftUI, Realtime Database, Geofire, WatchOS App"),

    new Project("Intime Video Journal",
        "InTime: Video Journal allows users to create their own video journal by answering one question everyday.",
        "images/intime-iOS.png",
        "Intime Video Journal",
        "https://apps.apple.com/pk/app/intime-video-journal/id6443466660",
        "UIKit, Firestore, Realm"
    ),

    new Project("SquirrelIt!",
        "Squirrelit away, find it fast!\nTired of fumbling through your phone to find some PDF attached to an old email?\nSquirrelit keeps concert tickets, package-return barcodes, boarding passes and photos one tap away.",
        "images/squirrelit.png",
        "SquirreltIt Image",
        "https://apps.apple.com/pk/app/squirrelit/id1631103283",
        "UIKit, Realm Database")
];

function showProjectDetails(project) {
    document.getElementById("project-title").innerText = project.title;
    document.getElementById("project-description").innerText = project.description;
    document.getElementById("project-tools").innerText = `Tools Used: ${project.tools.join(', ')}`;

    const imagesContainer = document.getElementById("project-images");
    imagesContainer.innerHTML = '';  // Clear existing images

    project.imageUrl.forEach((url, index) => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = project.altText[index];
        imagesContainer.appendChild(img);
    });

    document.getElementById("project-link").href = project.appLink;

    document.getElementById("project-details-overlay").style.display = "flex";
}

function closeProjectDetails() {
    document.getElementById("project-details-overlay").style.display = "none";
}

const projectsGrid = document.querySelector('.projects-grid');

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