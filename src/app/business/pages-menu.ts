import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'dashboard',
    icon: 'nb-home',
    link: '/business/dashboard',
    home: true,
  },
  {
    title: '资源汇聚',
    icon: 'nb-grid-a-outline',
    children: [
      {
        title: '资源注册',
        link: '/business/respooling/resregister',
      },
      {
        title: '访问控制',
        link: '/business/respooling/accesscontrol',
      },
      {
        title: '日志监听',
        link: '/business/respooling/logmonitor',
      },
    ],
  },
  {
    title: '资源管理',
    icon: 'nb-compose',
    children: [
      {
        title: '元数据管理',
        link: '/business/resmanage/datamanage',
      },
      {
        title: '资源状态',
        link: '/business/resmanage/rescatalog',
      },
      {
        title: '资源目录',
        link: '/business/resmanage/resstatus',
      }
    ],
  },
  {
    title: '资源共享',
    icon: 'nb-location',
    children: [
      {
        title: '服务发布',
        link: '/business/resshare/serpublish',
      }, {
        title: '服务检索',
        link: '/business/resshare/sersearch',
      }, {
        title: '服务共享',
        link: '/business/resshare/sershare',
      }
    ],
  },
  {
    title: '维护管理',
    icon: 'nb-gear',
    children: [
      {
        title: '用户管理',
        link: '/business/sysmanage/usermanage',
      },
      {
        title: '数据字典',
        link: '/business/sysmanage/datadict',
      }
    ],
  },
  {
    title: '运行管理',
    icon: 'nb-bar-chart',
    children: [
      {
        title: '请求方监控',
        link: '/business/oprmanage/requester',
      },
      {
        title: '使用方监控',
        link: '/business/oprmanage/user',
      },
      {
        title: '服务器监控',
        link: '/business/oprmanage/server',
      },
    ],
  }
];
