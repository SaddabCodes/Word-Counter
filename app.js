// Select the textbox element from the HTML document
let textbox = document.querySelector("#textbox");

// Add an event listener to the textbox for the 'input' event
textbox.addEventListener("input", function () {
  // Get the value of the textbox
  let text = this.value;

  // Count the number of characters in the text and display it
  let chr = text.length;
  document.getElementById("char").innerHTML = chr;

  // Trim the text to remove any leading or trailing spaces
  text = text.trim();

  // Split the text into an array of words using space as the delimiter
  let words = text.split(" ");

  // Filter out any empty strings (resulting from consecutive spaces) from the array
  let cleanList = words.filter((el)=>{
    return el != "";
  })

  // Count the number of words in the cleaned array and display it
  document.getElementById("word").innerText = cleanList.length;
});
