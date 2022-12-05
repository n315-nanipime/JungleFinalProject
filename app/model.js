export function changePage(pageID, subPage) {
  // console.log("sub " + subPage);
  console.log("page " + pageID);

  if (subPage == undefined) {
    $.get(`pages/${pageID}.html`, function (data) {
      $("#app").html(data);
    }).fail((error) => {
      if (error.status == "404") {
        //   alert("Page cannot be found. Pleach check your url.");
      }
      console.log("error", error.status);
    });
  } else {
    $.get(`pages/${pageID}/${subPage}.html`, function (data) {
      $("#app").html(data);
    }).fail((error) => {
      if (error.status == "404") {
        //   alert("Page cannot be found. Pleach check your url.");
      }
      console.log("error", error.status);
    });
  }
}
