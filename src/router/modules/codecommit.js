import Layout from '@/layout'

const codecommitRouter = {
  path: '/codecommit',
  component: Layout,
  redirect: '/codecommit/index',
  name: 'CodeCommit',
  meta: {
    title: 'CodeCommit',
    icon: 'user'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/codecommit/index'),
      name: 'CodeCommit',
      meta: { title: 'codeCommit' }
    },
    {
      path: 'diff',
      component: () => import('@/views/codecommit/diff'),
      name: 'Diff',
      meta: { title: 'codeCommitDiff' }
    }
  ]
}
export default codecommitRouter
