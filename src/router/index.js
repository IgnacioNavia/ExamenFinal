import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Carrito.vue'), // Cambia por un componente existente
    },
    // Si no tienes una ruta About, puedes eliminarla o agregar una nueva vista
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'), // Elimina esta línea si no la usas
    // },
  ],
})

export default router
