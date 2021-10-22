import { MainPage, MyPage, ReviewPage } from "@/pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: MainPage
  },
  {
    path: "/mypage",
    exact: true,
    component: MyPage
  },
  {
    path: "/review",
    exact: true,
    component: ReviewPage
  }
];

export default routes;
