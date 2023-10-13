import React from 'react';

import layout from '@/layouts/provider.layout.json';
import layoutProvider from './provider.rules.json';
import LayoutRenderer from '@/components/Renderer';

const data = {
  fields: {
    'section-examples': {
      value: {
        textLineDemo: {
          items: [
            {
              text: 'ALARM',
              description: 'Dit is een AlertWidget door "rule-0".',
            },
            {
              text: 'Dit is een TextLineWidget door "rule-1".',
              type: 'heading-2',
            },
            {
              text: 'Dit is een TextLineWidget door "rule-1".',
              type: 'heading-3',
            },
          ],
        },
      },
    },
  },
};

export default function Provider() {
  return <LayoutRenderer layout={layout} data={data} layoutProvider={layoutProvider} />;
}
