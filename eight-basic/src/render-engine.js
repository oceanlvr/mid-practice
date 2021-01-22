import React from 'react';

export default class RenderEngine {
  constructor(schema, components) {
    this.schema = schema;
    this.components = components;
  }

  componentName(name){
    const componentNameList = Object.entries(this.components).map((i) => i[0])

    if(componentNameList.some((item) => item === name)){
      return this.components[name]
    }

    if(componentNameList.some((item) => name.split(".")[0] === item)){
      return name.split(".").reduce((acc,cur) => acc[cur], this.components);
    }
    return name
  }



  render(children){
    if(!children){
      return []
    }else{
      return children.map((child) => {
        if(typeof child !== 'object'){
          return child
        }
        return React.createElement(
          this.componentName(child.componentName),
          child.props,
          ...this.render(child.children)
        )
      })
    }
  }

  createApp() {
    const schema = this.schema
    return () => this.render([schema])
  }
}