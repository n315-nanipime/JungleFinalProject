import * as MODEL from "./model.js";

var ingredCnt = 3;
var instruCnt = 3;

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID == "") {
    MODEL.changePage("home");
  } else if (pageID == `home`) {
    MODEL.changePage(pageID);
  } else if (pageID == `browse`) {
    MODEL.changePage(pageID);
  } else if (pageID == `account`) {
    MODEL.changePage(pageID, addsubmitListeners);
  } else if (pageID == `recipe`) {
    MODEL.changePage(pageID, addRecipeListeners);
  } else if (pageID == `created`) {
    MODEL.changePage(pageID);
  } else if (pageID == `edit`) {
    MODEL.changePage(pageID);
  }
}

function addRecipeListeners() {
  $("#recipe-button").click(function (e) {
    e.preventDefault();
    console.log("submit");
    let nm = $("#nm").val();
    let ds = $("#ds").val();
    let tt = $("#tt").val();
    let ss = $("#ss").val();

    $(".ingred input").each(function (index, name) {
      console.log("ingred " + index, this.value);
    });
    $(".instruction input").each(function (index, name) {
      console.log("instruction " + index, this.value);
    });
  });

  $("#ingredBtn").on("click", (e) => {
    $(".ingred .ingred-input").append(
      `<input type="text" id="ingred${ingredCnt}" placeholder="Ingredient #${
        ingredCnt + 1
      }" />`
    );
    ingredCnt++;
  });

  $("#instruBtn").on("click", (e) => {
    $(".instruction .instruction-input").append(
      `<input type="text" id="inst${instruCnt}" placeholder="Instruction #${
        instruCnt + 1
      }" />`
    );
    instruCnt++;
  });

  // console.log("hi");
}

function addsubmitListeners() {
  $("#sign-button").click(function (e) {
    e.preventDefault();
    console.log("submit");
    let fn = $("#fn").val();
    let ln = $("#ln").val();
    let em = $("#em").val();
    let pw = $("#pw").val();

    if (fn == "") {
      console.log(fn);
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
    // login();
  });

  $("#login-button").click(function (e) {
    e.preventDefault();
    console.log("submit");
    let em = $("#email").val();
    let pw = $("#password").val();

    if (fn == "") {
      console.log(fn);
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
    // login();
  });

  $("#login-button").click(function (e) {});
}

function login() {
  Swal.fire("submit");
}

function initApp() {
  $(window).on("hashchange", route);
  route();
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

$(document).ready(function () {
  //addFooterLinks();
  initApp();
});

$(window).on("load", function () {
  MODEL.changePage("home");
});
