import { createStackNavigator, createAppContainer } from 'react-navigation';
import InterpolacionLineal from './screens/InterpolacionLineal.js';
import InterpolacionCuadratica from './screens/InterpolacionCuadratica.js';
import Inicio from './screens/Inicio';

const MainNavigator = createStackNavigator({ 

  Inicio : { screen: Inicio },
  InterpolacionLineal : { screen: InterpolacionLineal },
  InterpolacionCuadratica : { screen: InterpolacionCuadratica }, 
  
})

const App = createAppContainer(MainNavigator);

export default App;