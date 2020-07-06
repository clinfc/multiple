import Vue from 'vue'
import {
  Autocomplete,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Select,
  Button,
  ButtonGroup,
  Form,
  FormItem,
  Slider,
  Icon,
  Row,
  Col,
  Card,
  Collapse,
  CollapseItem,
  Drawer,
  Menu,
  MenuItem,
  Message,
  MessageBox,
  DatePicker,
  Tag,
  Table,
  TableColumn,
  Pagination,
  Popover,
  Option,
  Divider,
  Loading
} from 'element-ui'

Vue.use(Autocomplete)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Select)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Slider)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Drawer)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(DatePicker)
Vue.use(Tag)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Popover)
Vue.use(Option)
Vue.use(Divider)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
