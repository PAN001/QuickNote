// Define tracklogbook and related class

// 一个session对应一个TrakLogbook
// 多个session的TrakLogbook存在trackingLog（声明在Untitled）中
var TrackLogbook = {
    UserId: UserInfo.UserId,
    Email: UserInfo.Email,
    LogInDateAndTime: (new Date).toString(),
//    LogOutDateAndTime: "",
    TrackLogRecords: []
}

trackingLog.push(TrackLogbook);

var TrackLogRecord = {
    curRecordingActivity: {
        ActivityName: "Audio recording",
        StartTime: "",
        EndTime: "",
        Description: ""
    },
    
//    addNewRecord: function(actName, startTime, endTime) {
//        cache.push({
//            ActivityName: actName,
//            StartTime: startTime,
//            EndTime: endTime
//        })
//    },

//     checkIfDone: function() {
//         if(this.curActivity.ActivityName == "") return;
//         if(this.curActivity.EndTime == "") {
//             this.curActivity.EndTime = (new Date).toTimeString();
//         }
//         this.cache.push(this.curActivity);
// //        alert(this.curActivity.ActivityName);
//         this.clearCurActivity();
// //        alert(this.cache.pop().curActivity);
//     },
    
    // clearCurActivity: function() {
    //     this.curActivity = {
    //         ActivityName: "",
    //         StartTime: "",
    //         EndTime: "",
    //         Description: ""
    //     }
    // },
    
//     newStartRecordingRecord: function() {
// //        this.checkIfDone();
// //        this.curActivity.ActivityName = "Start audio recording";
//         this.curRecordingActivity.StartTime = (new Date).toTimeString();
// //        this.curActivity.EndTime = "NA";
//         this.curActivity.Description = "NA";
// //        this.checkIfDone();
// //        if(this.)
//     },
    
    // newStopRecordingRecord: function() {
    //     this.checkIfDone();
    //     this.curActivity.ActivityName = "Stop audio recording";
    //     this.curActivity.StartTime = (new Date).toTimeString();
    //     this.curActivity.EndTime = "NA";
    //     this.curActivity.Description = "NA";
    //     this.checkIfDone();
    // },
    
    newWritingRecord: function(desc) {
//        this.checkIfDone();
        var writingActivity = {
            ActivityName: "Writing notes",
            StartTime : (new Date).toTimeString(),
            EndTime : "NA",
            Description: desc
        }
        this.cache.push(writingActivity);
//        this.checkIfDone();
    },
    
    newOpenFileRecord: function() {
        this.checkIfDone();
        this.curActivity.ActivityName = "Opening file";
        this.curActivity.StartTime = (new Date).toTimeString();
        this.curActivity.EndTime = "NA";
        this.curActivity.Description = "Open file: " + document.getElementById('imgInp').value;
        this.checkIfDone();
    },
    
    newCheckFileRecord: function() {
        alert("activated");
        this.checkIfDone();
        if(document.getElementById('imgInp').value == "") return;
    
        alert((new Date).toLocaleTimeString());
        this.curActivity.ActivityName = "Looking at file";
        this.curActivity.StartTime = (new Date).toTimeString();
        this.curActivity.EndTime = "";
        this.curActivity.Description = "file: " + document.getElementById('imgInp').value;
    },
    
    newSuftInternetRecord: function(target) {
        var newRecord = {
            ActivityName: "Surf internet",
            StartTime: (new Date).toLocaleTimeString(),
            EndTime: "NA",
            Description: target.src
        };
        console.log(newRecord);
        TrackLogbook.TrackLogRecords.push(newRecord);
    },
    
    cache: []
}

// 只在src变的时候
$('#webpage').on("load", function() {
    var newRecord = {
        ActivityName: "Surf internet",
        StartTime: (new Date).toTimeString(),
        EndTime: "NA",
        Description: this.src
    };
    console.log(newRecord);
    TrackLogbook.TrackLogRecords.push(newRecord);
});

function convertToCsv() {
    var outputFiles = []; // 包含多次session的记录
    for (var i in trackingLog) {
        // 一次session的记录
        var curBook = trackingLog[i]; 
        var curOutput = "Activity,StartTime,EndTime,Description\n";
        var curFileName = curBook.Email + "_" + curBook.LogInDateAndTime + ".csv";
        var curBookRecords = curBook.TrackLogRecords;
        for (var j in curBookRecords) {
            // 一条记录
            var curRecord = curBookRecords[j];
            curOutput = curOutput + curRecord.ActivityName + "," + curRecord.StartTime + "," + curRecord.EndTime + "," + curRecord.Description + "\n";
        }
        outputFiles.push({FileName: curFileName, File: curOutput});
    }
    return outputFiles;
}

function downloadTrakcingLog() {
    var outputFiles = convertToCsv();
    for(var i in outputFiles) {
        var curOutput = outputFiles[i];
        var blob = new Blob([curOutput.File], {type: "text/plain;charset=utf-8"});
        saveAs(blob, curOutput.FileName);
    }		
}

