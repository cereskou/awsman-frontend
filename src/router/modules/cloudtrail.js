import Layout from '@/layout'

const cloudtrailRouter = {
  path: '/cloudtrail',
  component: Layout,
  redirect: '/cloudtrail/events',
  name: 'CloudTrail',
  meta: {
    title: 'CloudTrail',
    icon: 'user'
  },
  children: [
    {
      path: 'events',
      component: () => import('@/views/cloudtrail/events'),
      name: 'Events',
      meta: { title: 'cloudTrail' }
    }
  ]
}
export default cloudtrailRouter
