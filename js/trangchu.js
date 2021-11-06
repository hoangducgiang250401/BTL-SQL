$(document).ready(function () {

  $('.filterable .btn-filter').click(function () {
    var $panel = $(this).parents('.filterable'),
      $filters = $panel.find('.filters input'),
      $tbody = $panel.find('.table tbody');
    if ($filters.prop('disabled') == true) {
      $filters.prop('disabled', false);
      $filters.first().focus();
    } else {
      $filters.val('').prop('disabled', true);
      $tbody.find('.no-result').remove();
      $tbody.find('tr').show();
    }
  });

  $('.filterable .filters input').keyup(function (e) {
    /* Ignore tab key */
    var code = e.keyCode || e.which;
    if (code == '9') return;
    /* Useful DOM data and selectors */
    var $input = $(this),
      inputContent = $input.val().toLowerCase(),
      $panel = $input.parents('.filterable'),
      column = $panel.find('.filters th').index($input.parents('th')),
      $table = $panel.find('.table'),
      $rows = $table.find('tbody tr');
    /* Dirtiest filter function ever ;) */
    var $filteredRows = $rows.filter(function () {
      var value = $(this).find('td').eq(column).text().toLowerCase();
      return value.indexOf(inputContent) === -1;
    });
    /* Clean previous no-result if exist */
    $table.find('tbody .no-result').remove();
    /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
    $rows.show();
    $filteredRows.hide();
    /* Prepend no-result row if all rows are filtered */
    if ($filteredRows.length === $rows.length) {
      $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="' + $table.find('.filters th').length + '">No result found</td></tr>'));
    }
  });
  // xoá môn học
  $(document).on("click", ".fa-trash", function () {
    $(this).closest("tr").remove();
    changed();
  });
  //chọn môn học
  $(".choose").click(function (e) {
    if ($(this).find('input').prop("checked")) {
      var mon = [];
      input = $(this).closest('tr').find("td");
      $(input).each(function (index, value) {
        mon.push($(value).text());
      });
      add_subject(mon);
      changed();
    }
  });
  changed();
});
// thay đổi số tín số môn khi đã thêm hoặc xoá môn
function changed(){
  var total_subjects = $('.registered>tbody').find('tr').length;
  var total_credis = 0;
  var sb = $('.registered>tbody').find('tr');
  $(sb).each(function(index,value){
    var credis = $(value).find('td');
    total_credis += Number($(credis[1]).text());
  });
  $('.total-subject').text(total_subjects);
  $('.total-credis').text(total_credis);
}

//thêm môn học
function add_subject(mon) {
  console.log("goi");
  if (mon[8] == "") {
    mon[8] = "lần đầu";
  }
  $(".registered>tbody").append(
    '<tr>\
    <td class="">'+ mon[2] + '</td>\
    <td class="column4">'+ mon[3] + '</td>\
    <td class="column3">'+ mon[4] + '</td>\
    <td class="">'+ mon[7] + '</td>\
    <td class="">'+ mon[8] + '</td>\
    <td class="">'+ mon[9] + '</td>\
    <td class="column2"><i class="fas fa-trash" style="color: #00803d;"></i></td>\
    </tr>'
  );
}
