// import { gql } from '@apollo/client';
import { gql } from 'graphql-tag';
import { datastoreBuilder, defaultDatastoreSelector } from '@/lib/datastore.helpers';

export const homePageQuery = gql`
  query {
    homePage {
      title
    }
  }
`;

export const homeLayout = {
  datastores: datastoreBuilder(homePageQuery),
  widgets: [
    {
      id: 'home-wrapper',
      component: 'WrapperWidget',
      attributes: {
        background: 'light-grey',
      },
      children: [
        {
          id: 'warning-alert',
          component: 'AlertWidget',
          attributes: {
            description:
              'Ik ben een AlertWidget in een WrapperWidget gerenderd met de Layout Renderer. Mijn titel wordt opgehaald uit de redactie (WCM) en doorgegeven aan de front-end via GraphQL.',
            showCloseButton: true,
          },
          ...defaultDatastoreSelector({ title: 'homePage.title' }),
        },
      ],
    },
  ],
};
