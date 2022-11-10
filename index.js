//select elements from the html
const yearLog = document.getElementById("yearLog");
const userForm = document.getElementById("userForm");
const formUser = document.getElementById("formUsername");
const userImg = document.getElementById("userImg");
const userName = document.getElementById("userName");
// const userFullName = document.getElementById("userFullName");
const userId = document.getElementById("userId");
const followerBtn = document.getElementById("followerBtn");
const followingBtn = document.getElementById("followingBtn");
const recentBtn = document.getElementById("recentBtn");
const relatedBtn = document.getElementById("relatedBtn");
const profileBox = document.getElementById("profileBox");
const postContainer = document.getElementById("postContainer");
const userProfile = document.getElementById("userProfile");
let currentUser = {};

// class to store data of a profile
class Profile {
  constructor(isPrivate, userId, picUrl, fullName, userName) {
    this.isPrivate = isPrivate;
    this.userId = userId;
    this.picUrl = picUrl;
    this.fullName = fullName;
    this.userName = userName;
  }
}

// year for the footer section
const date = new Date();
const year = date.getFullYear();
yearLog.innerText = year;

// when the form is submitted get the userid and username
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const reqOptions = {
    method: "GET",
    url: "https://instagram47.p.rapidapi.com/get_user_id",
    params: { username: formUser.value },
    headers: {
      "X-RapidAPI-Key": "d5bf355edfmshb977900a20e61eap196580jsne2d9278b8865",
      "X-RapidAPI-Host": "instagram47.p.rapidapi.com",
    },
  };

  axios
    .request(reqOptions)
    .then((res) => {
      if (res.data.status === "Success") {
        // when request is successful
        currentUser.userId = res.data.user_id;
        currentUser.username = res.data.username;
        console.log(currentUser);
        userName.innerText = currentUser.username;
        userId.innerText = currentUser.userId;
      } else {
        // console.log(res.data.Warning);
        userProfile.innerHTML = `<p>${res.data.Warning} try again.<p>`; // When the request fails for some reason.
      }
    })
    .catch((err) => {
      // console.log(err);
      userProfile.innerHTML = `<p>Error: ${err.message}<p>`; // when there is an error on request.
    });
  userProfile.classList.add("active");
});

// get user following
// get related profiles
// get user followers
// get public user post
