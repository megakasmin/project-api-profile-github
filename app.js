// const fetchFollowing = () => {
//   fetch("https://api.github.com/users/megakasmin/following")
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);

//       let getFollowing = document.getElementById("following");
//       data.map(item2 => {
//         let list1 = document.createElement("img");
//         let list2 = document.createTextNode(item2.login);
//         list1.setAttribute("src", item2.avatar_url);
//         list1.appendChild(list2);

//         list1.style.width = "300px";
//         list1.className = "img-thumbnail";

//         let theName = document.createElement("p");
//         let name1 = document.createTextNode(item2.login);
//         theName.appendChild(name1);
//         getFollowing.appendChild(list1);
//         getFollowing.appendChild(theName);
//       });
//       console.log(data);
//     });
// };

const fetchProfile = () => {
  fetch("https://api.github.com/users/megakasmin")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      let myProfile = document.getElementById("prof");
      let textH2 = document.createElement("H2");
      let newTextH2 = document.createTextNode(data.login);
      let addH2 = textH2.appendChild(newTextH2);

      let profileName = document.getElementById("nama");
      let profileP = document.createElement("P");
      let newMyProfile = document.createTextNode(data.name);
      let addNama = profileP.appendChild(newMyProfile);

      myProfile.appendChild(addH2);
      profileName.appendChild(addNama);
      document.getElementById("profile").setAttribute("src", data.avatar_url);
    });
};

const fetchFollowing = () => {
  fetch("https://api.github.com/users/megakasmin/following")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      let getFollowing = document.getElementById("following");
      data.map(item2 => {
        let list1 = document.createElement("img");
        let list2 = document.createTextNode(item2.login);
        list1.setAttribute("src", item2.avatar_url);
        list1.appendChild(list2);

        list1.style.width = "300px";
        list1.className = "img-thumbnail";

        let theName = document.createElement("p");
        let name1 = document.createTextNode(item2.login);
        theName.appendChild(name1);
        getFollowing.appendChild(list1);
        getFollowing.appendChild(theName);
      });
      console.log(data);
    });
};

const fetchFollowers = () => {
  fetch("https://api.github.com/users/megakasmin/followers")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      let getFollowers = document.getElementById("followers");
      data.map(item => {
        let list1 = document.createElement("img");
        let list2 = document.createTextNode(item.login);
        list1.setAttribute("src", item.avatar_url);
        list1.appendChild(list2);

        list1.style.width = "300px";
        list1.className = "img-thumbnail";

        let theName = document.createElement("p");
        let name1 = document.createTextNode(item.login);
        theName.appendChild(name1);
        getFollowers.appendChild(list1);
        getFollowers.appendChild(theName);
      });
      console.log(data);
    });
};
fetchProfile();
fetchFollowing();
fetchFollowers();
