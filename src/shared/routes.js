import HomePage from "./components/views/Kohls/Home";

const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    }, {
        path: '/kohls',
        exact: true,
        component: HomePage
    }
];

export default routes;
