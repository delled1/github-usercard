/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
  .get("https://api.github.com/users/delled1")
  .then((response) => {
    console.log(response.data);
    const ericData = response.data;
    userCard.appendChild(userCardMaker(ericData));
  })
  .catch((error) => {
    console.log(error);
  });
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const friendsArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

const friendsGitArray = friendsArray.forEach((friend) => {
  axios
    .get(`https://api.github.com/users/${friend}`)
    .then((response) => {
      console.log(response);
      const friendsData = response.data;
      userCard.appendChild(userCardMaker(friendsData));
    })
    .catch((error) => {
      console.log(error);
    });
});
console.log(friendsGitArray);

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const userCard = document.querySelector(".cards");

function userCardMaker(data) {
  //Institaition of the elements

  const cardDiv = document.createElement("div");
  const img = document.createElement("img");
  const cardInfoDiv = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const link = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  // Class list

  cardDiv.classList.add("card");
  cardInfoDiv.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  //Card Content from Data
  img.src = data.avatar_url;
  name.textContent = data.name;
  username.textContent = data.login;
  location.textContent = "Location: " + data.location;
  profile.textContent = "Profile: ";
  link.href = data.html_url;
  link.textContent = link.href;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;

  // Nesting

  cardDiv.appendChild(img);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(name);
  cardInfoDiv.appendChild(username);
  cardInfoDiv.appendChild(location);
  cardInfoDiv.appendChild(profile);
  profile.appendChild(link);
  cardInfoDiv.appendChild(followers);
  cardInfoDiv.appendChild(following);
  cardInfoDiv.appendChild(bio);

  //Return

  return cardDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
