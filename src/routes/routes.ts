import Navigo from "navigo";
import { handleEditUserProfileRoute, handleHomeRoute, handleLoginRoute, handleRegisterRoute, handleUserProfileRoute } from "./routesHandler";


type RouteParams = {
  data: {
    name: string;
  };
};

// INTE FÄRDIGT
//Kevin's code
export function setupRoutes(router: Navigo) {
  router
    .on({
      "/": () => { handleHomeRoute(router)
      },
      "/login": () => { handleLoginRoute(router);
      },
      "/register": () => { handleRegisterRoute(router);  
      },
      "/user/:name": (params: RouteParams) => { handleUserProfileRoute(router, params);
      },
      "/user/:name/edit": (params: RouteParams) => { handleEditUserProfileRoute(router, params); 
      },
      // "/topic/:title/": () => { 
      //   console.log('info');
      // },
    })
    .notFound(() => {
      router.navigate("/");
    })
    .resolve();
}

