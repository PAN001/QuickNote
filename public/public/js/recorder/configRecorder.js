
			var c=0;
            var boolrecorder = true;
            var reg = /^\d$/;
			

			var onFail = function(e) {
				console.log('Rejected!', e);
			};

			var onSuccess = function(s) {
				var context = new webkitAudioContext();
				var mediaStreamSource = context.createMediaStreamSource(s);
				recorder = new Recorder(mediaStreamSource);
				recorder.record();

				// audio loopback
				// mediaStreamSource.connect(context.destination);
			}

			window.URL = window.URL || window.webkitURL;
			navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

			
			var audio = document.querySelector('audio');
			var inter;
			var recorder;
			var realaudio;

			function startRecording() {
				if(boolrecorder){
                    if (navigator.getUserMedia) {
	                    // TrackLogRecord.newStartRecordingRecord(); 
	                    
						navigator.getUserMedia({audio: true}, onSuccess, onFail);
						inter = window.setInterval(function (){
							c++;
	                        var d = new Date("1111/1/1,0:0:0");
	                        d.setSeconds(c);
	                        var h = d.getHours();
	                        h = reg.test(h) ? "0" + h + ":" : h + ":"
	                        var m = d.getMinutes();
	                        m = reg.test(m) ? "0" + m + ":" : m + ":"
	                        var s = d.getSeconds();
	                        s = reg.test(s) ? "0" + s : s;
							document.getElementById("count").innerHTML = h + m + s;;
							document.getElementById("count").style.visibility="visible";
						},1000);
					} else {
						console.log('navigator.getUserMedia not present');
					}
                }
                boolrecorder = false;
			}

			function stopRecording() {
                boolrecorder = true;
                // TrackLogRecord.newStopRecordingRecord();
                
				inter = window.clearInterval(inter);
				c=0;
				document.getElementById("test").style.visibility="visible";
				recorder.stop();
				recorder.exportWAV(function(s) {
					audio.src = window.URL.createObjectURL(s);
					//Recorder.forceDownload(s);
					realaudio = s;
					
				});

			}

			function clearRecord() {
				recorder.clear();
				document.getElementById("test").style.visibility="hidden";
				document.getElementById("count").style.visibility="hidden";
			}

			function download() {
				Recorder.forceDownload(realaudio);
			}
