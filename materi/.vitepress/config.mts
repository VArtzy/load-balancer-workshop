import { withSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default withSidebar({
  title: "Load Balancer",
  description: "CS116",
  base: "/load-balancer/",
  ignoreDeathLinks: true
}, { documentRootPath: '/materi' })
