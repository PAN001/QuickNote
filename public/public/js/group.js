var zNodes = [];

function showGroupDialogRemote(t, e) {
    zNodes = []; // initialize
    for(var i in group) {
        var curGroup = group[i];
        var curGroupZNode = {};
        curGroupZNode.id = curGroup.GroupId;
        curGroupZNode.pId = 0;
        curGroupZNode.name = curGroup.GroupName;
        curGroupZNode.isParent = true;
//        curGroupZNode.tId = "";
        var curMembers = curGroup.Members;
        zNodes.push(curGroupZNode);
        
        for(var j in curMembers) {
            var curMember = curMembers[j];
            var curMemberZNode = {};
            curMemberZNode.id = curMember.Email;
            curMemberZNode.pId = curGroup.GroupId;
            curMemberZNode.name = curMember.Email;
//            curMemberZNode.tId = "";
            zNodes.push(curMemberZNode);
        }
    }
    
//    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
//    // setCheck();			
//    // $("#r1").bind("change", setCheck);
//    // $("#r2").bind("change", setCheck);
//    // $("#disablechk").bind("change", setCheck);
//    $("#addParentBtn").bind("click", {isParent:true}, add);
    var zTree = $.fn.zTree.getZTreeObj("groupZTree");
    if(zTree) {
        console.log("destory");
        zTree.destroy();
        $("#groupZTree").empty(); 
    }
    $.fn.zTree.init($("#groupZTree"), setting, zNodes);

    e = e || {},
    t += "?";
    for (var n in e) t += n + "=" + e[n] + "&";
    $("#groupDialogRemote").modal({
        remote: t
    })
}

<!--
var setting = {
    view: {
        addHoverDom: addHoverDom,
        removeHoverDom: removeHoverDom,
        selectedMulti: false
    },
    // check: {
    //     enable: true
    //     ,chkStyle: 'radio'
    //     ,radioType: "level"
    // },
    data: {
        simpleData: {
            enable: true
        }
    },
    edit: {
        enable: true
    },
    callback: {
        beforeDrag: beforeDrag,
        beforeRemove: beforeRemove,
        beforeRename: beforeRename
//        onRemove: onRemove
    }
};

//var zNodes =[
//    { id:1, pId:0, name:"pNode 1", open:true},
//    { id:11, pId:1, name:"pNode 11"},
//    { id:12, pId:1, name:"pNode 12"},
//    { id:13, pId:1, name:"pNode 13"},
//    { id:2, pId:0, name:"pNode 2"},
//    { id:21, pId:2, name:"pNode 21"},
//    { id:22, pId:2, name:"pNode 22"},
//    { id:23, pId:2, name:"pNode 23"},
//    { id:3, pId:0, name:"pNode 3", isParent:true}
//];
// function setCheck() {
// 	setting.check.chkStyle = $("#r1").attr("checked")? "checkbox":"radio";
//                       setting.check.enable = (!$("#disablechk").attr("checked"));
// 	$.fn.zTree.init($("#treeDemo"), setting, zNodes);
// }

// regsiter events
$(document).ready(function(){
//    $.fn.zTree.init($("#groupZTree"), setting, zNodes);
    // setCheck();			
    // $("#r1").bind("change", setCheck);
    // $("#r2").bind("change", setCheck);
    // $("#disablechk").bind("change", setCheck);
    $("#addParentBtn").bind("click", {isParent:true}, add);
    $('#groupDialogRemote').on('hidden.bs.modal', function () {
        console.log("groupDialogRemote is dismissed");
        updateGroupInfo();
    })
});

// disable dragging
function beforeDrag(treeId, treeNodes) {
    return false;
}

// warning before deleting
function beforeRemove(treeId, treeNode) {
    return confirm("Are sure to remove '" + treeNode.name + "'?");
}

function beforeRename(treeId, treeNode, newName) {
    if (newName.length == 0) {
        alert("This entry can not be empty.");
        var zTree = $.fn.zTree.getZTreeObj("groupZTree");
        setTimeout(function(){zTree.editName(treeNode)}, 10);
        return false;
    }
    return true;
}

function updateGroupInfo() {
    group = [];
    var zTree = $.fn.zTree.getZTreeObj("groupZTree");
    var allZNodes = zTree.getNodes();
    for(var i in allZNodes) {
        var curGroupZNode = allZNodes[i];
        var newGroup = {
            GroupId: curGroupZNode.id,
            GroupName: curGroupZNode.name,
            Members: []
        };
        var curMemberZNodes = curGroupZNode.children;
        for(var j in curMemberZNodes) {
            var curMemberZNode = curMemberZNodes[j];
            var curMember = {
                Email: curMemberZNode.name
            }
            newGroup.Members.push(curMember);
        }
        group.push(newGroup);
    }
}

var newCount = 1;

// add one new group
function add(e) {
    
    var newGroup = {
        GroupId: getObjectId(),
        GroupName: "New Group " + (newCount++),
    };
    var zTree = $.fn.zTree.getZTreeObj("groupZTree"),
    isParent = e.data.isParent,
    nodes = zTree.getSelectedNodes(),
    treeNode = nodes[0];
    if (treeNode) {
        treeNode = zTree.addNodes(null, {id: newGroup.GroupId, name: newGroup.GroupName});
    } else {
        treeNode = zTree.addNodes(null, {id: newGroup.GroupId, name: newGroup.GroupName});
    }
    if (treeNode) {
        zTree.editName(treeNode[0]);
    } else {
        alert("Leaf node is locked and can not add child node.");
    }
};

function addHoverDom(treeId, treeNode) {
    if(treeNode.level >= 1) return false;
    var sObj = $("#" + treeNode.tId + "_span");
    if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
    var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
        + "' title='add node' onfocus='this.blur();'></span>";
    sObj.after(addStr);
    var btn = $("#addBtn_"+treeNode.tId);
    if (btn) btn.bind("click", function(){
        var zTree = $.fn.zTree.getZTreeObj("groupZTree");
        zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
        return false;
    });
};
function removeHoverDom(treeId, treeNode) {
    $("#addBtn_"+treeNode.tId).unbind().remove();
};
//-->