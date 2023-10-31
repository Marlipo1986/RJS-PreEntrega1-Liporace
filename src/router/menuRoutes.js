import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Comanda from "../pages/Comanda";
import DetallePlato from "../pages/DetallePlato";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer ,
    },
    {
        id:"menuCompleto",
        path: "/MenuCompleto",
        Element: ItemListContainer,
    },
    {
        id:"detallePlato",
        path: "/Detalle/:id",
        Element: DetallePlato,
    },
    {
        id:"tipoDePlato",
        path: "/Categoria/:tipoDePlato",
        Element: ItemListContainer,
    },
    {
        id:"comanda",
        path: "/Comanda",
        Element: Comanda,
    },
]