import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import Card from "./Card";
import Footer from "./Footer"
const Home = () => {
    const cardContent = [
        {
            title: "Brownies Caseros",
            ingredients: [
                "1 taza de azúcar",
                "1/2 taza de mantequilla",
                "1/2 taza de cacao en polvo",
                "1/2 taza de harina",
                "2 huevos",
                "1 cdita de esencia de vainilla"
            ],
            instructions: [
                "Derrite la mantequilla y mézclala con el azúcar y el cacao.",
                "Añade los huevos y la vainilla, y mezcla bien.",
                "Incorpora la harina hasta obtener una mezcla homogénea.",
                "Hornea a 180°C durante 25-30 minutos."
            ],
            image: "https://www.aceitesdeolivadeespana.com/sites/default/files/_espanol/recetas/brownies-de-chocolate-2.png"
        },
        {
            title: "Pasta Alfredo",
            ingredients: [
                "250 g de pasta",
                "1 taza de crema",
                "1/2 taza de queso parmesano rallado",
                "2 dientes de ajo, picados",
                "Mantequilla y perejil al gusto"
            ],
            instructions: [
                "Cocina la pasta hasta que esté al dente.",
                "En una sartén, derrite la mantequilla y sofríe el ajo.",
                "Añade la crema y el queso parmesano, removiendo hasta que espese.",
                "Mezcla la pasta con la salsa y sirve con perejil."
            ],
            image: "https://mojo.generalmills.com/api/public/content/8GresqM3pUK_fXrmtlyKjg_gmi_hi_res_jpeg.jpeg?v=df1663f8&t=16e3ce250f244648bef28c5949fb99ff"
        },
        {
            title: "Guacamole Casero",
            ingredients: [
                "2 aguacates maduros",
                "1/2 cebolla, picada",
                "1 tomate, picado",
                "Zumo de 1 limón",
                "Cilantro y sal al gusto"
            ],
            instructions: [
                "Machaca los aguacates en un tazón.",
                "Añade el tomate, cebolla, cilantro y mezcla.",
                "Agrega el jugo de limón y sazona con sal.",
                "Sirve con nachos o tacos."
            ],
            image: "https://www.centrallecheraasturiana.es/wp-content/uploads/2017/03/Guacamole-min.jpg"
        },
        {
            title: "Sopa de Tomate y Albahaca",
            ingredients: [
                "6 tomates maduros",
                "1 cebolla",
                "2 dientes de ajo",
                "1 taza de caldo de verduras",
                "Albahaca fresca y sal"
            ],
            instructions: [
                "Sofríe la cebolla y el ajo hasta que estén dorados.",
                "Añade los tomates y cocina por 10 minutos.",
                "Agrega el caldo y cocina 15 minutos más.",
                "Licúa, agrega albahaca y sirve caliente."
            ],
            image: "https://okdiario.com/img/2019/01/24/receta-de-crema-de-tomate-y-albahaca-655x368.jpg"
        }
    ];

    return (
        <>
             <Header />
            <Welcome />
            <div className="container my-5" id= "recipes"  >
                <div className="row" >
                    {cardContent.map((card, index) => (
                        <Card 
                            title={card.title} 
                            ingredients={card.ingredients} 
                            instructions={card.instructions} 
                            image={card.image} 
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;