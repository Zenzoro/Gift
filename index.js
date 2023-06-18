
    const submitButton = document.getElementById("submit");
    const popup = document.getElementById("popup");
    const popup2 = document.getElementById("popup2");
    const popup3 = document.getElementById("popup3");
    const popup4 = document.getElementById("popup4");
    const popup5 = document.getElementById("popup5");
    const popup6 = document.getElementById("popup6");
    const popup7 = document.getElementById("popup7");
    const popup8 = document.getElementById("popup8");
    const popup9 = document.getElementById("popup9");
    const popup10 = document.getElementById("popup10");
    const popup11 = document.getElementById("popup11");
    const codeInput = document.getElementById("codes");
    const correctCode1 = "4563789";
    const correctCode2 = "5467868";
    const correctCode3 = "6536353";
    const correctCode4 = "5653273";
    const correctCode5 = "8765342";
    const correctCode6 = "0653432";
    const correctCode7 = "6542398";
    const correctCode8 = "1578423";
    const correctCode9 = "7632091";
    const correctCode10 = "542896";
    const correctCode11 = "987522"

    const submitBtn = document.getElementById("submit");

    submitBtn.addEventListener("click", () => {
      const enteredCode = codeInput.value;
      if (enteredCode === correctCode1) {
        popup.classList.add("show");
      } else if (enteredCode === correctCode2) {
        popup2.classList.add("show");
      } else if (enteredCode === correctCode3) {
        popup3.classList.add("show");
      } else if(enteredCode === correctCode4){
        popup4.classList.add("show");
      } else if (enteredCode === correctCode5){
        popup5.classList.add("show");
      } else if (enteredCode === correctCode6){
        popup6.classList.add("show");
      } else if (enteredCode === correctCode7){
        popup7.classList.add("show");
      } else if (enteredCode === correctCode8){
        popup8.classList.add("show");
      } else if (enteredCode === correctCode9){
        popup9.classList.add("show");
      } else if (enteredCode === correctCode10){
        popup10.classList.add("show");
      } else if (enteredCode === correctCode11){
        popup11.classList.add("show");
      }
    });

    const closeBtn = document.querySelector(".close-btn");

    closeBtn.addEventListener("click", () => {
      popup.classList.remove("show");
    });
    
   const closeBtn2 = document.querySelector(".close-btn2");

    closeBtn2.addEventListener("click", () => {
      popup2.classList.remove("show");
      
    });
    
    const closeBtn3 = document.querySelector(".close-btn3");

    closeBtn3.addEventListener("click", () => {
      popup3.classList.remove("show");
      
    });
    
    const closeBtn4 = document.querySelector(".close-btn4");

    closeBtn4.addEventListener("click", () => {
      popup4.classList.remove("show");
      
    });
    
    const closeBtn5 = document.querySelector(".close-btn5");

    closeBtn5.addEventListener("click", () => {
      popup5.classList.remove("show");
      
    });
    
   const closeBtn6 = document.querySelector(".close-btn6");

    closeBtn6.addEventListener("click", () => {
      popup6.classList.remove("show");
      
    });
    
     const closeBtn7 = document.querySelector(".close-btn7");

    closeBtn7.addEventListener("click", () => {
      popup7.classList.remove("show");
      
    });
    
    const closeBtn8 = document.querySelector(".close-btn8");

    closeBtn8.addEventListener("click", () => {
      popup8.classList.remove("show");
      
    });
    
    const closeBtn9 = document.querySelector(".close-btn9");

    closeBtn9.addEventListener("click", () => {
      popup9.classList.remove("show");
      
    });
    
   const closeBtn10 = document.querySelector(".close-btn10");

    closeBtn10.addEventListener("click", () => {
      popup10.classList.remove("show");
      
    });
    
    const closeBtn11 = document.querySelector(".close-btn11");

    closeBtn11.addEventListener("click", () => {
      popup11.classList.remove("show");
      
    });