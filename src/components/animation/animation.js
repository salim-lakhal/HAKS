import '../page1.css';
import '../page2.css';
import '../page3.css';
import '../page4.css';
import '../page5.css';
import '../page6.css';
import './animation.css';



var $slider = document.getElementById('slider');
var $toggle = document.getElementById('toggle');

$toggle.addEventListener('click', function() {
    var isOpen = $slider.classList.contains('slide-in');

    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
}); 