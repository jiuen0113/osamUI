/**
 * 공통
 */
function fn_dropdownToggle1() {
    let flag = $('#dropdownTarget1').is(':visible');

    if (!flag) {
        $('#dropdownTarget1').show();
    } else {
        $('#dropdownTarget1').hide();
    }
}

function fn_dropdownToggle2() {
    let flag = $('#dropdownTarget2').is(':visible');

    if (!flag) {
        $('#dropdownTarget2').show();
    } else {
        $('#dropdownTarget2').hide();
    }
}