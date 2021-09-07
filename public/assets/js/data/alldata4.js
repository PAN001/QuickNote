// 不需要同步的数据
var LEA = {};
LEA.sPath = "https:\/\/dn-leanote.qbox.me";
LEA.locale = "en";
var UrlPrefix = 'http:\/\/leanote.com';
var GlobalConfigs = {"uploadAttachSize":0,"uploadAvatarSize":0,"uploadBlogLogoSize":0,"uploadImageSize":0};
var tinyMCEPreInit = {base: 'https:\/\/dn-leanote.qbox.me/tinymce_4.1.9/js/tinymce', suffix: '.min'};
var curNoteId = "";
var curNotebookId = "";
var curSharedNoteNotebookId = "";
var curSharedUserId = "";
var noteContentJson = [];

//需要同步的初始数据
var UserInfo = {"UserId":"56a82c7bab64417776002a5c","Email":"me@nottingham.edu.cn","Verified":false,"Username":"me@nottingham.edu.cn","UsernameRaw":"","CreatedTime":"0001-01-01T00:00:00Z","Logo":"http://leanote.com/images/blog/default_avatar.png","Theme":"","NotebookWidth":0,"NoteListWidth":0,"MdEditorWidth":0,"LeftIsMin":false,"ThirdUserId":"","ThirdUsername":"","ThirdType":0,"FromUserId":"","NoteCnt":0,"Usn":10,"FullSyncBefore":"0001-01-01T00:00:00Z","BlogUrl":"","PostUrl":""};

var notebooks = [{"NotebookId":"0","UserId":"56a82c7bab64417776002a5c","Title":"Newest","UrlTitle":"","NumberNotes":1,"CreatedTime":"0001-01-01T00:00:00Z", "drop":!1, "drag":!1},
{"NotebookId":"56a82c7bab64417776002a5d","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"life","UrlTitle":"","NumberNotes":0,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]},        {"NotebookId":"56a82c7bab64417776002a5e","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"study","UrlTitle":"","NumberNotes":0,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]},

{"NotebookId":"56a82c7bab64417776002a5f","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"work","UrlTitle":"","NumberNotes":1,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]},

{"NotebookId":"-1","UserId":"56a82c7bab64417776002a5c","Title":"Trash","UrlTitle":"","NumberNotes":0,"CreatedTime":"0001-01-01T00:00:00Z","drop":!1, "drag":!1}];

var shareNotebooks = {"52d26b4e99c37b609a000001":[{"ParentNotebookId":"","Title":"Leanote suggestion","UrlTitle":"","NumberNotes":149,"IsTrash":false,"IsBlog":false,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62bd","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":1,"Subs":null,"Seq":0,"NotebookId":"52d270c7bcbf214cfa000000","IsDefault":false},{"ParentNotebookId":"","Title":"Latest","UrlTitle":"","NumberNotes":25,"IsTrash":false,"IsBlog":true,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62c1","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":0,"Subs":null,"Seq":0,"NotebookId":"52d270d3bcbf214cfa000002","IsDefault":false},{"ParentNotebookId":"","Title":"Leantote manual","UrlTitle":"","NumberNotes":29,"IsTrash":false,"IsBlog":true,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62bf","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":0,"Subs":null,"Seq":0,"NotebookId":"52db8460e01c530ef8000000","IsDefault":false}]};

var sharedUserInfos = [];

var notes = [{"NoteId":"56a831ae03f3314265000003","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5f","Title":"Default note","Desc":"Default note","ImgSrc":"","Tags":[""],"IsTrash":false,"IsBlog":false,"UrlTitle":"2d7a82199fb9","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":0,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2016-01-27T10:55:38.656+08:00","UpdatedTime":"2016-01-27T17:40:20.762+08:00","RecommendTime":"0001-01-01T00:00:00Z","PublicTime":"2016-01-27T10:55:38.656+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":10,"IsDeleted":false, "Content":"9"}];

var latestNotes = [{"NoteId":"56a831ae03f3314265000003","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5f","Title":"Default note","Desc":"Default note","ImgSrc":"","Tags":[""],"IsTrash":false,"IsBlog":false,"UrlTitle":"2d7a82199fb9","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":0,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2016-01-27T10:55:38.656+08:00","UpdatedTime":"2016-01-27T17:40:20.762+08:00","RecommendTime":"0001-01-01T00:00:00Z","PublicTime":"2016-01-27T10:55:38.656+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":10,"IsDeleted":false, "Content":"9"}];

var tagsJson = [];

var trackingLog = [];
var allAppData = {};


// 开始
function getAllAppData(UserId) {
    //             var stringifiedJson = JSON.stringify(jsonData);
    $.ajax({
        type: 'GET', // added,
        url: 'http://cs-linux.nottingham.edu.cn:8000/getAll',
        data: "UserId=" + UserId ,
    //                dataType: "json",
    //                contentType: "application/json; charset=UTF-8",
        //dataType: 'jsonp' - removed
        //jsonpCallback: 'callback' - removed
        contentType: "text/plain", 
        async:false, 
        success: function (data) {
            var parsedData = jQuery.parseJSON(data);
    //                    $('#lblResponse').html(ret.msg);
            // var parsedData = JSON.parse(data);
            console.log(parsedData.UserInfo.UserId);
            return parsedData;
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
            $('#lblResponse').html('Error connecting to the server.');
        }
    });
}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

localforage.getItem('allAppData', function(err, value) {
    console.log("check");
    if(value != null) {
//        console.log("value is not null");
//        flag = true;
        //load 
        console.log("Start loading");
        localforage.getItem('allAppData', function(err, value) {
            // Run this code once the value has been
            // loaded from the offline store.
            allAppData = value;
            console.log("allAppData loaded");
            
            UserInfo = allAppData.UserInfo;
            console.log("UserInfo updated");
            notebooks = allAppData.notebooks;
            console.log("notebooks updated");
            shareNotebooks = allAppData.shareNotebooks;
            console.log("shareNotebooks updated");
            sharedUserInfos = allAppData.sharedUserInfos;
            console.log("sharedUserInfos updated");
            notes = allAppData.notes;
            console.log("notes updated");
            latestNotes = allAppData.latestNotes;
            console.log("latestNotes updated");
            tagsJson = allAppData.tagsJson;
            console.log("tagsJson updated");
            trackingLog = allAppData.trackingLog;
            console.log("trackingLog updated");
        });
    }
    else {
        // load initial data
        
        var isConnected = true;
        if(isConnected) {
            allAppData = getAllAppData(UserInfo.UserId);
            console.log(allAppData);
            console.log("Retrieving data from server");
            UserInfo = allAppData.UserInfo;
            console.log("UserInfo updated");
            notebooks = allAppData.notebooks;
            console.log("notebooks updated");
            shareNotebooks = allAppData.shareNotebooks;
            console.log("shareNotebooks updated");
            sharedUserInfos = allAppData.sharedUserInfos;
            console.log("sharedUserInfos updated");
            notes = allAppData.notes;
            console.log("notes updated");
            latestNotes = allAppData.latestNotes;
            console.log("latestNotes updated");
            tagsJson = allAppData.tagsJson;
            console.log("tagsJson updated");
            trackingLog = allAppData.trackingLog;
            console.log("trackingLog updated");
        }
        else {
            //initial data    
            allAppData.UserInfo = UserInfo;
            allAppData.notebooks = notebooks;
            allAppData.shareNotebooks = shareNotebooks;
            allAppData.sharedUserInfos = sharedUserInfos;
            allAppData.notes = notes;
            allAppData.latestNotes = latestNotes;
            allAppData.tagsJson = tagsJson;
            allAppData.trackingLog = trackingLog;
            console.log("using initial data");
        }
        
        localforage.setItem("allAppData", allAppData, function(err, value) {
            console.log("allAppData saved");
        });

    }
});

sleep(4000);
