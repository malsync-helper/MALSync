import { ConfObj } from '../../../_provider/definitions';
import SettingsGeneral from './settings-general.vue';

export const discord: ConfObj[] = [
  {
    key: 'rpc',
    title: () => api.storage.lang('settings_enabled'),
    props: {
      component: 'checkbox',
      option: 'rpc',
      infoLink: 'https://github.com/MALSync/MALSync/wiki/Discord-Rich-Presence',
    },
    component: SettingsGeneral,
  },
  {
    key: 'presenceLargeImage',
    title: () => api.storage.lang('settings_presence_largeimage'),
    props: () => ({
      component: 'dropdown',
      option: 'presenceLargeImage',
      props: {
        options: [
          { title: api.storage.lang('settings_presence_largeimage_cover'), value: 'cover' },
          { title: api.storage.lang('settings_presence_largeimage_website'), value: 'website' },
          { title: api.storage.lang('settings_presence_largeimage_malsync'), value: 'malsync' },
        ],
      },
    }),
    component: SettingsGeneral,
  },
  {
    key: 'presenceShowMalsync',
    title: () => api.storage.lang('settings_presenceShowMalsync'),
    props: {
      component: 'checkbox',
      option: 'presenceShowMalsync',
    },
    component: SettingsGeneral,
  },
  {
    key: 'presenceShowButtons',
    title: () => api.storage.lang('settings_presenceShowButtons'),
    props: {
      component: 'checkbox',
      option: 'presenceShowButtons',
    },
    component: SettingsGeneral,
  },
];
