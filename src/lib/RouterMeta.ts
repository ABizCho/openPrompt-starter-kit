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
};

export default RouterMeta;
