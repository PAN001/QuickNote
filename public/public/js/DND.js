 function handleDragStart(e) {
    this.style.opacity = '0.4';  // this / e.target is the source node.  
    dragSrcEl = this;   
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    this.classList.remove('stop');
    this.classList.add('moving');
  }


function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }
  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.remove('remove');
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
  this.classList.add('remove');

}

function handleDrop(e) {
  // this/e.target is current target element.

  dragSrcEl.style.opacity = '1.0';
  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
      
      
  }
    this.classList.remove('over');
    this.classList.remove('moving');
    dragSrcEl.classList.remove('moving');
  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.
    dragSrcEl.style.opacity = '1.0';
    console.log(dragSrcEl);
    dragSrcEl.classList.remove('moving');

}

function addDDListeners() {
    var cols = document.querySelectorAll('#editor div');
    [].forEach.call(cols, function(col) {
      col.addEventListener('dragstart', handleDragStart, false);
      col.addEventListener('dragenter', handleDragEnter, false)
      col.addEventListener('dragover', handleDragOver, false);
      col.addEventListener('dragleave', handleDragLeave, false);
      col.addEventListener('drop', handleDrop, false);
      col.addEventListener('dragend', handleDragEnd, false);
    });  
}

addDDListeners();
