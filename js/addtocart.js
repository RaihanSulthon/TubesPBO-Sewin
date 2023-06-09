const product = [
    {
        id: 0,
        image:'image/kurti1.png',
        title:'Dress 1',
        price: 1799,
    },

    {
        id: 1,
        image: 'image/kurti2.png',
        title: 'Dress 2',
        price: 1649,
    },

    {
        id: 2,
        image: 'image/kurti3.png',
        title: 'Dress 3',
        price: 659,
    },

    {
        id: 3,
        image: 'image/kurti4.png',
        title: 'Dress 4',
        price: 1990,
    },

    {
        id: 4,
        image: 'image/western1.png',
        title: 'Dress 5',
        price: 549,
    },

    {
        id: 5,
        image: 'image/western2.png',
        title: 'Dress 6',
        price: 554,
    },

    {
        id: 6,
        image: 'image/western3.png',
        title: 'Dress 7',
        price: 549,
    },

    {
        id: 7,
        image: 'image/western4.png',
        title: 'Dress 8',
        price: 549,
    },

    {
        id: 8,
        image: 'image/western4.png',
        title: 'Dress 8',
        price: 549,
    },

    {
        id: 9,
        image: 'image/jeans1.png',
        title: 'jeans 1',
        price: 874,
    },
    {
        id: 10,
        image: 'image/jeans2.png',
        title: 'jeans 2',
        price: 1199,
    },
    {
        id: 11,
        image: 'image/jeans3.png',
        title: 'jeans 3',
        price: 9599,
    },
    {
        id: 12,
        image: 'image/jeans4.png',
        title: 'jeans 4',
        price: 999,
    },
    {
        id: 13,
        image: 'image/joggers1.png',
        title: 'joggers 1',
        price: 934,
    },
    {
        id: 14,
        image: 'image/joggers2.png',
        title: 'joggers 2',
        price: 854,
    },
    {
        id: 15,
        image: 'image/joggers3.png',
        title: 'joggers 3',
        price: 949,
    },
    {
        id: 16,
        image: 'image/joggers4.png',
        title: 'joggers 4',
        price: 465,
    },
    {
        id: 17,
        image: 'image/shirt1.png',
        title: 'shirt 1',
        price: 449,
    },
    {
        id: 18,
        image: 'image/shirt2.png',
        title: 'shirt 2',
        price: 486,
    },
    {
        id: 19,
        image: 'image/shirt3.png',
        title: 'shirt 3',
        price: 404,
    },
    {
        id: 20,
        image: 'image/shirt4.png',
        title: 'shirt 4',
        price: 519,
    },
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rs "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rs "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

function clearCart() {
    cart = [];
    displaycart();
  }
  