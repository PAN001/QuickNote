# Quick Note
# Directory 
The server configuration codes are not here.
The client side condes are put in the public directory (/public/public) in the root directory.

## /public:
1. LogIn.html is the log in/register interface of Quick Note. 
2. QNote.html is the main interface of Quick Note.
3. Unit testing directory includes unit tests.
4. All related js and css files are put in the public directory.

## /public/public/:
1. css directory includes all css style sheets for the application.
2. data directory includes js files which handles sychronization of the application.
3. images directory includes all related images used in the application.
4. js directory includes all js files.
5. logIn directory includes all js and css files for the LogIn.html.

# ToDo List
1. The useless(redundant) code needs to be cleaned.
2. The media insertion mechanism needs to be improved:
  * Media files should not be saved as blob within the note; instead, they should be uploaded to the server and saved as a url to this file on the server. 
3. Security isses need to be addressed:
  * Anything should be encoded when transimitting through http protocol.
4. Synchronization mechanism needs to be improved:
  * Each time, only the changed note/notebook should be synchronized rather than "alldata".
5. For the Windows version: 
  * The recorded audio cannot be downloaded.
6. For both Mac and Windows versions:
  * The file management part cannot fit the screen perfectly.
  * There is an unknown scroll bar outside the note.
  
# Bugs
1. When copying the shared note to user's own notebook.
2. In notebook hierarchy, the number of notes in the child-notebook is incorrect after first refreshing.
3. tinymce.js cannot be compressed - media insertion fails.
4. The paragraph mechanism is useless - it is always inserted into the end of the note and it cannot be exchanged with other elements in the note.
