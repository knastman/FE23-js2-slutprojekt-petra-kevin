import Navigo from "navigo";
import { 
  handleEditUserProfileRoute, 
  handleFaqRoute, 
  handleHomeRoute, 
  handleLoginRoute, 
  handleRegisterRoute, 
  handleUserProfileRoute,
  handleContactRoute, 
  handleTopicRoute,
  handleThreadRoute,
} from "./routesHandler";


export type RouteParams = {
  data: {
    id: string;
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
      "/user/:id": (params: RouteParams) => { handleUserProfileRoute(router, params);
      },
      "/user/:id/edit": (params: RouteParams) => { handleEditUserProfileRoute(router, params); 
      },
      "/faq": () => { handleFaqRoute();
      },
      "/kontakt": () => { handleContactRoute();
      },
      "/topic/:id": (params: RouteParams) => { handleTopicRoute(router, params);
      },
      "/thread/:id": (params: RouteParams) => { handleThreadRoute(router, params);
      },
    })
    .notFound(() => {
      router.navigate("/");
    })
    .resolve();
}

