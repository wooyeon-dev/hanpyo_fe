import { MainPage, MyPage, ReviewPage, DummyPage } from "@/pages";

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
  },
  {
    path: "/dummy",
    exact: true,
    component: DummyPage
  }
];

export default routes;
