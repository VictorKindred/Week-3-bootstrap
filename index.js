var addedRowCount = 0;
function addRow() {
  var table = document.getElementById("myTable");
  var newRow = document.createElement("div");
  newRow.className = "row added-row";
  newRow.innerHTML = ` 
    <div class="col-md-8">
      <div class="row">
        <div class="col-md-4 border"><input type="text" placeholder="New Term"></div>
        <div class="col-md-4 border"><input type="text" placeholder="New Definition"></div>
        <div class="col-md-4 border"><input type="text" placeholder="New Example"></div>
      </div>
    </div>
  `;
  table.appendChild(newRow);
  addedRowCount++;
}

function deleteRow() {
  var table = document.getElementById("myTable");
  var rows = table.getElementsByClassName("row");
  if (rows.length > 3) {
    if (addedRowCount > 0) {
      table.removeChild(table.lastElementChild);
      addedRowCount--;
    } else {
      alert("Cannot delete the last row!");
    }
  } else { 
    alert("Cannot delete the last row!");
  }
}
