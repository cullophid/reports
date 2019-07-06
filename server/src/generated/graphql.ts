import { GraphQLResolveInfo } from "graphql";
import { Report, Slide, TextNode, TextAlign } from "./prisma-client";
import { Context } from "../types";
export type Maybe<T> = T | null;
export type MaybePromise<T> = Promise<T> | T;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ChartNode = {
  __typename?: "ChartNode";
  id: Scalars["ID"];
  x: Scalars["Int"];
  y: Scalars["Int"];
  width: Scalars["Int"];
  height: Scalars["Int"];
  query: Scalars["String"];
};

export type ChartNodeCreateInput = {
  x: Scalars["Int"];
  y: Scalars["Int"];
  width: Scalars["Int"];
  height: Scalars["Int"];
  query: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createReport: Maybe<Report>;
  updateReport: Maybe<Report>;
};

export type MutationCreateReportArgs = {
  data: ReportCreateInput;
};

export type MutationUpdateReportArgs = {
  data: ReportUpdateInput;
};

export type Query = {
  __typename?: "Query";
  reports: Array<Maybe<Report>>;
};

export type Report = {
  __typename?: "Report";
  id: Scalars["ID"];
  title: Scalars["String"];
  owner: Scalars["ID"];
  slides: Array<Slide>;
  width: Scalars["Int"];
  height: Scalars["Int"];
};

export type ReportCreateInput = {
  title: Scalars["String"];
  width: Scalars["Int"];
  height: Scalars["Int"];
  owner: Scalars["ID"];
  slides: Maybe<Array<SlideCreateInput>>;
};

export type ReportUpdateInput = {
  id: Scalars["ID"];
  title: Maybe<Scalars["String"]>;
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  slides: Maybe<Array<SlideUpdateInput>>;
};

export type Slide = {
  __typename?: "Slide";
  report: Report;
  id: Scalars["ID"];
  textNodes: Array<TextNode>;
  chartNodes: Array<ChartNode>;
};

export type SlideCreateInput = {
  textNodes: Maybe<Array<TextNodeCreateInput>>;
  chartNodes: Maybe<Array<ChartNodeCreateInput>>;
};

export type SlideUpdateInput = {
  id: Scalars["ID"];
  textNodes: Maybe<Array<TextNodeCreateInput>>;
  chartNodes: Maybe<Array<ChartNodeCreateInput>>;
};

export enum TextAlign {
  Left = "Left",
  Right = "Right",
  Center = "Center"
}

export type TextNode = {
  __typename?: "TextNode";
  id: Scalars["ID"];
  fontSize: Scalars["Int"];
  color: Scalars["String"];
  textAlign: TextAlign;
  x: Scalars["Int"];
  y: Scalars["Int"];
  width: Scalars["Int"];
  height: Scalars["Int"];
  value: Scalars["String"];
};

export type TextNodeCreateInput = {
  fontSize: Scalars["Int"];
  color: Scalars["String"];
  textAlign: TextAlign;
  x: Scalars["Int"];
  y: Scalars["Int"];
  width: Scalars["Int"];
  height: Scalars["Int"];
  value: Scalars["String"];
};

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

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: MaybePromise<{}>;
  Report: MaybePromise<Report>;
  ID: MaybePromise<Scalars["ID"]>;
  String: MaybePromise<Scalars["String"]>;
  Slide: MaybePromise<Slide>;
  TextNode: MaybePromise<TextNode>;
  Int: MaybePromise<Scalars["Int"]>;
  TextAlign: MaybePromise<TextAlign>;
  ChartNode: MaybePromise<ChartNode>;
  Mutation: MaybePromise<{}>;
  ReportCreateInput: ReportCreateInput;
  SlideCreateInput: SlideCreateInput;
  TextNodeCreateInput: TextNodeCreateInput;
  ChartNodeCreateInput: ChartNodeCreateInput;
  ReportUpdateInput: ReportUpdateInput;
  SlideUpdateInput: SlideUpdateInput;
  Boolean: MaybePromise<Scalars["Boolean"]>;
};

export type ChartNodeResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["ChartNode"]
> = {
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  x: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  y: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  width: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  height: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  query: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["Mutation"]
> = {
  createReport: Resolver<
    Maybe<ResolversTypes["Report"]>,
    ParentType,
    ContextType,
    MutationCreateReportArgs
  >;
  updateReport: Resolver<
    Maybe<ResolversTypes["Report"]>,
    ParentType,
    ContextType,
    MutationUpdateReportArgs
  >;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["Query"]
> = {
  reports: Resolver<
    Array<Maybe<ResolversTypes["Report"]>>,
    ParentType,
    ContextType
  >;
};

export type ReportResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["Report"]
> = {
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  owner: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  slides: Resolver<Array<ResolversTypes["Slide"]>, ParentType, ContextType>;
  width: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  height: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
};

export type SlideResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["Slide"]
> = {
  report: Resolver<ResolversTypes["Report"], ParentType, ContextType>;
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  textNodes: Resolver<
    Array<ResolversTypes["TextNode"]>,
    ParentType,
    ContextType
  >;
  chartNodes: Resolver<
    Array<ResolversTypes["ChartNode"]>,
    ParentType,
    ContextType
  >;
};

export type TextNodeResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["TextNode"]
> = {
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  fontSize: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  color: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  textAlign: Resolver<ResolversTypes["TextAlign"], ParentType, ContextType>;
  x: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  y: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  width: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  height: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  value: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  ChartNode: ChartNodeResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Report: ReportResolvers<ContextType>;
  Slide: SlideResolvers<ContextType>;
  TextNode: TextNodeResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
