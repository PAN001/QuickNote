
			var audio = document.querySelector('audio');

			var inter;
			var recorder;
			var realaudio;
			var c=0;
            var boolrecorder = true;
            var reg = /^\d$/;
			var help = 0;
			var counter = 0;

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

			
			

			function startRecording() {
				if(boolrecorder){
                    if (navigator.getUserMedia) {
	                    // TrackLogRecord.newStartRecordingRecord(); 
	                    $("#stopbtn").addClass("lightup");
	                    $("#playbtn").removeClass("lightup");
	                    $("#playbtn").addClass("gray");

	                    $("#downbtn").addClass("gray");
	            		$("#trashbtn").addClass("gray");
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
							document.getElementById("count").innerHTML = h + m + s;
							document.getElementById("count").style.visibility="visible";
						},1000);
					} else {
						console.log('navigator.getUserMedia not present');
					}
                }
                boolrecorder = false;
                //counter = 0;
                help = 0;
                counter=1;
			}

			function stopRecording(email) {
                boolrecorder = true;
                // TrackLogRecord.newStopRecordingRecord();

                $("#stopbtn").removeClass("lightup");
	            $("#playbtn").removeClass("gray");
	            $("#playbtn").addClass("lightup");

	            if(help == 0 && counter != 0){
	            	$("#downbtn").removeClass("gray");
	            	$("#trashbtn").removeClass("gray");
		            $("#downbtn").addClass("lightup");
		            $("#trashbtn").addClass("lightup");
	        	}
				inter = window.clearInterval(inter);
				c=0;
				document.getElementById("test").style.visibility="visible";
				recorder.stop();
				recorder.exportWAV(function(s) {
					audio.src = window.URL.createObjectURL(s);
					//Recorder.forceDownload(s);
					realaudio = s;

					document.getElementById("audioRecordingMsg").style.display="";
			    	var data = new FormData();
				    data.append("file", s);
				    data.append("originalname", "audio.wav");
				    data.append("email", email);
				    $.ajax({
					    url: baseUrl+basePort+'/uploadAudio',
					    type: 'POST',
					    data: data,
					    async: true,
					    cache: false,
					    contentType: false,
					    processData: false,
					    success: function(data){
					      if(data.code == 200) {
					        console.log("upload audio success: "+data.path);
					        $('#editor').append("<iframe src = "+baseUrl+basePort+data.path+" width=400 height=75></iframe> ");
					        document.getElementById("audioRecordingMsg").style.display="none";
					      } else {
					        console.log("upload audio fail");
					      }
					    },
					    error: function(){
					      console.log("upload audio error");
					    }
			  		});
					
				});
				help = 0;
				
				//upload
				
		    	
			}

			function clearRecord() {
				help = 1;
				$("#downbtn").removeClass("lightup");
	            $("#trashbtn").removeClass("lightup");
	            $("#downbtn").addClass("gray");
	            $("#trashbtn").addClass("gray");
				recorder.clear();
				document.getElementById("test").style.visibility="hidden";
				document.getElementById("count").style.visibility="hidden";
				
			}

			function download() {
				help = 1;
				$("#downbtn").removeClass("lightup");
	            $("#trashbtn").removeClass("lightup");
	           	$("#downbtn").addClass("gray");
	            $("#trashbtn").addClass("gray");
				Recorder.forceDownload(realaudio);
				
			}
