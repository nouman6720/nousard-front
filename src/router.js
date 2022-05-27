import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Icons from "@/pages/Icons.vue";
// import Maps from "@/pages/Maps.vue";
// import Typography from "@/pages/Typography.vue";
// import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Notifications from "@/pages/Notifications.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import CreateCompetency from "@/pages/competencyCreate.vue";
import AssessmentQuestionsManagement from "@/pages/AssessmentQuestionsManagement.vue";
import Competency from "@/pages/Competency.vue";
import AsseessmentQuestionCreate from "@/pages/AssessmentQuestionManagement/AssessmentCreate.vue";
import DefaultFeedbackForm from "@/pages/DefaultFeedbackForm.vue";
import FeedbackFormCreate from "@/pages/FeedbackForm/Create.vue";

import AsseessmentFormQuestion from "@/pages/AssessmentFormQuestion/AssessmentFormQuestion.vue";
import AsseessmentFormQuestionCreate from "@/pages/AssessmentFormQuestion/Create.vue";

import Company from "@/pages/Company/Company.vue";
import CompanyCreate from "@/pages/Company/Create.vue";

import LogInPage from "@/pages/LogInPage.vue";

const routes = [
  {
    // path: "/logIn",
    // name: "LogInPage",
    // component: LogInPage,
    
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
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
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
      {
        path: "assessment_questions_management",
        name: "Assessment Questions Management",
        component: AssessmentQuestionsManagement,
      },
      {
        path: "competency",
        name: "Competency",
        component: Competency,
      },
      {
        path: 'competency_create',
        name: 'competency_create',
        component: CreateCompetency,
        props: true
      },
      {
        path: 'asseessment_question_create',
        name: 'Assessment Question Create',
        component: AsseessmentQuestionCreate
      },
      {
        path: 'feedback_form_create',
        name: 'Feedback Form Create',
        component: FeedbackFormCreate
      },
      {
        path: "default_feedback_form",
        name: "Default Feedback Form",
        component: DefaultFeedbackForm,
      },
      {
        path: 'asseessment_form_question',
        name: 'Asseessment Form Question',
        component: AsseessmentFormQuestion
      },
      {
        path: "asseessment_form_question_create",
        name: "Asseessment Form Question Create",
        component: AsseessmentFormQuestionCreate,
      },
      {
        path: 'company',
        name: 'Company Managment',
        component: Company,
        props: true
      },
      {
        path: "company_create",
        name: "Company Create",
        component: CompanyCreate,
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
