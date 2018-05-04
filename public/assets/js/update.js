/*

 1. Check the manifest for version (from your running "old" app).
 2. If the version is different from the running one, download new package to a temp directory.
 3. Unpack the package in temp.
 4. Run new app from temp and kill the old one (i.e. still all from the running app).
 5. The new app (in temp) will copy itself to the original folder, overwriting the old app.
 6. The new app will run itself from original folder and exit the process.

*/

var gui = require('nw.gui');
var pkg = require('package.json');
var updater = require('node-webkit-updater');
var upd = new updater(pkg);
var copyPath, execPath;

// Args passed when new app is launched from temp dir during update
if(gui.App.argv.length) {
    // 运行的是下载下来暂存的nwjs app（B）
    // ------------- Step 5 -------------
    copyPath = gui.App.argv[0];
    execPath = gui.App.argv[1];

    // alert("copyPath is: " + copyPath);
    // alert("the copy destination is: " + upd.getAppPath());

    // Replace old app, Run updated app from original location and close temp instance 将A替换为B
    upd.install(copyPath, function(err) {
        if(!err) {
            // ------------- Step 6 -------------
            upd.run(execPath, null); // 运行旧app路径，替换为新的以后的nwjs app（C）
            setTimeout(100);
            gui.App.quit(); // 退出B
        }
        else {
          console.log("there is an error when copying");
          alert(err);
        }
    });
    // alert("our of installing");
}
else { // if no arguments were passed to the app
    // 正在运行的是旧的nwjs app（A）
    // ------------- Step 1 -------------
    upd.checkNewVersion(function(error, newVersionExists, manifest) {
        if (!error && newVersionExists) {
            console.log("find new version");
            bootbox.confirm("There is a new version available, do you want to update now?", function(result) {
              if(result) {
                window.location.href="./update.html";
              }

              // // ------------- Step 2 -------------
              // var newVersion = upd.download(function(error, filename) {
              //     if (!error) {
              //         console.log("download successfully");
              //         // ------------- Step 3 -------------
              //         upd.unpack(filename, function(error, newAppPath) {
              //             if (!error) {
              //                 console.log("unpack successfully");
              //                 // ------------- Step 4 -------------
              //                 // alert("newAppPath is: " + newAppPath);
              //                 // newAppPath = "/var/folders/qk/y0_813td04l3s63yb0qqnk180000gn/T/Q-Note_MAC_1.0.2/QuickNote.app"
              //                 newAppPathSplitted = newAppPath.split("/");
              //                 appName = newAppPathSplitted.pop();
              //                 if(appName!="QuickNote.app") {
              //                   newAppPath = "";
              //                   for(index in newAppPathSplitted) {
              //                     newAppPath = newAppPath + newAppPathSplitted[index] + "/";
              //                   }
              //                   newAppPath = newAppPath + "QuickNote.app";
              //                 }

              //                 upd.runInstaller(newAppPath, [upd.getAppPath(), upd.getAppExec()],{}); // 传递参数，启动下载下来的nwjs app（B）
              //                 gui.App.quit(); // 关掉旧的app（A）

              //                 // console.log("copyPath is: " + copyPath);
              //                 // upd.install(copyPath, newAppInstalled);

              //                 // function newAppInstalled(err) {
              //                 //   if(err){
              //                 //     console.log("install failed");
              //                 //     console.log(err);
              //                 //     gui.App.quit();
              //                 //     return;
              //                 //   }
              //                 //   console.log("install successfully");
              //                 //   upd.run(execPath, null);
              //                 //   console.log("run successfully");
              //                 //   gui.App.quit();
              //                 // };
            });
          }
          else {
            console.log("error or no new version");
          }
    });
}