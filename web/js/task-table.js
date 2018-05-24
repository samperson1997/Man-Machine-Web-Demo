function executeTask() {
    var taskGroup = getTableContent("task-table")
    console.log(taskGroup)

    $.ajax({
        method: "POST",
        url: "/api/start",
        contentType: "application/json;charset=utf8",
        data: JSON.stringify({
            taskGroup: taskGroup
        }),
        dataType: "json",
        success: function (data) {
            // alert("[用于测试] 内容为" + JSON.stringify(taskGroup) + "的任务组已开始执行, 结果为" + data.message)
            window.open("./result.html");
        }
    });
}

/**
 * 遍历表格内容返回数组
 *
 * @param tableId
 * @returns {Array}
 */
function getTableContent(tableId) {
    var mytable = document.getElementById(tableId);
    var data = [];
    var rows = mytable.rows.length;
    for (var i = 1; i < rows; i++) {
        for (var j = 0, cells = mytable.rows[i].cells.length; j < cells; j++) {
            if (!data[i - 1]) {
                data[i - 1] = [];
            }
            data[i - 1][j] = mytable.rows[i].cells[j].innerHTML;
        }
    }
    return data;
}