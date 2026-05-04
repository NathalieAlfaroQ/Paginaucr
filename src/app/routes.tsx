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
    ],
  },
]);