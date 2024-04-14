var addedRowCount = 0; //Keeps track of how many rows the user has created

function addRow() {
  var table = document.getElementById("myTable"); //The entire container fluid table is id="myTable"
  var newRow = document.createElement("div"); //This creates a new div element
  newRow.className = "row added-row";
  // This is the new code that will be made inside
  newRow.innerHTML = ` 
    <div class="col-md-8">
      <div class="row">
        <div class="col-md-4 border"><input type="text" placeholder="New Term"></div>
        <div class="col-md-4 border"><input type="text" placeholder="New Definition"></div>
        <div class="col-md-4 border"><input type="text" placeholder="New Example"></div>
      </div>
    </div>
  `;
  table.appendChild(newRow); //.appendChild() adds a new node (newRow) to the end of the parent
  addedRowCount++; //adds to the row count (the amount of rows that the user has created)
}

function deleteRow() {
  var table = document.getElementById("myTable"); //will grab the entire container fluid, which would also contain the newly added rows
  var rows = table.getElementsByClassName("row"); //This will get ALL rows, new or already existing
  if (rows.length > 3) {
    // Check if there are more than 3 rows (excluding initial rows, since I want those to always be there)
    if (addedRowCount > 0) {
      // Check if there are any added rows
      table.removeChild(table.lastElementChild); // Remove the last child of the table
      addedRowCount--;
    } else {
      alert("Cannot delete the last row!");
    }
  } else {
    alert("Cannot delete the last row!");
  }
}
