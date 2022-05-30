// On clicking remove button the item should be removed from DOM as well as localstorage.

let bucketdata = JSON.parse(localStorage.getItem('coffee'));


let total_sum = bucketdata.reduce(function (sum, el) {
    return sum + Number(el.price)
}, 0);

let sumtotal = document.getElementById('total_amount');
sumtotal.innerHTML = total_sum;


bucketdata.map(function (el, i) {

    let main_div = document.createElement('div');
    main_div.setAttribute('id', 'bucket');

    let image = document.createElement('img');
    image.src = el.image;

    let title = document.createElement('p')
    title.innerHTML = el.title;

    let price = document.createElement('p')
    price.innerHTML = el.price;

    let btn = document.createElement('button');
    btn.innerHTML = 'Remove'
    btn.setAttribute('id', 'remove_coffee')
    btn.addEventListener('click', function () {
        removecoffee(el, i)
    });

    main_div.append(image, title, price, btn)
    document.getElementById('bucket').append(main_div);


})

function removecoffee(el, i) {
    console.log(el);
    bucketdata.splice(i, 1);
    console.log(bucketdata)
    localStorage.setItem('coffee', JSON.stringify(bucketdata))
    window.location.reload();
}