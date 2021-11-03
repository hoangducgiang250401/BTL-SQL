$(document).ready(function () {
    
});

$(".checkbox").click(function (e) {
    var mon = []
    input = $(this).parents().eq(1).find('td');
    $(input).each(function (index, value) {
            mon.push($(value).text())
    });
    console.log(mon);
    add_new(mon);
});

function add_new (mon){
    var total_registered = $(".registered>tbody").find('tr').length+1;
    var statu;
    if(mon[7] == '' ){
        mon[7] = 'đk lần đầu'
    }
    $(".registered>tbody").append('<tr>\
    <td id="stt">'+total_registered+'</td>\
    <td>'+mon[1]+'</td>\
    <td>'+mon[6]+'</td>\
    <td>'+mon[2]+'</td>\
    <td>'+mon[3]+'</td>\
    <td>'+mon[8]+'</td>\
    <td>Đk lần đầu</td>\
    <td></td>\
</tr>')
}