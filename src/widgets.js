'use client';
import {
  AlertWidget,
  FieldGroupWidget,
  SectionWidget,
  TextBoxWidget,
  TextLineWidget,
  WrapperWidget,
} from '@layout-renderer/widgets';

export const widgets = [
  { type: 'AlertWidget', component: AlertWidget },
  {
    type: 'TextLineWidget',
    component: TextLineWidget,
  },
  {
    type: 'TextBoxWidget',
    component: TextBoxWidget,
  },
  {
    type: 'WrapperWidget',
    component: WrapperWidget,
  },
  {
    type: 'FieldGroupWidget',
    component: FieldGroupWidget,
  },
  {
    type: 'SectionWidget',
    component: SectionWidget,
  },
];
