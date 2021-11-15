$(document).ready(function() {
    $("#btn").click(function() {
        $(".info_user").toggle();
    })
    $("body").on("click", "#btnExport", function() {
        html2canvas($('#print')[0], {
            onrendered: function(canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500
                    }]
                };
                pdfMake.createPdf(docDefinition).download("Table.pdf");
            }
        });
    });
})