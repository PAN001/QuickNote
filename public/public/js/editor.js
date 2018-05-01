function changeSrc(href) {
                document.getElementById("webpage").src = href;
            }; 

function initEditor() {
//    tinymce.init({
//      selector: '#editor h1',
//      inline: true,
//      toolbar: 'undo redo',
//      menubar: false
//    });

    tinymce.init({
        selector: '#editor',
        inline: true,
        width: 1500,
        //theme: 'modern',
        //valid_elements: 'a[href|target=_blank]',
        skin: 'lightgray',
//        menubar: "tools",
        plugins: [
            'advlist autolink lists link image charmap print preview', //fullpage not working
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table contextmenu imagetools textcolor colorpicker template tabfocus nonbreaking pagebreak paste textpattern wordcount autolink autoresize codesample emoticons hr'
    //                                      去除掉“paste”，DD时正常（不会多余复制）
//            responsivefilemanager 去掉
        ],
        // mode: "exact",
        autoresize: true,
        // media_strict: false, 
        convert_urls: false, 
        // valid_elements : "*[*]\\",
        extended_valid_elements: "iframe[src|width|height|name|align|frameborder],object[classid|codebase|width|height|align],param[name|value],embed[quality|type|pluginspage|width|height|src|align|allowFullScreen|flashvars|wmode]",

        // 上传图片后调用
        images_upload_handler: function (blobInfo, success, failure) {
            var formData;
            formData = new FormData();
            formData.append('file', blobInfo.blob(), blobInfo.filename());
            $.ajax({
                url: haystackFrontWebUrl + "uploadFile",
                type: 'POST',
                data: formData,
                contentType: "multipart/form-data",
                async: false,
                success: function (data) {
                    fileId = data;
                    success(haystackFrontWebUrl + 'getFile?id=' + fileId) // 替换插入img src值
                },
                cache: false,
                contentType: false,
                processData: false
            });
        },

        // file picker
        automatic_uploads: true,
        file_picker_callback: function(callback, value, meta) {
          if (1) {
            $('#upload').trigger('click');
            $('#upload').on('change', function() {
              var file = this.files[0];
              var reader = new FileReader();
              reader.onload = function(e) {
                callback(e.target.result, {
                  alt: ''
                });
//                top.tinymce.activeEditor.windowManager.close();
//                $("#editor").append("<iframe src=" + '"' + e.target.result + '"' + ">" + "</iframe>");
              };
              reader.readAsDataURL(file);
            });
          }
        },
        file_picker_types: 'file image media',
        
        tabfocus_elements: ":prev,:next",
    
        object_resizing: true,
        
        // link setting
        link_assume_external_targets: true,
//        link_class_list: [
//            {title: 'None', value: ''},
//            {title: 'Dog', value: 'dog'},
//            {title: 'Cat', value: 'cat'}
//        ],
        link_list: [
            {title: 'UNNC', value: 'http://www.nottingham.edu.cn'}
        ],
        target_list: false,
        
        // spellchecker
        browser_spellcheck : true,
        
        // media
        media_live_embeds: true,
        media_filter_html: false,
        media_alt_source: false,
        media_poster: false,
        audio_template_callback: function(data) {
            return '<audio controls>' + '\n<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' + '</audio>';
        },
        
        
//        // mentions
//        mentions_fetch: function (query, success) {
//            // Fake a server call by using a setTimeout
//            setTimeout(function() {
//              console.log('Search query:', query.term);
//
//              success([
//                {id: 'johndoe', name: 'johndoe', fullName: 'John Doe'},
//                {id: 'janedoe', name: 'janedoe', fullName: 'Jane Doe'}
//              ]);
//            }, 0);
//        },

        // nonbreaking
        nonbreaking_force_tab: true, // allow using tab to make space
        
        // pagebreak
        pagebreak_separator: "<!-- my page break -->",
        pagebreak_split_block: true,

        // paste
        paste_data_images: true,

        // textpattern: support markdown
        textpattern_patterns: [
            {start: '*', end: '*', format: 'italic'},
            {start: '**', end: '**', format: 'bold'},
            {start: '#', format: 'h1'},
            {start: '##', format: 'h2'},
            {start: '###', format: 'h3'},
            {start: '####', format: 'h4'},
            {start: '#####', format: 'h5'},
            {start: '######', format: 'h6'},
            {start: '1. ', cmd: 'InsertOrderedList'},
            {start: '* ', cmd: 'InsertUnorderedList'},
            {start: '- ', cmd: 'InsertUnorderedList'}
        ],
        
        // wordcount
        wordcount_cleanregex: /[0-9.(),;:!?%#$?\x27\x22_+=\\/\-]*/g, // ignore punctuation
        
        // contextmenu
        contextmenu: "link image inserttable | cell row column deletetable",
        
        // image
        image_list: function(success) {
            success([
                {title: 'Dog', value: 'mydog.jpg'},
                {title: 'Cat', value: 'mycat.gif'}
            ]);
        },
        image_advtab: true,
        style_formats: [
            {title: 'Image Left', selector: 'img', styles: {
            'float' : 'left',
            'margin': '0 10px 0 10px'
            }},
            
            {title: 'Image Right', selector: 'img', styles: {
            'float' : 'right',
            'margin': '0 10px 0 10px'
            }}
        ],
        paste_data_images: true,
        imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io', 'www.baidu.com', 'www.ss.bdimg.com', 'ss.bdimg.com'], // enable to edit the image
        imagetools_proxy: 'proxy.php', // enable to show the image editor
        
        // font and color
        fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
        font_formats: 'Arial=arial;Helverica=helvetica;Sans-serif=sans-serif;Courier New=courier new;Courier=courier;Monospace=monospace;AkrutiKndPadmini=Akpdmi-n',
        textcolor_map: [
            
            "000000", "Black",
            "993300", "Burnt orange",
            "333300", "Dark olive",
            "003300", "Dark green",
            "003366", "Dark azure",
            "000080", "Navy Blue",
            "333399", "Indigo",
            "333333", "Very dark gray",
            "800000", "Maroon",
            "FF6600", "Orange",
            "808000", "Olive",
            "008000", "Green",
            "008080", "Teal",
            "0000FF", "Blue",
            "666699", "Grayish blue",
            "808080", "Gray",
            "FF0000", "Red",
            "FF9900", "Amber",
            "99CC00", "Yellow green",
            "339966", "Sea green",
            "33CCCC", "Turquoise",
            "3366FF", "Royal blue",
            "800080", "Purple",
            "999999", "Medium gray",
            "FF00FF", "Magenta",
            "FFCC00", "Gold",
            "FFFF00", "Yellow",
            "00FF00", "Lime",
            "00FFFF", "Aqua",
            "00CCFF", "Sky blue",
            "993366", "Red violet",
            "FFFFFF", "White",
            "FF99CC", "Pink",
            "FFCC99", "Peach",
            "FFFF99", "Light yellow",
            "CCFFCC", "Pale green",
            "CCFFFF", "Pale cyan",
            "99CCFF", "Light sky blue",
            "CC99FF", "Plum"
          ],
        
        // template
        template_cdate_classes: "cdate creationdate",
        template_mdate_classes: "mdate modifieddate",
        template_selected_content_classes: "selcontent",
        template_cdate_format: "%m/%d/%Y : %H:%M:%S",
        template_mdate_format: "%m/%d/%Y : %H:%M:%S",
        template_replace_values: {
//            username : "Jack Black",
//            staffid : "991234"
        },
        template_popup_height: "300",
        template_popup_width: "320",
        templates : [
            {
            title: "Editor Details",
            url: "template.htm",
            description: "Adds Editor Name and Staff ID"
            },
            {
            title: "Timestamp",
            url: "template.htm",
            description: "Adds an editing timestamp."
            }
        ],
        
         setup: function(editor) {
//            editor.addButton('mybutton', {
//                text:"IMAGE",
//                icon: false,
//                onclick: function(e) {
//                    console.log($(e.target));
//                    if($(e.target).prop("tagName") == 'BUTTON'){
//                        console.log($(e.target).parent().parent().find('input').attr('id'));
//                        if($(e.target).parent().parent().find('input').attr('id') != 'tinymce-uploader') {
//                            $(e.target).parent().parent().append('<input id="tinymce-uploader" type="file" name="pic" accept="image/*" style="display:none">');
//                        }
//                        $('#tinymce-uploader').trigger('click');
//                        $('#tinymce-uploader').change(function(){
//                            var input, file, fr, img;
//
//                            if (typeof window.FileReader !== 'function') {
//                                write("The file API isn't supported on this browser yet.");
//                                return;
//                            }
//
//                            input = document.getElementById('tinymce-uploader');
//                            if (!input) {
//                                write("Um, couldn't find the imgfile element.");
//                            } else if (!input.files) {
//                                write("This browser doesn't seem to support the `files` property of file inputs.");
//                            } else if (!input.files[0]) {
//                                write("Please select a file before clicking 'Load'");
//                            } else {
//                                file = input.files[0];
//                                fr = new FileReader();
//                                fr.onload = createImage;
//                                fr.readAsDataURL(file);
//                            }
//
//                            function createImage() {
//                                img = new Image();
//                                img.src = fr.result;
//                                editor.insertContent('<img src="'+img.src+'"/>');
//                            }
//                        });
//
//                    }
//
//                    if($(e.target).prop("tagName") == 'DIV'){
//                        if($(e.target).parent().find('input').attr('id') != 'tinymce-uploader') {
//                            console.log($(e.target).parent().find('input').attr('id'));                                
//                            $(e.target).parent().append('<input id="tinymce-uploader" type="file" name="pic" accept="image/*" style="display:none">');
//                        }
//                        $('#tinymce-uploader').trigger('click');
//                        $('#tinymce-uploader').change(function(){
//                            var input, file, fr, img;
//
//                            if (typeof window.FileReader !== 'function') {
//                                write("The file API isn't supported on this browser yet.");
//                                return;
//                            }
//
//                            input = document.getElementById('tinymce-uploader');
//                            if (!input) {
//                                write("Um, couldn't find the imgfile element.");
//                            } else if (!input.files) {
//                                write("This browser doesn't seem to support the `files` property of file inputs.");
//                            } else if (!input.files[0]) {
//                                write("Please select a file before clicking 'Load'");
//                            } else {
//                                file = input.files[0];
//                                fr = new FileReader();
//                                fr.onload = createImage;
//                                fr.readAsDataURL(file);
//                            }
//
//                            function createImage() {
//                                img = new Image();
//                                img.src = fr.result;
//                                 editor.insertContent('<img src="'+img.src+'"/>');
//                            }
//                        });
//                    }
//
//                    if($(e.target).prop("tagName") == 'I'){
//                        console.log($(e.target).parent().parent().parent().find('input').attr('id')); if($(e.target).parent().parent().parent().find('input').attr('id') != 'tinymce-uploader') {               $(e.target).parent().parent().parent().append('<input id="tinymce-uploader" type="file" name="pic" accept="image/*" style="display:none">');
//                                                                                               }
//                        $('#tinymce-uploader').trigger('click');
//                        $('#tinymce-uploader').change(function(){
//                            var input, file, fr, img;
//
//                            if (typeof window.FileReader !== 'function') {
//                                write("The file API isn't supported on this browser yet.");
//                                return;
//                            }
//
//                            input = document.getElementById('tinymce-uploader');
//                            if (!input) {
//                                write("Um, couldn't find the imgfile element.");
//                            } else if (!input.files) {
//                                write("This browser doesn't seem to support the `files` property of file inputs.");
//                            } else if (!input.files[0]) {
//                                write("Please select a file before clicking 'Load'");
//                            } else {
//                                file = input.files[0];
//                                fr = new FileReader();
//                                fr.onload = createImage;
//                                fr.readAsDataURL(file);
//                            }
//
//                            function createImage() {
//                                img = new Image();
//                                img.src = fr.result;
//                                 editor.insertContent('<img src="'+img.src+'"/>');
//                            }
//                        });
//                    }
//
//                }
//            });
        },

        // specify the layout of the toolbar
        toolbar1: 'insertfile undo redo | forecolor backcolor | bold italic | styleselect | fontsizeselect | fontselect',
        toolbar2: ' bullist numlist outdent indent  | alignleft aligncenter alignright alignjustify  | link image | template nonbreaking pagebreak paste codesample emoticons fullscreen'
    
        
//        // change event handler
//        setup : function(ed) {
//            ed.on('change', function(e) {
//                console.log('the content '+ed.getContent());
//                TrackLogRecord.newWritingRecord(ed.getContent());
//            });
//        },
//        
        
//        content_css: [
////            'http://fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
//            '/public/css/tinymce/codepen.min.css'
//          ]
    });
};

function myImagePicker(callback, value, meta) {
//    tinymce.activeEditor.windowManager.open({
//        title: 'Image Browser',
//        url: '/?type=' + meta.filetype,
//        width: 800,
//        height: 550,
//    }, {
//        oninsert: function (url) {
//            callback(url);
//        }
//    });
    
    tinymce.activeEditor.windowManager.open({
        title: 'Image Picker',
        width: 650,
        height: 550,
        buttons: [
            {
                text: 'Insert',
                onclick: function () {
                    //.. do some work
                    tinymce.activeEditor.windowManager.close();
                }
            }, 
            {
                text: 'Close',
                onclick: 'close'
            }
        ],
    }, {
        oninsert: function (url, objVals) {
            console.log(url);
            callback(url, objVals);
        }
    });
};

//$(function(){
//    $('.img').on('click', function(event){
//        mySubmit('/upload/' + $(this).data('filename'));
//    });
//});
//
//function mySubmit(url) {
//    top.tinymce.activeEditor.windowManager.getParams().oninsert(url);
//    top.tinymce.activeEditor.windowManager.close();
//}

//function mySubmit (url, objVals) {
//    top.tinymce.activeEditor.windowManager.getParams().oninsert(url, objVals);
//    top.tinymce.activeEditor.windowManager.close();
//    return false;
//}

//function RoxyFileBrowser(field_name, url, type, win) {
//  var roxyFileman = '/fileman/index.html';
//  if (roxyFileman.indexOf("?") < 0) {     
//    roxyFileman += "?type=" + type;   
//  }
//  else {
//    roxyFileman += "&type=" + type;
//  }
//  roxyFileman += '&input=' + field_name + '&value=' + win.document.getElementById(field_name).value;
//  if(tinyMCE.activeEditor.settings.language){
//    roxyFileman += '&langCode=' + tinyMCE.activeEditor.settings.language;
//  }
//  tinyMCE.activeEditor.windowManager.open({
//     file: roxyFileman,
//     title: 'Roxy Fileman',
//     width: 850, 
//     height: 650,
//     resizable: "yes",
//     plugins: "media",
//     inline: "yes",
//     close_previous: "no"  
//  }, {     window: win,     input: field_name    });
//  return false; 
//}

initEditor();