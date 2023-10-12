'use client';
import React from 'react';

import { LayoutRenderer } from '@layout-renderer/core';
import { DataStoreTypes } from '@layout-renderer/datastores';
import { DefaultLayoutProviderTypes } from '@layout-renderer/layout-provider';

import { widgets as defaultWidgets } from '@/widgets';

export const Renderer = ({ layout, data = {}, layoutProvider, debug = true }) => {
  return (
    <LayoutRenderer
      layout={layout}
      datastores={DataStoreTypes}
      layoutProviderTypes={DefaultLayoutProviderTypes}
      layoutProvider={layoutProvider}
      widgets={defaultWidgets}
      data={data}
      debug={debug}
    />
  );
};

export default Renderer;
