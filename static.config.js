import fetchData from "./src/contentful/fetch";

export default {
  getSiteData: () => ({
    title: "Wouter Landuydt"
  }),
  getRoutes: async () => {
    const data = await fetchData();
    console.log(data);
    return [
      {
        path: "/",
        component: "src/containers/Home",
        getData: () => ({
          data
        })
      },
      {
        path: "/about",
        component: "src/containers/About"
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  }
};
