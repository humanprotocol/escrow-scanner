import { ApolloClient, InMemoryCache } from '@apollo/client';
import gql from 'graphql-tag';

// TO-DO Makarov inject fragments

export const getClient = (graphqlClientUrl: string) => {
  return new ApolloClient({
    uri: graphqlClientUrl,
    credentials: '',
    cache: new InMemoryCache(),
  });
};

export const ESCROWFACTORIES_COUNT = gql`
  query GetEscrowFactoriesCount {
    escrowFactories {
      count
    }
  }
`;

export const ESCROWFACTORY_COUNT = gql`
  query GetEscrowFactoryCount($id: ID!) {
    escrowFactory(id: $id) {
      count
    }
  }
`;

export const IS_EVENT = gql`
  query GetIsEnent($id: ID!) {
    isevents(id: $id) {
      id
    }
  }
`;

export const IS_EVENTS = gql`
  query GetIsEvents {
    isevents {
      id
      count
      _url
      _hash
    }
  }
`;

export const PEVENTS = gql`
  query GetPevents {
    pevents {
      id
      count
      _url
      _hash
    }
  }
`;

export const PEVENTS_COUNT = gql`
  query GetPevents {
    pevents {
      count
    }
  }
`;

export const BULK_TRANSFER_EVENTS_FULL = gql`
  query GetBulkTransferEvents {
    bulkTransferEvents {
      id
      escrow
      bulkCount
      txId
      block
      timestamp
      transaction
    }
  }
`;

export const HMTRANSFER_EVENTS = gql`
  query GetHmtransferEvents {
    hmtransferEvents {
      id
      token
      from
      to
      value
      block
      timestamp
      transaction
    }
  }
`;
