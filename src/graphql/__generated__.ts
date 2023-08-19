import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Advertisement = {
  readonly __typename?: 'Advertisement';
  readonly Body: Scalars['String']['output'];
  readonly Title: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type AdvertisementEntity = {
  readonly __typename?: 'AdvertisementEntity';
  readonly attributes: Maybe<Advertisement>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type AdvertisementEntityResponse = {
  readonly __typename?: 'AdvertisementEntityResponse';
  readonly data: Maybe<AdvertisementEntity>;
};

export type AdvertisementEntityResponseCollection = {
  readonly __typename?: 'AdvertisementEntityResponseCollection';
  readonly data: ReadonlyArray<AdvertisementEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type AdvertisementFiltersInput = {
  readonly Body: InputMaybe<StringFilterInput>;
  readonly Title: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<AdvertisementFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<AdvertisementFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<AdvertisementFiltersInput>>>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type AdvertisementInput = {
  readonly Body: InputMaybe<Scalars['String']['input']>;
  readonly Title: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly contains: InputMaybe<Scalars['Boolean']['input']>;
  readonly containsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly endsWith: InputMaybe<Scalars['Boolean']['input']>;
  readonly eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly eqi: InputMaybe<Scalars['Boolean']['input']>;
  readonly gt: InputMaybe<Scalars['Boolean']['input']>;
  readonly gte: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly lt: InputMaybe<Scalars['Boolean']['input']>;
  readonly lte: InputMaybe<Scalars['Boolean']['input']>;
  readonly ne: InputMaybe<Scalars['Boolean']['input']>;
  readonly nei: InputMaybe<Scalars['Boolean']['input']>;
  readonly not: InputMaybe<BooleanFilterInput>;
  readonly notContains: InputMaybe<Scalars['Boolean']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentHeaderHeader = {
  readonly __typename?: 'ComponentHeaderHeader';
  readonly background: UploadFileEntityResponse;
  readonly headerIcons: Maybe<ReadonlyArray<Maybe<ComponentUiIconButton>>>;
  readonly id: Scalars['ID']['output'];
  readonly logo: UploadFileEntityResponse;
  readonly navigation: Maybe<ReadonlyArray<Maybe<ComponentHeaderSubmenu1>>>;
  readonly social: Maybe<ComponentUiSocial>;
  readonly title: Scalars['String']['output'];
  readonly videoPoster: Maybe<UploadFileEntityResponse>;
};


export type ComponentHeaderHeaderHeaderIconsArgs = {
  filters: InputMaybe<ComponentUiIconButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentHeaderHeaderNavigationArgs = {
  filters: InputMaybe<ComponentHeaderSubmenu1FiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHeaderHeaderInput = {
  readonly background: InputMaybe<Scalars['ID']['input']>;
  readonly headerIcons: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiIconButtonInput>>>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly logo: InputMaybe<Scalars['ID']['input']>;
  readonly navigation: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu1Input>>>;
  readonly social: InputMaybe<ComponentUiSocialInput>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly videoPoster: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHeaderSubmenu1 = {
  readonly __typename?: 'ComponentHeaderSubmenu1';
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
  readonly submenu: Maybe<ReadonlyArray<Maybe<ComponentHeaderSubmenu2>>>;
  readonly text: Scalars['String']['output'];
};


export type ComponentHeaderSubmenu1SubmenuArgs = {
  filters: InputMaybe<ComponentHeaderSubmenu2FiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHeaderSubmenu1FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu1FiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentHeaderSubmenu1FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu1FiltersInput>>>;
  readonly submenu: InputMaybe<ComponentHeaderSubmenu2FiltersInput>;
  readonly text: InputMaybe<StringFilterInput>;
};

export type ComponentHeaderSubmenu1Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<Scalars['String']['input']>;
  readonly submenu: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu2Input>>>;
  readonly text: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHeaderSubmenu2 = {
  readonly __typename?: 'ComponentHeaderSubmenu2';
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
  readonly submenu: Maybe<ReadonlyArray<Maybe<ComponentHeaderSubmenu3>>>;
  readonly text: Scalars['String']['output'];
};


export type ComponentHeaderSubmenu2SubmenuArgs = {
  filters: InputMaybe<ComponentHeaderSubmenu3FiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHeaderSubmenu2FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu2FiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentHeaderSubmenu2FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu2FiltersInput>>>;
  readonly submenu: InputMaybe<ComponentHeaderSubmenu3FiltersInput>;
  readonly text: InputMaybe<StringFilterInput>;
};

export type ComponentHeaderSubmenu2Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<Scalars['String']['input']>;
  readonly submenu: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu3Input>>>;
  readonly text: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHeaderSubmenu3 = {
  readonly __typename?: 'ComponentHeaderSubmenu3';
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
};

export type ComponentHeaderSubmenu3FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu3FiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentHeaderSubmenu3FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu3FiltersInput>>>;
  readonly text: InputMaybe<StringFilterInput>;
};

export type ComponentHeaderSubmenu3Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<Scalars['String']['input']>;
  readonly text: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPagesMeta = {
  readonly __typename?: 'ComponentPagesMeta';
  readonly content: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type ComponentPagesMetaFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentPagesMetaFiltersInput>>>;
  readonly content: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentPagesMetaFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentPagesMetaFiltersInput>>>;
};

export type ComponentPagesMetaInput = {
  readonly content: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPagesSeo = {
  readonly __typename?: 'ComponentPagesSeo';
  readonly description: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly meta: ReadonlyArray<Maybe<ComponentPagesMeta>>;
  readonly title: Scalars['String']['output'];
};


export type ComponentPagesSeoMetaArgs = {
  filters: InputMaybe<ComponentPagesMetaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPagesSeoInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly meta: InputMaybe<ReadonlyArray<InputMaybe<ComponentPagesMetaInput>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiIconButton = {
  readonly __typename?: 'ComponentUiIconButton';
  readonly icon: UploadFileEntityResponse;
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
  readonly text: Maybe<Scalars['String']['output']>;
};

export type ComponentUiIconButtonFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiIconButtonFiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiIconButtonFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiIconButtonFiltersInput>>>;
  readonly text: InputMaybe<StringFilterInput>;
};

export type ComponentUiIconButtonInput = {
  readonly icon: InputMaybe<Scalars['ID']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<Scalars['String']['input']>;
  readonly text: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiSocial = {
  readonly __typename?: 'ComponentUiSocial';
  readonly icons: ReadonlyArray<Maybe<ComponentUiIconButton>>;
  readonly id: Scalars['ID']['output'];
  readonly text: Maybe<Scalars['String']['output']>;
};


export type ComponentUiSocialIconsArgs = {
  filters: InputMaybe<ComponentUiIconButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentUiSocialInput = {
  readonly icons: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiIconButtonInput>>>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly text: InputMaybe<Scalars['String']['input']>;
};

export type DateFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly contains: InputMaybe<Scalars['Date']['input']>;
  readonly containsi: InputMaybe<Scalars['Date']['input']>;
  readonly endsWith: InputMaybe<Scalars['Date']['input']>;
  readonly eq: InputMaybe<Scalars['Date']['input']>;
  readonly eqi: InputMaybe<Scalars['Date']['input']>;
  readonly gt: InputMaybe<Scalars['Date']['input']>;
  readonly gte: InputMaybe<Scalars['Date']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly lt: InputMaybe<Scalars['Date']['input']>;
  readonly lte: InputMaybe<Scalars['Date']['input']>;
  readonly ne: InputMaybe<Scalars['Date']['input']>;
  readonly nei: InputMaybe<Scalars['Date']['input']>;
  readonly not: InputMaybe<DateFilterInput>;
  readonly notContains: InputMaybe<Scalars['Date']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Date']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly contains: InputMaybe<Scalars['DateTime']['input']>;
  readonly containsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly endsWith: InputMaybe<Scalars['DateTime']['input']>;
  readonly eq: InputMaybe<Scalars['DateTime']['input']>;
  readonly eqi: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly ne: InputMaybe<Scalars['DateTime']['input']>;
  readonly nei: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<DateTimeFilterInput>;
  readonly notContains: InputMaybe<Scalars['DateTime']['input']>;
  readonly notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Teacher_Department {
  CzKFarmaczevtichnihDiscziplin = 'CzK_farmaczevtichnih_discziplin',
  CzKGumanitarnihDiscziplin = 'CzK_gumanitarnih_discziplin',
  CzKHimichnihDiscziplin = 'CzK_himichnih_discziplin',
  CzKMedikoBiologichnihDiscziplin = 'CzK_mediko_biologichnih_discziplin',
  CzKZagalnoosvitnihDiscziplin = 'CzK_zagalnoosvitnih_discziplin'
}

export type FileInfoInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly contains: InputMaybe<Scalars['Float']['input']>;
  readonly containsi: InputMaybe<Scalars['Float']['input']>;
  readonly endsWith: InputMaybe<Scalars['Float']['input']>;
  readonly eq: InputMaybe<Scalars['Float']['input']>;
  readonly eqi: InputMaybe<Scalars['Float']['input']>;
  readonly gt: InputMaybe<Scalars['Float']['input']>;
  readonly gte: InputMaybe<Scalars['Float']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly lt: InputMaybe<Scalars['Float']['input']>;
  readonly lte: InputMaybe<Scalars['Float']['input']>;
  readonly ne: InputMaybe<Scalars['Float']['input']>;
  readonly nei: InputMaybe<Scalars['Float']['input']>;
  readonly not: InputMaybe<FloatFilterInput>;
  readonly notContains: InputMaybe<Scalars['Float']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Float']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Advertisement | ComponentHeaderHeader | ComponentHeaderSubmenu1 | ComponentHeaderSubmenu2 | ComponentHeaderSubmenu3 | ComponentPagesMeta | ComponentPagesSeo | ComponentUiIconButton | ComponentUiSocial | Header | HomePage | I18NLocale | Novina | Teacher | Test | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Header = {
  readonly __typename?: 'Header';
  readonly Header: Maybe<ComponentHeaderHeader>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<HeaderRelationResponseCollection>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type HeaderEntity = {
  readonly __typename?: 'HeaderEntity';
  readonly attributes: Maybe<Header>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type HeaderEntityResponse = {
  readonly __typename?: 'HeaderEntityResponse';
  readonly data: Maybe<HeaderEntity>;
};

export type HeaderInput = {
  readonly Header: InputMaybe<ComponentHeaderHeaderInput>;
};

export type HeaderRelationResponseCollection = {
  readonly __typename?: 'HeaderRelationResponseCollection';
  readonly data: ReadonlyArray<HeaderEntity>;
};

export type HomePage = {
  readonly __typename?: 'HomePage';
  readonly SEO: Maybe<ComponentPagesSeo>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<HomePageRelationResponseCollection>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type HomePageEntity = {
  readonly __typename?: 'HomePageEntity';
  readonly attributes: Maybe<HomePage>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type HomePageEntityResponse = {
  readonly __typename?: 'HomePageEntityResponse';
  readonly data: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  readonly SEO: InputMaybe<ComponentPagesSeoInput>;
};

export type HomePageRelationResponseCollection = {
  readonly __typename?: 'HomePageRelationResponseCollection';
  readonly data: ReadonlyArray<HomePageEntity>;
};

export type I18NLocale = {
  readonly __typename?: 'I18NLocale';
  readonly code: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  readonly __typename?: 'I18NLocaleEntity';
  readonly attributes: Maybe<I18NLocale>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  readonly __typename?: 'I18NLocaleEntityResponse';
  readonly data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  readonly __typename?: 'I18NLocaleEntityResponseCollection';
  readonly data: ReadonlyArray<I18NLocaleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly code: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<I18NLocaleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly contains: InputMaybe<Scalars['ID']['input']>;
  readonly containsi: InputMaybe<Scalars['ID']['input']>;
  readonly endsWith: InputMaybe<Scalars['ID']['input']>;
  readonly eq: InputMaybe<Scalars['ID']['input']>;
  readonly eqi: InputMaybe<Scalars['ID']['input']>;
  readonly gt: InputMaybe<Scalars['ID']['input']>;
  readonly gte: InputMaybe<Scalars['ID']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly lt: InputMaybe<Scalars['ID']['input']>;
  readonly lte: InputMaybe<Scalars['ID']['input']>;
  readonly ne: InputMaybe<Scalars['ID']['input']>;
  readonly nei: InputMaybe<Scalars['ID']['input']>;
  readonly not: InputMaybe<IdFilterInput>;
  readonly notContains: InputMaybe<Scalars['ID']['input']>;
  readonly notContainsi: InputMaybe<Scalars['ID']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly contains: InputMaybe<Scalars['Int']['input']>;
  readonly containsi: InputMaybe<Scalars['Int']['input']>;
  readonly endsWith: InputMaybe<Scalars['Int']['input']>;
  readonly eq: InputMaybe<Scalars['Int']['input']>;
  readonly eqi: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly ne: InputMaybe<Scalars['Int']['input']>;
  readonly nei: InputMaybe<Scalars['Int']['input']>;
  readonly not: InputMaybe<IntFilterInput>;
  readonly notContains: InputMaybe<Scalars['Int']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Int']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly containsi: InputMaybe<Scalars['JSON']['input']>;
  readonly endsWith: InputMaybe<Scalars['JSON']['input']>;
  readonly eq: InputMaybe<Scalars['JSON']['input']>;
  readonly eqi: InputMaybe<Scalars['JSON']['input']>;
  readonly gt: InputMaybe<Scalars['JSON']['input']>;
  readonly gte: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly lt: InputMaybe<Scalars['JSON']['input']>;
  readonly lte: InputMaybe<Scalars['JSON']['input']>;
  readonly ne: InputMaybe<Scalars['JSON']['input']>;
  readonly nei: InputMaybe<Scalars['JSON']['input']>;
  readonly not: InputMaybe<JsonFilterInput>;
  readonly notContains: InputMaybe<Scalars['JSON']['input']>;
  readonly notContainsi: InputMaybe<Scalars['JSON']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  readonly changePassword: Maybe<UsersPermissionsLoginPayload>;
  readonly createAdvertisement: Maybe<AdvertisementEntityResponse>;
  readonly createHeaderLocalization: Maybe<HeaderEntityResponse>;
  readonly createHomePageLocalization: Maybe<HomePageEntityResponse>;
  readonly createNovina: Maybe<NovinaEntityResponse>;
  readonly createTeacher: Maybe<TeacherEntityResponse>;
  readonly createUploadFile: Maybe<UploadFileEntityResponse>;
  readonly createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  readonly createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteAdvertisement: Maybe<AdvertisementEntityResponse>;
  readonly deleteHeader: Maybe<HeaderEntityResponse>;
  readonly deleteHomePage: Maybe<HomePageEntityResponse>;
  readonly deleteNovina: Maybe<NovinaEntityResponse>;
  readonly deleteTeacher: Maybe<TeacherEntityResponse>;
  readonly deleteTest: Maybe<TestEntityResponse>;
  readonly deleteUploadFile: Maybe<UploadFileEntityResponse>;
  readonly deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  readonly emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  readonly forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  readonly login: UsersPermissionsLoginPayload;
  readonly multipleUpload: ReadonlyArray<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  readonly register: UsersPermissionsLoginPayload;
  readonly removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  readonly resetPassword: Maybe<UsersPermissionsLoginPayload>;
  readonly updateAdvertisement: Maybe<AdvertisementEntityResponse>;
  readonly updateFileInfo: UploadFileEntityResponse;
  readonly updateHeader: Maybe<HeaderEntityResponse>;
  readonly updateHomePage: Maybe<HomePageEntityResponse>;
  readonly updateNovina: Maybe<NovinaEntityResponse>;
  readonly updateTeacher: Maybe<TeacherEntityResponse>;
  readonly updateTest: Maybe<TestEntityResponse>;
  readonly updateUploadFile: Maybe<UploadFileEntityResponse>;
  readonly updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  readonly updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAdvertisementArgs = {
  data: AdvertisementInput;
};


export type MutationCreateHeaderLocalizationArgs = {
  data: InputMaybe<HeaderInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateHomePageLocalizationArgs = {
  data: InputMaybe<HomePageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateNovinaArgs = {
  data: NovinaInput;
};


export type MutationCreateTeacherArgs = {
  data: TeacherInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAdvertisementArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHeaderArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHomePageArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteNovinaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTeacherArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  files: ReadonlyArray<InputMaybe<Scalars['Upload']['input']>>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAdvertisementArgs = {
  data: AdvertisementInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateNovinaArgs = {
  data: NovinaInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTeacherArgs = {
  data: TeacherInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTestArgs = {
  data: TestInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};

export type Novina = {
  readonly __typename?: 'Novina';
  readonly body: Maybe<Scalars['String']['output']>;
  readonly collage_photo: Maybe<UploadFileRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly date: Scalars['Date']['output'];
  readonly main_photo: UploadFileRelationResponseCollection;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly video_url: Maybe<Scalars['String']['output']>;
};


export type NovinaCollage_PhotoArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type NovinaMain_PhotoArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type NovinaEntity = {
  readonly __typename?: 'NovinaEntity';
  readonly attributes: Maybe<Novina>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type NovinaEntityResponse = {
  readonly __typename?: 'NovinaEntityResponse';
  readonly data: Maybe<NovinaEntity>;
};

export type NovinaEntityResponseCollection = {
  readonly __typename?: 'NovinaEntityResponseCollection';
  readonly data: ReadonlyArray<NovinaEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type NovinaFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<NovinaFiltersInput>>>;
  readonly body: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly date: InputMaybe<DateFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<NovinaFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<NovinaFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly video_url: InputMaybe<StringFilterInput>;
};

export type NovinaInput = {
  readonly body: InputMaybe<Scalars['String']['input']>;
  readonly collage_photo: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly date: InputMaybe<Scalars['Date']['input']>;
  readonly main_photo: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly video_url: InputMaybe<Scalars['String']['input']>;
};

export type Pagination = {
  readonly __typename?: 'Pagination';
  readonly page: Scalars['Int']['output'];
  readonly pageCount: Scalars['Int']['output'];
  readonly pageSize: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PaginationArg = {
  readonly limit: InputMaybe<Scalars['Int']['input']>;
  readonly page: InputMaybe<Scalars['Int']['input']>;
  readonly pageSize: InputMaybe<Scalars['Int']['input']>;
  readonly start: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly advertisement: Maybe<AdvertisementEntityResponse>;
  readonly advertisements: Maybe<AdvertisementEntityResponseCollection>;
  readonly header: Maybe<HeaderEntityResponse>;
  readonly homePage: Maybe<HomePageEntityResponse>;
  readonly i18NLocale: Maybe<I18NLocaleEntityResponse>;
  readonly i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  readonly me: Maybe<UsersPermissionsMe>;
  readonly novina: Maybe<NovinaEntityResponse>;
  readonly novinas: Maybe<NovinaEntityResponseCollection>;
  readonly teacher: Maybe<TeacherEntityResponse>;
  readonly teachers: Maybe<TeacherEntityResponseCollection>;
  readonly test: Maybe<TestEntityResponse>;
  readonly uploadFile: Maybe<UploadFileEntityResponse>;
  readonly uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  readonly uploadFolder: Maybe<UploadFolderEntityResponse>;
  readonly uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  readonly usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  readonly usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAdvertisementArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAdvertisementsArgs = {
  filters: InputMaybe<AdvertisementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHeaderArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryHomePageArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNovinaArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryNovinasArgs = {
  filters: InputMaybe<NovinaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeacherArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTeachersArgs = {
  filters: InputMaybe<TeacherFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTestArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  readonly __typename?: 'ResponseCollectionMeta';
  readonly pagination: Pagination;
};

export type StringFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly containsi: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly eq: InputMaybe<Scalars['String']['input']>;
  readonly eqi: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly ne: InputMaybe<Scalars['String']['input']>;
  readonly nei: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<StringFilterInput>;
  readonly notContains: InputMaybe<Scalars['String']['input']>;
  readonly notContainsi: InputMaybe<Scalars['String']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type Teacher = {
  readonly __typename?: 'Teacher';
  readonly additional_information: Maybe<Scalars['String']['output']>;
  readonly calendar_id: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly department: Enum_Teacher_Department;
  readonly email: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly phone: Maybe<Scalars['String']['output']>;
  readonly position: Scalars['String']['output'];
  readonly printed_works: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type TeacherEntity = {
  readonly __typename?: 'TeacherEntity';
  readonly attributes: Maybe<Teacher>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type TeacherEntityResponse = {
  readonly __typename?: 'TeacherEntityResponse';
  readonly data: Maybe<TeacherEntity>;
};

export type TeacherEntityResponseCollection = {
  readonly __typename?: 'TeacherEntityResponseCollection';
  readonly data: ReadonlyArray<TeacherEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type TeacherFiltersInput = {
  readonly additional_information: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<TeacherFiltersInput>>>;
  readonly calendar_id: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly department: InputMaybe<StringFilterInput>;
  readonly email: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<TeacherFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<TeacherFiltersInput>>>;
  readonly phone: InputMaybe<StringFilterInput>;
  readonly position: InputMaybe<StringFilterInput>;
  readonly printed_works: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type TeacherInput = {
  readonly additional_information: InputMaybe<Scalars['String']['input']>;
  readonly calendar_id: InputMaybe<Scalars['String']['input']>;
  readonly department: InputMaybe<Enum_Teacher_Department>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly phone: InputMaybe<Scalars['String']['input']>;
  readonly position: InputMaybe<Scalars['String']['input']>;
  readonly printed_works: InputMaybe<Scalars['String']['input']>;
};

export type Test = {
  readonly __typename?: 'Test';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly text: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type TestEntity = {
  readonly __typename?: 'TestEntity';
  readonly attributes: Maybe<Test>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type TestEntityResponse = {
  readonly __typename?: 'TestEntityResponse';
  readonly data: Maybe<TestEntity>;
};

export type TestInput = {
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly text: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  readonly __typename?: 'UploadFile';
  readonly alternativeText: Maybe<Scalars['String']['output']>;
  readonly caption: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly ext: Maybe<Scalars['String']['output']>;
  readonly formats: Maybe<Scalars['JSON']['output']>;
  readonly hash: Scalars['String']['output'];
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly mime: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly previewUrl: Maybe<Scalars['String']['output']>;
  readonly provider: Scalars['String']['output'];
  readonly provider_metadata: Maybe<Scalars['JSON']['output']>;
  readonly related: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars['Float']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly url: Scalars['String']['output'];
  readonly width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  readonly __typename?: 'UploadFileEntity';
  readonly attributes: Maybe<UploadFile>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  readonly __typename?: 'UploadFileEntityResponse';
  readonly data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  readonly __typename?: 'UploadFileEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  readonly alternativeText: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly caption: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly ext: InputMaybe<StringFilterInput>;
  readonly folder: InputMaybe<UploadFolderFiltersInput>;
  readonly folderPath: InputMaybe<StringFilterInput>;
  readonly formats: InputMaybe<JsonFilterInput>;
  readonly hash: InputMaybe<StringFilterInput>;
  readonly height: InputMaybe<IntFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly mime: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFileFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly previewUrl: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly provider_metadata: InputMaybe<JsonFilterInput>;
  readonly size: InputMaybe<FloatFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly url: InputMaybe<StringFilterInput>;
  readonly width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly ext: InputMaybe<Scalars['String']['input']>;
  readonly folder: InputMaybe<Scalars['ID']['input']>;
  readonly folderPath: InputMaybe<Scalars['String']['input']>;
  readonly formats: InputMaybe<Scalars['JSON']['input']>;
  readonly hash: InputMaybe<Scalars['String']['input']>;
  readonly height: InputMaybe<Scalars['Int']['input']>;
  readonly mime: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly previewUrl: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly provider_metadata: InputMaybe<Scalars['JSON']['input']>;
  readonly size: InputMaybe<Scalars['Float']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  readonly __typename?: 'UploadFileRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
};

export type UploadFolder = {
  readonly __typename?: 'UploadFolder';
  readonly children: Maybe<UploadFolderRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly files: Maybe<UploadFileRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly parent: Maybe<UploadFolderEntityResponse>;
  readonly path: Scalars['String']['output'];
  readonly pathId: Scalars['Int']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  readonly __typename?: 'UploadFolderEntity';
  readonly attributes: Maybe<UploadFolder>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  readonly __typename?: 'UploadFolderEntityResponse';
  readonly data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  readonly __typename?: 'UploadFolderEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly children: InputMaybe<UploadFolderFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly files: InputMaybe<UploadFileFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFolderFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly parent: InputMaybe<UploadFolderFiltersInput>;
  readonly path: InputMaybe<StringFilterInput>;
  readonly pathId: InputMaybe<IntFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  readonly children: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly files: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  readonly path: InputMaybe<Scalars['String']['input']>;
  readonly pathId: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  readonly __typename?: 'UploadFolderRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  readonly __typename?: 'UsersPermissionsCreateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  readonly __typename?: 'UsersPermissionsDeleteRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  readonly __typename?: 'UsersPermissionsLoginPayload';
  readonly jwt: Maybe<Scalars['String']['output']>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly __typename?: 'UsersPermissionsMe';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly role: Maybe<UsersPermissionsMeRole>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  readonly __typename?: 'UsersPermissionsMeRole';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  readonly __typename?: 'UsersPermissionsPasswordPayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  readonly __typename?: 'UsersPermissionsPermission';
  readonly action: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  readonly __typename?: 'UsersPermissionsPermissionEntity';
  readonly attributes: Maybe<UsersPermissionsPermission>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  readonly action: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  readonly email: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  readonly __typename?: 'UsersPermissionsRole';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  readonly __typename?: 'UsersPermissionsRoleEntity';
  readonly attributes: Maybe<UsersPermissionsRole>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponse';
  readonly data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsRoleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly permissions: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly type: InputMaybe<Scalars['String']['input']>;
  readonly users: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  readonly __typename?: 'UsersPermissionsUpdateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  readonly __typename?: 'UsersPermissionsUser';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly provider: Maybe<Scalars['String']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  readonly __typename?: 'UsersPermissionsUserEntity';
  readonly attributes: Maybe<UsersPermissionsUser>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  readonly __typename?: 'UsersPermissionsUserEntityResponse';
  readonly data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly blocked: InputMaybe<BooleanFilterInput>;
  readonly confirmationToken: InputMaybe<StringFilterInput>;
  readonly confirmed: InputMaybe<BooleanFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly email: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsUserFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly password: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly resetPasswordToken: InputMaybe<StringFilterInput>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  readonly blocked: InputMaybe<Scalars['Boolean']['input']>;
  readonly confirmationToken: InputMaybe<Scalars['String']['input']>;
  readonly confirmed: InputMaybe<Scalars['Boolean']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly password: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  readonly role: InputMaybe<Scalars['ID']['input']>;
  readonly username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
};

export type GetNavigationFragment = { readonly __typename?: 'ComponentHeaderHeader', readonly navigation: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu1', readonly id: string, readonly text: string, readonly link: string, readonly submenu: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu2', readonly id: string, readonly text: string, readonly link: string, readonly submenu: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu3', readonly id: string, readonly text: string, readonly link: string }> }> }> };

export type GetHeaderIconsFragment = { readonly __typename?: 'ComponentHeaderHeader', readonly headerIcons: ReadonlyArray<{ readonly __typename?: 'ComponentUiIconButton', readonly id: string, readonly text: string, readonly link: string, readonly icon: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly formats: any } } } }> };

export type GetHeaderSocialFragment = { readonly __typename?: 'ComponentHeaderHeader', readonly social: { readonly __typename?: 'ComponentUiSocial', readonly text: string, readonly icons: ReadonlyArray<{ readonly __typename?: 'ComponentUiIconButton', readonly id: string, readonly text: string, readonly link: string, readonly icon: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly formats: any } } } }> } };

export type GetHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeaderQuery = { readonly __typename?: 'Query', readonly header: { readonly __typename?: 'HeaderEntityResponse', readonly data: { readonly __typename?: 'HeaderEntity', readonly attributes: { readonly __typename?: 'Header', readonly Header: { readonly __typename?: 'ComponentHeaderHeader', readonly navigation: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu1', readonly id: string, readonly text: string, readonly link: string, readonly submenu: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu2', readonly id: string, readonly text: string, readonly link: string, readonly submenu: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu3', readonly id: string, readonly text: string, readonly link: string }> }> }>, readonly headerIcons: ReadonlyArray<{ readonly __typename?: 'ComponentUiIconButton', readonly id: string, readonly text: string, readonly link: string, readonly icon: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly formats: any } } } }>, readonly social: { readonly __typename?: 'ComponentUiSocial', readonly text: string, readonly icons: ReadonlyArray<{ readonly __typename?: 'ComponentUiIconButton', readonly id: string, readonly text: string, readonly link: string, readonly icon: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly formats: any } } } }> } } } } } };

export type GetMainScreenQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMainScreenQuery = { readonly __typename?: 'Query', readonly header: { readonly __typename?: 'HeaderEntityResponse', readonly data: { readonly __typename?: 'HeaderEntity', readonly attributes: { readonly __typename?: 'Header', readonly Header: { readonly __typename?: 'ComponentHeaderHeader', readonly title: string, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly background: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly videoPoster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } } } } };

export type GetNewsQueryVariables = Exact<{
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetNewsQuery = { readonly __typename?: 'Query', readonly novinas: { readonly __typename?: 'NovinaEntityResponseCollection', readonly meta: { readonly __typename?: 'ResponseCollectionMeta', readonly pagination: { readonly __typename?: 'Pagination', readonly total: number, readonly page: number, readonly pageSize: number, readonly pageCount: number } }, readonly data: ReadonlyArray<{ readonly __typename?: 'NovinaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Novina', readonly title: string, readonly body: string, readonly date: any, readonly video_url: string, readonly main_photo: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly width: number, readonly height: number, readonly url: string } }> }, readonly collage_photo: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly width: number, readonly height: number, readonly url: string } }> } } }> } };

export const GetNavigationFragmentDoc = gql`
    fragment GetNavigation on ComponentHeaderHeader {
  navigation {
    id
    text
    link
    submenu {
      id
      text
      link
      submenu {
        id
        text
        link
      }
    }
  }
}
    `;
export const GetHeaderIconsFragmentDoc = gql`
    fragment GetHeaderIcons on ComponentHeaderHeader {
  headerIcons {
    id
    text
    link
    icon {
      data {
        attributes {
          url
          formats
        }
      }
    }
  }
}
    `;
export const GetHeaderSocialFragmentDoc = gql`
    fragment GetHeaderSocial on ComponentHeaderHeader {
  social {
    text
    icons {
      id
      text
      link
      icon {
        data {
          attributes {
            url
            formats
          }
        }
      }
    }
  }
}
    `;
export const GetHeaderDocument = gql`
    query GetHeader {
  header {
    data {
      attributes {
        Header {
          ...GetNavigation
          ...GetHeaderIcons
          ...GetHeaderSocial
        }
      }
    }
  }
}
    ${GetNavigationFragmentDoc}
${GetHeaderIconsFragmentDoc}
${GetHeaderSocialFragmentDoc}`;
export const GetMainScreenDocument = gql`
    query GetMainScreen {
  header {
    data {
      attributes {
        Header {
          title
          logo {
            data {
              attributes {
                url
              }
            }
          }
          background {
            data {
              attributes {
                url
              }
            }
          }
          videoPoster {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const GetNewsDocument = gql`
    query GetNews($currentPage: Int = 1, $pageSize: Int = 3) {
  novinas(
    sort: "date:desc"
    pagination: {page: $currentPage, pageSize: $pageSize}
  ) {
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
    data {
      id
      attributes {
        title
        body
        main_photo {
          data {
            attributes {
              width
              height
              url
            }
          }
        }
        collage_photo {
          data {
            attributes {
              width
              height
              url
            }
          }
        }
        date
        video_url
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetHeader(variables?: GetHeaderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHeaderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHeaderQuery>(GetHeaderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHeader', 'query');
    },
    GetMainScreen(variables?: GetMainScreenQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMainScreenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMainScreenQuery>(GetMainScreenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMainScreen', 'query');
    },
    GetNews(variables?: GetNewsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNewsQuery>(GetNewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNews', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;