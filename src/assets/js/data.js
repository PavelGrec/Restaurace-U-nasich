//import.pic
export function RollImg(){
    return ['https://c.pxhere.com/photos/cd/bc/coffee_shop_cafe_working_coffee_restaurant-172948.jpg!d','https://c.pxhere.com/photos/16/d5/hotel_berlin_kurf_rstendamm_city_capital_modern-691383.jpg!d']
}

export function MenuData(){
    return {
        Predkrmy:[
{g:'150 g', name:'Hovězí tatarák, 8 ½ topinek',price: '189'}
        ],
Polevky:[
    {g:'0,33 l', name:'Dle denní nabídky',price: '33'},
    {g:'0,33 l', name:'Vývar s masem a nudlemi',price: '35'}
],
Steaky:[
    {g:'200 g', name:'Steak s hovězí roštěné',price: '245'},
    {g:'200 g', name:'Vepřová panenka',price: '145'},
    {g:'200 g', name:'Kuřecí steak',price: '145'},
],
Burgery:[
    {g:'200 g ', name:'Jako-jinde, hranolky',price: '145', des:'hovězí maso, ementál, okurka, rajče, restovaná cibulka, ledový salát, hořčico-kaparový dip'},
    {g:'200 g ', name:'Red burder, hranolky',price: '165', des:'hovězí maso, gorgonzola, červená cibulka, nakládaná okurka, ledový salát, gorgonzola dip'},
    {g:'200 g ', name:'Jako-jinde, hranolky',price: '145', des:'hovězí maso, ementál, okurka, rajče, restovaná cibulka, ledový salát, hořčico-kaparový dip'},
]}}

export function MidMenuData(){
    return [
        {id:1, name:'Pondělí',obedy:[
        {id:1, type:'polevka',name:'Hrachová'},
        {id:2, g:'150 g', type:'second',name:'Holandský řízek se sýrem, bramborová kaše, okurek',price:125},
        {id:3, g:'100 g', type:'second',name:'Vepřová kotletka na restovaných fazolkách, bram. čtvrtky',price:135},
    ]},
    {id:2, name:'Úterý',obedy:[
        {id:1, type:'polevka',name:'Minestrone'},
        {id:2, g:'150 g', type:'second',name:'Vepřový Ondráš, zelný salát',price:125},
        {id:3, g:'100 g', type:'second',name:'Hovězí Stroganoff, hranolky',price:135},
    ]},
    {id:3, name:'Středa',obedy:[
        {id:1, type:'polevka',name:'Vývar s nudlemi'},
        {id:2, g:'100 g', type:'second',name:'Smažený vepřový řízek, bramborový salát',price:125},
        {id:3, g:'100 g', type:'second',name:'Vepřová kotletka v anglicko-sýrové zástěrce, hranolky',price:130},
    ]},
    {id:2, name:'Čtvrtek',obedy:[
        {id:1, type:'polevka',name:'Bramboračka'},
        {id:2, g:'100 g', type:'second',name:'Kuřecí prsíčko zapečené šunkou a sýrem, rýže',price:125},
        {id:3, g:'3 ks', type:'second',name:'Kynuté knedlíky plněné povidly sypané mákem',price:135},
    ]},
    {id:2, name:'Úterý',obedy:[
        {id:1, type:'polevka',name:'Francouzská'},
        {id:2, g:'200 g', type:'second',name:'Halušky s brynzou a slaninou',price:125},
        {id:3, g:'100 g', type:'second',name:'Kuřecí prsíčko zapečené rokfórem, hranolky',price:130},
    ]},
]
}

export function Napoj(){
    return [
    {id:1, name:'Nealkoholické nápoje',drinks:[
        {id:2, g:'0.3 l', type:'nealko',name:'Točená limonáda',price:25},
        {id:3, g:'0.5 l ', type:'nealko',name:'Točená limonáda',price:35},
        {id:4, g:'0.3 l ', type:'nealko',name:'Fanta',price:35},
        {id:5, g:'0.3 l ', type:'nealko',name:'Cola-cola',price:35},
        {id:6, g:'0.3 l ', type:'nealko',name:'Sprite',price:35},
        {id:7, g:'0.3 l ', type:'nealko',name:'Tprite',price:35},
        {id:8, g:'0.3 l ', type:'nealko',name:'Juice - různé příchutě',price:35},
        {id:9, g:'0.3 l ', type:'nealko',name:'Natura perlivá/Neperlivá',price:35}
    ]},
    {id:10, name:'Pivo',drinks:[
        {id:11, g:'0,3 l ', type:'alko',name:'Polička',price:28},
        {id:21, g:'0,5 l ', type:'alko',name:'Polička',price:35},
        {id:41, g:'0,3 l ', type:'alko',name:'Radegast',price:28},
        {id:81, g:'0,5 l ', type:'alko',name:'Radegast',price:35}

    ]},
    {id:32, name:'Víno',drinks:[
        {id:92, g:'2 dl ', type:'vino',name:'Víno rozlévané',price:35}
    ]},
    {id:43, name:'Teplé nápoje',drinks:[
        {id:13, g:'2 dl ', type:'hot',name:'Espresso',price:35},
        {id:23, g:'3 dl ', type:'hot',name:'Lungo',price:35},
        {id:33, g:'2 dl ', type:'hot',name:'Capucino',price:45},
        {id:43, g:'2 dl ', type:'hot',name:'čaj',price:35},
    ]}
]
}

export function dezerty(){
    return [
    {id:1, name:'Nealkoholické nápoje',drinks:[
        {id:2, g:'0.3 l', type:'nealko',name:'Točená limonáda',price:25},
        {id:3, g:'0.5 l ', type:'nealko',name:'Točená limonáda',price:35},
        {id:4, g:'0.3 l ', type:'nealko',name:'Fanta',price:35},
        {id:5, g:'0.3 l ', type:'nealko',name:'Cola-cola',price:35},
        {id:6, g:'0.3 l ', type:'nealko',name:'Sprite',price:35},
        {id:7, g:'0.3 l ', type:'nealko',name:'Tprite',price:35},
        {id:8, g:'0.3 l ', type:'nealko',name:'Juice - různé příchutě',price:35},
        {id:9, g:'0.3 l ', type:'nealko',name:'Natura perlivá/Neperlivá',price:35}
    ]},
    {id:10, name:'Pivo',drinks:[
        {id:11, g:'0,3 l ', type:'alko',name:'Polička',price:28},
        {id:21, g:'0,5 l ', type:'alko',name:'Polička',price:35},
        {id:41, g:'0,3 l ', type:'alko',name:'Radegast',price:28},
        {id:81, g:'0,5 l ', type:'alko',name:'Radegast',price:35}

    ]},
    {id:32, name:'Víno',drinks:[
        {id:92, g:'2 dl ', type:'vino',name:'Víno rozlévané',price:35}
    ]},
    {id:43, name:'Teplé nápoje',drinks:[
        {id:13, g:'2 dl ', type:'hot',name:'Espresso',price:35},
        {id:23, g:'3 dl ', type:'hot',name:'Lungo',price:35},
        {id:33, g:'2 dl ', type:'hot',name:'Capucino',price:45},
        {id:43, g:'2 dl ', type:'hot',name:'čaj',price:35},
    ]}
]
}


export function Dezerty(){
    return [
        {id:1, g:'30g  ', type:'dezerty',name:'Kokosová roláda',price:25},
        {id:2, g:'30g  ', type:'dezerty',name:'Karamelová roláda',price:25},
        {id:3, g:'30g  ', type:'dezerty',name:'Jahodový řez',price:25},
        {id:4, g:'30g  ', type:'dezerty',name:'Čokoládový řez',price:25},
        {id:5, g:'30g  ', type:'dezerty',name:'Ovocný košíček',price:25},
        {id:6, g:'30g  ', type:'dezerty',name:'Listový řez',price:25},
        {id:7, g:'30g  ', type:'dezerty',name:'Likérový rohlíček',price:25},
        {id:8, g:'30g  ', type:'dezerty',name:'Kornoutek',price:25},
        {id:9, g:'30g  ', type:'dezerty',name:'Muzikál ',price:25},
    ]}