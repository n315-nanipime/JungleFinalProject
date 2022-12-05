import * as MODEL from "./model.js";

// var obj = {
//   Navigation: [
//     {
//       name: "Home",
//       hrefName: "home",
//     },
//     {
//       name: "Browse",
//       hrefName: "browse",
//     },
//     {
//       name: "Create Recipe",
//       hrefName: "create",
//     },
//     // {
//     //   name: "Login",
//     //   hrefName: "login",
//     // },
//   ],
//   FooterLinks: [
//     {
//       name: "Login",
//       hrefName: "login",
//     },
//     {
//       name: "Recipes by Category",
//       hrefName: "categories",
//     },
//     {
//       name: "Privacy and Copyright",
//       hrefName: "privacy",
//     },
//     {
//       name: "Create Recipe",
//       hrefName: "createRecipe",
//     },
//     {
//       name: "Your Recipes",
//       hrefName: "yourRecipes",
//     },
//   ],
// };

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID == "") {
    MODEL.changePage("home");
  } else {
    MODEL.changePage(pageID);
  }
}

function addsubmitListeners() {
  $("#submit").click(function (e) {
    e.preventDefault();
    console.log("submit");
    let fn = $("#fn").val();
    let ln = $("#ln").val();
    let em = $("#em").val();
    let pw = $("#pw").val();
    if (fn == "") {
      Swal.fire("add first name");
    } else if (ln == "") {
      Swal.fire("add last name");
    } else if (em == "") {
      Swal.fire("add email");
    } else if (pw == "") {
      Swal.fire("add password");
    } else {
      login();
    }
    console.log(fn);
    login();
  });
}

function login() {
  Swal.fire("submit");
}

function initApp() {
  $(window).on("hashchange", route);
  loopData();
}

function loopData() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  var pages = document.getElementById("app");

  $(pages).html(MODEL.changePage(pageID));
}

function btnListeners() {
  document.getElementById("loginBtn").addEventListener("click", (e) => {
    e.preventDefault();
    $();
  });
}

// function btnListeners() {
//   $("#sign-button").on("click", function (e) {
//     //e.preventDefault();
//     console.log("submit");

//     let fn = $("#fn").val();
//     let ln = $("#ln").val();
//     let em = $("#em").val();
//     let pw = $("#pw").val();
//     if (fn == "") {
//       alert("enter first name");
//     } else if (ln == "") {
//       alert("enter data");
//     } else if (em == "") {
//       alert("enter data");
//     } else if (pw == "") {
//       alert("enter data");
//     } else {
//       let userObj = {
//         firstName: fn,
//         lastName: ln,
//         email: em,
//         password: pw,
//         // in a normal example, you would not store pw
//       };

//       MODEL.setUserInfo(userObj);
//     }
//   });
// }

// function addFooterLinks() {
//   $("footer .links").html(``);
//   $.each(obj.FooterLinks, (idx, footerItem) => {
//     $("footer .links").append(
//       `<a id="${idx}" href="#${footerItem.hrefName.toLowerCase()}">${
//         footerItem.name
//       }</a>`
//     );
//   });
// }

$(document).ready(function () {
  //addFooterLinks();
  initApp();
});

$(window).on("load", function () {
  MODEL.changePage("home");
});
