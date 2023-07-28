export interface IRouterMeta {
  name: string;
  path: string;
  isShow: boolean;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const RouterMeta: RouterMetaType = {
  HomePage: {
    name: 'Home',
    path: '/',
    isShow: true,
  },
  AuthPage: {
    name: 'Auth',
    path: '/auth',
    isShow: true,
  },
  DesignSystemPage: {
    name: 'DesignSystem',
    path: '/design-system',
    isShow: true,
  },
  MyPage: {
    name: 'Mypage',
    path: '/mypage',
    isShow: false,
  },
};

export default RouterMeta;
