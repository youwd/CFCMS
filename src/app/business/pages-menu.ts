import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: '资源汇聚',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: '资源注册',
        link: '/pages/ui-features/buttons',
      },
      {
        title: '访问控制',
        link: '/pages/ui-features/grid',
      },
      {
        title: '日志监听',
        link: '/pages/ui-features/icons',
      },
    ],
  },
  {
    title: '资源管理',
    icon: 'nb-compose',
    children: [
      {
        title: '元数据管理',
        link: '/pages/forms/inputs',
      },
      {
        title: '资源状态',
        link: '/pages/forms/layouts',
      },
      {
        title: '资源目录',
        link: '/pages/forms/layouts',
      }
    ],
  },
  {
    title: '资源共享',
    icon: 'nb-gear',
    children: [
      {
        title: '服务发布',
        link: '/pages/components/tree',
      }, {
        title: '服务检索',
        link: '/pages/components/notifications',
      },{
        title: '服务共享',
        link: '/pages/components/notifications',
      }
    ],
  },
  {
    title: '维护管理',
    icon: 'nb-location',
    children: [
      {
        title: '用户管理',
        link: '/pages/maps/gmaps',
      },
      {
        title: '数据字典',
        link: '/pages/maps/leaflet',
      }
    ],
  },
  {
    title: '运行管理',
    icon: 'nb-bar-chart',
    children: [
      {
        title: '请求方监控',
        link: '/pages/charts/echarts',
      },
      {
        title: '使用方监控',
        link: '/pages/charts/chartjs',
      },
      {
        title: '服务器监控',
        link: '/pages/charts/d3',
      },
    ],
  }
];
