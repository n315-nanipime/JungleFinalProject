export function changePage(pageID) {
  $.get(`pages/${pageID}.html`, function (data) {
    $("#app").html(data);
  }).fail((error) => {
    if (error.status == "404") {
    }
    console.log("error", error.status);
  });
}
