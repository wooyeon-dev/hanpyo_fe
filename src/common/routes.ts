import { MainPage, MyPage, ReviewPage } from "@/pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: MainPage
  },
  {
    path: "/mypage",
    component: MyPage
  },
  {
    path: "/review",
    component: ReviewPage
  }
];

export default routes;
