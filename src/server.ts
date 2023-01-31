import App from "./app";
import IndexRoute from "@routes/index.route";
import GoalRoute from "@routes/goals.route";
import validateEnv from "@utils/validateEnv";

validateEnv();

const app = new App([new IndexRoute(), new GoalRoute()]);

app.listen();
