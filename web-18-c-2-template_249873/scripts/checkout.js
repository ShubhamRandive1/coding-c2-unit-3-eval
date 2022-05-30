document.querySelector('form').addEventListener('submit', submitdata);

function submitdata(event) {
    event.preventDefault();

    let form = document.querySelector('form')

    let Name = form.name.value;
    let Contact = form.number.value;
    let Address = form.address.value;

    if (!Name || !Contact || !Address) {
        alert('Please enter all details')
        return false;
    } else {
        start();
    }
}

function start() {
    let i = 0;
    let id = setInterval(function () {

        if (i == 0) {
            alert('Your order is Accepted');
        } else if (i == 3) {
            alert('Your order is being Prepared');
        } else if (i == 8) {
            alert('Your order is being placed')
        } else if (i == 10) {
            alert('Your order is out for Delivery')
        } else if (i == 12) {
            alert('Your order is Delivered')
        }
        i++;
    }, 1000)
}