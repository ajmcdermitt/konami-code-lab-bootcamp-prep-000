const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  const input = document.querySelector('input')

  document.body.addEventListener('keydown', onKeyDownHandler);
  const alphabet = [65, 66, 67];
  let index = 0;

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    for (var i = 0; i < code.length; i++){
      if (key === code[index]){
        index++;
        console.log(index);

        if (index === code.length){
          alert("Hurray!");

          index = 0;
        }
      }
      else{
        index = 0;
      }
    }



  }
}
