# QuickNote

[![Join the chat at https://gitter.im/QuickNote_gitter/Lobby](https://badges.gitter.im/QuickNote_gitter/Lobby.svg)](https://gitter.im/QuickNote_gitter/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![](/public/assets/images/logo/Quicknote.png)

> Your Intelligent Note-taking Helper

QuickNote is a cross-platform scientific note-taking application, which supports a number of distinct features, including integration of multimedia, dragging and dropping, cloud storgae, and embeded web searching. It is currently being deployed at University of Notitngham, either for pratical and research usage.

## Usage

[Web App](https://quicknote.org/login)

[Desktop App](https://quicknote.org)

## Highlighted Features
- Tagging
- Cloud Storage
![](/public/homepage_assets/images/cloud.gif)
- Dragging & Dropping
![](/public/homepage_assets/images/dragdrop.gif)
- Sharing
- Integration of multimedia
![](/public/homepage_assets/images/multimedia.gif)

# Development
## Structure
```
.
├── public
│   ├── html files
│   ├── assests
│   │   ├───── css
│   │   │   └── css files
│   │   ├───── js
│   │   │   └── js files
│   │   └───── images
│   │       └── images
│   ├── homepage_assets
│   │   ├───── css
│   │   │   └── css files
│   │   ├───── js
│   │   │   └── js files
│   │   └───── images
│   │       └── images
│   └── package.json
├── app.js
└── node_modules
```

### /public:
1. logIn.html is the log in/register interface of Quick Note. 
2. qnote.html is the main interface of Quick Note.
4. All related js and css files are put in the assets directory.

### /public/assets/:
1. css directory includes all css style sheets for the application.
3. images directory includes all related images used in the application.
4. js directory includes all js files.

## Technical Details
### Session authentication

Express.js + Passport.js

### Security

HTTPS + bcrypt.js

### Storage System

- Files in notes: PanFS (custom Facebook Haystack based distributed file storage system)
- Cloud storage: disk based file system

## ToDo List
- [ ] The useless(redundant) code needs to be cleaned.
- [x] The media insertion mechanism needs to be improved:
Media files should not be saved as blob within the note; instead, they should be uploaded to the server and saved as a url to this file on the server. 
- [x] Security isses need to be addressed:
Anything should be encoded when transmitting through https protocol.
- [ ] Synchronization mechanism needs to be improved:
Each time, only the changed note/notebook should be synchronized rather than "alldata".
- [ ] For the Windows version: 
  * The recorded audio cannot be downloaded.
- [ ] For both Mac and Windows versions:
  * The file management part cannot fit the screen perfectly.
  * There is an unknown scroll bar outside the note.
  * Online video cannot be inserted, showing as image.
- [ ] It should allow the user to choose the camera, rather than only use the default one.
- [ ] Note context menu needs to be improved: export to pdf, information.
- [x] Save uploaded files to haystack storage system rather than hard encoding them as blob.
- [x] When inserting an image into editor, UI needs to be improved - progress bar perhaps.
- [ ] Server error code needs to be regulated.
- [x] Session authentication mechanism. 
- [x] Hash passwords before storing to db.
- [ ] HTTPS over koa server.
- [ ] Figure out why localstorage would be problematic if requesting webpage from server rather than load local one.
- [ ] Session/Cookies seems not working for desktop version because they can not be set for local html files.
- [ ] Set up a notification area in the top middle of the interface：
- Bootstrap Notify seems difficult to customize
- [x] Re-login when authentication failed
- [ ] Add gulp.js
- [x] Refactor front-end structure
- [ ] Refactor back-end structure
  
## Bugs
1. When copying the shared note to user's own notebook.
2. In notebook hierarchy, the number of notes in the child-notebook is incorrect after first refreshing.
3. tinymce.js cannot be compressed - media insertion fails.
4. The paragraph mechanism is useless - it is always inserted into the end of the note and it cannot be exchanged with other elements in the note.

# Contributing

1. Fork it (<https://github.com/PAN001/QuickNote/fork>)
2. Create your feature branch (git checkout -b feature/fooBar)
3. Commit your changes (git commit -am 'Add some fooBar')
4. Push to the branch (git push origin feature/fooBar)
5. Create a new Pull Request
