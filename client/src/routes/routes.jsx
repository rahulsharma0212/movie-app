import HomePage from "../pages/HomePage";
import PersonDetail from "../pages/PersonDetail";
import FavouriteList from "../pages/FavouriteList";
import MediaDetail from "../pages/MediaDetail";
import MediaList from "../pages/MediaList";
import MediaSearch from "../pages/MediaSearch";
import PasswordUpdate from "../pages/PasswordUpdate";
import ReviewList from "../pages/ReviewList";
import ProtectedPage from "../components/common/ProtectedPage";

export const routeGen = {
  home: "/",
  mediaList: (type) => `/${type}`,
  mediaDetail: (type, id) => `/${type}/${id}`,
  mediaSearch: "/search",
  person: (id) => `/person/${id}`,
  favouriteList: "/favourites",
  reviewList: "/reviews",
  passwordUpdate: "/password-update",
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/person/:personId",
    element: <PersonDetail />,
    state: "person.detail",
  },
  {
    path: "/search",
    element: <MediaSearch />,
    state: "search",
  },
  {
    path: "/password-update",
    element: (
      <ProtectedPage>
        <PasswordUpdate />
      </ProtectedPage>
    ),
    state: "password.update",
  },
  {
    path: "/reviews",
    element: (
      <ProtectedPage>
        <ReviewList />
      </ProtectedPage>
    ),
    state: "reviews",
  },
  {
    path: "/:mediaType",
    element: <MediaList />,
  },
  {
    path: "/:mediaType/:mediaId",
    element: <MediaDetail />,
  },
];

export default routes;
