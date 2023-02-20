const data2 = [
    {
        preTitle: 'GET READY',
        title: 'Save time at iPhone pre-order',
        description: 'Get ready for iPhone 13 and iPhone 13 Pro pre-order now. Then speed through checkout on 9.17.',
        img: '1.jpg',
    },
    {
        preTitle: 'PRE-ORDER 9.17',
        title: 'iPhone 13 Pro. Oh. So. Pro.',
        description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
        img: '2.jpg',
    },
    {
        preTitle: 'IPAD MINI',
        title: 'Mega power. Mini sized. ',
        description: 'From $499 or $41.58/mo. for 12 mo.',
        img: '3.jpg',
    }
]



let con = document.querySelector('.con')
// let main = document.querySelector('main')

for(let i of data2) {

    let block = document.querySelector('.block')
let h3 = document.createElement('h3')
let h1 = document.createElement('h1')
let p = document.createElement('p')
let img = document.createElement('img')
img.src = `./img/${i.img}`
h3.innerHTML = i.preTitle
h1.innerHTML = i.title
p.innerHTML = i.description

h3.classList.add('h3')
h1.classList.add('h1')
p.classList.add('p')
con.classList.add('.con')
block.classList.add('.block')
block.append(h3 , h1 ,p , img)
con.append(block)

}