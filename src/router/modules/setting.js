import Layout from '@/layout'

const settingRouter = {
  path: '/setting',
  component: Layout,
  redirect: '/setting/index',
  name: 'Setting',
  meta: {
    title: 'Setting',
    icon: 'el-icon-set-up'
  },
  children: [
    {
      path: 'setting',
      component: () => import('@/views/setting/index'),
      name: 'setting',
      meta: { title: 'setting' }
    }
  ]
}
export default settingRouter
