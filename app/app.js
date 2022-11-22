var obj = {
  Navigation: [
    {
      name: "Home",
      hrefName: "home",
    },
    {
      name: "Browse",
      hrefName: "about",
    },
    {
      name: "Create Recipe",
      hrefName: "create",
    },
    // {
    //   name: "Login",
    //   hrefName: "login",
    // },
  ],
  FooterLinks: [
    {
      name: "Login",
      hrefName: "login",
    },
    {
      name: "Recipes by Category",
      hrefName: "categories",
    },
    {
      name: "Privacy and Copyright",
      hrefName: "privacy",
    },
    {
      name: "Create Recipe",
      hrefName: "createRecipe",
    },
    {
      name: "Your Recipes",
      hrefName: "yourRecipes",
    },
  ],
};

/**
 * It takes the data from the JSON file and adds it to the HTML file.
 */
function addNav() {
  $("nav .links").html(``);
  $.each(obj.Navigation, (idx, navItem) => {
    $("nav .links").append(
      `<a id="${idx}" href="#${navItem.hrefName.toLowerCase()}">${
        navItem.name
      }</a>`
    );
  });
  //addListeners();
  //loopData();
}

function addFooterLinks() {
  $("footer .links").html(``);
  $.each(obj.FooterLinks, (idx, footerItem) => {
    $("footer .links").append(
      `<a id="${idx}" href="#${footerItem.hrefName.toLowerCase()}">${
        footerItem.name
      }</a>`
    );
  });
}

$(document).ready(function () {
  addNav();
  addFooterLinks();
});
