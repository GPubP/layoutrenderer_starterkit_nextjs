import dynamic from 'next/dynamic';

const WIDGETS_LIST = [
  'AlertWidget',
  'FieldGroupWidget',
  'SectionWidget',
  'TextBoxWidget',
  'TextLineWidget',
  'WrapperWidget',
];

export const widgets = WIDGETS_LIST.map((w) => ({
  type: w,
  component: dynamic(() => import('@layout-renderer/widgets/widgets.js').then((widg) => widg[w]), { ssr: false }),
}));
