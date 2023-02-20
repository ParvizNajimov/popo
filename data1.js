const data = [
    {
        title: 'Mac',
        img: 'mac.png'
    },
    {
        title: 'iPhone',
        img: 'iphone.png'
    },
    {
        title: 'iPad',
        img: 'ipad.png'
    },
    {
        title: 'Apple Watch',
        img: 'apple watches.png'
    },
    {
        title: 'AirPods',
        img: 'airpods.png'
    },
    {
        title: 'AirTag',
        img: 'airtag.png'
    },
    {
        title: 'Apple TV',
        img: 'apple tv.png'
    },
    {
        title: 'HomePod mini',
        img: 'homepod mini.png'
    },
    {
        title: 'Accessories',
        img: 'accessories.png'
    },
]


let main = document.querySelector('main')
for(let item of data) {
let box = document.createElement('div')
let gros = document.createElement('div')
let p = document.createElement('p')
let img = document.createElement('img')

 box.classList.add('main')
 p.classList.add('p')
 img.classList.add('img')
 gros.classList.add('.gros')

 img.src = `./img/${item.img}`

 p.innerHTML = item.title
//  img.src = `./${item.img}`
 gros.append(img ,p )
 box.append(gros)
 main.append(box)
}







    