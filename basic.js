$('.addBtn').click(function(){

    var rowNum = $('#factory_tbody tbody tr').length;
    var lastTr = $('#factory_tbody tbody tr:last-child')
    var curData = parseInt(lastTr.attr('data'))
    if(curData >= rowNum){
        rowNum = curData + 1
    }

    var html =  "<tr id="+rowNum+" data="+rowNum+">";
    html +=     "<td>";
    html +=         "<input id='' name='' type='text' class='' />";
    html +=     "</td>";
    html +=     "<td>";
    html +=         "<input id='' name='' type='text' class='' />";
    html +=     "</td>";
    html +=     "<td>";
    html +=         "<input type='button' value='삭제' onClick='rowDelete(this);' />";
    html +=     "</td>";
    html += "</tr>";
    
    $("#factory_tbody > tbody:last").append(html);
})


function rowDelete(obj){

    var thisRow = $(obj).parent().parent();

    thisRow.remove();
}

