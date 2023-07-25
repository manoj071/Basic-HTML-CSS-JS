var row = null;

function sub() 
{
    var enteredData = retrieveData();
    if (row == null) {
        insert(enteredData);
    }
    else {
        update();
    }
    reset();
}

function retrieveData() 
{
    var username = document.getElementById("username").value;
    var id = document.getElementById("id").value;
    var city = document.getElementById("city").value;
    var entinf = [username, id, city];
    return entinf;
}

function insert(data) 
{
    row = table.insertRow();
    row.insertCell(0).innerHTML = data[0];
    row.insertCell(1).innerHTML = data[1];
    row.insertCell(2).innerHTML = data[2];
    row.insertCell(3).innerHTML = `<button onclick = "edit(this)" >Edit</button> <button  onclick = "remove(this)"> Delete</button>`
    reset();
}
function reset() {
    document.getElementById("username").value = "";
    document.getElementById("id").value = "";
    document.getElementById("city").value = "";
    row = null;
}

function edit(selectedData) 
{
    row = selectedData.parentElement.parentElement;
    document.getElementById("username").value = row.cells[0].innerHTML;
    document.getElementById("id").value = row.cells[1].innerHTML;
    document.getElementById("city").value = row.cells[2].innerHTML;
}

function update() {
    row.cells[0].innerHTML = document.getElementById("username").value
    row.cells[1].innerHTML = document.getElementById("id").value
    row.cells[2].innerHTML = document.getElementById("city").value
    row = null;
}

function remove(td) {
    row = td.parentElement.parentElement;
    if (confirm("Do you really want to remove the selected row?"))
    {
        document.getElementById("table").deleteRow(row.rowIndex);
    }
}
