import $ from 'jquery';

$(function () {
    $("#checkboxDiv").click(function () {
        if ($(this).is(":checked")) {
            $("#hiddenDiv").show();
        } else {
            $("#hiddenDiv").hide();
        }
    });
});