function reLogIn(e) {
    e.preventDefault();
    var reEmail = $("#reUsername").val();
    var rePassword = $("#rePassword").val();
    
    // log into server 
    var jsonData = {
        "Email": reEmail, 
        "Password": rePassword
    }; 
    var stringifiedJson = JSON.stringify(jsonData);
    var url = baseUrl + 'logIn';
    $.ajax({
        type: 'POST',
        url: url,
        data: stringifiedJson,
        contentType: "text/plain",
        success: function (data) {
            var res = jQuery.parseJSON(data);
            if(reEmail != allAppData.UserInfo.Email) {
                // login as a new user
                localStorage.email = reEmail;
                localStorage.password = rePassword;
                localStorage.userId = res.UserId;;
                localStorage.cloudPort = res.Port;
                location.href = "qnote.html";
            }
            else {
                // same to preious user
                // hide the bootbox for relogin
                bootbox.hideAll()
                tinymce.activeEditor.notificationManager.open({
                    text: 'Signin Successfully',
                    type: 'info',
                    timeout: 1500
                });
            }

        },
        error: function (data) {
            console.log(data);
            var res = jQuery.parseJSON(data.responseText);
            bootbox.alert(res.msg, function() {});
        }
    });
};