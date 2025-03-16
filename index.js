// Fetch adjectives and nouns from JSON files
async function fetchData() {
  const adjectivesResponse = await fetch('adjectives.json');
  const nounsResponse = await fetch('nouns.json');

  const adjectives = await adjectivesResponse.json();
  const nouns = await nounsResponse.json();

  return { adjectives, nouns };
}

// Function to generate a random username
async function generateUsername() {
  const { adjectives, nouns } = await fetchData();

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNumber = Math.floor(Math.random() * 100);

  const username = `${randomAdjective}${randomNoun}${randomNumber}`;
  document.getElementById("usernameDisplay").innerText = username;
  console.log(username);
}

// Function to generate all possible usernames
async function generateAllUsernames() {
  const { adjectives, nouns } = await fetchData();

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
