import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
};

export type Chart = {
   __typename?: 'Chart',
  id: Scalars['ID'],
  x: Scalars['Int'],
  y: Scalars['Int'],
  width: Scalars['Int'],
  height: Scalars['Int'],
};

export type ChartInput = {
  id: Scalars['ID'],
  x: Scalars['Int'],
  y: Scalars['Int'],
  width: Scalars['Int'],
  height: Scalars['Int'],
};


export type Mutation = {
   __typename?: 'Mutation',
  signin: Scalars['String'],
  createReport: Report,
  updateReport: Report,
};


export type MutationSigninArgs = {
  email: Scalars['String']
};


export type MutationCreateReportArgs = {
  title: Scalars['String']
};


export type MutationUpdateReportArgs = {
  report: ReportInput
};

export type Query = {
   __typename?: 'Query',
  currentUser?: Maybe<User>,
  reports: Array<Report>,
  report?: Maybe<Report>,
};


export type QueryReportArgs = {
  id: Scalars['ID']
};

export type Report = {
   __typename?: 'Report',
  id: Scalars['ID'],
  owner: User,
  width: Scalars['Int'],
  height: Scalars['Int'],
  title: Scalars['String'],
  slides: Array<Slide>,
};

export type ReportInput = {
  id: Scalars['ID'],
  title: Scalars['String'],
  width: Scalars['Int'],
  height: Scalars['Int'],
  slides: Array<SlideInput>,
};

export type Slide = {
   __typename?: 'Slide',
  id: Scalars['ID'],
  charts: Array<Chart>,
};

export type SlideInput = {
  id: Scalars['ID'],
  charts: Array<ChartInput>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  createdAt: Scalars['Date'],
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  reports: Array<Report>,
};
export type ReportListGetQueryVariables = {};


export type ReportListGetQuery = (
  { __typename?: 'Query' }
  & { reports: Array<{ __typename?: 'Report' }
    & ReportListReportFragment
  > }
);

export type ReportListReportFragment = (
  { __typename?: 'Report' }
  & Pick<Report, 'id' | 'title' | 'width' | 'height'>
);

export type ReportListCreateReportMutationVariables = {
  title: Scalars['String']
};


export type ReportListCreateReportMutation = (
  { __typename?: 'Mutation' }
  & { createReport: { __typename?: 'Report' }
    & ReportListReportFragment
   }
);

export type SignInMutationVariables = {
  email: Scalars['String']
};


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'signin'>
);

export type ReportFragment = (
  { __typename?: 'Report' }
  & Pick<Report, 'id' | 'title' | 'width' | 'height'>
  & { slides: Array<{ __typename?: 'Slide' }
    & ReportSlideFragment
  > }
);

export type ReportSlideFragment = (
  { __typename?: 'Slide' }
  & Pick<Slide, 'id'>
  & { charts: Array<{ __typename?: 'Chart' }
    & ReportChartFragment
  > }
);

export type ReportChartFragment = (
  { __typename?: 'Chart' }
  & Pick<Chart, 'id' | 'x' | 'y' | 'width' | 'height'>
);

export type ReportGetQueryVariables = {
  id: Scalars['ID']
};


export type ReportGetQuery = (
  { __typename?: 'Query' }
  & { report: Maybe<{ __typename?: 'Report' }
    & ReportFragment
  > }
);

export type ReportUpdateMutationVariables = {
  report: ReportInput
};


export type ReportUpdateMutation = (
  { __typename?: 'Mutation' }
  & { updateReport: { __typename?: 'Report' }
    & ReportFragment
   }
);
export const ReportListReportFragmentDoc = gql`
    fragment ReportListReport on Report {
  id
  title
  width
  height
}
    `;
export const ReportChartFragmentDoc = gql`
    fragment ReportChart on Chart {
  id
  x
  y
  width
  height
}
    `;
export const ReportSlideFragmentDoc = gql`
    fragment ReportSlide on Slide {
  id
  charts {
    ...ReportChart
  }
}
    ${ReportChartFragmentDoc}`;
export const ReportFragmentDoc = gql`
    fragment Report on Report {
  id
  title
  width
  height
  slides {
    ...ReportSlide
  }
}
    ${ReportSlideFragmentDoc}`;
export const ReportListGetDocument = gql`
    query ReportListGet {
  reports {
    ...ReportListReport
  }
}
    ${ReportListReportFragmentDoc}`;

    export function useReportListGetQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ReportListGetQuery, ReportListGetQueryVariables>) {
      return ApolloReactHooks.useQuery<ReportListGetQuery, ReportListGetQueryVariables>(ReportListGetDocument, baseOptions);
    }
      export function useReportListGetLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReportListGetQuery, ReportListGetQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<ReportListGetQuery, ReportListGetQueryVariables>(ReportListGetDocument, baseOptions);
      }
      
export type ReportListGetQueryHookResult = ReturnType<typeof useReportListGetQuery>;
export type ReportListGetQueryResult = ApolloReactCommon.QueryResult<ReportListGetQuery, ReportListGetQueryVariables>;
export const ReportListCreateReportDocument = gql`
    mutation ReportListCreateReport($title: String!) {
  createReport(title: $title) {
    ...ReportListReport
  }
}
    ${ReportListReportFragmentDoc}`;
export type ReportListCreateReportMutationFn = ApolloReactCommon.MutationFunction<ReportListCreateReportMutation, ReportListCreateReportMutationVariables>;

    export function useReportListCreateReportMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReportListCreateReportMutation, ReportListCreateReportMutationVariables>) {
      return ApolloReactHooks.useMutation<ReportListCreateReportMutation, ReportListCreateReportMutationVariables>(ReportListCreateReportDocument, baseOptions);
    }
export type ReportListCreateReportMutationHookResult = ReturnType<typeof useReportListCreateReportMutation>;
export type ReportListCreateReportMutationResult = ApolloReactCommon.MutationResult<ReportListCreateReportMutation>;
export type ReportListCreateReportMutationOptions = ApolloReactCommon.BaseMutationOptions<ReportListCreateReportMutation, ReportListCreateReportMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!) {
  signin(email: $email)
}
    `;
export type SignInMutationFn = ApolloReactCommon.MutationFunction<SignInMutation, SignInMutationVariables>;

    export function useSignInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
      return ApolloReactHooks.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
    }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = ApolloReactCommon.MutationResult<SignInMutation>;
export type SignInMutationOptions = ApolloReactCommon.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const ReportGetDocument = gql`
    query ReportGet($id: ID!) {
  report(id: $id) {
    ...Report
  }
}
    ${ReportFragmentDoc}`;

    export function useReportGetQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ReportGetQuery, ReportGetQueryVariables>) {
      return ApolloReactHooks.useQuery<ReportGetQuery, ReportGetQueryVariables>(ReportGetDocument, baseOptions);
    }
      export function useReportGetLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReportGetQuery, ReportGetQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<ReportGetQuery, ReportGetQueryVariables>(ReportGetDocument, baseOptions);
      }
      
export type ReportGetQueryHookResult = ReturnType<typeof useReportGetQuery>;
export type ReportGetQueryResult = ApolloReactCommon.QueryResult<ReportGetQuery, ReportGetQueryVariables>;
export const ReportUpdateDocument = gql`
    mutation ReportUpdate($report: ReportInput!) {
  updateReport(report: $report) {
    ...Report
  }
}
    ${ReportFragmentDoc}`;
export type ReportUpdateMutationFn = ApolloReactCommon.MutationFunction<ReportUpdateMutation, ReportUpdateMutationVariables>;

    export function useReportUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReportUpdateMutation, ReportUpdateMutationVariables>) {
      return ApolloReactHooks.useMutation<ReportUpdateMutation, ReportUpdateMutationVariables>(ReportUpdateDocument, baseOptions);
    }
export type ReportUpdateMutationHookResult = ReturnType<typeof useReportUpdateMutation>;
export type ReportUpdateMutationResult = ApolloReactCommon.MutationResult<ReportUpdateMutation>;
export type ReportUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<ReportUpdateMutation, ReportUpdateMutationVariables>;