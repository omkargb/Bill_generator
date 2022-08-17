var selectedRow = null;

function onFormAddSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);
    console.log('onFormAddSubmit done.');
    resetForm();
    $("#editform input").attr("disabled", true);
}

function onFormEdit() {
    var eformData = readEditFormData();
    updateRecord(eformData);
    console.log('onFormEdit done.');
    resetEditForm();
}

function readFormData() {
    var formData = {};
    formData["ptype"] = document.getElementById("ptype").value;
    formData["pname"] = document.getElementById("pname").value;
    formData["pprice"] = document.getElementById("pprice").value;
    formData["pqty"] = document.getElementById("pqty").value;
    formData["punit"] = document.getElementById("punit").value;
    console.log('readFormData done.');
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("billdata").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);   cell1.innerHTML = data.ptype;
    cell2 = newRow.insertCell(1);   cell2.innerHTML = data.pname;
    cell3 = newRow.insertCell(2);   cell3.innerHTML = data.pprice;
    cell4 = newRow.insertCell(3);   cell4.innerHTML = data.pqty;    cell4.className='text-right';
    cell5 = newRow.insertCell(4);   cell5.innerHTML = data.punit;   cell5.className='text-left';
    cell6 = newRow.insertCell(5);   cell6.innerHTML = data.pprice*data.pqty;    cell6.className='amount text-right';
    cell7 = newRow.insertCell(6); cell7.className='text-center';
    cell7.innerHTML = `<button class="btn btn-sm btn-primary" onClick="onEdit(this)">Edit</button> &nbsp;&nbsp;&nbsp;
                       <button class="btn btn-sm btn-danger" onClick="onDelete(this); sumamount();">Remove</button>`;
    alert("Data Inserted.");
}

function resetForm() {
    document.getElementById("ptype").value = "";
    document.getElementById("pname").value = "";
    document.getElementById("pprice").value = "";
    document.getElementById("pqty").value = "";
    document.getElementById("punit").value = "";
    selectedRow = null;
    console.log('resetForm done.');
}

function resetEditForm() {
    document.getElementById("ptype1").value = "";
    document.getElementById("pname1").value = "";
    document.getElementById("pprice1").value = "";
    document.getElementById("pqty1").value = "";
    document.getElementById("punit1").value = "";
    selectedRow = null;
    console.log('resetEditForm done.');
	document.getElementById("editform").style.borderColor = "#D3D3D3";
	$("#editform input").attr("disabled", true);
	alert("Data Updated.");
	$('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
}

function onEdit(td) {
    console.log('editing');
    selectedRow = td.parentElement.parentElement;
	$('html, body').animate({scrollTop:0}, 'slow');
    document.getElementById("ptype1").value = selectedRow.cells[0].innerHTML;
    document.getElementById("pname1").value = selectedRow.cells[1].innerHTML;
    document.getElementById("pprice1").value = selectedRow.cells[2].innerHTML;
    document.getElementById("pqty1").value = selectedRow.cells[3].innerHTML;
    document.getElementById("punit1").value = selectedRow.cells[4].innerHTML;
	document.getElementById("editform").style.borderColor = "#00aa00";
	$("#editform input").attr("disabled", false);
    console.log('Values fetched for editing');
}

function readEditFormData() {
    var formData = {};
    formData["ptype1"] = document.getElementById("ptype1").value;
    formData["pname1"] = document.getElementById("pname1").value;
    formData["pprice1"] = document.getElementById("pprice1").value;
    formData["pqty1"] = document.getElementById("pqty1").value;
    formData["punit1"] = document.getElementById("punit1").value;
    console.log('readEditFormData done.');
    return formData;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ptype1;
    selectedRow.cells[1].innerHTML = formData.pname1;
    selectedRow.cells[2].innerHTML = formData.pprice1;
    selectedRow.cells[3].innerHTML = formData.pqty1;
    selectedRow.cells[4].innerHTML = formData.punit1;
    selectedRow.cells[5].innerHTML = formData.pprice1*formData.pqty1;
    console.log('updateRecord done.');
	    return formData;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("billdata").deleteRow(row.rowIndex);
        resetEditForm();
    }
}

