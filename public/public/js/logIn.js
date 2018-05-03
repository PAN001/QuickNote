$('.toggle').on('click', function() {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});


// gernerate a hashcode as the object ID
function getObjectId() {
    return ObjectId() // JQuery function
};

function register(e) {
    e.preventDefault();
    var Email = $("#Username2").val();
    var Password = $("#Password2").val();
    var RepeatPassword = $("#RepeatPassword").val();
    if(Password != RepeatPassword) {
        bootbox.alert(getMsg("Wrong repeat password"), function() {});
        return;
    }
    var UserId = getObjectId();
    var jsonData = {"Email": Email, "Password": Password, "UserId": UserId};
    var stringifiedJson = JSON.stringify(jsonData);
    var url = baseUrl + 'register';
    console.log(url);
    $.ajax({
        type: 'POST',
        url: url,
        data: stringifiedJson,
        contentType: "text/plain",
        success: function (data) {
            var res = jQuery.parseJSON(data);
//            alert(res.msg);
            if(res.status == "success") { // jump to homepage
                localStorage.email = Email;
                localStorage.password = Password;
                localStorage.userId = UserId;
                localStorage.cloudPort = res.Port;
                location.href = "qnote.html";
            } 
            else if(res.status == "emptyemail"){
                bootbox.alert(getMsg(res.msg), function() {
                });
            }
            else if(res.status == "emptypassword"){
                bootbox.alert(getMsg(res.msg), function() {
                });
            }
            else{
                bootbox.alert(res.msg, function() {
                });
            }
        },
        error: function (xhr, status, error) {
            bootbox.alert(getMsg("ServerCrashes"), function() {
            });
        }
    });
    
};

function logIn(e) {
    e.preventDefault();
    var Email = $("#Username").val();
    var Password = $("#Password").val();
    localStorage.email = Email;
    localStorage.password = Password;

    // logics:
    // - try to log into server first
    //  - if fail, start local mode  

    // log into server 
    var jsonData = {
        "Email": Email, 
        "Password": Password
    }; 
    var stringifiedJson = JSON.stringify(jsonData);
    var url = baseUrl + 'logIn';
    console.log(url);
    $.ajax({
        type: 'POST',
        url: url,
        data: stringifiedJson,
        contentType: "text/plain",
        success: function (data) {
            var res = jQuery.parseJSON(data);
            console.log(res);
            if(res.status == "fail") {
                bootbox.alert(res.msg, function() {
                });
            }
            else {
                if(res.Port) {
                    localStorage.cloudPort = res.Port;
                    localStorage.userId = res.UserId;
                    // location.href = baseUrl + 'qnote';
                }
            }

        },
        error: function (data) {
            console.log(data);
            var res = jQuery.parseJSON(data.responseText);
            if(data.status != 0) {
                bootbox.alert(res.msg, function() {});
            }
            else {
                // offline
                // check locally
                console.log("offline so check locally");
                localforage.getItem('allAppData', function(err, value) {
                    allAppData = value;
                    if(allAppData != null && allAppData.UserInfo.Email == Email && allAppData.UserInfo.Password == Password) { // 如果本地有数据且密码匹配
                        console.log("match locally");
                        localStorage.UserId = allAppData.UserInfo.UserId;
                        // location.href = "qnote.html";
                    }
                    else {
                        console.log("does not match locally");
                    }
                });
            }
        }
    });

    // // 本地check
    // localforage.getItem('allAppData', function(err, value) {
    //     allAppData = value;
    //     if(allAppData != null && allAppData.UserInfo.Email == Email && allAppData.UserInfo.Password == Password) { // 如果本地有数据且密码匹配
    //         var jsonData = {
    //             "UserId": UserId, 
    //             "Password": Password
    //         }; 
    //         var stringifiedJson = JSON.stringify(jsonData);
    //         var url = baseUrl + 'openCloud';
    //         $.ajax({
    //             type: 'POST',
    //             url: url,
    //             data: stringifiedJson,
    //             contentType: "text/plain",
    //             success: function (data) {
    //                 var res = jQuery.parseJSON(data);
    //                 if(res.Port)
    //                     localStorage.cloudPort = res.Port;
                    
    //                 localStorage.UserId = allAppData.UserInfo.UserId;
    //                 location.href = "qnote.html";
    //             },
    //             error: function (xhr, status, error) {
    //                 localStorage.UserId = allAppData.UserInfo.UserId;
    //                 location.href = "qnote.html";
    //                 bootbox.alert(getMsg("ServerCrashes"), function() {
    //                 });
    //             }
    //         });
    //     }
    //     else {
    //         // 与本地数据不匹配或者本地没有数据,与server比对
    //         console.log("not match with local, check server")
    //         var jsonData = {
    //             "Email": Email, 
    //             "Password": Password
    //         }; 
    //         var stringifiedJson = JSON.stringify(jsonData);
    //         var url = baseUrl + 'logIn';
    //         console.log(url);
    //         $.ajax({
    //             type: 'POST',
    //             url: url,
    //             data: stringifiedJson,
    //             contentType: "text/plain",
    //             success: function (data) {
    //                 var res = jQuery.parseJSON(data);
    //                 console.log(res);
    //                 if(res.status == "fail") {
    //                     bootbox.alert(res.msg, function() {
    //                     });
    //                 }
    //                 else {
    //                     if(res.Port) {
    //                         localStorage.cloudPort = res.Port;
    //                         localStorage.userId = res.UserId;
    //                         location.href = baseUrl + 'qnote';
    //                     }
    //                 }

    //             },
    //             error: function (data) {
    //                 console.log(data);
    //                 var res = jQuery.parseJSON(data.responseText);
    //                 bootbox.alert(res.msg, function() {});
    //             }
    //         });
    //     }
    // });
    
    $("#loginBtn").html("Sign in...").addClass("disabled");
};