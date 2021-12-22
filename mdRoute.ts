// /path/to/plugin.ts
import { IApi } from 'dumi';

export default async (api: IApi) => {
  const rootRoute = await api.applyPlugins({
    key: 'dumi.getRootRoute',
    type: api.ApplyPluginsType.modify,
    initialValue: await api.getRoutes(),
  });
};