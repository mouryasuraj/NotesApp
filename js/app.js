console.log("Welcome");
displayNotes();
// If user add note, add it to the local storage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function() {

    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = '';
    addTitle.value = '';
    // console.log(notesObj);
    displayNotes();

});


// Show Notes function
function displayNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function(element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text"> ${element.text}</p>
                    <button  id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add Note" section above to add a note.`;
    }
}


// Function to delete node

function deleteNote(index) {
    // console.log("I'm deleting ", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    displayNotes();

}


// Search input


let search = document.getElementById("searchTxt");
search.addEventListener("input", function() {

    let inputVal = search.value;
    // console.log("input fired", inputVal);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerHTML;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        console.log(noteCards);
        // console.log(cardTxt);
    });
});



// function error(){
//     let alert = document.getElementById("addBtn");
//     if(alert.value ==''){

//     }
// }