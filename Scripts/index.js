function deselectableRadios(rootElement) {
    if(!rootElement) rootElement = document;
    if(!window.radioChecked) window.radioChecked = null;
    window.radioClick = function(e) {
      const obj = e.target;
      if(e.keyCode) return obj.checked = e.keyCode!=32;
      obj.checked = window.radioChecked != obj;
      window.radioChecked = obj.checked ? obj : null;
    }
    rootElement.querySelectorAll("input[type='radio']").forEach( radio => {
      radio.setAttribute("onclick", "radioClick(event)");
      radio.setAttribute("onkeyup", "radioClick(event)");
    });
  }
  
  deselectableRadios();