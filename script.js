const message = `mengaplikasikan virus ke server di mulai.\nmemproses 2%.\n\nmemproses 40%“:).”\n\nmemproses 70%\n\nmemrposes 90%."\n\nberhasil unhacking 082275947102. selamat menikmati harimu iwan rejeki;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
