//function getAllAppData(UserId) {
//    //             var stringifiedJson = JSON.stringify(jsonData);
//    $.ajax({
//        type: 'GET', // added,
//        url: baseUrl +'getAll',
//        data: "UserId=" + UserId ,
//    //                dataType: "json",
//    //                contentType: "application/json; charset=UTF-8",
//        //dataType: 'jsonp' - removed
//        //jsonpCallback: 'callback' - removed
//        contentType: "text/plain", 
//        async:false, 
//        success: function (data) {
//            var parsedData = jQuery.parseJSON(data);
//    //                    $('#lblResponse').html(ret.msg);
//            // var parsedData = JSON.parse(data);
//            console.log(parsedData.UserInfo.UserId);
//            return parsedData;
//        },
//        error: function (xhr, status, error) {
//            console.log('Error: ' + error.message);
//            $('#lblResponse').html('Error connecting to the server.');
//        }
//    });
//}


// 老方法
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

//加载用户名：
var Email = localStorage.email;
var UserId = localStorage.UserId;
var Password = localStorage.password;
$("#username").html(Email);
//var UserId = "56a82c7bab64417776002a5c";
//var isConnected = true;
var isConnected = navigator.onLine;

UserInfo = {"UserId": UserId,"Email": Email,"Verified": true, "Username":Email, "UsernameRaw":"","CreatedTime":"0001-01-01T00:00:00Z","Logo":"http://leanote.com/images/blog/default_avatar.png","Theme":"","NotebookWidth":0,"NoteListWidth":0,"MdEditorWidth":0,"LeftIsMin":false,"ThirdUserId":"","ThirdUsername":"","ThirdType":0,"FromUserId":"","NoteCnt":0,"Usn":10,"FullSyncBefore":"0001-01-01T00:00:00Z","BlogUrl":"","PostUrl":"", "Password": Password};


function retrieveData() {
    $.ajax({
        type: 'GET', // added,
        url: baseUrl + 'getAll',
        data: "UserId=" + UserId ,
    //                dataType: "json",
    //                contentType: "application/json; charset=UTF-8",
        //dataType: 'jsonp' - removed
        //jsonpCallback: 'callback' - removed
        contentType: "text/plain", 
        async:false, 
        success: function (data) {
            var parsedData = jQuery.parseJSON(data);
            if(parsedData.status && parsedData.status == "fail") { // 服务端没有数据：使用初始数据
                console.log("not found data");
                //使用初始数据
                //initial data    
                allAppData.UserInfo = UserInfo;
                allAppData.notebooks = notebooks;
                allAppData.shareNotebooks = shareNotebooks;
                allAppData.sharedUserInfos = sharedUserInfos;
                allAppData.notes = notes;
                allAppData.latestNotes = latestNotes;
                allAppData.tagsJson = tagsJson;
                allAppData.trackingLog = trackingLog;
                allAppData.shareNotebookDefault = shareNotebookDefault;
                console.log("using initial data");
                console.log("call initPage()");
                initPage();
                localforage.setItem("allAppData", allAppData, function(err, value) {
                    console.log("allAppData saved");
                });
                return;
            } 
            allAppData = parsedData;    
            console.log(allAppData.UserInfo.UserId);

            console.log("allAppData loaded from server");

            UserInfo = allAppData.UserInfo;
            console.log("UserInfo updated from server");
            notebooks = allAppData.notebooks;
            console.log("notebooks updated from server");
            shareNotebooks = allAppData.shareNotebooks;
            console.log("shareNotebooks updated from server");
            sharedUserInfos = allAppData.sharedUserInfos;
            console.log("sharedUserInfos updated from server");
            notes = allAppData.notes;
            console.log("notes updated from server");
            latestNotes = allAppData.latestNotes;
            console.log("latestNotes updated from server");
            tagsJson = allAppData.tagsJson;
            console.log("tagsJson updated from server");
            trackingLog = allAppData.trackingLog;
            console.log("trackingLog updated from server");
            shareNotebookDefault = allAppData.shareNotebookDefault;
            console.log("shareNotebookDefault updated from server");
            console.log("call initPage()");
            initPage();
            localforage.setItem("allAppData", allAppData, function(err, value) {
                console.log("allAppData saved");
            });
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);

            localforage.getItem('allAppData', function(err, value) {
                console.log("check");
                if(value != null) { //如果本地有数据，使用本地的
                        allAppData = value;
                        console.log("allAppData loaded from local");

                        UserInfo = allAppData.UserInfo;
                        console.log("UserInfo updated from local");
                        notebooks = allAppData.notebooks;
                        console.log("notebooks updated from local");
                        shareNotebooks = allAppData.shareNotebooks;
                        console.log("shareNotebooks updated from local");
                        sharedUserInfos = allAppData.sharedUserInfos;
                        console.log("sharedUserInfos updated from local");
                        notes = allAppData.notes;
                        console.log("notes updated from local");
                        latestNotes = allAppData.latestNotes;
                        console.log("latestNotes updated from local");
                        tagsJson = allAppData.tagsJson;
                        console.log("tagsJson updated from local");
                        trackingLog = allAppData.trackingLog;
                        console.log("trackingLog updated from local");
                        shareNotebookDefault = allAppData.shareNotebookDefault;
                        console.log("shareNotebookDefault updated from local");
                        console.log("call initPage() from local");
                        initPage();
                        localforage.setItem("allAppData", allAppData, function(err, value) {
                            console.log("allAppData saved");
                        });
                }
                else { //使用初始数据
                    //initial data    
                    allAppData.UserInfo = UserInfo;
                    allAppData.notebooks = notebooks;
                    allAppData.shareNotebooks = shareNotebooks;
                    allAppData.sharedUserInfos = sharedUserInfos;
                    allAppData.notes = notes;
                    allAppData.latestNotes = latestNotes;
                    allAppData.tagsJson = tagsJson;
                    allAppData.trackingLog = trackingLog;
                    allAppData.shareNotebookDefault = shareNotebookDefault;
                    console.log("using initial data");
                    console.log("call initPage()");
                    initPage();
                    localforage.setItem("allAppData", allAppData, function(err, value) {
                        console.log("allAppData saved");
                    });
                }
            });
        }
    });   
}

//retrieveData();