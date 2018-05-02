# Quick Note
![](/public/homepage_images/dragdrop.gif)

## Introduction
QuickNote is a cross-platform scientific note-taking application, which supports a number of distinct features, including integration of multimedia, dragging and dropping, cloud storgae, and embeded web searching. It is currently being deployed at University of Notitngham, either for pratical and research usage.

## Highlighted Features
- Tagging
- Cloud Storage
![](/public/homepage_images/cloud.gif)
- Dragging & Dropping
![](/public/homepage_images/dragdrop.gif)
- Sharing
- Integration of multimedia
![](/public/homepage_images/multimedia.gif)

# Development
## Directory 
The server configuration codes are not here.
The client side condes are put in the public directory (/public/public) in the root directory.

### /public:
1. LogIn.html is the log in/register interface of Quick Note. 
2. QNote.html is the main interface of Quick Note.
3. Unit testing directory includes unit tests.
4. All related js and css files are put in the public directory.

### /public/public/:
1. css directory includes all css style sheets for the application.
2. data directory includes js files which handles sychronization of the application.
3. images directory includes all related images used in the application.
4. js directory includes all js files.
5. logIn directory includes all js and css files for the LogIn.html.

## ToDo List
- [ ] The useless(redundant) code needs to be cleaned.
- [x] The media insertion mechanism needs to be improved:
Media files should not be saved as blob within the note; instead, they should be uploaded to the server and saved as a url to this file on the server. 
- [ ] Security isses need to be addressed:
Anything should be encoded when transmitting through https protocol.
- [ ] Synchronization mechanism needs to be improved:
Each time, only the changed note/notebook should be synchronized rather than "alldata".
- [ ] For the Windows version: 
  * The recorded audio cannot be downloaded.
- [ ] For both Mac and Windows versions:
  * The file management part cannot fit the screen perfectly.
  * There is an unknown scroll bar outside the note.
  * Online video cannot be inserted, showing as image.
- [ ] Serverside: each cloud handler program needs to be closed whenever the user leaves/refreshes the page; in this case, the handler should be activated whenever the page is loaded, rather than during loging in. 
- [ ] It should allow the user to choose the camera, rahter than only use the default one.
- [ ] Note context menu needs to be improved: export to pdf, information.
- [x] Save uploaded files to haystack storage system rather than hard encoding them as blob.
- [x] When inserting an image into editor, UI needs to be improved - progress bar perhaps.
  
## Bugs
1. When copying the shared note to user's own notebook.
2. In notebook hierarchy, the number of notes in the child-notebook is incorrect after first refreshing.
3. tinymce.js cannot be compressed - media insertion fails.
4. The paragraph mechanism is useless - it is always inserted into the end of the note and it cannot be exchanged with other elements in the note.
