let colorSelected;
var babehs = document.getElementById("grid");

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    console.log(rows.length);

    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }
    else {
        let cols = document.getElementsByTagName("td");
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function () {
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }
}
//Adds a column
function addC() {
    //alert("Clicked Add Col")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    let cols = document.getElementsByTagName("td");
    let col = document.createElement("td");
    let row = document.createElement("tr");

    console.log("cols " + cols.length);
    //we only add columns if rows is >= 1
    //if (rows.length > 0)
    //iterate through rows and insert a table
//      function appendColumn() {
        var tbl = document.getElementsByTagName("grid");
        //console.log(tbl.rows() + "is row ")

        for (let i = 0; i < rows.length; i++) {
          grid[i].appendChild(col);
        }
        //for (const p of grid) {
          //appendChild(col);
        //}
//      }
      //if (rows.length > 0){appendColumn();}
//    appendColumn();
}

//Removes a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
