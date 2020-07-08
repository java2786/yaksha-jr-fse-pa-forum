window.addEventListener('load', function() {
// Get the forms we want to add validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
    }, false);
});
}, false);

document.getElementById("savePost").addEventListener("click", function(){
    fetch('http://localhost:3000/forum/posts', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            "title": document.getElementsByName("vtitle")[0].value,
            "tags": document.getElementsByName("vtags")[0].value,
            "description": document.getElementsByName("vpost")[0].value
             })
      })
  .then(response => response.json())
  .then(res =>{
      if(res.success){
        location.pathname = "/";
      }
  });
})