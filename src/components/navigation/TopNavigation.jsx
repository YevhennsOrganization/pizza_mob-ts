import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Appetizers from "../../screens/Appetizers";
import Drinks from "../../screens/Drinks";
import Pizzas from "../../screens/Pizzas";

const TopTab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Піца" component={Pizzas} />
      <TopTab.Screen name="Напої" component={Drinks} />
      <TopTab.Screen name="Закуски" component={Appetizers} />
    </TopTab.Navigator>
  );
};
export default TopNavigation;
