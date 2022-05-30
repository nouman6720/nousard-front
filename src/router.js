import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

// import Icons from "@/pages/Icons.vue";
// import Maps from "@/pages/Maps.vue";
// import Typography from "@/pages/Typography.vue";
// import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Notifications from "@/pages/Notifications.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";

import AssessmentQuestionsManagement from "@/pages/AssessmentQuestionManagement/AssessmentQuestionsManagement.vue";
import AssessmentQuestionCreate from "@/pages/AssessmentQuestionManagement/AssessmentCreate.vue";
import EditAssessmentQuestion from "@/pages/AssessmentQuestionManagement/Edit.vue";


import Competency from "@/pages/Competency/Competency.vue";
import CreateCompetency from "@/pages/Competency/competencyCreate.vue";
import EditCompetency from "@/pages/Competency/Edit.vue";

import DefaultFeedbackForm from "@/pages/FeedbackForm/DefaultFeedbackForm.vue";
import FeedbackFormCreate from "@/pages/FeedbackForm/Create.vue";
import EditFeedbackForm from "@/pages/FeedbackForm/Edit.vue";

import AssessmentFormQuestion from "@/pages/AssessmentFormQuestion/AssessmentFormQuestion.vue";
import AssessmentFormQuestionCreate from "@/pages/AssessmentFormQuestion/Create.vue";
import EditAssessmentFormQuestion from "@/pages/AssessmentFormQuestion/Edit.vue";

import Company from "@/pages/Company/Company.vue";
import CompanyCreate from "@/pages/Company/Create.vue";
import CompanyEdit from "@/pages/Company/Edit.vue";

import LogInPage from "@/pages/LogInPage.vue";

const routes = [
  {
    path: "/logIn",
    name: "LogInPage",
    component: LogInPage,

    path: "/",
    name: "dashboard",
    component: DashboardLayout,
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      // {
      //   path: "icons",
      //   name: "Icons",
      //   component: Icons,
      // },
      // {
      //   path: "maps",
      //   name: "Maps",
      //   component: Maps,
      // },
      // {
      //   path: "typography",
      //   name: "Typography",
      //   component: Typography,
      // },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Organization",
        component: TableList,
      },
      // Competency

      {
        path: "competency",
        name: "Competency",
        component: Competency,
      },
      {
        path: 'competency_create',
        name: 'competency_create',
        component: CreateCompetency,
      },
      {
        path: 'competency_edit',
        name: 'Competency Edit',
        component: EditCompetency,
        props: true
      },
      // Assessment Question

      {
        path: "assessment_questions_management",
        name: "Assessment Questions Management",
        component: AssessmentQuestionsManagement,
      },
      {
        path: 'assessment_question_create',
        name: 'Assessment Question Create',
        component: AssessmentQuestionCreate
      },
      {
        path: 'assessment_question_edit',
        name: 'Assessment Question Edit',
        component: EditAssessmentQuestion
      },
      // Feedback Form

      {
        path: "default_feedback_form",
        name: "Default Feedback Form",
        component: DefaultFeedbackForm,
      },
      {
        path: 'feedback_form_create',
        name: 'Feedback Form Create',
        component: FeedbackFormCreate
      },
      {
        path: 'feedback_form_edit',
        name: 'Feedback Form Edit',
        component: EditFeedbackForm,
        props: true
      },
      // Assessment Form Question

      {
        path: 'assessment_form_question',
        name: 'Assessment Form Question',
        component: AssessmentFormQuestion
      },
      {
        path: "assessment_form_question_create",
        name: "Assessment Form Question Create",
        component: AssessmentFormQuestionCreate,
      },
      {
        path: "assessment_form_question_edit",
        name: "Assessment Form Question Edit",
        component: EditAssessmentFormQuestion,
        props: true
      },
      //// Company

      {
        path: 'company',
        name: 'Company Management',
        component: Company,
        props: true
      },
      {
        path: "company_create",
        name: "Company Create",
        component: CompanyCreate,
      },
      {
        path: "company_edit",
        name: "Company Edit",
        component: CompanyEdit,
        props: true
      },

    ],
  },
  {
    path: "/logIn",
    name: "LogInPage",
    component: LogInPage,
  },
];

export default routes;
