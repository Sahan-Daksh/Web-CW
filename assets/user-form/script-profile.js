function updateProgressBar(step) {
    // Calculate the progress as a percentage
    const progressPercentage = (step / profileSteps.length) * 100;
    
    // Update the width of 'active' progress steps
    progressSteps.forEach((elem, index) => {
        if (index < step) {
            elem.style.width = `${progressPercentage}%`; // Apply width based on current step
            elem.style.backgroundColor = "green"; // Color for completed steps
        } else {
            elem.style.backgroundColor = "lightgray"; // Reset color for incomplete steps
        }
    });
}
  let currentStep = 1;
  const progressSteps = document.querySelectorAll(".progress-step");
  const profileSteps = document.querySelectorAll(".profile-step");

  function showStep(step) {
    profileSteps.forEach((s) => (s.style.display = "none"));
    document.querySelector(
      `.profile-step[data-step="${step}"]`
    ).style.display = "block";
    updateProgressBar(step);
  }

  function nextStep(step) {
    const stepInputs = document.querySelectorAll(
      `#profileSteps .profile-step[data-step="${step}"] input`
    );
    const outputDiv = document.getElementById("profileOutput");
    const stepTitle = document.querySelector(
      `#profileSteps .profile-step[data-step="${step}"] h2`
    ).textContent;
    stepInputs.forEach((input, index) => {
      const existingP = outputDiv.querySelector(
        `p[data-input="${input.id}"]`
      );
      const previousAnswer = existingP
        ? existingP.textContent.split(": ")[1]
        : "";
      const promptText = `${stepTitle} | Question ${index + 1}/${
        stepInputs.length
      }: ${input.previousElementSibling.textContent}`;
      const answer = prompt(promptText, previousAnswer);
      
      if (existingP) {
        existingP.textContent = `${input.placeholder}: ${answer}`;
      } else {
        const newP = document.createElement("p");
        newP.dataset.input = input.id;
        newP.textContent = `${input.placeholder}: ${answer}`;
        outputDiv.appendChild(newP);
      }
      input.value = answer;
    });
    currentStep++;
    showStep(currentStep);
    
    outputDiv.innerHTML += `<hr>`;
  }

  function skipStep() {
    currentStep++;
    showStep(currentStep);
  }

  function previousStep() {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  }

  function completeProfile() {
    
    alert("Profile completed!");
  }

  document
    .getElementById("startButton")
    .addEventListener("click", function () {
      nextStep(currentStep);
    });

    function updateProgressBar(step) {
      for (let i = 0; i < step; i++) {
        progressSteps[i].style.backgroundColor = "green";
      }
      for (let i = step; i < progressSteps.length; i++) {
        progressSteps[i].style.backgroundColor = "lightgray";
      }
    }
  
  

  showStep(currentStep);

  var navLinks = document.getElementById("navLinks");

        function showMenu(){
            navLinks.style.right="0";
        }
        function hideMenu(){
            navLinks.style.right="-200px";
        }