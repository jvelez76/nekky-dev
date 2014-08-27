// ---------------------------------------------------------------
// NEKKY
// ---------------------------------------------------------------
// Copyright 2014 - All rights reserved.
// Last modification:  08-25-2014
// ---------------------------------------------------------------
// Modified by: Javier Velez
// signin.js - signin module.
// ---------------------------------------------------------------
//
// Document ready
$(document).ready(function() {
    createForm();


});
//
// ------------------------ Create form
function createForm() {
    var dataJson = new Object({
        'form':'signup',
        'type':'web'
    });
    $.ajax({
        url: 'http://localhost:3000/endpoint',
        type: 'get',
        dataType: 'jsonp',
        jsonp: "callback",
        data: JSON.stringify(dataJson),
        timeout: 30000,
        headers: {"cache-control": "no-cache"},
        success: function (data) {
            console.log(data);

        },
        error: function (xhr, ajaxOptions, thrownErr) {

        },
        beforeSend: function () {


        }
    });
}