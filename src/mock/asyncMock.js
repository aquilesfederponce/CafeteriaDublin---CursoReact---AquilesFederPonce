import cafeArgentina from "../assets/logosCafes/Cafe Argentina.png";
import cafeColombia from "../assets/logosCafes/Cafe Colombia.png";
import cafeHonduras from "../assets/logosCafes/Cafe Honduras.png";
import cafeItalia from "../assets/logosCafes/Cafe Italia.png";
import cafeKenya from "../assets/logosCafes/Cafe Kenya.png";
import cafeMadagascar from "../assets/logosCafes/Cafe Madagascar.png";
import cafePeru from "../assets/logosCafes/Cafe Peru.png";
import cafeTurquia from "../assets/logosCafes/Cafe Turquia.png";

const productos = [
    {
        "id": "01",
        "name": "Cafe Tostado Colombia",
        "img": cafeColombia,
        "price": 4,
        "stock" : 60,
        "category" : "Cafe en grano",
        "description": "Un café de origen colombiano, reconocido por su perfil equilibrado y su aroma intenso. Una opción ideal para quienes disfrutan de un café clásico y aromático.",
        "textAlt": "Paquete de café tostado molido marca Café Dublin edición Colombia de 250 gramos. El fondo muestra los colores de la bandera colombiana (amarillo, azul y rojo) sobre una ilustración de terrazas de plantaciones de café verdes, con un caficultor tradicional junto a su mula en primer plano."
    },
    {
        "id": "02",
        "name": "Cafe Tostado Honduras",
        "img": cafeHonduras,
        "price": 2,
        "stock" : 22,
        "category" : "Cafe en grano",
        "textAlt": "Paquete de café tostado molido marca Café Dublin edición Honduras de 250 gramos. El diseño es de color verde oscuro y destaca una ilustración de dos aves exóticas (guardabarrancos) posadas sobre un antiguo relieve de piedra con iconografía de la cultura maya.",
        "description": "Café de origen hondureño con un perfil suave y agradable. Una variedad perfecta para disfrutar en cualquier momento del día."
    },
    {
        "id": "03",
        "name": "Cafe Tostado Turquia",
        "img": cafeTurquia,
        "price": 6,
        "stock" : 34,
        "category" : "Cafe en grano",
        "textAlt": "Paquete de café tostado molido marca Café Dublin edición Turquía de 250 gramos. El fondo es azul intenso y exhibe un arco decorado con intrincados mosaicos de estilo otomano. En el centro se destaca una ilustración de un juego de café tradicional turco dorado, que incluye una cafetera (cezve) y una taza (fincan).",
        "description": "Inspirado en la tradicional cultura cafetera turca, ofrece una experiencia intensa y aromática. Ideal para quienes buscan un café con carácter."
    },
    {
        "id": "04",
        "name": "Cafe Tostado Perú",
        "img": cafePeru,
        "price": 3,
        "stock" : 100,
        "category" : "Cafe en grano",
        "textAlt": "Paquete de café tostado molido marca Café Dublin edición Perú de 260 gramos. El paquete es de color marrón arcilla y muestra una ilustración de una llama con un manto andino tradicional, situada frente a montañas nevadas que representan la cordillera de los Andes.",
        "description" : "Un café peruano de perfil equilibrado y aroma envolvente. Su inspiración andina lo convierte en una variedad especial para disfrutar tranquilamente."
    },
    {
        "id": "05",
        "name": "Cafe Tostado Italia",
        "img": cafeItalia,
        "price": 5,
        "stock" : 45,
        "category" : "Cafe en grano",
        "textAlt": "Paquete de café tostado molido marca Café Dublin edición Italia de 250 gramos. El fondo replica las franjas verticales verde, blanca y roja de la bandera italiana, e incorpora una ilustración central de una clásica cafetera moka plateada junto a una rama con aceitunas verdes y negras.",
        "description": "Inspirado en la tradición cafetera italiana, es una opción de carácter intenso y aroma marcado. Perfecto para los amantes de la cultura del espresso."
    },
    {
        "id": "06",
        "name": "Cafe Tostado Argentina",
        "img": cafeArgentina,
        "price": 2,
        "stock" : 50,
        "category" : "Cafe en grano",
        "textAlt": "Paquete de café tostado molido marca Café Dublin edición Argentina de 250 gramos. El diseño presenta un fondo celeste y blanco que simula la bandera argentina, adornado con un sol de Mayo dorado en el centro, fileteado porteño en el lateral izquierdo y la silueta del Obelisco de Buenos Aires en la parte inferior.",
        "description" : "Una edición inspirada en la identidad argentina y su tradicional pasión por el café. De perfil agradable y fácil de disfrutar en cualquier ocasión."
    },
    {
        "id": "07",
        "name": "Cafe Tostado Madagascar",
        "img": cafeMadagascar,
        "price": 7,
        "stock" : 20,
        "category" : "Cafe en grano",
        "textAlt": "Paquete de café tostado molido marca Café Dublin edición Madagascar de 250 gramos. El diseño tiene un fondo verde selva e ilustra un lémur de cola anillada trepado a un árbol de baobab, rodeado de flores tropicales exóticas como la parpuzano o ave del paraíso.",
        "description" : "Una edición inspirada en los paisajes exóticos de Madagascar. Su propuesta busca transmitir una experiencia diferente y llena de personalidad."
    },
    {
        "id": "08",
        "name": "Cafe Tostado Kenya",
        "img": cafeKenya,
        "price": 10,
        "stock" : 30,
        "category" : "Cafe en grano",
        "textAlt": "Paquete de café tostado molido marca Café Dublin edición Kenya de 250 gramos. Presenta un fondo ocre con una guarda de patrones geométricos tribales africanos en el lateral izquierdo. La ilustración central muestra un paisaje con el monte Kilimanjaro, una acacia y una rama cargada de frutos rojos de café.",
        "description" : "Un café inspirado en los paisajes cafeteros de Kenya, con una identidad intensa y distintiva. Ideal para quienes disfrutan descubrir nuevos perfiles de café."
    }
]

function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    })
}

export default getProducts;