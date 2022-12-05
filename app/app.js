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
  let pageIDArray = pageID.split("/");
  pageID = pageIDArray[0];
  let subPageID = pageIDArray[1];

  if (pageID == "") {
    MODEL.changePage("home");
  } else {
    if (pageID == subPageID) {
      MODEL.changePage(pageID, addsubmitListeners);
    } else {
      MODEL.changePage(pageID, subPageID);
    }
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

/**
 * It takes the data from the JSON file and adds it to the HTML file.
 */
// function addNav() {
//   $("nav .links").html(``);
//   $.each(obj.Navigation, (idx, navItem) => {
//     $("nav .links").append(
//       `<a id="${idx}" href="#${navItem.hrefName.toLowerCase()}">${
//         navItem.name
//       }</a>`
//     );
//   });
//   //eventListeners();
//   //loopData();
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
  //addNav();
  //addFooterLinks();
  initApp();
});
