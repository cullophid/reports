import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { User, Report, Slide, Chart } from '../api/Models';
import { Context } from '../api/graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  id?: Maybe<Scalars['ID']>,
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
  report?: Maybe<ReportInput>
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
  id?: Maybe<Scalars['ID']>,
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


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  User: ResolverTypeWrapper<User>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Report: ResolverTypeWrapper<Report>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Slide: ResolverTypeWrapper<Slide>,
  Chart: ResolverTypeWrapper<Chart>,
  Mutation: ResolverTypeWrapper<{}>,
  ReportInput: ReportInput,
  SlideInput: SlideInput,
  ChartInput: ChartInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  User: User,
  ID: Scalars['ID'],
  Date: Scalars['Date'],
  String: Scalars['String'],
  Report: Report,
  Int: Scalars['Int'],
  Slide: Slide,
  Chart: Chart,
  Mutation: {},
  ReportInput: ReportInput,
  SlideInput: SlideInput,
  ChartInput: ChartInput,
  Boolean: Scalars['Boolean'],
};

export type ChartResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Chart'] = ResolversParentTypes['Chart']> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  x: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  y: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  width: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  height: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  signin: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationSigninArgs, 'email'>>,
  createReport: Resolver<ResolversTypes['Report'], ParentType, ContextType, RequireFields<MutationCreateReportArgs, 'title'>>,
  updateReport: Resolver<ResolversTypes['Report'], ParentType, ContextType, MutationUpdateReportArgs>,
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  currentUser: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  reports: Resolver<Array<ResolversTypes['Report']>, ParentType, ContextType>,
  report: Resolver<Maybe<ResolversTypes['Report']>, ParentType, ContextType, RequireFields<QueryReportArgs, 'id'>>,
};

export type ReportResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Report'] = ResolversParentTypes['Report']> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  owner: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  width: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  height: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  slides: Resolver<Array<ResolversTypes['Slide']>, ParentType, ContextType>,
};

export type SlideResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Slide'] = ResolversParentTypes['Slide']> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  charts: Resolver<Array<ResolversTypes['Chart']>, ParentType, ContextType>,
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  firstName: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  reports: Resolver<Array<ResolversTypes['Report']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = Context> = {
  Chart: ChartResolvers<ContextType>,
  Date: GraphQLScalarType,
  Mutation: MutationResolvers<ContextType>,
  Query: QueryResolvers<ContextType>,
  Report: ReportResolvers<ContextType>,
  Slide: SlideResolvers<ContextType>,
  User: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
