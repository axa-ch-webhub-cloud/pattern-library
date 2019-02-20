import html from "nanohtml";

export default () => {
  const call = () => {
    console.log("hi");
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  };

  const close = () => {
    var span = document.getElementsByClassName("close")[0];
    var modal = document.getElementById("myModal");
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };

  return html`
    <button id="myBtn" onclick="${call}">Open Modal</button>

    <p>hallo</p>

    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  `;
};
