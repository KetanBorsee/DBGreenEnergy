



//hero////////

document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#ffffff"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            }
        },
        "retina_detect": true
    });
});








//toggle icon navbar///////////////////

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = ()=>{
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("open");
}

window.onscroll = ()=>{
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("open");
}




//our product//////////////////////

// Function to open the modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex'; // Open the modal
  document.body.classList.add('modal-open'); // Disable background scrolling
}

// Function to close the modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none'; // Close the modal
  document.body.classList.remove('modal-open'); // Re-enable background scrolling
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
  const cornModal = document.getElementById('corn-modal');
  const cottonModal = document.getElementById('cotton-modal');

  if (event.target === cornModal || event.target === cottonModal) {
    cornModal.style.display = 'none';
    cottonModal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
};



//our process//////////////////












//FAQ'S////////////////////////
function toggleAnswer(element) {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    if (item !== element.parentElement) {
      item.classList.remove('active');
    }
  });
  
  element.parentElement.classList.toggle('active');
}


//footer section//////////////////////////


document.querySelector('.scroll-to-top').addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});


///bottom////////////////////
function checkInput(input) {
  if (input.value) {
    input.classList.add('filled');
  } else {
    input.classList.remove('filled');
  }
}

function addPrefix(input) {
  if (input.value === "") {
    input.value = "+91 ";
  }
}
