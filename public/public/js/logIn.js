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
    var UserId = getObjectId();
    var jsonData = {"Email": Email, "Password": Password, "UserId": UserId};
    var stringifiedJson = JSON.stringify(jsonData);
    var url = baseUrl + 'register';
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
                localStorage.UserId = UserId;
                location.href = "QNote.html";
            } 
            else {
                alert(res.msg);
            }
        },
        error: function (xhr, status, error) {
            alert('Error: ' + error.message);
        }
    });
};

function logIn(e) {
    e.preventDefault();
    var Email = $("#Username").val();
    var Password = $("#Password").val();
    localStorage.email = Email;
    localStorage.password = Password;

    //        本地check
    localforage.getItem('allAppData', function(err, value) {
        allAppData = value;
        if(allAppData != null && allAppData.UserInfo.Email == Email && allAppData.UserInfo.Password == Password) { // 如果本地有数据且匹配
            localStorage.UserId = allAppData.UserInfo.UserId;
            location.href = "QNote.html";
        }
        else {
            // 与本地数据不匹配或者本地没有数据,与server比对
            console.log("not match with local, check server")
            var jsonData = {"Email": Email, "Password": Password}; 
            var stringifiedJson = JSON.stringify(jsonData);
            var url = baseUrl + 'logIn';
            $.ajax({
                type: 'POST',
                url: url,
                data: stringifiedJson,
                contentType: "text/plain",
                success: function (data) {
                    var res = jQuery.parseJSON(data);
                    if(res.status == "fail") { // 
                        alert(res.msg);
                    }
                    else {
                        localStorage.UserId = res.UserId;
                        location.href = "QNote.html";
                    }
                },
                error: function (xhr, status, error) {
                    alert('Error: ' + error.message);
                }
            });
        }
    });
    
    $("#loginBtn").html("Sign in...").addClass("disabled");
};