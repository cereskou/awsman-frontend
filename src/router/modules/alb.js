import Layout from '@/layout'

const elbRouter = {
  path: '/elbv2',
  component: Layout,
  redirect: '/elbv2/index',
  name: 'LoadBalancer',
  meta: {
    title: 'LoadBalancer',
    icon: 'user'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/alb/index'),
      name: 'Alb',
      meta: { title: 'loadBalance' }
    }
  ]
}
export default elbRouter
