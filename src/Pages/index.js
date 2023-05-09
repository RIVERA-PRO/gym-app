import IndexLayout from "../Layouts/IndexLayout";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import PageDetail from '../Pages/PageDetail/PageDetail'
import AbdominalesPage from "./AbdominalesPage/AbdominalesPage";
import BicepsPage from "./BicepsPage/BicepsPage";
import TricepsPage from "./TricepsPage/TricepsPage";
import GluteosPage from "./GluteosPage/GluteosPage";
import PechoPage from "./PechoPage/PechoPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexLayout />,

    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/ejercicio/:id/:ejercicio",
                element: <PageDetail />,
            },
            {
                path: "/abdominales",
                element: <AbdominalesPage />,
            },
            {
                path: "/biceps",
                element: <BicepsPage />,
            },
            {
                path: "/triceps",
                element: <TricepsPage />,
            },
            {
                path: "/gluteos",
                element: <GluteosPage />,
            },
            {
                path: "/pecho",
                element: <PechoPage />,
            },

        ],
    },
]);
