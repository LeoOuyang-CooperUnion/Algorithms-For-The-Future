const facts = [

    { fact: "Everyone here is an engineer", category: "general" },
    { fact: "Most of us have coded before", category: "general" },
    { fact: "Knicks were in fact in five", category: "general" },
    
    // General
    { fact: "Honey never spoils—edible honey has been found in Egyptian tombs over 3,000 years old.", category: "general" },
    { fact: "There are more possible ways to shuffle a deck of 52 cards than there are atoms on Earth.", category: "general" },
    { fact: "The shortest war in recorded history lasted between 38 and 45 minutes.", category: "general" },
    { fact: "The Eiffel Tower can grow about 15 cm (6 inches) taller during hot weather due to thermal expansion.", category: "general" },
    { fact: "The Pacific Ocean is larger than all of Earth's land area combined.", category: "general" },

    // Space
    { fact: "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.", category: "space" },
    { fact: "A day on Venus is longer than its year.", category: "space" },
    { fact: "The Moon moves about 3.8 cm (1.5 inches) farther from Earth every year.", category: "space" },
    { fact: "Jupiter is so large that more than 1,300 Earths could fit inside it by volume.", category: "space" },
    { fact: "Neutron stars can spin hundreds of times every second.", category: "space" },

    // Animals
    { fact: "An octopus has three hearts and blue blood.", category: "animals" },
    { fact: "Wombats produce cube-shaped poop.", category: "animals" },
    { fact: "Koala fingerprints are remarkably similar to human fingerprints.", category: "animals" },
    { fact: "Sharks have existed longer than trees.", category: "animals" },
    { fact: "A group of flamingos is called a flamboyance.", category: "animals" },

    // Science
    { fact: "Water can boil and freeze at the same time under the right pressure (its triple point).", category: "science" },
    { fact: "Lightning is about five times hotter than the surface of the Sun.", category: "science" },
    { fact: "Sound travels about four times faster in water than in air.", category: "science" },
    { fact: "Your body contains enough carbon to make about 900 pencils.", category: "science" },
    { fact: "Glass is made primarily from melted sand.", category: "science" },

    // Technology
    { fact: "The first computer bug was an actual moth found inside a computer in 1947.", category: "technology" },
    { fact: "The first website ever created is still online.", category: "technology" },
    { fact: "Over 90% of the world's data has been created within the past few years.", category: "technology" },
    { fact: "Email was invented before the World Wide Web.", category: "technology" },
    { fact: "The first 1 GB hard drive, released in 1980, weighed over 500 pounds (225 kg).", category: "technology" },
];


let filteredFacts = facts;

function filterFacts(category) {
    let sortedFacts;
    if (category === "all") {
        sortedFacts = facts;
    } else {
        sortedFacts = facts.filter(fact => fact.category === category);
    }
    return sortedFacts;
}

function showFact(sortedFacts) {
    const randomIndex = Math.floor(Math.random() * sortedFacts.length);
    const chosenFact = sortedFacts[randomIndex].fact;
    document.getElementById("factDisplay").textContent = chosenFact;
}

function handleFilter(button) {
    const category = button.id;
    filteredFacts = filterFacts(category);
}

document.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
        
        document.querySelectorAll(".filter-button").forEach(btn => {
            btn.classList.remove("active");
        });
        
        button.classList.add("active");
        handleFilter(button);
    });
});

document.getElementById("factButton").addEventListener("click", () => {
    showFact(filteredFacts);
});

// Set "All" as the default active filter
document.getElementById("all").classList.add("active");

