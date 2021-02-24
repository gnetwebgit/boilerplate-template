

import '../sass/style.scss';


import {
    Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Tooltip
} from 'bootstrap';



const bootstrap = window.bootstrap = require('bootstrap');


var toastEl = document.getElementById('liveToast')
var toast = new bootstrap.Toast(toastEl)


var myToastEl = document.getElementById('liveToastBtn')
myToastEl.addEventListener('click', function () {
    toast.show()
});
