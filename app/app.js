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
