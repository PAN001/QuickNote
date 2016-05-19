var LEA = {};
LEA.sPath = "https:\/\/dn-leanote.qbox.me";
LEA.locale = "en";
var UrlPrefix = 'http:\/\/leanote.com';
var UserInfo = {"UserId":"56a82c7bab64417776002a5c","Email":"me@nottingham.edu.cn","Verified":false,"Username":"me@nottingham.edu.cn","UsernameRaw":"","CreatedTime":"0001-01-01T00:00:00Z","Logo":"http://leanote.com/images/blog/default_avatar.png","Theme":"","NotebookWidth":0,"NoteListWidth":0,"MdEditorWidth":0,"LeftIsMin":false,"ThirdUserId":"","ThirdUsername":"","ThirdType":0,"FromUserId":"","NoteCnt":0,"Usn":10,"FullSyncBefore":"0001-01-01T00:00:00Z","BlogUrl":"","PostUrl":""};
var notebooks;
var shareNotebooks;
var sharedUserInfos;
var curNoteId;
var curNotebookId;
var curSharedNoteNotebookId;
var curSharedUserId;
var notes;
var latestNotes;
var noteContentJson;
var tagsJson = [];
var GlobalConfigs = {"uploadAttachSize":0,"uploadAvatarSize":0,"uploadBlogLogoSize":0,"uploadImageSize":0};
var tinyMCEPreInit = {base: 'https:\/\/dn-leanote.qbox.me/tinymce_4.1.9/js/tinymce', suffix: '.min'};

var trackingLog;

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

//// add to the tail of the body part
//function include(path){ 
//    var a=document.createElement("script");
//    a.type = "text/javascript"; 
//    a.src=path; 
//    var head=document.getElementsByTagName("body")[0];
//    head.appendChild(a);
//}

//function include(path) {
//    document.write("<script scr=>" + path + "<\/script>");
//}
    
//var flag = false;
//    function checkIfExistent() {
//        localforage.getItem('UserInfo', function(err, value) {
//            (value != null) && localforage.getItem('notebooks', function(err, value) {
//                (value != null) && localforage.getItem('notes', function(err, value) {
//                    (value != null) && (flag = true);
//                });
//            });
//        });
//    }
//    checkIfExistent();

//    localforage.getItem('UserInfo', function(err, value) {
//            console.log(1),
//            (value != null) && localforage.getItem('notebooks', function(err, value) {
//                console.log(2),
//                (value != null) && localforage.getItem('notes', function(err, value) {
//                    console.log(3),
//                    (value != null) && (flag = true);
//                });
//            });
//        });

//    localforage.getItem('UserInfo', function(err, value) {
//            console.log(1),
//            (value != null) && localforage.getItem('notebooks', function(err, value) {
//                console.log(2),
//                (value != null) && localforage.getItem('notes', function(err, value) {
//                    console.log(3),
//                    (value != null) && (flag = true);
//                });
//            });
//        });

// localforage.getItem('UserInfo', function(err, value) {
//     console.log("check");
//     if(false) {
// //        console.log("value is not null");
// //        flag = true;
//         //load 
//         console.log("Start loading");
//         localforage.getItem('notebooks', function(err, value) {
//             // Run this code once the value has been
//             // loaded from the offline store.
//             notebooks = value;
//             console.log("notebooks loaded");
//         });

//         localforage.getItem('shareNotebooks', function(err, value) {
//             // Run this code once the value has been
//             // loaded from the offline store.
//             shareNotebooks = value;
//             console.log("shareNotebooks loaded");
//         });

//         localforage.getItem('sharedUserInfos', function(err, value) {
//             // Run this code once the value has been
//             // loaded from the offline store.
//             sharedUserInfos = value;
//             console.log("sharedUserInfos loaded");
//         });

//         localforage.getItem('curNoteId', function(err, value) {
//             // Run this code once the value has been
//             // loaded from the offline store.
//             curNoteId = value;
//             console.log("curNoteId loaded");
//         });

//         localforage.getItem('curNotebookId', function(err, value) {
//             // Run this code once the value has been
//             // loaded from the offline store.
//             curNotebookId = value;
//             console.log("curNotebookId loaded");
//         });

//         localforage.getItem('curSharedNoteNotebookId', function(err, value) {
//             // Run this code once the value has been
//             // loaded from the offline store.
//             curSharedNoteNotebookId = value;
//             console.log("curSharedNoteNotebookId loaded");
//         });

//         localforage.getItem('curSharedUserId', function(err, value) {
//             // Run this code once the value has been
//             // loaded from the offline store.
//             curSharedUserId = value;
//             console.log("curSharedUserId loaded");
//         });

//         localforage.getItem('notes', function(err, value) {
//             // Run this code once the value has been
//             // loaded from the offline store.
//             notes = value;
//             console.log("notes loaded");
//         });

//         localforage.getItem('latestNotes', function(err, value) {
//             // Run this code once the value has been
//             // loaded from the offline store.
//             latestNotes = value;
//             console.log("latestNotes loaded");
//         });

//         localforage.getItem('noteContentJson', function(err, value) {
//             // Run this code once the value has been
//             // loaded from the offline store.
//             noteContentJson = value;
//             console.log("noteContentJson loaded" + noteContentJson);
//         });

//         localforage.getItem('tagsJson', function(err, value) {
//             // Run this code once the value has been
//             // loaded from the offline store.
//             tagsJson = value;
//             console.log("tagsJson loaded");
//         });
            
//         localforage.getItem('UserInfo', function(err, value) {
//             // Run this code once the value has been
//             // loaded from the offline store.
//             UserInfo = value;
//             console.log("UserInfo loaded");

            
//            include("https:\/\/cdn.tinymce.com\/4\/tinymce.min.js");
//            include("public\/js\/editor.js");
//            include("public\/js\/DND.js");
//            include("public\/js\/i18n\/msg.en.js");
//            include("public\/js\/dep.min.js");
//            include("http:\/\/libs.baidu.com\/bootstrap\/3.0.3\/js\/bootstrap.min.js");
//            include("https:\/\/dn-leanote.qbox.me\/js\/plugins\/main.min.js");
//            include("public\/js\/app.min.js");
//            include("<script>" + "initPage();" + "<\/script>");
//            include("<script src=\"public\/js/media.js\"><\/script>");
//            include("<script>" + "initPage();" + "<\/script>");
            
//            document.write("<script src=\"https:\/\/cdn.tinymce.com\/4\/tinymce.min.js\"></script>");
//            document.write("<script src=\"public\/js\/editor.js\"><\/script>");
//            document.write("<script src=\"public\/js\/DND.js\"><\/script>");
//            document.write("<script src=\"public\/js\/i18n\/msg.en.js\"><\/script>");
//            document.write("<script src=\"public\/js\/dep.min.js\"><\/script>");
//            document.write("<script src=\"http:\/\/libs.baidu.com\/bootstrap\/3.0.3\/js\/bootstrap.min.js\"><\/script>");

            // document.write("<script src=\"public\/js\/app.min.js\"></script>");
            // document.write("<script>" + "initPage();" + "<\/script>");
            // document.write("<script src=\"https:\/\/dn-leanote.qbox.me\/js\/plugins\/main.min.js\"><\/script>");
            // document.write("<script src=\"public\/js/media.js\"><\/script>");
//            <script src="https://dn-leanote.qbox.me/js/plugins/main.min.js"></script>
//            <script src="public/js/media.js"></script>
            
            
//            initPage();
//            window.require = {
//                baseUrl: 'https:\/\/dn-leanote.qbox.me',
//            };
//        localforage.getItem('trackingLog', function(err, value) {
//            // Run this code once the value has been
//            // loaded from the offline store.
//            trackingLog = value;
//            console.log("trackingLog loaded");
//        });
    }
//    else {
        //save using localforage
        // UserInfo
        UserInfo = {"UserId":"56a82c7bab64417776002a5c","Email":"me@nottingham.edu.cn","Verified":false,"Username":"me@nottingham.edu.cn","UsernameRaw":"","CreatedTime":"0001-01-01T00:00:00Z","Logo":"http://leanote.com/images/blog/default_avatar.png","Theme":"","NotebookWidth":0,"NoteListWidth":0,"MdEditorWidth":0,"LeftIsMin":false,"ThirdUserId":"","ThirdUsername":"","ThirdType":0,"FromUserId":"","NoteCnt":0,"Usn":10,"FullSyncBefore":"0001-01-01T00:00:00Z","BlogUrl":"","PostUrl":""};

        localforage.setItem("UserInfo", UserInfo, function(err, value) {
            console.log("UserInfo saved");
        });

        // notebooks
        notebooks = [
        {"NotebookId":"0","UserId":"56a82c7bab64417776002a5c","Title":"Newest","UrlTitle":"","NumberNotes":1,"CreatedTime":"0001-01-01T00:00:00Z", "drop":!1, "drag":!1},
        {"NotebookId":"56a82c7bab64417776002a5d","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"life","UrlTitle":"","NumberNotes":0,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]},
        {"NotebookId":"56a82c7bab64417776002a5e","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"study","UrlTitle":"","NumberNotes":0,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]},
        {"NotebookId":"56a82c7bab64417776002a5f","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"work","UrlTitle":"","NumberNotes":1,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]},
        
        {"NotebookId":"-1","UserId":"56a82c7bab64417776002a5c","Title":"Trash","UrlTitle":"","NumberNotes":0,"CreatedTime":"0001-01-01T00:00:00Z","drop":!1, "drag":!1},
       
        ];

        localforage.setItem("notebooks", notebooks, function(err, value) {
            console.log("notebooks saved");
        });

        // shareNotebooks
        shareNotebooks = {"52d26b4e99c37b609a000001":[{"ParentNotebookId":"","Title":"Leanote suggestion","UrlTitle":"","NumberNotes":149,"IsTrash":false,"IsBlog":false,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62bd","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":1,"Subs":null,"Seq":0,"NotebookId":"52d270c7bcbf214cfa000000","IsDefault":false},{"ParentNotebookId":"","Title":"Latest","UrlTitle":"","NumberNotes":25,"IsTrash":false,"IsBlog":true,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62c1","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":0,"Subs":null,"Seq":0,"NotebookId":"52d270d3bcbf214cfa000002","IsDefault":false},{"ParentNotebookId":"","Title":"Leantote manual","UrlTitle":"","NumberNotes":29,"IsTrash":false,"IsBlog":true,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62bf","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":0,"Subs":null,"Seq":0,"NotebookId":"52db8460e01c530ef8000000","IsDefault":false}]};

        localforage.setItem("shareNotebooks", shareNotebooks, function(err, value) {
            console.log("shareNotebooks saved");
        });

        // sharedUserInfos
        sharedUserInfos = [];
        localforage.setItem("sharedUserInfos", sharedUserInfos, function(err, value) {
            console.log("sharedUserInfos saved");
        });

        // curNoteId
        curNoteId = '';
        localforage.setItem("curNoteId", curNoteId, function(err, value) {
            console.log("curNoteId saved");
        });

        // curNotebookId
        curNotebookId = '';
        localforage.setItem("curNotebookId", curNotebookId, function(err, value) {
            console.log("curNotebookId saved");
        });

        // curSharedNoteNotebookId
        curSharedNoteNotebookId = '';
        localforage.setItem("curSharedNoteNotebookId", curSharedNoteNotebookId, function(err, value) {
            console.log("curSharedNoteNotebookId saved");
        });

        // curSharedUserId
        curSharedUserId = '';
        localforage.setItem("curSharedUserId", curSharedUserId, function(err, value) {
            console.log("curSharedUserId saved");
        });

        // notes
        notes = [{"NoteId":"56a831ae03f3314265000003","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5f","Title":"Default note","Desc":"Default note","ImgSrc":"","Tags":["test"],"IsTrash":false,"IsBlog":false,"UrlTitle":"2d7a82199fb9","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":0,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2016-01-27T10:55:38.656+08:00","UpdatedTime":"2016-01-27T17:40:20.762+08:00","RecommendTime":"0001-01-01T00:00:00Z","PublicTime":"2016-01-27T10:55:38.656+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":10,"IsDeleted":false, "Content":"9"}];
        localforage.setItem("notes", notes, function(err, value) {
            console.log("notes saved");
        });

        // latestNotes
        latestNotes = [{"NoteId":"56a831ae03f3314265000003","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5f","Title":"Default note","Desc":"Default note","ImgSrc":"","Tags":[""],"IsTrash":false,"IsBlog":false,"UrlTitle":"2d7a82199fb9","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":0,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2016-01-27T10:55:38.656+08:00","UpdatedTime":"2016-01-27T17:40:20.762+08:00","RecommendTime":"0001-01-01T00:00:00Z","PublicTime":"2016-01-27T10:55:38.656+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":10,"IsDeleted":false, "Content":"9"}];
        localforage.setItem("latestNotes", latestNotes, function(err, value) {
            console.log("latestNotes saved");
        });

        // noteContentJson
        noteContentJson = {};
        localforage.setItem("noteContentJson", noteContentJson, function(err, value) {
            console.log("noteContentJson saved");
        });

        // tagsJson
        tagsJson = [{"TagId":"56e22e07ab64415989000c75","UserId":"56a82c7bab64417776002a5c","Tag":"test3","Usn":94,"Count":1,"CreatedTime":"2016-03-11T10:31:35.207+08:00","UpdatedTime":"2016-03-11T10:31:35.207+08:00","IsDeleted":false},{"TagId":"56e22e03ab64415add000da7","UserId":"56a82c7bab64417776002a5c","Tag":"test2","Usn":92,"Count":1,"CreatedTime":"2016-03-11T10:31:31.876+08:00","UpdatedTime":"2016-03-11T10:31:31.876+08:00","IsDeleted":false},{"TagId":"56e22e02ab64415add000da6","UserId":"56a82c7bab64417776002a5c","Tag":"test","Usn":90,"Count":1,"CreatedTime":"2016-03-11T10:31:30.348+08:00","UpdatedTime":"2016-03-11T10:31:30.348+08:00","IsDeleted":false},{"TagId":"56d13aa6ab64417fb100002b","UserId":"56a82c7bab64417776002a5c","Tag":"","Usn":39,"Count":0,"CreatedTime":"2016-02-27T13:56:54.704+08:00","UpdatedTime":"2016-02-27T13:56:59.159+08:00","IsDeleted":false},{"TagId":"56d13aabab64417fb100002e","UserId":"56a82c7bab64417776002a5c","Tag":"leanote","Usn":42,"Count":1,"CreatedTime":"2016-02-27T13:56:59.079+08:00","UpdatedTime":"2016-02-27T13:56:59.079+08:00","IsDeleted":false},{"TagId":"56d13aabab64417fb100002d","UserId":"56a82c7bab64417776002a5c","Tag":"welcome","Usn":41,"Count":1,"CreatedTime":"2016-02-27T13:56:59.078+08:00","UpdatedTime":"2016-02-27T13:56:59.078+08:00","IsDeleted":false}];

        localforage.setItem("tagsJson", tagsJson, function(err, value) {
            console.log("tagsJson saved");
        });
        
        // trackingLog
        trackingLog = [];
        localforage.setItem("trackingLog", trackingLog, function(err, value) {
            console.log("trackingLog saved");
        });
        
    }
});


sleep(1000);

////alert("1s later and flag is " + flag);
//console.log("the flag is " + flag);
//if(flag) {
//    //load 
//    console.log("Start loading");
//    localforage.getItem('UserInfo', function(err, value) {
//        // Run this code once the value has been
//        // loaded from the offline store.
//        UserInfo = value;
//    });
//
//    localforage.getItem('notebooks', function(err, value) {
//        // Run this code once the value has been
//        // loaded from the offline store.
//        notebooks = value;
//        console.log("notebooks loaded");
//    });
//
//    localforage.getItem('shareNotebooks', function(err, value) {
//        // Run this code once the value has been
//        // loaded from the offline store.
//        shareNotebooks = value;
//        console.log("shareNotebooks loaded");
//    });
//
//    localforage.getItem('sharedUserInfos', function(err, value) {
//        // Run this code once the value has been
//        // loaded from the offline store.
//        sharedUserInfos = value;
//        console.log("sharedUserInfos loaded");
//    });
//
//    localforage.getItem('curNoteId', function(err, value) {
//        // Run this code once the value has been
//        // loaded from the offline store.
//        curNoteId = value;
//        console.log("curNoteId loaded");
//    });
//
//    localforage.getItem('curNotebookId', function(err, value) {
//        // Run this code once the value has been
//        // loaded from the offline store.
//        curNotebookId = value;
//        console.log("curNotebookId loaded");
//    });
//
//    localforage.getItem('curSharedNoteNotebookId', function(err, value) {
//        // Run this code once the value has been
//        // loaded from the offline store.
//        curSharedNoteNotebookId = value;
//        console.log("curSharedNoteNotebookId loaded");
//    });
//
//    localforage.getItem('curSharedUserId', function(err, value) {
//        // Run this code once the value has been
//        // loaded from the offline store.
//        curSharedUserId = value;
//        console.log("curSharedUserId loaded");
//    });
//
//    localforage.getItem('notes', function(err, value) {
//        // Run this code once the value has been
//        // loaded from the offline store.
//        notes = value;
//        console.log("notes loaded");
//    });
//
//    localforage.getItem('latestNotes', function(err, value) {
//        // Run this code once the value has been
//        // loaded from the offline store.
//        latestNotes = value;
//        console.log("latestNotes loaded");
//    });
//
//    localforage.getItem('noteContentJson', function(err, value) {
//        // Run this code once the value has been
//        // loaded from the offline store.
//        noteContentJson = value;
//        console.log("noteContentJson loaded" + noteContentJson);
//    });
//
//    localforage.getItem('tagsJson', function(err, value) {
//        // Run this code once the value has been
//        // loaded from the offline store.
//        tagsJson = value;
//        console.log("tagsJson loaded");
//    });
//
////    sleep(3000);
//}
//else {
//    //save using localforage
//    // UserInfo
//    UserInfo = {"UserId":"56a82c7bab64417776002a5c","Email":"me@nottingham.edu.cn","Verified":false,"Username":"me@nottingham.edu.cn","UsernameRaw":"","CreatedTime":"0001-01-01T00:00:00Z","Logo":"http://leanote.com/images/blog/default_avatar.png","Theme":"","NotebookWidth":0,"NoteListWidth":0,"MdEditorWidth":0,"LeftIsMin":false,"ThirdUserId":"","ThirdUsername":"","ThirdType":0,"FromUserId":"","NoteCnt":0,"Usn":10,"FullSyncBefore":"0001-01-01T00:00:00Z","BlogUrl":"","PostUrl":""};
//
//    localforage.setItem("UserInfo", UserInfo, function(err, value) {
//        console.log("UserInfo saved");
//    });
//
//    // notebooks
//    notebooks = [{"NotebookId":"56a82c7bab64417776002a5d","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"life","UrlTitle":"","NumberNotes":0,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]},{"NotebookId":"56a82c7bab64417776002a5e","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"study","UrlTitle":"","NumberNotes":0,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]},{"NotebookId":"56a82c7bab64417776002a5f","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"work","UrlTitle":"","NumberNotes":0,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]}];
//
//    localforage.setItem("notebooks", notebooks, function(err, value) {
//        console.log("notebooks saved");
//    });
//
//    // shareNotebooks
//    shareNotebooks = {"52d26b4e99c37b609a000001":[{"ParentNotebookId":"","Title":"Leanote suggestion","UrlTitle":"","NumberNotes":149,"IsTrash":false,"IsBlog":false,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62bd","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":1,"Subs":null,"Seq":0,"NotebookId":"52d270c7bcbf214cfa000000","IsDefault":false},{"ParentNotebookId":"","Title":"Latest","UrlTitle":"","NumberNotes":25,"IsTrash":false,"IsBlog":true,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62c1","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":0,"Subs":null,"Seq":0,"NotebookId":"52d270d3bcbf214cfa000002","IsDefault":false},{"ParentNotebookId":"","Title":"Leantote manual","UrlTitle":"","NumberNotes":29,"IsTrash":false,"IsBlog":true,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62bf","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":0,"Subs":null,"Seq":0,"NotebookId":"52db8460e01c530ef8000000","IsDefault":false}]};
//
//    localforage.setItem("shareNotebooks", shareNotebooks, function(err, value) {
//        console.log("shareNotebooks saved");
//    });
//
//    // sharedUserInfos
//    sharedUserInfos = [];
//    localforage.setItem("sharedUserInfos", sharedUserInfos, function(err, value) {
//        console.log("sharedUserInfos saved");
//    });
//
//    // curNoteId
//    curNoteId = '';
//    localforage.setItem("curNoteId", curNoteId, function(err, value) {
//        console.log("curNoteId saved");
//    });
//
//    // curNotebookId
//    curNotebookId = '';
//    localforage.setItem("curNotebookId", curNotebookId, function(err, value) {
//        console.log("curNotebookId saved");
//    });
//
//    // curSharedNoteNotebookId
//    curSharedNoteNotebookId = '';
//    localforage.setItem("curSharedNoteNotebookId", curSharedNoteNotebookId, function(err, value) {
//        console.log("curSharedNoteNotebookId saved");
//    });
//
//    // curSharedUserId
//    curSharedUserId = '';
//    localforage.setItem("curSharedUserId", curSharedUserId, function(err, value) {
//        console.log("curSharedUserId saved");
//    });
//
//    // notes
//    notes = [];
//    localforage.setItem("notes", notes, function(err, value) {
//        console.log("notes saved");
//    });
//
//    // latestNotes
//    latestNotes = [];
//    localforage.setItem("latestNotes", latestNotes, function(err, value) {
//        console.log("latestNotes saved");
//    });
//
//    // noteContentJson
//    noteContentJson = {};
//    localforage.setItem("noteContentJson", noteContentJson, function(err, value) {
//        console.log("noteContentJson saved");
//    });
//
//    // tagsJson
//    tagsJson = [];
//    localforage.setItem("tagsJson", tagsJson, function(err, value) {
//        console.log("tagsJson saved");
//    });
//}




//var UserInfo = {"UserId":"56a82c7bab64417776002a5c","Email":"pan.atopos@outlook.com","Verified":false,"Username":"pan.atopos@outlook.com","UsernameRaw":"","CreatedTime":"2016-01-27T10:33:31.321+08:00","Logo":"http://leanote.com/images/blog/default_avatar.png","Theme":"","NotebookWidth":0,"NoteListWidth":0,"MdEditorWidth":0,"LeftIsMin":false,"ThirdUserId":"","ThirdUsername":"","ThirdType":0,"FromUserId":"","NoteCnt":0,"Usn":10,"FullSyncBefore":"0001-01-01T00:00:00Z","BlogUrl":"http://blog.leanote.com/pan.atopos@outlook.com","PostUrl":"http://blog.leanote.com/post/pan.atopos@outlook.com"};
//
//var notebooks = [{"NotebookId":"56a82c7bab64417776002a5d","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"life","UrlTitle":"","NumberNotes":1,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]},{"NotebookId":"56a82c7bab64417776002a5e","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"study","UrlTitle":"","NumberNotes":0,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]},{"NotebookId":"56a82c7bab64417776002a5f","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"work","UrlTitle":"","NumberNotes":4,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]}];
//
//var shareNotebooks = {"52d26b4e99c37b609a000001":[{"ParentNotebookId":"","Title":"Leanote suggestion","UrlTitle":"","NumberNotes":149,"IsTrash":false,"IsBlog":false,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62bd","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":1,"Subs":null,"Seq":0,"NotebookId":"52d270c7bcbf214cfa000000","IsDefault":false},{"ParentNotebookId":"","Title":"Latest","UrlTitle":"","NumberNotes":25,"IsTrash":false,"IsBlog":true,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62c1","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":0,"Subs":null,"Seq":0,"NotebookId":"52d270d3bcbf214cfa000002","IsDefault":false},{"ParentNotebookId":"","Title":"Leantote manual","UrlTitle":"","NumberNotes":29,"IsTrash":false,"IsBlog":true,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62bf","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":0,"Subs":null,"Seq":0,"NotebookId":"52db8460e01c530ef8000000","IsDefault":false}]};
//
//var sharedUserInfos = [{"UserId":"52d26b4e99c37b609a000001","Email":"leanote@leanote.com","Verified":true,"Username":"leanote","UsernameRaw":"leanote","CreatedTime":"2014-01-14T21:20:39.225+08:00","Logo":"public/upload/520/52d26b4e99c37b609a000001/images/logo/3fa3ca0e0a431b81ede3351cd091f17d.jpg","Theme":"default","NotebookWidth":201,"NoteListWidth":241,"MdEditorWidth":477,"LeftIsMin":false,"ThirdUserId":"","ThirdUsername":"","ThirdType":0,"FromUserId":"","NoteCnt":276,"Usn":203042,"FullSyncBefore":"0001-01-01T00:00:00Z"}];
//
//var curNoteId = '56a831ae03f3314265000003';
//var curNotebookId = '56a82c7bab64417776002a5f';
//var curSharedNoteNotebookId = '';
//var curSharedUserId = '';
//
//var notes = [{"NoteId":"56a831ae03f3314265000003","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5f","Title":"","Desc":"dededede  dedede  edededed","ImgSrc":"","Tags":[""],"IsTrash":false,"IsBlog":false,"UrlTitle":"2d7a82199fb9","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":0,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2016-01-27T10:55:38.656+08:00","UpdatedTime":"2016-01-27T17:40:20.762+08:00","RecommendTime":"0001-01-01T00:00:00Z","PublicTime":"2016-01-27T10:55:38.656+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":10,"IsDeleted":false, "Content":"9"},
//
//{"NoteId":"56a831aa03f3314265000002","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5f","Title":" bh","Desc":"","ImgSrc":"","Tags":[""],"IsTrash":false,"IsBlog":false,"UrlTitle":"bh","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":0,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2016-01-27T10:55:33.138+08:00","UpdatedTime":"2016-01-27T10:55:33.138+08:00","RecommendTime":"0001-01-01T00:00:00Z","PublicTime":"2016-01-27T10:55:33.138+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":8,"IsDeleted":false, "Content":"8"},
// 
// {"NoteId":"56a831a803f3314265000001","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5f","Title":"h'","Desc":"","ImgSrc":"","Tags":[""],"IsTrash":false,"IsBlog":false,"UrlTitle":"h","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":0,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2016-01-27T10:55:29.671+08:00","UpdatedTime":"2016-01-27T10:55:29.671+08:00","RecommendTime":"0001-01-01T00:00:00Z","PublicTime":"2016-01-27T10:55:29.671+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":7,"IsDeleted":false, "Content":"7"},
// 
// {"NoteId":"56a831a703f3314265000000","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5f","Title":"","Desc":"","ImgSrc":"","Tags":[""],"IsTrash":false,"IsBlog":false,"UrlTitle":"da56ba1df066","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":0,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2016-01-27T10:55:27.73+08:00","UpdatedTime":"2016-01-27T10:55:27.73+08:00","RecommendTime":"0001-01-01T00:00:00Z","PublicTime":"2016-01-27T10:55:27.73+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":6,"IsDeleted":false, "Content":"6"}];
//
//var latestNotes = [{"NoteId":"56a831ae03f3314265000003","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5f","Title":"","Desc":"dededede  dedede  edededed","ImgSrc":"","Tags":[""],"IsTrash":false,"IsBlog":false,"UrlTitle":"2d7a82199fb9","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":0,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2016-01-27T10:55:38.656+08:00","UpdatedTime":"2016-01-27T17:40:20.762+08:00","RecommendTime":"0001-01-01T00:00:00Z","PublicTime":"2016-01-27T10:55:38.656+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":10,"IsDeleted":false, "Content":"5"},
//
//{"NoteId":"56a831aa03f3314265000002","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5f","Title":" bh","Desc":"","ImgSrc":"","Tags":[""],"IsTrash":false,"IsBlog":false,"UrlTitle":"bh","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":0,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2016-01-27T10:55:33.138+08:00","UpdatedTime":"2016-01-27T10:55:33.138+08:00","RecommendTime":"0001-01-01T00:00:00Z","PublicTime":"2016-01-27T10:55:33.138+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":8,"IsDeleted":false, "Content":"4"},
//
//{"NoteId":"56a831a803f3314265000001","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5f","Title":"h'","Desc":"","ImgSrc":"","Tags":[""],"IsTrash":false,"IsBlog":false,"UrlTitle":"h","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":0,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2016-01-27T10:55:29.671+08:00","UpdatedTime":"2016-01-27T10:55:29.671+08:00","RecommendTime":"0001-01-01T00:00:00Z","PublicTime":"2016-01-27T10:55:29.671+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":7,"IsDeleted":false, "Content":"3"},
//
//{"NoteId":"56a831a703f3314265000000","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5f","Title":"","Desc":"","ImgSrc":"","Tags":[""],"IsTrash":false,"IsBlog":false,"UrlTitle":"da56ba1df066","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":0,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2016-01-27T10:55:27.73+08:00","UpdatedTime":"2016-01-27T10:55:27.73+08:00","RecommendTime":"0001-01-01T00:00:00Z","PublicTime":"2016-01-27T10:55:27.73+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":6,"IsDeleted":false, "Content":"2"},
//
//
////不在notes里！
//{"NoteId":"56a82c7bab64417776002a60","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5d","Title":"Welcome to Leanote! 欢迎来到Leanote","Desc":"LEANOTE, NOT JUST A NOTEPAD!  Welcome to Leanote!  Features: Geek paradise: Wanna Markdown? We support it! Private notebook: Organize your knowledge \u0026 Snap every moment Awesome blog: Create unique themes \u0026 Share your ideas Collaboration: Learn together with your friends ...Related links: Help us imp","ImgSrc":"","Tags":["welcome","leanote"],"IsTrash":false,"IsBlog":false,"UrlTitle":"Welcome-to-Leanote-%E6%AC%A2%E8%BF%8E%E6%9D%A5%E5%88%B0Leanote","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":106,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2014-01-12T18:39:42+08:00","UpdatedTime":"2016-01-27T10:33:31.4+08:00","RecommendTime":"2014-03-11T15:52:08.521+08:00","PublicTime":"2015-06-18T03:00:01+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":5,"IsDeleted":false, "Content":"1"}];
//
//var noteContentJson = {"NoteId":"56a831ae03f3314265000003","UserId":"56a82c7bab64417776002a5c","IsBlog":false,"Content":"\u003cp\u003edededede\u003c/p\u003e\u003cp\u003e\u003cbr data-mce-bogus=\"1\"\u003e\u003c/p\u003e\u003cp\u003ededede\u003c/p\u003e\u003cp\u003e\u003cbr data-mce-bogus=\"1\"\u003e\u003c/p\u003e\u003cp\u003eedededed\u003c/p\u003e\u003cp\u003e\u003cbr data-mce-bogus=\"1\"\u003e\u003c/p\u003e","Abstract":"\u003cp\u003edededede\u003c/p\u003e\u003cp\u003e\u003cbr data-mce-bogus=\"1\"\u003e\u003c/p\u003e\u003cp\u003ededede\u003c/p\u003e\u003cp\u003e\u003cbr data-mce-bogus=\"1\"\u003e\u003c/p\u003e\u003cp\u003eedededed\u003c/p\u003e\u003cp\u003e\u003cbr data-mce-bogus=\"1\"\u003e\u003c/p\u003e","CreatedTime":"2016-01-27T10:55:38.66+08:00","UpdatedTime":"2016-01-27T17:40:20+08:00","UpdatedUserId":"56a82c7bab64417776002a5c"};
//
//var tagsJson = [];

//var GlobalConfigs = {"uploadAttachSize":0,"uploadAvatarSize":0,"uploadBlogLogoSize":0,"uploadImageSize":0};
//
//var tinyMCEPreInit = {base: 'https:\/\/dn-leanote.qbox.me/tinymce_4.1.9/js/tinymce', suffix: '.min'};


//////save using localforage
//localforage.setItem("UserInfo", UserInfo, function(err, value) {
//    console.log("UserInfo saved");
//});
//
//localforage.setItem("notebooks", notebooks, function(err, value) {
//    console.log("notebooks saved");
//});
//
//localforage.setItem("shareNotebooks", shareNotebooks, function(err, value) {
//    console.log("shareNotebooks saved");
//});
//
//localforage.setItem("sharedUserInfos", sharedUserInfos, function(err, value) {
//    console.log("sharedUserInfos saved");
//});
//
//localforage.setItem("curNoteId", curNoteId, function(err, value) {
//    console.log("curNoteId saved");
//});
//
//localforage.setItem("curNotebookId", curNotebookId, function(err, value) {
//    console.log("curNotebookId saved");
//});
//
//localforage.setItem("curSharedNoteNotebookId", curSharedNoteNotebookId, function(err, value) {
//    console.log("curSharedNoteNotebookId saved");
//});
//
//localforage.setItem("curSharedUserId", curSharedUserId, function(err, value) {
//    console.log("curSharedUserId saved");
//});
//
//localforage.setItem("notes", notes, function(err, value) {
//    console.log("notes saved");
//});
//
//localforage.setItem("latestNotes", latestNotes, function(err, value) {
//    console.log("latestNotes saved");
//});
//
//localforage.setItem("noteContentJson", noteContentJson, function(err, value) {
//    console.log("noteContentJson saved");
//});
//
//localforage.setItem("tagsJson", tagsJson, function(err, value) {
//    console.log("tagsJson saved");
//});

////load 
//var UserInfo;
//localforage.getItem('UserInfo', function(err, value) {
//    // Run this code once the value has been
//    // loaded from the offline store.
//    UserInfo = value;
//    console.log("UserInfo loaded");
//    console.log("TEst");
//    console.log("UserInfo.NotebookWidth = " + UserInfo.NotebookWidth);
//});
//
//var notebooks;
//localforage.getItem('notebooks', function(err, value) {
//    // Run this code once the value has been
//    // loaded from the offline store.
//    notebooks = value;
//    console.log("notebooks loaded");
//});
//
//var shareNotebooks;
//localforage.getItem('shareNotebooks', function(err, value) {
//    // Run this code once the value has been
//    // loaded from the offline store.
//    shareNotebooks = value;
//    console.log("shareNotebooks loaded");
//});
//
//var sharedUserInfos;
//localforage.getItem('sharedUserInfos', function(err, value) {
//    // Run this code once the value has been
//    // loaded from the offline store.
//    sharedUserInfos = value;
//    console.log("sharedUserInfos loaded");
//});
//
//var curNoteId;
//localforage.getItem('curNoteId', function(err, value) {
//    // Run this code once the value has been
//    // loaded from the offline store.
//    curNoteId = value;
//    console.log("curNoteId loaded");
//});
//
//var curNotebookId;
//localforage.getItem('curNotebookId', function(err, value) {
//    // Run this code once the value has been
//    // loaded from the offline store.
//    curNotebookId = value;
//    console.log("curNotebookId loaded");
//});
//
//var curSharedNoteNotebookId;
//localforage.getItem('curSharedNoteNotebookId', function(err, value) {
//    // Run this code once the value has been
//    // loaded from the offline store.
//    curSharedNoteNotebookId = value;
//    console.log("curSharedNoteNotebookId loaded");
//});
//
//var curSharedUserId;
//localforage.getItem('curSharedUserId', function(err, value) {
//    // Run this code once the value has been
//    // loaded from the offline store.
//    curSharedUserId = value;
//    console.log("curSharedUserId loaded");
//});
//
//var notes;
//localforage.getItem('notes', function(err, value) {
//    // Run this code once the value has been
//    // loaded from the offline store.
//    notes = value;
//    console.log("notes loaded");
//});
//
//var latestNotes;
//localforage.getItem('latestNotes', function(err, value) {
//    // Run this code once the value has been
//    // loaded from the offline store.
//    latestNotes = value;
//    console.log("latestNotes loaded");
//});
//
//var noteContentJson;
//localforage.getItem('noteContentJson', function(err, value) {
//    // Run this code once the value has been
//    // loaded from the offline store.
//    noteContentJson = value;
//    console.log("noteContentJson loaded" + noteContentJson);
//});
//
//var tagsJson;
//localforage.getItem('tagsJson', function(err, value) {
//    // Run this code once the value has been
//    // loaded from the offline store.
//    tagsJson = value;
//    console.log("tagsJson loaded");
//});
//
//function sleep(miliseconds) {
//   var currentTime = new Date().getTime();
//
//   while (currentTime + miliseconds >= new Date().getTime()) {
//   }
//}
//
//sleep(2000);