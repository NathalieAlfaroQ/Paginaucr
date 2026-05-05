import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import { RecoverPassword } from "./components/RecoverPassword";
import { VerifyIdentity } from "./components/VerifyIdentity";
import { ResetPassword } from "./components/ResetPassword";
import { AppLayout } from "./components/AppLayout";
import { Profile } from "./components/Profile";
import { Jobs } from "./components/Jobs";
import { DeclarationStart } from "./components/DeclarationStart";
import { DeclarationQuestions } from "./components/DeclarationQuestions";
import { DeclarationQuestions2 } from "./components/DeclarationQuestions2";
import { DeclarationQuestions3 } from "./components/DeclarationQuestions3";
import { CreateFunction } from "./components/CreateFunction";
import { AddFunction } from "./components/AddFunction";
import { CreateUser } from "./components/CreateUser";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Login },
      { path: "recover", Component: RecoverPassword },
      { path: "verify", Component: VerifyIdentity },
      { path: "reset-password", Component: ResetPassword },
    ],
  },
  {
    path: "/app",
    Component: AppLayout,
    children: [
      { index: true, Component: Profile },
      { path: "profile", Component: Profile },
      { path: "jobs", Component: Jobs },
      { path: "declaration", Component: DeclarationStart },
      { path: "declaration/questions", Component: DeclarationQuestions },
      { path: "declaration/questions-2", Component: DeclarationQuestions2 },
      { path: "declaration/questions-3", Component: DeclarationQuestions3 },
      { path: "create-function", Component: CreateFunction },
      { path: "add-function", Component: AddFunction },
      { path: "create-user", Component: CreateUser },
    ],
  },
]);