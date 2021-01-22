/* 第一小题示例代码 */
// import React, { Component } from "react";
// import "./App.css";
// import Schema from "./schema";
// import { Form, Input, Button, Checkbox } from "antd";

// const Demo = () => {
//   return (
//     <Form
//       labelCol={Schema.props.labelCol}
//       wrapperCol={Schema.props.wrapperCol}
//       name={Schema.props.name}
//       initialValues={Schema.props.initialValues}
//     >
//       <Form.Item
//         label={Schema.children[0].label}
//         name={Schema.children[0].name}
//         rules={Schema.children[0].rules}
//       >
//         <Input></Input>
//       </Form.Item>
//       <Form.Item
//         label={Schema.children[1].label}
//         name={Schema.children[1].name}
//         rules={Schema.children[1].rules}
//       >
//         <Input.Password></Input.Password>
//       </Form.Item>
//       <Form.Item
//         wrapperCol={Schema.children[2].wrapperCol}
//         name={Schema.children[2].name}
//         valuePropName={Schema.children[2].valuePropName}
//       >
//         <Checkbox>{Schema.children[2].children[0].children}</Checkbox>
//       </Form.Item>
//       <Form.Item wrapperCol={Schema.children[3].wrapperCol}>
//         <Button
//           type={Schema.children[3].children[0].type}
//           htmlType={Schema.children[3].children[0].htmlType}
//         >
//           {Schema.children[3].children[0].children}
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// class App extends Component {
//   // 请根据 schema.js 描述的页面，实现 render 方法，渲染出指定的页面
//   render() {
//     return (
//       <div ClassName="App">
//         <Demo />
//       </div>
//     );
//   }
// }

// export default App;


/* 第二小题示例代码 */
import schema from './schema';
import RenderEngine from './render-engine';
import './App.css';
import { Form, Input, Button, Checkbox } from "antd";
const components = { Form, Input, Button, Checkbox };

// 渲染引擎的输入为页面描述 schema 和组件依赖的映射 components
const re = new RenderEngine(schema, components);
const App = re.createApp();

export default App;