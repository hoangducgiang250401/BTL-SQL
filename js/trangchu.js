$(document).ready(function () {
  registered = $(".registered>tbody").find("tr").length;
  $(".credis").append(registered);

  $(".checkbox").click(function (e) {
    var mon = [];
    input = $(this).parents().eq(1).find("td");
    $(input).each(function (index, value) {
      mon.push($(value).text());
    });
    if ($(this).prop("checked")) {
      add_new(mon);
    } else {
      drop_registered(mon);
    }
  });
  $(document).on("click", ".trash", function () {
    $(this).closest("tr").remove();
  });
});

function add_new(mon) {
  if (mon[7] == "") {
    mon[7] = "đk lần đầu";
  }
  $(".registered>tbody").append(
    '<tr>\
    <td id="stt" class = "center">' +
      (registered + 1) +
      "</td>\
    <td>" +
      mon[1] +
      "</td>\
    <td>" +
      mon[6] +
      "</td>\
    <td class = 'center'>" +
      mon[2] +
      "</td>\
    <td>" +
      mon[3] +
      "</td>\
    <td>" +
      mon[8] +
      "</td>\
    <td>" +
      mon[7] +
      '</td>\
    <td class = "center"><i class="far fa-trash-alt trash" \
    style="color: rgb(228, 55, 55); cursor: pointer;">\
    </i></td>\
    </tr>'
  );
  registered += 1;
  $(".credis").text(registered);
}
function drop_registered(mon) {}
