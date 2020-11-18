import Layout from '@/layout'

const cognitoRouter = {
  path: '/cognito',
  component: Layout,
  redirect: '/cognito/userpool',
  name: 'Cognito',
  meta: {
    title: 'Cognito',
    icon: 'user'
  },
  children: [
    {
      path: 'userpool',
      component: () => import('@/views/cognito/userpool'),
      name: 'UserPool',
      meta: { title: 'userPool' }
    },
    {
      path: 'settings',
      component: () => import('@/views/cognito/settings'),
      name: 'Settings',
      meta: { title: 'cognitoSetting' }
    }
  ]
}
export default cognitoRouter
