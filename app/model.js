var recipeObj = [];

export function changePage(pageID, callback) {
  $.get(`pages/${pageID}.html`, function (data) {
    $("#app").html(data);
    if (pageID == `account`) {
      if (callback) {
        callback();
      }
    }
    if (pageID == `recipe`) {
      if (callback) {
        callback();
      }
    }
    if (pageID == `created`) {
      if (callback) {
        callback();
      }
    }
  }).fail((error) => {
    if (error.status == "404") {
    }
    console.log("error", error.status);
  });
}

export function setNewRecipe(recipeIdx) {
  recipeObj.push(recipeIdx);
  $("#created").html(recipeObj.length.toString());
}
