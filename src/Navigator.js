import { 
    createDrawerNavigator,
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation'

import Menu from './Menu'

import ItemList from './ItemList'
import Item from './Item'

import TabA from './TabA'
import TabB from './TabB'
import TabC from './TabC'

import Plain from './Plain'

const RouterMap = {
    ItemList: {
        screen: ItemList
    },
    Item: {
        screen: Item
    }
}

const Stack = createStackNavigator(RouterMap, { initialRouteName: 'ItemList' })


const BottomTab = {
    TabA:  TabA ,
    TabB: TabB ,
    // TabC: TabC
    TabC: Stack
}

const Tabs = createBottomTabNavigator(BottomTab, { order: ['TabA', 'TabB', 'TabC'] })

const RounteConfig = {
    Stack: { name: 'Stack', screen: Stack },
    Tabs: { name: 'Tabs', screen: Tabs },
    Plain: { name: 'Plain', screen: Plain }
}

const MenuConfig = {
    initialRouteName: 'Stack',
    contentComponent: Menu
}

const drawer = createDrawerNavigator(RounteConfig, MenuConfig)

const Main = createAppContainer(drawer)

export default Main