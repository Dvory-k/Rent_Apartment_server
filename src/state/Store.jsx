
import { produce } from 'immer'
import { createStore } from 'redux';

const initialState = {
  apartments: [],
  cities: [],
  categories:[],
  currentApartment: {},
  currentAdvertiser: {},
  my_token: ""
}

// 3. 
// reducer - אחראי על שינוי הסטייט
// שם מקובל - לא חובה
// produce הרצה של הפונקציה 
// מקבלת שני ארגומנטים:
// 1. פונקציית חץ
// 2. הסטייט שעליו נפעיל את השינויים

const reducer = produce((state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ADVERTISER':
      state.currentAdvertiser = action.payload
      break;
      case 'SET_CURRENT_APARTMENT':
        state.currentApartment = action.payload
        break;
    case 'SET_TOKEN':
      state.my_token = action.payload
      break;
    case 'SET_APARTMENT':
      state.apartments = action.payload
      break;
    case 'SET_CITIES':
      state.cities = action.payload
      break;
      case 'SET_CATEGORIES':
      state.categories = action.payload
      break;
      case 'ADD_APARTMENT':
        state.apartments.push(action.payload)
        break; 
        case 'DELETE_APARTMENT':{
          let i=state.apartments.findIndex(f=>f._id==action.payload)
          state.apartments.slice(i,1)
          break;   }
    default:
      break;
  }
}, initialState)

const myStore = createStore(reducer)
window.store = myStore
export default myStore;