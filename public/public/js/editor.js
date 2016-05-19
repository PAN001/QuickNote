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
        plugins: [
            'advlist autolink lists link image charmap print preview',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table contextmenu imagetools textcolor'
    //                                      去除掉“paste”，DD时正常（不会多余复制）
      ],
        toolbar: 'insertfile undo redo | styleselect | fontsizeselect | fontselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image ',
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
        media_filter_html: false,
        
        // change event handler
        setup : function(ed) {
            ed.on('change', function(e) {
                console.log('the content '+ed.getContent());
                TrackLogRecord.newWritingRecord(ed.getContent());
            });
        },
        
        imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io', 'www.baidu.com', 'www.ss.bdimg.com', 'ss.bdimg.com'], // enable to edit the image
        imagetools_proxy: 'proxy.php' // enable to show the image editor
//        content_css: [
////            'http://fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
//            '/public/css/tinymce/codepen.min.css'
//          ]
    });
}

initEditor();