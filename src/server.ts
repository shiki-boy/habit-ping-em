import App from "./app";
import IndexRoute from "@routes/index.route";
import GoalRoute from "@routes/goals.route";
import validateEnv from "@utils/validateEnv";
import AuthRoute from "./routes/auth.route";

validateEnv();

const app = new App([new IndexRoute(), new GoalRoute(), new AuthRoute()]);

app.listen();
