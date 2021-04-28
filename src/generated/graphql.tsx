import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  user: User;
  token: Scalars['String'];
};

export type MarketSegment = {
  __typename?: 'MarketSegment';
  id: Scalars['ID'];
  name: Scalars['String'];
  modelId: Scalars['ID'];
  LAC: Scalars['Float'];
  LPO: Scalars['Float'];
  LNT: Scalars['Float'];
  LTOC: Scalars['Float'];
  ASL: Scalars['Float'];
  OCR: Scalars['Float'];
  ACV: Scalars['Float'];
  OCV: Scalars['Float'];
  ACC: Scalars['Float'];
  MOSH: Scalars['Float'];
  MCSH: Scalars['Float'];
  marketingBudgetDistribution: Array<Scalars['Float']>;
  organicLeads: Array<Scalars['Float']>;
};

export type FinModel = {
  __typename?: 'FinModel';
  id: Scalars['ID'];
  name: Scalars['String'];
  companyId: Scalars['ID'];
  marketingBudget: Array<Scalars['Float']>;
  includedDepartments: Array<Department>;
  segments: Array<MarketSegment>;
};

export type BusinessModel = {
  __typename?: 'BusinessModel';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type FieldOfActivity = {
  __typename?: 'FieldOfActivity';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type StageOfDevelopment = {
  __typename?: 'StageOfDevelopment';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UserInCompany = {
  __typename?: 'UserInCompany';
  id: Scalars['ID'];
  userId: Scalars['ID'];
  role: UserRole;
  companyId: Scalars['ID'];
};

export enum UserRole {
  ADMIN = 'ADMIN',
  OWNER = 'OWNER',
  MEMBER = 'MEMBER'
}

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  name: Scalars['String'];
  members: Array<UserInCompany>;
  departments: Array<Department>;
  models: Array<FinModel>;
  businessModelId: Scalars['ID'];
  stageOfDevelopmentId: Scalars['ID'];
  fieldOfActivityId: Scalars['ID'];
  businessModel: BusinessModel;
  fieldOfActivity: FieldOfActivity;
  stageOfDevelopment: StageOfDevelopment;
};

export type Employee = {
  __typename?: 'Employee';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  departmentId: Scalars['ID'];
  annualFixedSalary: Scalars['Int'];
  additionalMonthlyOverhead: Scalars['Int'];
  monthlyCommission: Scalars['Int'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  counts: Array<Scalars['Int']>;
  name: Scalars['String'];
  roleDescription: Scalars['String'];
  annualFixedSalary: Scalars['Int'];
  additionalMonthlyOverhead: Scalars['Int'];
  monthlyCommission: Scalars['Int'];
  departmentId: Scalars['ID'];
};

export type Department = {
  __typename?: 'Department';
  id: Scalars['ID'];
  name: Scalars['String'];
  company: Company;
  companyId: Scalars['ID'];
  models: Array<FinModel>;
  employees: Array<Employee>;
  roles: Array<Role>;
};

export type CalculatedRecommendations = {
  __typename?: 'CalculatedRecommendations';
  yourSalesHeads?: Maybe<Array<Scalars['Float']>>;
  recommendedSalesHeads: Array<Scalars['Float']>;
  yourSupportHeads?: Maybe<Array<Scalars['Float']>>;
  recommendedSupportHeads: Array<Scalars['Float']>;
};

export type CalculatedSegment = {
  __typename?: 'CalculatedSegment';
  name: Scalars['String'];
  marketingBudgetDistribution: Array<Scalars['Float']>;
  bookings: Array<Scalars['Float']>;
  revenue: Array<Scalars['Float']>;
  organicLeads: Array<Scalars['Float']>;
  totalLeads: Array<Scalars['Float']>;
  marketingLeads: Array<Scalars['Float']>;
  totalOpportunities: Array<Scalars['Float']>;
  activeOpportunities: Array<Scalars['Float']>;
  wonOpportunities: Array<Scalars['Float']>;
  activeCustomers: Array<Scalars['Float']>;
};

export type CalculatedEmployee = {
  __typename?: 'CalculatedEmployee';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  cost: Array<Scalars['Float']>;
};

export type CalculatedRole = {
  __typename?: 'CalculatedRole';
  name: Scalars['String'];
  counts: Array<Scalars['Float']>;
};

export type CalculatedDepartment = {
  __typename?: 'CalculatedDepartment';
  name: Scalars['String'];
  totalCost: Array<Scalars['Float']>;
  employees: Array<CalculatedEmployee>;
  roles: Array<CalculatedRole>;
};

export type CalculatedTeam = {
  __typename?: 'CalculatedTeam';
  totalCost: Array<Scalars['Float']>;
  departments: Array<CalculatedDepartment>;
};

export type CalculatedModel = {
  __typename?: 'CalculatedModel';
  bookings: Array<Scalars['Float']>;
  revenue: Array<Scalars['Float']>;
  totalCost: Array<Scalars['Float']>;
  ebitda: Array<Scalars['Float']>;
  marketingBudget: Array<Scalars['Float']>;
  recommendations: CalculatedRecommendations;
  segments: Array<CalculatedSegment>;
  team: CalculatedTeam;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  department?: Maybe<Department>;
  employee?: Maybe<Employee>;
  role?: Maybe<Role>;
  calculate: CalculatedModel;
  finModel?: Maybe<FinModel>;
  marketSegment?: Maybe<MarketSegment>;
  company?: Maybe<Company>;
  myCompanies: Array<Company>;
  stagesOfDevelopment: Array<StageOfDevelopment>;
  fieldsOfActivity: Array<FieldOfActivity>;
  businessModel: Array<BusinessModel>;
};


export type QueryDepartmentArgs = {
  departmentId: Scalars['ID'];
};


export type QueryEmployeeArgs = {
  employeeId: Scalars['ID'];
};


export type QueryRoleArgs = {
  roleId: Scalars['ID'];
};


export type QueryCalculateArgs = {
  modelId: Scalars['ID'];
};


export type QueryFinModelArgs = {
  modelId: Scalars['ID'];
};


export type QueryMarketSegmentArgs = {
  segmentId: Scalars['ID'];
};


export type QueryCompanyArgs = {
  companyId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: AuthResponse;
  login: AuthResponse;
  createDepartment: Department;
  updateDepartment: Department;
  deleteDepartment: Scalars['Boolean'];
  createEmployee: Employee;
  updateEmployee: Employee;
  deleteEmployee: Scalars['Boolean'];
  createRole: Role;
  updateRole: Role;
  deleteRole: Scalars['Boolean'];
  updateColumnValue: CalculatedModel;
  appendColumn: FinModel;
  createFinModel: FinModel;
  updateFinModel: FinModel;
  deleteFinModel: Scalars['Boolean'];
  createFinModelAndMarketSegment: MarketSegment;
  createMarketSegment: MarketSegment;
  updateMarketSegment: MarketSegment;
  deleteMarketSegment: Scalars['Boolean'];
  createCompany: Company;
  updateCompany: Company;
  deleteCompany: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  user: RegisterUserInput;
  credentials: CredentialsInput;
};


export type MutationLoginArgs = {
  credentials: CredentialsInput;
};


export type MutationCreateDepartmentArgs = {
  department: DepartmentInput;
  companyId: Scalars['ID'];
};


export type MutationUpdateDepartmentArgs = {
  department: DepartmentUpdateInput;
  departmentId: Scalars['ID'];
};


export type MutationDeleteDepartmentArgs = {
  departmentId: Scalars['ID'];
};


export type MutationCreateEmployeeArgs = {
  employee: EmployeeInput;
  departmentId: Scalars['ID'];
};


export type MutationUpdateEmployeeArgs = {
  employee: EmployeeUpdateInput;
  employeeId: Scalars['ID'];
};


export type MutationDeleteEmployeeArgs = {
  employeeId: Scalars['ID'];
};


export type MutationCreateRoleArgs = {
  role: RoleInput;
  departmentId: Scalars['ID'];
};


export type MutationUpdateRoleArgs = {
  role: RoleUpdateInput;
  roleId: Scalars['ID'];
};


export type MutationDeleteRoleArgs = {
  roleId: Scalars['ID'];
};


export type MutationUpdateColumnValueArgs = {
  roleCounts?: Maybe<UpdateRoleCounts>;
  organicLeads?: Maybe<UpdateOrganicLeads>;
  budgetDistribution?: Maybe<UpdateBudgetDistribution>;
  marketingBudget?: Maybe<UpdateMarketingBudget>;
};


export type MutationAppendColumnArgs = {
  modelId: Scalars['ID'];
};


export type MutationCreateFinModelArgs = {
  model: FinModelInput;
  companyId: Scalars['ID'];
};


export type MutationUpdateFinModelArgs = {
  model: FinModelUpdateInput;
  modelId: Scalars['ID'];
};


export type MutationDeleteFinModelArgs = {
  modelId: Scalars['ID'];
};


export type MutationCreateFinModelAndMarketSegmentArgs = {
  segment: MarketSegmentWithModelInput;
  companyId: Scalars['ID'];
};


export type MutationCreateMarketSegmentArgs = {
  segment: MarketSegmentInput;
  modelId: Scalars['ID'];
};


export type MutationUpdateMarketSegmentArgs = {
  segment: MarketSegmentUpdateInput;
  segmentId: Scalars['ID'];
};


export type MutationDeleteMarketSegmentArgs = {
  segmentId: Scalars['ID'];
};


export type MutationCreateCompanyArgs = {
  company: CompanyInput;
};


export type MutationUpdateCompanyArgs = {
  company: CompanyUpdateInput;
  companyId: Scalars['ID'];
};


export type MutationDeleteCompanyArgs = {
  companyId: Scalars['ID'];
};

export type RegisterUserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type CredentialsInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type DepartmentInput = {
  name: Scalars['String'];
};

export type DepartmentUpdateInput = {
  name?: Maybe<Scalars['String']>;
};

export type EmployeeInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  jobDescription: Scalars['String'];
  roleDescription: Scalars['String'];
  annualFixedSalary: Scalars['Int'];
  additionalMonthlyOverhead: Scalars['Int'];
  monthlyCommission: Scalars['Int'];
};

export type EmployeeUpdateInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  jobDescription?: Maybe<Scalars['String']>;
  roleDescription?: Maybe<Scalars['String']>;
  annualFixedSalary?: Maybe<Scalars['Int']>;
  additionalMonthlyOverhead?: Maybe<Scalars['Int']>;
  monthlyCommission?: Maybe<Scalars['Int']>;
};

export type RoleInput = {
  name: Scalars['String'];
  roleDescription: Scalars['String'];
  annualFixedSalary: Scalars['Int'];
  additionalMonthlyOverhead: Scalars['Int'];
  monthlyCommission: Scalars['Int'];
};

export type RoleUpdateInput = {
  name?: Maybe<Scalars['String']>;
  roleDescription?: Maybe<Scalars['String']>;
  annualFixedSalary?: Maybe<Scalars['Int']>;
  additionalMonthlyOverhead?: Maybe<Scalars['Int']>;
  monthlyCommission?: Maybe<Scalars['Int']>;
};

export type UpdateRoleCounts = {
  roleId: Scalars['ID'];
  modelId: Scalars['ID'];
  column: Scalars['Int'];
  value: Scalars['Int'];
};

export type UpdateOrganicLeads = {
  segmentId: Scalars['ID'];
  column: Scalars['Int'];
  value: Scalars['Int'];
};

export type UpdateBudgetDistribution = {
  segmentId: Scalars['ID'];
  column: Scalars['Int'];
  value: Scalars['Float'];
};

export type UpdateMarketingBudget = {
  modelId: Scalars['ID'];
  column: Scalars['Int'];
  value: Scalars['Int'];
};

export type FinModelInput = {
  name: Scalars['String'];
  departments?: Maybe<Array<DepartmentConnectInput>>;
};

export type DepartmentConnectInput = {
  id: Scalars['ID'];
};

export type FinModelUpdateInput = {
  name?: Maybe<Scalars['String']>;
  departments?: Maybe<Array<DepartmentConnectInput>>;
};

export type MarketSegmentWithModelInput = {
  name: Scalars['String'];
  LAC: Scalars['Int'];
  LPO: Scalars['Int'];
  LNT: Scalars['Int'];
  LTOC: Scalars['Float'];
  ASL: Scalars['Int'];
  OCR: Scalars['Float'];
  ACV: Scalars['Int'];
  OCV: Scalars['Int'];
  ACC: Scalars['Float'];
  MOSH: Scalars['Int'];
  MCSH: Scalars['Int'];
};

export type MarketSegmentInput = {
  name: Scalars['String'];
  LAC: Scalars['Int'];
  LPO: Scalars['Int'];
  LNT: Scalars['Int'];
  LTOC: Scalars['Float'];
  ASL: Scalars['Int'];
  OCR: Scalars['Float'];
  ACV: Scalars['Int'];
  OCV: Scalars['Int'];
  ACC: Scalars['Float'];
  MOSH: Scalars['Int'];
  MCSH: Scalars['Int'];
};

export type MarketSegmentUpdateInput = {
  name?: Maybe<Scalars['String']>;
  LAC?: Maybe<Scalars['Int']>;
  LPO?: Maybe<Scalars['Int']>;
  LNT?: Maybe<Scalars['Int']>;
  LTOC: Scalars['Float'];
  ASL?: Maybe<Scalars['Int']>;
  OCR: Scalars['Float'];
  ACV?: Maybe<Scalars['Int']>;
  OCV?: Maybe<Scalars['Int']>;
  ACC: Scalars['Float'];
  MOSH?: Maybe<Scalars['Int']>;
  MCSH?: Maybe<Scalars['Int']>;
};

export type CompanyInput = {
  name: Scalars['String'];
  businessModel: BusinessModelInput;
  stageOfDevelopment: StageOfDevelopmentInput;
  fieldOfActivity: FieldOfActivityInput;
};

export type BusinessModelInput = {
  id: Scalars['ID'];
};

export type StageOfDevelopmentInput = {
  id: Scalars['ID'];
};

export type FieldOfActivityInput = {
  id: Scalars['ID'];
};

export type CompanyUpdateInput = {
  name?: Maybe<Scalars['String']>;
  businessModel?: Maybe<BusinessModelInput>;
  stageOfDevelopment?: Maybe<StageOfDevelopmentInput>;
  fieldOfActivity?: Maybe<FieldOfActivityInput>;
};

export type CreateCompanyMutationVariables = Exact<{
  name: Scalars['String'];
  fieldOfActivity: FieldOfActivityInput;
  stageOfDevelopment: StageOfDevelopmentInput;
  businessModel: BusinessModelInput;
}>;


export type CreateCompanyMutation = (
  { __typename?: 'Mutation' }
  & { createCompany: (
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'name'>
  ) }
);

export type GetCompanyQueryVariables = Exact<{
  companyId: Scalars['ID'];
}>;


export type GetCompanyQuery = (
  { __typename?: 'Query' }
  & { company?: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'name'>
  )> }
);

export type GetMyCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyCompaniesQuery = (
  { __typename?: 'Query' }
  & { myCompanies: Array<(
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'name'>
  )> }
);

export type CreateDepartmentMutationVariables = Exact<{
  departament: DepartmentInput;
  companyID: Scalars['ID'];
}>;


export type CreateDepartmentMutation = (
  { __typename?: 'Mutation' }
  & { createDepartment: (
    { __typename?: 'Department' }
    & Pick<Department, 'id'>
  ) }
);

export type UpdateDepartmentMutationVariables = Exact<{
  departmentId: Scalars['ID'];
  name: Scalars['String'];
}>;


export type UpdateDepartmentMutation = (
  { __typename?: 'Mutation' }
  & { updateDepartment: (
    { __typename?: 'Department' }
    & Pick<Department, 'name'>
  ) }
);

export type DeleteDepartmentMutationVariables = Exact<{
  departmentId: Scalars['ID'];
}>;


export type DeleteDepartmentMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteDepartment'>
);

export type GetDepartmentsQueryVariables = Exact<{
  companyId: Scalars['ID'];
}>;


export type GetDepartmentsQuery = (
  { __typename?: 'Query' }
  & { company?: Maybe<(
    { __typename?: 'Company' }
    & { departments: Array<(
      { __typename?: 'Department' }
      & Pick<Department, 'id' | 'name'>
    )> }
  )> }
);

export type CreateEmployeeMutationVariables = Exact<{
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  jobDescription: Scalars['String'];
  roleDescription: Scalars['String'];
  annualFixedSalary: Scalars['Int'];
  monthlyCommission: Scalars['Int'];
  additionalMonthlyOverhead: Scalars['Int'];
  departmentId: Scalars['ID'];
}>;


export type CreateEmployeeMutation = (
  { __typename?: 'Mutation' }
  & { createEmployee: (
    { __typename?: 'Employee' }
    & Pick<Employee, 'id'>
  ) }
);

export type UpdateEmployeeMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  jobDescription: Scalars['String'];
  roleDescription: Scalars['String'];
  annualFixedSalary: Scalars['Int'];
  additionalMonthlyOverhead: Scalars['Int'];
  monthlyCommission: Scalars['Int'];
  employeeId: Scalars['ID'];
}>;


export type UpdateEmployeeMutation = (
  { __typename?: 'Mutation' }
  & { updateEmployee: (
    { __typename?: 'Employee' }
    & Pick<Employee, 'id'>
  ) }
);

export type DeleteEmployeeMutationVariables = Exact<{
  employeeId: Scalars['ID'];
}>;


export type DeleteEmployeeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteEmployee'>
);

export type GetEmployeesQueryVariables = Exact<{
  departmentId: Scalars['ID'];
}>;


export type GetEmployeesQuery = (
  { __typename?: 'Query' }
  & { department?: Maybe<(
    { __typename?: 'Department' }
    & { employees: Array<(
      { __typename?: 'Employee' }
      & Pick<Employee, 'id' | 'firstName' | 'lastName' | 'annualFixedSalary' | 'additionalMonthlyOverhead' | 'monthlyCommission'>
    )> }
  )> }
);

export type GetEmployeeQueryVariables = Exact<{
  employeeId: Scalars['ID'];
}>;


export type GetEmployeeQuery = (
  { __typename?: 'Query' }
  & { employee?: Maybe<(
    { __typename?: 'Employee' }
    & Pick<Employee, 'id' | 'firstName' | 'lastName' | 'annualFixedSalary' | 'additionalMonthlyOverhead' | 'monthlyCommission'>
  )> }
);

export type CreateFinModelMutationVariables = Exact<{
  model: FinModelInput;
  companyId: Scalars['ID'];
}>;


export type CreateFinModelMutation = (
  { __typename?: 'Mutation' }
  & { createFinModel: (
    { __typename?: 'FinModel' }
    & Pick<FinModel, 'name'>
  ) }
);

export type UpdateFinModelMutationVariables = Exact<{
  modelId: Scalars['ID'];
  model: FinModelUpdateInput;
}>;


export type UpdateFinModelMutation = (
  { __typename?: 'Mutation' }
  & { updateFinModel: (
    { __typename?: 'FinModel' }
    & Pick<FinModel, 'name'>
  ) }
);

export type DeleteFinModelMutationVariables = Exact<{
  modelId: Scalars['ID'];
}>;


export type DeleteFinModelMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteFinModel'>
);

export type GetModelsQueryVariables = Exact<{
  companyId: Scalars['ID'];
}>;


export type GetModelsQuery = (
  { __typename?: 'Query' }
  & { company?: Maybe<(
    { __typename?: 'Company' }
    & { models: Array<(
      { __typename?: 'FinModel' }
      & Pick<FinModel, 'id' | 'name'>
    )> }
  )> }
);

export type CreateRoleMutationVariables = Exact<{
  departmentId: Scalars['ID'];
  name: Scalars['String'];
  roleDescription: Scalars['String'];
  annualFixedSalary: Scalars['Int'];
  additionalMonthlyOverhead: Scalars['Int'];
  monthlyCommission: Scalars['Int'];
}>;


export type CreateRoleMutation = (
  { __typename?: 'Mutation' }
  & { createRole: (
    { __typename?: 'Role' }
    & Pick<Role, 'id'>
  ) }
);

export type UpdateRoleMutationVariables = Exact<{
  roleId: Scalars['ID'];
  name: Scalars['String'];
  roleDescription: Scalars['String'];
  annualFixedSalary: Scalars['Int'];
  additionalMonthlyOverhead: Scalars['Int'];
  monthlyCommission: Scalars['Int'];
}>;


export type UpdateRoleMutation = (
  { __typename?: 'Mutation' }
  & { updateRole: (
    { __typename?: 'Role' }
    & Pick<Role, 'id'>
  ) }
);

export type DeleteRoleMutationVariables = Exact<{
  roleId: Scalars['ID'];
}>;


export type DeleteRoleMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteRole'>
);

export type GetRolesQueryVariables = Exact<{
  departmentId: Scalars['ID'];
}>;


export type GetRolesQuery = (
  { __typename?: 'Query' }
  & { department?: Maybe<(
    { __typename?: 'Department' }
    & { roles: Array<(
      { __typename?: 'Role' }
      & Pick<Role, 'id' | 'counts' | 'name' | 'roleDescription' | 'additionalMonthlyOverhead' | 'annualFixedSalary' | 'monthlyCommission'>
    )> }
  )> }
);

export type CreateSegmentMutationVariables = Exact<{
  modelId: Scalars['ID'];
  name: Scalars['String'];
  LAC: Scalars['Int'];
  LPO: Scalars['Int'];
  LNT: Scalars['Int'];
  LTOC: Scalars['Float'];
  ASL: Scalars['Int'];
  OCR: Scalars['Float'];
  ACV: Scalars['Int'];
  OCV: Scalars['Int'];
  ACC: Scalars['Float'];
  MOSH: Scalars['Int'];
  MCSH: Scalars['Int'];
}>;


export type CreateSegmentMutation = (
  { __typename?: 'Mutation' }
  & { createMarketSegment: (
    { __typename?: 'MarketSegment' }
    & Pick<MarketSegment, 'id' | 'name' | 'LAC' | 'ACC' | 'ACV' | 'ASL' | 'LNT' | 'LPO' | 'LTOC' | 'MCSH' | 'MOSH' | 'OCR' | 'OCV'>
  ) }
);

export type CreateModelAndSegmentMutationVariables = Exact<{
  companyId: Scalars['ID'];
  name: Scalars['String'];
  LAC: Scalars['Int'];
  LPO: Scalars['Int'];
  LNT: Scalars['Int'];
  LTOC: Scalars['Float'];
  ASL: Scalars['Int'];
  OCR: Scalars['Float'];
  ACV: Scalars['Int'];
  OCV: Scalars['Int'];
  ACC: Scalars['Float'];
  MOSH: Scalars['Int'];
  MCSH: Scalars['Int'];
}>;


export type CreateModelAndSegmentMutation = (
  { __typename?: 'Mutation' }
  & { createFinModelAndMarketSegment: (
    { __typename?: 'MarketSegment' }
    & Pick<MarketSegment, 'id' | 'modelId'>
  ) }
);

export type UpdateSegmentMutationVariables = Exact<{
  name: Scalars['String'];
  LAC: Scalars['Int'];
  LPO: Scalars['Int'];
  LNT: Scalars['Int'];
  LTOC: Scalars['Float'];
  ASL: Scalars['Int'];
  OCR: Scalars['Float'];
  ACV: Scalars['Int'];
  OCV: Scalars['Int'];
  ACC: Scalars['Float'];
  MOSH: Scalars['Int'];
  MCSH: Scalars['Int'];
  segmentId: Scalars['ID'];
}>;


export type UpdateSegmentMutation = (
  { __typename?: 'Mutation' }
  & { updateMarketSegment: (
    { __typename?: 'MarketSegment' }
    & Pick<MarketSegment, 'id'>
  ) }
);

export type DeleteSegmentMutationVariables = Exact<{
  segmentId: Scalars['ID'];
}>;


export type DeleteSegmentMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteMarketSegment'>
);

export type GetSegmentsQueryVariables = Exact<{
  modelId: Scalars['ID'];
}>;


export type GetSegmentsQuery = (
  { __typename?: 'Query' }
  & { finModel?: Maybe<(
    { __typename?: 'FinModel' }
    & { segments: Array<(
      { __typename?: 'MarketSegment' }
      & Pick<MarketSegment, 'id' | 'name' | 'LAC' | 'LNT' | 'LPO' | 'LTOC' | 'ASL' | 'OCR' | 'ACV' | 'OCV' | 'ACC' | 'MOSH' | 'MCSH'>
    )> }
  )> }
);

export type GetSegmentQueryVariables = Exact<{
  segmentId: Scalars['ID'];
}>;


export type GetSegmentQuery = (
  { __typename?: 'Query' }
  & { marketSegment?: Maybe<(
    { __typename?: 'MarketSegment' }
    & Pick<MarketSegment, 'id' | 'name' | 'LAC' | 'LNT' | 'LPO' | 'LTOC' | 'ASL' | 'OCR' | 'ACV' | 'OCV' | 'ACC' | 'MOSH' | 'MCSH'>
  )> }
);

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthResponse' }
    & Pick<AuthResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>
    ) }
  ) }
);

export type RegisterMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'AuthResponse' }
    & Pick<AuthResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>
    ) }
  ) }
);

export type CalculateModelQueryVariables = Exact<{
  modelId: Scalars['ID'];
}>;


export type CalculateModelQuery = (
  { __typename?: 'Query' }
  & { calculate: (
    { __typename?: 'CalculatedModel' }
    & Pick<CalculatedModel, 'bookings' | 'revenue' | 'totalCost' | 'marketingBudget'>
    & { recommendations: (
      { __typename?: 'CalculatedRecommendations' }
      & Pick<CalculatedRecommendations, 'yourSalesHeads' | 'recommendedSalesHeads' | 'yourSupportHeads' | 'recommendedSupportHeads'>
    ), segments: Array<(
      { __typename?: 'CalculatedSegment' }
      & Pick<CalculatedSegment, 'name' | 'marketingBudgetDistribution' | 'bookings' | 'revenue' | 'organicLeads' | 'marketingLeads' | 'totalLeads' | 'totalOpportunities' | 'activeOpportunities' | 'activeCustomers'>
    )>, team: (
      { __typename?: 'CalculatedTeam' }
      & Pick<CalculatedTeam, 'totalCost'>
      & { departments: Array<(
        { __typename?: 'CalculatedDepartment' }
        & Pick<CalculatedDepartment, 'name' | 'totalCost'>
        & { employees: Array<(
          { __typename?: 'CalculatedEmployee' }
          & Pick<CalculatedEmployee, 'firstName' | 'lastName' | 'cost'>
        )>, roles: Array<(
          { __typename?: 'CalculatedRole' }
          & Pick<CalculatedRole, 'name' | 'counts'>
        )> }
      )> }
    ) }
  ) }
);

export type GetBusinessModelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBusinessModelsQuery = (
  { __typename?: 'Query' }
  & { businessModel: Array<(
    { __typename?: 'BusinessModel' }
    & Pick<BusinessModel, 'id' | 'name'>
  )> }
);

export type GetStagesOfDevelopmentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStagesOfDevelopmentQuery = (
  { __typename?: 'Query' }
  & { stagesOfDevelopment: Array<(
    { __typename?: 'StageOfDevelopment' }
    & Pick<StageOfDevelopment, 'id' | 'name'>
  )> }
);

export type GetFieldsOfActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFieldsOfActivitiesQuery = (
  { __typename?: 'Query' }
  & { fieldsOfActivity: Array<(
    { __typename?: 'FieldOfActivity' }
    & Pick<FieldOfActivity, 'id' | 'name'>
  )> }
);


export const CreateCompanyDocument = gql`
    mutation CreateCompany($name: String!, $fieldOfActivity: FieldOfActivityInput!, $stageOfDevelopment: StageOfDevelopmentInput!, $businessModel: BusinessModelInput!) {
  createCompany(
    company: {name: $name, fieldOfActivity: $fieldOfActivity, stageOfDevelopment: $stageOfDevelopment, businessModel: $businessModel}
  ) {
    id
    name
  }
}
    `;
export type CreateCompanyMutationFn = Apollo.MutationFunction<CreateCompanyMutation, CreateCompanyMutationVariables>;

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMutation, { data, loading, error }] = useCreateCompanyMutation({
 *   variables: {
 *      name: // value for 'name'
 *      fieldOfActivity: // value for 'fieldOfActivity'
 *      stageOfDevelopment: // value for 'stageOfDevelopment'
 *      businessModel: // value for 'businessModel'
 *   },
 * });
 */
export function useCreateCompanyMutation(baseOptions?: Apollo.MutationHookOptions<CreateCompanyMutation, CreateCompanyMutationVariables>) {
        return Apollo.useMutation<CreateCompanyMutation, CreateCompanyMutationVariables>(CreateCompanyDocument, baseOptions);
      }
export type CreateCompanyMutationHookResult = ReturnType<typeof useCreateCompanyMutation>;
export type CreateCompanyMutationResult = Apollo.MutationResult<CreateCompanyMutation>;
export type CreateCompanyMutationOptions = Apollo.BaseMutationOptions<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const GetCompanyDocument = gql`
    query GetCompany($companyId: ID!) {
  company(companyId: $companyId) {
    id
    name
  }
}
    `;

/**
 * __useGetCompanyQuery__
 *
 * To run a query within a React component, call `useGetCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useGetCompanyQuery(baseOptions: Apollo.QueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables>) {
        return Apollo.useQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, baseOptions);
      }
export function useGetCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables>) {
          return Apollo.useLazyQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, baseOptions);
        }
export type GetCompanyQueryHookResult = ReturnType<typeof useGetCompanyQuery>;
export type GetCompanyLazyQueryHookResult = ReturnType<typeof useGetCompanyLazyQuery>;
export type GetCompanyQueryResult = Apollo.QueryResult<GetCompanyQuery, GetCompanyQueryVariables>;
export const GetMyCompaniesDocument = gql`
    query GetMyCompanies {
  myCompanies {
    id
    name
  }
}
    `;

/**
 * __useGetMyCompaniesQuery__
 *
 * To run a query within a React component, call `useGetMyCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<GetMyCompaniesQuery, GetMyCompaniesQueryVariables>) {
        return Apollo.useQuery<GetMyCompaniesQuery, GetMyCompaniesQueryVariables>(GetMyCompaniesDocument, baseOptions);
      }
export function useGetMyCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyCompaniesQuery, GetMyCompaniesQueryVariables>) {
          return Apollo.useLazyQuery<GetMyCompaniesQuery, GetMyCompaniesQueryVariables>(GetMyCompaniesDocument, baseOptions);
        }
export type GetMyCompaniesQueryHookResult = ReturnType<typeof useGetMyCompaniesQuery>;
export type GetMyCompaniesLazyQueryHookResult = ReturnType<typeof useGetMyCompaniesLazyQuery>;
export type GetMyCompaniesQueryResult = Apollo.QueryResult<GetMyCompaniesQuery, GetMyCompaniesQueryVariables>;
export const CreateDepartmentDocument = gql`
    mutation CreateDepartment($departament: DepartmentInput!, $companyID: ID!) {
  createDepartment(department: $departament, companyId: $companyID) {
    id
  }
}
    `;
export type CreateDepartmentMutationFn = Apollo.MutationFunction<CreateDepartmentMutation, CreateDepartmentMutationVariables>;

/**
 * __useCreateDepartmentMutation__
 *
 * To run a mutation, you first call `useCreateDepartmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDepartmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDepartmentMutation, { data, loading, error }] = useCreateDepartmentMutation({
 *   variables: {
 *      departament: // value for 'departament'
 *      companyID: // value for 'companyID'
 *   },
 * });
 */
export function useCreateDepartmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateDepartmentMutation, CreateDepartmentMutationVariables>) {
        return Apollo.useMutation<CreateDepartmentMutation, CreateDepartmentMutationVariables>(CreateDepartmentDocument, baseOptions);
      }
export type CreateDepartmentMutationHookResult = ReturnType<typeof useCreateDepartmentMutation>;
export type CreateDepartmentMutationResult = Apollo.MutationResult<CreateDepartmentMutation>;
export type CreateDepartmentMutationOptions = Apollo.BaseMutationOptions<CreateDepartmentMutation, CreateDepartmentMutationVariables>;
export const UpdateDepartmentDocument = gql`
    mutation updateDepartment($departmentId: ID!, $name: String!) {
  updateDepartment(departmentId: $departmentId, department: {name: $name}) {
    name
  }
}
    `;
export type UpdateDepartmentMutationFn = Apollo.MutationFunction<UpdateDepartmentMutation, UpdateDepartmentMutationVariables>;

/**
 * __useUpdateDepartmentMutation__
 *
 * To run a mutation, you first call `useUpdateDepartmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDepartmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDepartmentMutation, { data, loading, error }] = useUpdateDepartmentMutation({
 *   variables: {
 *      departmentId: // value for 'departmentId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateDepartmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDepartmentMutation, UpdateDepartmentMutationVariables>) {
        return Apollo.useMutation<UpdateDepartmentMutation, UpdateDepartmentMutationVariables>(UpdateDepartmentDocument, baseOptions);
      }
export type UpdateDepartmentMutationHookResult = ReturnType<typeof useUpdateDepartmentMutation>;
export type UpdateDepartmentMutationResult = Apollo.MutationResult<UpdateDepartmentMutation>;
export type UpdateDepartmentMutationOptions = Apollo.BaseMutationOptions<UpdateDepartmentMutation, UpdateDepartmentMutationVariables>;
export const DeleteDepartmentDocument = gql`
    mutation deleteDepartment($departmentId: ID!) {
  deleteDepartment(departmentId: $departmentId)
}
    `;
export type DeleteDepartmentMutationFn = Apollo.MutationFunction<DeleteDepartmentMutation, DeleteDepartmentMutationVariables>;

/**
 * __useDeleteDepartmentMutation__
 *
 * To run a mutation, you first call `useDeleteDepartmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDepartmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDepartmentMutation, { data, loading, error }] = useDeleteDepartmentMutation({
 *   variables: {
 *      departmentId: // value for 'departmentId'
 *   },
 * });
 */
export function useDeleteDepartmentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDepartmentMutation, DeleteDepartmentMutationVariables>) {
        return Apollo.useMutation<DeleteDepartmentMutation, DeleteDepartmentMutationVariables>(DeleteDepartmentDocument, baseOptions);
      }
export type DeleteDepartmentMutationHookResult = ReturnType<typeof useDeleteDepartmentMutation>;
export type DeleteDepartmentMutationResult = Apollo.MutationResult<DeleteDepartmentMutation>;
export type DeleteDepartmentMutationOptions = Apollo.BaseMutationOptions<DeleteDepartmentMutation, DeleteDepartmentMutationVariables>;
export const GetDepartmentsDocument = gql`
    query GetDepartments($companyId: ID!) {
  company(companyId: $companyId) {
    departments {
      id
      name
    }
  }
}
    `;

/**
 * __useGetDepartmentsQuery__
 *
 * To run a query within a React component, call `useGetDepartmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDepartmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDepartmentsQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useGetDepartmentsQuery(baseOptions: Apollo.QueryHookOptions<GetDepartmentsQuery, GetDepartmentsQueryVariables>) {
        return Apollo.useQuery<GetDepartmentsQuery, GetDepartmentsQueryVariables>(GetDepartmentsDocument, baseOptions);
      }
export function useGetDepartmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDepartmentsQuery, GetDepartmentsQueryVariables>) {
          return Apollo.useLazyQuery<GetDepartmentsQuery, GetDepartmentsQueryVariables>(GetDepartmentsDocument, baseOptions);
        }
export type GetDepartmentsQueryHookResult = ReturnType<typeof useGetDepartmentsQuery>;
export type GetDepartmentsLazyQueryHookResult = ReturnType<typeof useGetDepartmentsLazyQuery>;
export type GetDepartmentsQueryResult = Apollo.QueryResult<GetDepartmentsQuery, GetDepartmentsQueryVariables>;
export const CreateEmployeeDocument = gql`
    mutation CreateEmployee($lastName: String!, $firstName: String!, $jobDescription: String!, $roleDescription: String!, $annualFixedSalary: Int!, $monthlyCommission: Int!, $additionalMonthlyOverhead: Int!, $departmentId: ID!) {
  createEmployee(
    departmentId: $departmentId
    employee: {lastName: $lastName, firstName: $firstName, jobDescription: $jobDescription, roleDescription: $roleDescription, annualFixedSalary: $annualFixedSalary, monthlyCommission: $monthlyCommission, additionalMonthlyOverhead: $additionalMonthlyOverhead}
  ) {
    id
  }
}
    `;
export type CreateEmployeeMutationFn = Apollo.MutationFunction<CreateEmployeeMutation, CreateEmployeeMutationVariables>;

/**
 * __useCreateEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmployeeMutation, { data, loading, error }] = useCreateEmployeeMutation({
 *   variables: {
 *      lastName: // value for 'lastName'
 *      firstName: // value for 'firstName'
 *      jobDescription: // value for 'jobDescription'
 *      roleDescription: // value for 'roleDescription'
 *      annualFixedSalary: // value for 'annualFixedSalary'
 *      monthlyCommission: // value for 'monthlyCommission'
 *      additionalMonthlyOverhead: // value for 'additionalMonthlyOverhead'
 *      departmentId: // value for 'departmentId'
 *   },
 * });
 */
export function useCreateEmployeeMutation(baseOptions?: Apollo.MutationHookOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>) {
        return Apollo.useMutation<CreateEmployeeMutation, CreateEmployeeMutationVariables>(CreateEmployeeDocument, baseOptions);
      }
export type CreateEmployeeMutationHookResult = ReturnType<typeof useCreateEmployeeMutation>;
export type CreateEmployeeMutationResult = Apollo.MutationResult<CreateEmployeeMutation>;
export type CreateEmployeeMutationOptions = Apollo.BaseMutationOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>;
export const UpdateEmployeeDocument = gql`
    mutation updateEmployee($firstName: String!, $lastName: String!, $jobDescription: String!, $roleDescription: String!, $annualFixedSalary: Int!, $additionalMonthlyOverhead: Int!, $monthlyCommission: Int!, $employeeId: ID!) {
  updateEmployee(
    employeeId: $employeeId
    employee: {firstName: $firstName, lastName: $lastName, jobDescription: $jobDescription, roleDescription: $roleDescription, annualFixedSalary: $annualFixedSalary, additionalMonthlyOverhead: $additionalMonthlyOverhead, monthlyCommission: $monthlyCommission}
  ) {
    id
  }
}
    `;
export type UpdateEmployeeMutationFn = Apollo.MutationFunction<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>;

/**
 * __useUpdateEmployeeMutation__
 *
 * To run a mutation, you first call `useUpdateEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmployeeMutation, { data, loading, error }] = useUpdateEmployeeMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      jobDescription: // value for 'jobDescription'
 *      roleDescription: // value for 'roleDescription'
 *      annualFixedSalary: // value for 'annualFixedSalary'
 *      additionalMonthlyOverhead: // value for 'additionalMonthlyOverhead'
 *      monthlyCommission: // value for 'monthlyCommission'
 *      employeeId: // value for 'employeeId'
 *   },
 * });
 */
export function useUpdateEmployeeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>) {
        return Apollo.useMutation<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>(UpdateEmployeeDocument, baseOptions);
      }
export type UpdateEmployeeMutationHookResult = ReturnType<typeof useUpdateEmployeeMutation>;
export type UpdateEmployeeMutationResult = Apollo.MutationResult<UpdateEmployeeMutation>;
export type UpdateEmployeeMutationOptions = Apollo.BaseMutationOptions<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>;
export const DeleteEmployeeDocument = gql`
    mutation deleteEmployee($employeeId: ID!) {
  deleteEmployee(employeeId: $employeeId)
}
    `;
export type DeleteEmployeeMutationFn = Apollo.MutationFunction<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>;

/**
 * __useDeleteEmployeeMutation__
 *
 * To run a mutation, you first call `useDeleteEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEmployeeMutation, { data, loading, error }] = useDeleteEmployeeMutation({
 *   variables: {
 *      employeeId: // value for 'employeeId'
 *   },
 * });
 */
export function useDeleteEmployeeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>) {
        return Apollo.useMutation<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>(DeleteEmployeeDocument, baseOptions);
      }
export type DeleteEmployeeMutationHookResult = ReturnType<typeof useDeleteEmployeeMutation>;
export type DeleteEmployeeMutationResult = Apollo.MutationResult<DeleteEmployeeMutation>;
export type DeleteEmployeeMutationOptions = Apollo.BaseMutationOptions<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>;
export const GetEmployeesDocument = gql`
    query getEmployees($departmentId: ID!) {
  department(departmentId: $departmentId) {
    employees {
      id
      firstName
      lastName
      annualFixedSalary
      additionalMonthlyOverhead
      monthlyCommission
    }
  }
}
    `;

/**
 * __useGetEmployeesQuery__
 *
 * To run a query within a React component, call `useGetEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmployeesQuery({
 *   variables: {
 *      departmentId: // value for 'departmentId'
 *   },
 * });
 */
export function useGetEmployeesQuery(baseOptions: Apollo.QueryHookOptions<GetEmployeesQuery, GetEmployeesQueryVariables>) {
        return Apollo.useQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(GetEmployeesDocument, baseOptions);
      }
export function useGetEmployeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmployeesQuery, GetEmployeesQueryVariables>) {
          return Apollo.useLazyQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(GetEmployeesDocument, baseOptions);
        }
export type GetEmployeesQueryHookResult = ReturnType<typeof useGetEmployeesQuery>;
export type GetEmployeesLazyQueryHookResult = ReturnType<typeof useGetEmployeesLazyQuery>;
export type GetEmployeesQueryResult = Apollo.QueryResult<GetEmployeesQuery, GetEmployeesQueryVariables>;
export const GetEmployeeDocument = gql`
    query getEmployee($employeeId: ID!) {
  employee(employeeId: $employeeId) {
    id
    firstName
    lastName
    annualFixedSalary
    additionalMonthlyOverhead
    monthlyCommission
  }
}
    `;

/**
 * __useGetEmployeeQuery__
 *
 * To run a query within a React component, call `useGetEmployeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmployeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmployeeQuery({
 *   variables: {
 *      employeeId: // value for 'employeeId'
 *   },
 * });
 */
export function useGetEmployeeQuery(baseOptions: Apollo.QueryHookOptions<GetEmployeeQuery, GetEmployeeQueryVariables>) {
        return Apollo.useQuery<GetEmployeeQuery, GetEmployeeQueryVariables>(GetEmployeeDocument, baseOptions);
      }
export function useGetEmployeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmployeeQuery, GetEmployeeQueryVariables>) {
          return Apollo.useLazyQuery<GetEmployeeQuery, GetEmployeeQueryVariables>(GetEmployeeDocument, baseOptions);
        }
export type GetEmployeeQueryHookResult = ReturnType<typeof useGetEmployeeQuery>;
export type GetEmployeeLazyQueryHookResult = ReturnType<typeof useGetEmployeeLazyQuery>;
export type GetEmployeeQueryResult = Apollo.QueryResult<GetEmployeeQuery, GetEmployeeQueryVariables>;
export const CreateFinModelDocument = gql`
    mutation CreateFinModel($model: FinModelInput!, $companyId: ID!) {
  createFinModel(model: $model, companyId: $companyId) {
    name
  }
}
    `;
export type CreateFinModelMutationFn = Apollo.MutationFunction<CreateFinModelMutation, CreateFinModelMutationVariables>;

/**
 * __useCreateFinModelMutation__
 *
 * To run a mutation, you first call `useCreateFinModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFinModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFinModelMutation, { data, loading, error }] = useCreateFinModelMutation({
 *   variables: {
 *      model: // value for 'model'
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useCreateFinModelMutation(baseOptions?: Apollo.MutationHookOptions<CreateFinModelMutation, CreateFinModelMutationVariables>) {
        return Apollo.useMutation<CreateFinModelMutation, CreateFinModelMutationVariables>(CreateFinModelDocument, baseOptions);
      }
export type CreateFinModelMutationHookResult = ReturnType<typeof useCreateFinModelMutation>;
export type CreateFinModelMutationResult = Apollo.MutationResult<CreateFinModelMutation>;
export type CreateFinModelMutationOptions = Apollo.BaseMutationOptions<CreateFinModelMutation, CreateFinModelMutationVariables>;
export const UpdateFinModelDocument = gql`
    mutation UpdateFinModel($modelId: ID!, $model: FinModelUpdateInput!) {
  updateFinModel(model: $model, modelId: $modelId) {
    name
  }
}
    `;
export type UpdateFinModelMutationFn = Apollo.MutationFunction<UpdateFinModelMutation, UpdateFinModelMutationVariables>;

/**
 * __useUpdateFinModelMutation__
 *
 * To run a mutation, you first call `useUpdateFinModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFinModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFinModelMutation, { data, loading, error }] = useUpdateFinModelMutation({
 *   variables: {
 *      modelId: // value for 'modelId'
 *      model: // value for 'model'
 *   },
 * });
 */
export function useUpdateFinModelMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFinModelMutation, UpdateFinModelMutationVariables>) {
        return Apollo.useMutation<UpdateFinModelMutation, UpdateFinModelMutationVariables>(UpdateFinModelDocument, baseOptions);
      }
export type UpdateFinModelMutationHookResult = ReturnType<typeof useUpdateFinModelMutation>;
export type UpdateFinModelMutationResult = Apollo.MutationResult<UpdateFinModelMutation>;
export type UpdateFinModelMutationOptions = Apollo.BaseMutationOptions<UpdateFinModelMutation, UpdateFinModelMutationVariables>;
export const DeleteFinModelDocument = gql`
    mutation DeleteFinModel($modelId: ID!) {
  deleteFinModel(modelId: $modelId)
}
    `;
export type DeleteFinModelMutationFn = Apollo.MutationFunction<DeleteFinModelMutation, DeleteFinModelMutationVariables>;

/**
 * __useDeleteFinModelMutation__
 *
 * To run a mutation, you first call `useDeleteFinModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFinModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFinModelMutation, { data, loading, error }] = useDeleteFinModelMutation({
 *   variables: {
 *      modelId: // value for 'modelId'
 *   },
 * });
 */
export function useDeleteFinModelMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFinModelMutation, DeleteFinModelMutationVariables>) {
        return Apollo.useMutation<DeleteFinModelMutation, DeleteFinModelMutationVariables>(DeleteFinModelDocument, baseOptions);
      }
export type DeleteFinModelMutationHookResult = ReturnType<typeof useDeleteFinModelMutation>;
export type DeleteFinModelMutationResult = Apollo.MutationResult<DeleteFinModelMutation>;
export type DeleteFinModelMutationOptions = Apollo.BaseMutationOptions<DeleteFinModelMutation, DeleteFinModelMutationVariables>;
export const GetModelsDocument = gql`
    query GetModels($companyId: ID!) {
  company(companyId: $companyId) {
    models {
      id
      name
    }
  }
}
    `;

/**
 * __useGetModelsQuery__
 *
 * To run a query within a React component, call `useGetModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetModelsQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useGetModelsQuery(baseOptions: Apollo.QueryHookOptions<GetModelsQuery, GetModelsQueryVariables>) {
        return Apollo.useQuery<GetModelsQuery, GetModelsQueryVariables>(GetModelsDocument, baseOptions);
      }
export function useGetModelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetModelsQuery, GetModelsQueryVariables>) {
          return Apollo.useLazyQuery<GetModelsQuery, GetModelsQueryVariables>(GetModelsDocument, baseOptions);
        }
export type GetModelsQueryHookResult = ReturnType<typeof useGetModelsQuery>;
export type GetModelsLazyQueryHookResult = ReturnType<typeof useGetModelsLazyQuery>;
export type GetModelsQueryResult = Apollo.QueryResult<GetModelsQuery, GetModelsQueryVariables>;
export const CreateRoleDocument = gql`
    mutation CreateRole($departmentId: ID!, $name: String!, $roleDescription: String!, $annualFixedSalary: Int!, $additionalMonthlyOverhead: Int!, $monthlyCommission: Int!) {
  createRole(
    departmentId: $departmentId
    role: {name: $name, roleDescription: $roleDescription, annualFixedSalary: $annualFixedSalary, monthlyCommission: $monthlyCommission, additionalMonthlyOverhead: $additionalMonthlyOverhead}
  ) {
    id
  }
}
    `;
export type CreateRoleMutationFn = Apollo.MutationFunction<CreateRoleMutation, CreateRoleMutationVariables>;

/**
 * __useCreateRoleMutation__
 *
 * To run a mutation, you first call `useCreateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoleMutation, { data, loading, error }] = useCreateRoleMutation({
 *   variables: {
 *      departmentId: // value for 'departmentId'
 *      name: // value for 'name'
 *      roleDescription: // value for 'roleDescription'
 *      annualFixedSalary: // value for 'annualFixedSalary'
 *      additionalMonthlyOverhead: // value for 'additionalMonthlyOverhead'
 *      monthlyCommission: // value for 'monthlyCommission'
 *   },
 * });
 */
export function useCreateRoleMutation(baseOptions?: Apollo.MutationHookOptions<CreateRoleMutation, CreateRoleMutationVariables>) {
        return Apollo.useMutation<CreateRoleMutation, CreateRoleMutationVariables>(CreateRoleDocument, baseOptions);
      }
export type CreateRoleMutationHookResult = ReturnType<typeof useCreateRoleMutation>;
export type CreateRoleMutationResult = Apollo.MutationResult<CreateRoleMutation>;
export type CreateRoleMutationOptions = Apollo.BaseMutationOptions<CreateRoleMutation, CreateRoleMutationVariables>;
export const UpdateRoleDocument = gql`
    mutation updateRole($roleId: ID!, $name: String!, $roleDescription: String!, $annualFixedSalary: Int!, $additionalMonthlyOverhead: Int!, $monthlyCommission: Int!) {
  updateRole(
    roleId: $roleId
    role: {name: $name, roleDescription: $roleDescription, annualFixedSalary: $annualFixedSalary, additionalMonthlyOverhead: $additionalMonthlyOverhead, monthlyCommission: $monthlyCommission}
  ) {
    id
  }
}
    `;
export type UpdateRoleMutationFn = Apollo.MutationFunction<UpdateRoleMutation, UpdateRoleMutationVariables>;

/**
 * __useUpdateRoleMutation__
 *
 * To run a mutation, you first call `useUpdateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoleMutation, { data, loading, error }] = useUpdateRoleMutation({
 *   variables: {
 *      roleId: // value for 'roleId'
 *      name: // value for 'name'
 *      roleDescription: // value for 'roleDescription'
 *      annualFixedSalary: // value for 'annualFixedSalary'
 *      additionalMonthlyOverhead: // value for 'additionalMonthlyOverhead'
 *      monthlyCommission: // value for 'monthlyCommission'
 *   },
 * });
 */
export function useUpdateRoleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRoleMutation, UpdateRoleMutationVariables>) {
        return Apollo.useMutation<UpdateRoleMutation, UpdateRoleMutationVariables>(UpdateRoleDocument, baseOptions);
      }
export type UpdateRoleMutationHookResult = ReturnType<typeof useUpdateRoleMutation>;
export type UpdateRoleMutationResult = Apollo.MutationResult<UpdateRoleMutation>;
export type UpdateRoleMutationOptions = Apollo.BaseMutationOptions<UpdateRoleMutation, UpdateRoleMutationVariables>;
export const DeleteRoleDocument = gql`
    mutation deleteRole($roleId: ID!) {
  deleteRole(roleId: $roleId)
}
    `;
export type DeleteRoleMutationFn = Apollo.MutationFunction<DeleteRoleMutation, DeleteRoleMutationVariables>;

/**
 * __useDeleteRoleMutation__
 *
 * To run a mutation, you first call `useDeleteRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoleMutation, { data, loading, error }] = useDeleteRoleMutation({
 *   variables: {
 *      roleId: // value for 'roleId'
 *   },
 * });
 */
export function useDeleteRoleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRoleMutation, DeleteRoleMutationVariables>) {
        return Apollo.useMutation<DeleteRoleMutation, DeleteRoleMutationVariables>(DeleteRoleDocument, baseOptions);
      }
export type DeleteRoleMutationHookResult = ReturnType<typeof useDeleteRoleMutation>;
export type DeleteRoleMutationResult = Apollo.MutationResult<DeleteRoleMutation>;
export type DeleteRoleMutationOptions = Apollo.BaseMutationOptions<DeleteRoleMutation, DeleteRoleMutationVariables>;
export const GetRolesDocument = gql`
    query getRoles($departmentId: ID!) {
  department(departmentId: $departmentId) {
    roles {
      id
      counts
      name
      roleDescription
      additionalMonthlyOverhead
      annualFixedSalary
      monthlyCommission
    }
  }
}
    `;

/**
 * __useGetRolesQuery__
 *
 * To run a query within a React component, call `useGetRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRolesQuery({
 *   variables: {
 *      departmentId: // value for 'departmentId'
 *   },
 * });
 */
export function useGetRolesQuery(baseOptions: Apollo.QueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
        return Apollo.useQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, baseOptions);
      }
export function useGetRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
          return Apollo.useLazyQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, baseOptions);
        }
export type GetRolesQueryHookResult = ReturnType<typeof useGetRolesQuery>;
export type GetRolesLazyQueryHookResult = ReturnType<typeof useGetRolesLazyQuery>;
export type GetRolesQueryResult = Apollo.QueryResult<GetRolesQuery, GetRolesQueryVariables>;
export const CreateSegmentDocument = gql`
    mutation createSegment($modelId: ID!, $name: String!, $LAC: Int!, $LPO: Int!, $LNT: Int!, $LTOC: Float!, $ASL: Int!, $OCR: Float!, $ACV: Int!, $OCV: Int!, $ACC: Float!, $MOSH: Int!, $MCSH: Int!) {
  createMarketSegment(
    modelId: $modelId
    segment: {name: $name, LAC: $LAC, LPO: $LPO, LNT: $LNT, LTOC: $LTOC, ASL: $ASL, OCR: $OCR, ACV: $ACV, OCV: $OCV, ACC: $ACC, MOSH: $MOSH, MCSH: $MCSH}
  ) {
    id
    name
    LAC
    ACC
    ACV
    ASL
    LNT
    LPO
    LTOC
    MCSH
    MOSH
    OCR
    OCV
  }
}
    `;
export type CreateSegmentMutationFn = Apollo.MutationFunction<CreateSegmentMutation, CreateSegmentMutationVariables>;

/**
 * __useCreateSegmentMutation__
 *
 * To run a mutation, you first call `useCreateSegmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSegmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSegmentMutation, { data, loading, error }] = useCreateSegmentMutation({
 *   variables: {
 *      modelId: // value for 'modelId'
 *      name: // value for 'name'
 *      LAC: // value for 'LAC'
 *      LPO: // value for 'LPO'
 *      LNT: // value for 'LNT'
 *      LTOC: // value for 'LTOC'
 *      ASL: // value for 'ASL'
 *      OCR: // value for 'OCR'
 *      ACV: // value for 'ACV'
 *      OCV: // value for 'OCV'
 *      ACC: // value for 'ACC'
 *      MOSH: // value for 'MOSH'
 *      MCSH: // value for 'MCSH'
 *   },
 * });
 */
export function useCreateSegmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateSegmentMutation, CreateSegmentMutationVariables>) {
        return Apollo.useMutation<CreateSegmentMutation, CreateSegmentMutationVariables>(CreateSegmentDocument, baseOptions);
      }
export type CreateSegmentMutationHookResult = ReturnType<typeof useCreateSegmentMutation>;
export type CreateSegmentMutationResult = Apollo.MutationResult<CreateSegmentMutation>;
export type CreateSegmentMutationOptions = Apollo.BaseMutationOptions<CreateSegmentMutation, CreateSegmentMutationVariables>;
export const CreateModelAndSegmentDocument = gql`
    mutation createModelAndSegment($companyId: ID!, $name: String!, $LAC: Int!, $LPO: Int!, $LNT: Int!, $LTOC: Float!, $ASL: Int!, $OCR: Float!, $ACV: Int!, $OCV: Int!, $ACC: Float!, $MOSH: Int!, $MCSH: Int!) {
  createFinModelAndMarketSegment(
    companyId: $companyId
    segment: {name: $name, LAC: $LAC, LPO: $LPO, LNT: $LNT, LTOC: $LTOC, ASL: $ASL, OCR: $OCR, ACV: $ACV, OCV: $OCV, ACC: $ACC, MOSH: $MOSH, MCSH: $MCSH}
  ) {
    id
    modelId
  }
}
    `;
export type CreateModelAndSegmentMutationFn = Apollo.MutationFunction<CreateModelAndSegmentMutation, CreateModelAndSegmentMutationVariables>;

/**
 * __useCreateModelAndSegmentMutation__
 *
 * To run a mutation, you first call `useCreateModelAndSegmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateModelAndSegmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createModelAndSegmentMutation, { data, loading, error }] = useCreateModelAndSegmentMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      name: // value for 'name'
 *      LAC: // value for 'LAC'
 *      LPO: // value for 'LPO'
 *      LNT: // value for 'LNT'
 *      LTOC: // value for 'LTOC'
 *      ASL: // value for 'ASL'
 *      OCR: // value for 'OCR'
 *      ACV: // value for 'ACV'
 *      OCV: // value for 'OCV'
 *      ACC: // value for 'ACC'
 *      MOSH: // value for 'MOSH'
 *      MCSH: // value for 'MCSH'
 *   },
 * });
 */
export function useCreateModelAndSegmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateModelAndSegmentMutation, CreateModelAndSegmentMutationVariables>) {
        return Apollo.useMutation<CreateModelAndSegmentMutation, CreateModelAndSegmentMutationVariables>(CreateModelAndSegmentDocument, baseOptions);
      }
export type CreateModelAndSegmentMutationHookResult = ReturnType<typeof useCreateModelAndSegmentMutation>;
export type CreateModelAndSegmentMutationResult = Apollo.MutationResult<CreateModelAndSegmentMutation>;
export type CreateModelAndSegmentMutationOptions = Apollo.BaseMutationOptions<CreateModelAndSegmentMutation, CreateModelAndSegmentMutationVariables>;
export const UpdateSegmentDocument = gql`
    mutation updateSegment($name: String!, $LAC: Int!, $LPO: Int!, $LNT: Int!, $LTOC: Float!, $ASL: Int!, $OCR: Float!, $ACV: Int!, $OCV: Int!, $ACC: Float!, $MOSH: Int!, $MCSH: Int!, $segmentId: ID!) {
  updateMarketSegment(
    segmentId: $segmentId
    segment: {name: $name, LAC: $LAC, LPO: $LPO, LNT: $LNT, LTOC: $LTOC, ASL: $ASL, OCR: $OCR, ACV: $ACV, OCV: $OCV, ACC: $ACC, MOSH: $MOSH, MCSH: $MCSH}
  ) {
    id
  }
}
    `;
export type UpdateSegmentMutationFn = Apollo.MutationFunction<UpdateSegmentMutation, UpdateSegmentMutationVariables>;

/**
 * __useUpdateSegmentMutation__
 *
 * To run a mutation, you first call `useUpdateSegmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSegmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSegmentMutation, { data, loading, error }] = useUpdateSegmentMutation({
 *   variables: {
 *      name: // value for 'name'
 *      LAC: // value for 'LAC'
 *      LPO: // value for 'LPO'
 *      LNT: // value for 'LNT'
 *      LTOC: // value for 'LTOC'
 *      ASL: // value for 'ASL'
 *      OCR: // value for 'OCR'
 *      ACV: // value for 'ACV'
 *      OCV: // value for 'OCV'
 *      ACC: // value for 'ACC'
 *      MOSH: // value for 'MOSH'
 *      MCSH: // value for 'MCSH'
 *      segmentId: // value for 'segmentId'
 *   },
 * });
 */
export function useUpdateSegmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSegmentMutation, UpdateSegmentMutationVariables>) {
        return Apollo.useMutation<UpdateSegmentMutation, UpdateSegmentMutationVariables>(UpdateSegmentDocument, baseOptions);
      }
export type UpdateSegmentMutationHookResult = ReturnType<typeof useUpdateSegmentMutation>;
export type UpdateSegmentMutationResult = Apollo.MutationResult<UpdateSegmentMutation>;
export type UpdateSegmentMutationOptions = Apollo.BaseMutationOptions<UpdateSegmentMutation, UpdateSegmentMutationVariables>;
export const DeleteSegmentDocument = gql`
    mutation deleteSegment($segmentId: ID!) {
  deleteMarketSegment(segmentId: $segmentId)
}
    `;
export type DeleteSegmentMutationFn = Apollo.MutationFunction<DeleteSegmentMutation, DeleteSegmentMutationVariables>;

/**
 * __useDeleteSegmentMutation__
 *
 * To run a mutation, you first call `useDeleteSegmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSegmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSegmentMutation, { data, loading, error }] = useDeleteSegmentMutation({
 *   variables: {
 *      segmentId: // value for 'segmentId'
 *   },
 * });
 */
export function useDeleteSegmentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSegmentMutation, DeleteSegmentMutationVariables>) {
        return Apollo.useMutation<DeleteSegmentMutation, DeleteSegmentMutationVariables>(DeleteSegmentDocument, baseOptions);
      }
export type DeleteSegmentMutationHookResult = ReturnType<typeof useDeleteSegmentMutation>;
export type DeleteSegmentMutationResult = Apollo.MutationResult<DeleteSegmentMutation>;
export type DeleteSegmentMutationOptions = Apollo.BaseMutationOptions<DeleteSegmentMutation, DeleteSegmentMutationVariables>;
export const GetSegmentsDocument = gql`
    query GetSegments($modelId: ID!) {
  finModel(modelId: $modelId) {
    segments {
      id
      name
      LAC
      LNT
      LPO
      LTOC
      ASL
      OCR
      ACV
      OCV
      ACC
      MOSH
      MCSH
    }
  }
}
    `;

/**
 * __useGetSegmentsQuery__
 *
 * To run a query within a React component, call `useGetSegmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSegmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSegmentsQuery({
 *   variables: {
 *      modelId: // value for 'modelId'
 *   },
 * });
 */
export function useGetSegmentsQuery(baseOptions: Apollo.QueryHookOptions<GetSegmentsQuery, GetSegmentsQueryVariables>) {
        return Apollo.useQuery<GetSegmentsQuery, GetSegmentsQueryVariables>(GetSegmentsDocument, baseOptions);
      }
export function useGetSegmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSegmentsQuery, GetSegmentsQueryVariables>) {
          return Apollo.useLazyQuery<GetSegmentsQuery, GetSegmentsQueryVariables>(GetSegmentsDocument, baseOptions);
        }
export type GetSegmentsQueryHookResult = ReturnType<typeof useGetSegmentsQuery>;
export type GetSegmentsLazyQueryHookResult = ReturnType<typeof useGetSegmentsLazyQuery>;
export type GetSegmentsQueryResult = Apollo.QueryResult<GetSegmentsQuery, GetSegmentsQueryVariables>;
export const GetSegmentDocument = gql`
    query GetSegment($segmentId: ID!) {
  marketSegment(segmentId: $segmentId) {
    id
    name
    LAC
    LNT
    LPO
    LTOC
    ASL
    OCR
    ACV
    OCV
    ACC
    MOSH
    MCSH
  }
}
    `;

/**
 * __useGetSegmentQuery__
 *
 * To run a query within a React component, call `useGetSegmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSegmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSegmentQuery({
 *   variables: {
 *      segmentId: // value for 'segmentId'
 *   },
 * });
 */
export function useGetSegmentQuery(baseOptions: Apollo.QueryHookOptions<GetSegmentQuery, GetSegmentQueryVariables>) {
        return Apollo.useQuery<GetSegmentQuery, GetSegmentQueryVariables>(GetSegmentDocument, baseOptions);
      }
export function useGetSegmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSegmentQuery, GetSegmentQueryVariables>) {
          return Apollo.useLazyQuery<GetSegmentQuery, GetSegmentQueryVariables>(GetSegmentDocument, baseOptions);
        }
export type GetSegmentQueryHookResult = ReturnType<typeof useGetSegmentQuery>;
export type GetSegmentLazyQueryHookResult = ReturnType<typeof useGetSegmentLazyQuery>;
export type GetSegmentQueryResult = Apollo.QueryResult<GetSegmentQuery, GetSegmentQueryVariables>;
export const UserDocument = gql`
    query user {
  me {
    id
    email
    firstName
    lastName
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(credentials: {email: $email, password: $password}) {
    token
    user {
      id
      email
      firstName
      lastName
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  register(
    user: {firstName: $firstName, lastName: $lastName}
    credentials: {email: $email, password: $password}
  ) {
    token
    user {
      id
      email
      firstName
      lastName
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CalculateModelDocument = gql`
    query CalculateModel($modelId: ID!) {
  calculate(modelId: $modelId) {
    bookings
    revenue
    totalCost
    bookings
    marketingBudget
    recommendations {
      yourSalesHeads
      recommendedSalesHeads
      yourSupportHeads
      recommendedSupportHeads
    }
    segments {
      name
      marketingBudgetDistribution
      bookings
      revenue
      organicLeads
      marketingLeads
      totalLeads
      totalOpportunities
      activeOpportunities
      activeCustomers
    }
    team {
      totalCost
      departments {
        name
        totalCost
        employees {
          firstName
          lastName
          cost
        }
        roles {
          name
          counts
        }
      }
    }
  }
}
    `;

/**
 * __useCalculateModelQuery__
 *
 * To run a query within a React component, call `useCalculateModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useCalculateModelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCalculateModelQuery({
 *   variables: {
 *      modelId: // value for 'modelId'
 *   },
 * });
 */
export function useCalculateModelQuery(baseOptions: Apollo.QueryHookOptions<CalculateModelQuery, CalculateModelQueryVariables>) {
        return Apollo.useQuery<CalculateModelQuery, CalculateModelQueryVariables>(CalculateModelDocument, baseOptions);
      }
export function useCalculateModelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CalculateModelQuery, CalculateModelQueryVariables>) {
          return Apollo.useLazyQuery<CalculateModelQuery, CalculateModelQueryVariables>(CalculateModelDocument, baseOptions);
        }
export type CalculateModelQueryHookResult = ReturnType<typeof useCalculateModelQuery>;
export type CalculateModelLazyQueryHookResult = ReturnType<typeof useCalculateModelLazyQuery>;
export type CalculateModelQueryResult = Apollo.QueryResult<CalculateModelQuery, CalculateModelQueryVariables>;
export const GetBusinessModelsDocument = gql`
    query GetBusinessModels {
  businessModel {
    id
    name
  }
}
    `;

/**
 * __useGetBusinessModelsQuery__
 *
 * To run a query within a React component, call `useGetBusinessModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBusinessModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBusinessModelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBusinessModelsQuery(baseOptions?: Apollo.QueryHookOptions<GetBusinessModelsQuery, GetBusinessModelsQueryVariables>) {
        return Apollo.useQuery<GetBusinessModelsQuery, GetBusinessModelsQueryVariables>(GetBusinessModelsDocument, baseOptions);
      }
export function useGetBusinessModelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBusinessModelsQuery, GetBusinessModelsQueryVariables>) {
          return Apollo.useLazyQuery<GetBusinessModelsQuery, GetBusinessModelsQueryVariables>(GetBusinessModelsDocument, baseOptions);
        }
export type GetBusinessModelsQueryHookResult = ReturnType<typeof useGetBusinessModelsQuery>;
export type GetBusinessModelsLazyQueryHookResult = ReturnType<typeof useGetBusinessModelsLazyQuery>;
export type GetBusinessModelsQueryResult = Apollo.QueryResult<GetBusinessModelsQuery, GetBusinessModelsQueryVariables>;
export const GetStagesOfDevelopmentDocument = gql`
    query GetStagesOfDevelopment {
  stagesOfDevelopment {
    id
    name
  }
}
    `;

/**
 * __useGetStagesOfDevelopmentQuery__
 *
 * To run a query within a React component, call `useGetStagesOfDevelopmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStagesOfDevelopmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStagesOfDevelopmentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStagesOfDevelopmentQuery(baseOptions?: Apollo.QueryHookOptions<GetStagesOfDevelopmentQuery, GetStagesOfDevelopmentQueryVariables>) {
        return Apollo.useQuery<GetStagesOfDevelopmentQuery, GetStagesOfDevelopmentQueryVariables>(GetStagesOfDevelopmentDocument, baseOptions);
      }
export function useGetStagesOfDevelopmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStagesOfDevelopmentQuery, GetStagesOfDevelopmentQueryVariables>) {
          return Apollo.useLazyQuery<GetStagesOfDevelopmentQuery, GetStagesOfDevelopmentQueryVariables>(GetStagesOfDevelopmentDocument, baseOptions);
        }
export type GetStagesOfDevelopmentQueryHookResult = ReturnType<typeof useGetStagesOfDevelopmentQuery>;
export type GetStagesOfDevelopmentLazyQueryHookResult = ReturnType<typeof useGetStagesOfDevelopmentLazyQuery>;
export type GetStagesOfDevelopmentQueryResult = Apollo.QueryResult<GetStagesOfDevelopmentQuery, GetStagesOfDevelopmentQueryVariables>;
export const GetFieldsOfActivitiesDocument = gql`
    query GetFieldsOfActivities {
  fieldsOfActivity {
    id
    name
  }
}
    `;

/**
 * __useGetFieldsOfActivitiesQuery__
 *
 * To run a query within a React component, call `useGetFieldsOfActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFieldsOfActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFieldsOfActivitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFieldsOfActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetFieldsOfActivitiesQuery, GetFieldsOfActivitiesQueryVariables>) {
        return Apollo.useQuery<GetFieldsOfActivitiesQuery, GetFieldsOfActivitiesQueryVariables>(GetFieldsOfActivitiesDocument, baseOptions);
      }
export function useGetFieldsOfActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFieldsOfActivitiesQuery, GetFieldsOfActivitiesQueryVariables>) {
          return Apollo.useLazyQuery<GetFieldsOfActivitiesQuery, GetFieldsOfActivitiesQueryVariables>(GetFieldsOfActivitiesDocument, baseOptions);
        }
export type GetFieldsOfActivitiesQueryHookResult = ReturnType<typeof useGetFieldsOfActivitiesQuery>;
export type GetFieldsOfActivitiesLazyQueryHookResult = ReturnType<typeof useGetFieldsOfActivitiesLazyQuery>;
export type GetFieldsOfActivitiesQueryResult = Apollo.QueryResult<GetFieldsOfActivitiesQuery, GetFieldsOfActivitiesQueryVariables>;