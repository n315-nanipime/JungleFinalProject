// just trying out
//var userInfo = {};

export function changePage(pageID) {
  $.get(`pages/${pageID}.html`, function (data) {
    $("#app").html(data);
  }).fail((error) => {
    if (error.status == "404") {
    }
    console.log("error", error.status);
  });
}

// trying the login
// export function setUserInfo(userObject) {
//   userInfo = userObject;
//   console.log(userInfo);
// }
