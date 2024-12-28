const adjectives = ["Cool", "Fast", "Crazy", "Epic", "Wild", "Lucky", "Brave", "Happy", "Mighty", "Unknown", "Awesome", "Bad", "Best", "Big", "Black", "Blue", "Bold", "Cool", "Crazy", "Dark", "Deadly", "Epic", "Evil", "Fast", "Fierce", "Final", "First", "Flying", "Free", "Funny", "Good", "Great", "Green", "Happy", "Hard", "Heavy", "High", "Hot", "Huge", "Insane", "Intense", "Jolly","Kind", "Last", "Lazy", "Lethal", "Light", "Little", "Long", "Loud", "Lucky", "Mad", "Mean", "Mighty", "Nice", "Old", "Pink", "Poor", "Quick", "Red", "Rich", "Sad", "Scary", "Sharp", "Short", "Sick", "Silent", "Small", "Smart", "Slow", "Soft", "Solo", "Speedy", "Strong", "Sweet", "Tall", "Tiny", "True", "Ugly", "Weird", "White", "Wild", "Wise", "Wrong", "Yellow", "Young", "Zealous", "Zesty", "Zippy", "Zorro", "Zydeco", "Zany", "Zestful", "Zoom", "Zappy", "Zany", "Zesty", "Adventurous", "Ambitious", "Angry", "Amazing", "Bright", "Brilliant", "Cheerful", "Charming", "Daring", "Delightful", "Dynamic", "Eager", "Efficient", "Elegant", "Energetic", "Fantastic", "Fearless", "Funky", "Generous", "Gentle", "Glamorous", "Gleaming", "Glorious", "Gracious", "Handsome", "Humble", "Impressive", "Incredible", "Innovative", "Invincible", "Joyful", "Lively", "Magnificent", "Magical", "Marvelous", "Mysterious", "Optimistic", "Passionate", "Peaceful", "Playful", "Powerful", "Precious", "Radiant", "Reckless", "Resilient", "Shiny", "Simple", "Sincere", "Skillful", "Snappy", "Spectacular", "Spirited", "Splendid", "Stylish", "Superb", "Terrific", "Thrilling", "Tough", "Tricky", "Vibrant", "Victorious", "Vivid", "Warm", "Wacky", "Witty", "Wonderful", "Zealous", "Zippy", "Zestful", "Wildhearted", "Bright-eyed", "Ironclad", "Steadfast", "Chill", "Coldhearted", "Clever", "Critical", "Dramatic", "Durable", "Fair", "Focused", "Grim", "Imposing", "Limitless", "Luminous", "Noble", "Perfect", "Pioneering", "Quick-witted", "Relentless", "Robust", "Serious", "Shrewd", "Skillful", "Steady", "Tenacious", "Timeless", "Unbreakable", "Unstoppable", "Vigorous", "Whimsical", "Wondrous", "Youthful"];
const nouns = ["Tiger", "Phoenix", "Warrior", "Ninja", "Wizard", "Rider", "Eagle", "Dragon", "Knight", "Panda", "Killer", "Lion", "Book", "Man", "Mountain"];

// Function to generate a random username
function generateUsername() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(Math.random() * 100);

    const username = `${randomAdjective}${randomNoun}${randomNumber}`;
    document.getElementById("usernameDisplay").innerText = username;
    console.log(username);
}

// Function to generate all possible usernames
function generateAllUsernames() {
    const usernames = [];
    for (let adj of adjectives) {
        for (let noun of nouns) {
            for (let num = 0; num < 100; num++) {
                usernames.push(`${adj}${noun}${num}`);
            }
        }
    }

    // Write all usernames
    console.log(usernames);
    console.log(`Total Usernames: ${usernames.length}`);
}

// Uncomment to generate all usernames for testing
// generateAllUsernames();

