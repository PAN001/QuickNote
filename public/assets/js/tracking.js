// Define tracklogbook and related class

// 一个session对应一个TrakLogbook
// 多个session的TrakLogbook存在trackingLog中
var TrackLogbook = {
    UserId: UserInfo.UserId,
    LogInDateAndTime: (new Date).toLocaleString(),
    LogOutDateAndTime: "",
    TrackLogRecords: []
}

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

    checkIfDone: function() {
        if(this.curActivity.ActivityName == "") return;
        if(this.curActivity.EndTime == "") {
            this.curActivity.EndTime = (new Date).toLocaleTimeString();
        }
        this.cache.push(this.curActivity);
//        alert(this.curActivity.ActivityName);
        this.clearCurActivity();
//        alert(this.cache.pop().curActivity);
    },
    
    clearCurActivity: function() {
        this.curActivity = {
            ActivityName: "",
            StartTime: "",
            EndTime: "",
            Description: ""
        }
    },
    
    newStartRecordingRecord: function() {
//        this.checkIfDone();
//        this.curActivity.ActivityName = "Start audio recording";
        this.curRecordingActivity.StartTime = (new Date).toLocaleTimeString();
//        this.curActivity.EndTime = "NA";
        this.curActivity.Description = "NA";
//        this.checkIfDone();
//        if(this.)
    },
    
    newStopRecordingRecord: function() {
        this.checkIfDone();
        this.curActivity.ActivityName = "Stop audio recording";
        this.curActivity.StartTime = (new Date).toLocaleTimeString();
        this.curActivity.EndTime = "NA";
        this.curActivity.Description = "NA";
        this.checkIfDone();
    },
    
    newWritingRecord: function(desc) {
//        this.checkIfDone();
        var writingActivity = {
            ActivityName: "Writing notes",
            StartTime : (new Date).toLocaleTimeString(),
            EndTime : "NA",
            Description: desc
        }
        this.cache.push(writingActivity);
//        this.checkIfDone();
    },
    
    newOpenFileRecord: function() {
        this.checkIfDone();
        this.curActivity.ActivityName = "Opening file";
        this.curActivity.StartTime = (new Date).toLocaleTimeString();
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
        this.curActivity.StartTime = (new Date).toLocaleTimeString();
        this.curActivity.EndTime = "";
        this.curActivity.Description = "file: " + document.getElementById('imgInp').value;
    },
    
    newSuftInternetRecord: function() {
        
    },
    
    cache: []
}

var LogRecord = {
//    "UserId": UserInfo.UserId,
    Time: getCurDate()
}