const home = resolve => require(['../components/home/home'], resolve)

const HomeRouter = [
  {
    path: '/',
    component: home
  }
]

export default HomeRouter
