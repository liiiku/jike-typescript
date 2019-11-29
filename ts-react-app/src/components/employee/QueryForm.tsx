/**
 * 受控组件： input组件的value和这个组件的状态state相绑定，这就需要绑定onClick\onChange事件等
 */
import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { EmployeeRequest } from 'src/interface/employee';

const { Option } = Select;

class QueryForm extends Component<{}, EmployeeRequest> {
  state: EmployeeRequest = {
    name: "",
    departmentId: undefined
  };
  handleDepartmentChange = (value: number) => {
    this.setState({
      departmentId: value
    });
  };
  queryEmployee = (param: EmployeeRequest) => {
    console.log(12, param);
  }
  handleSubmit = () => {
    this.queryEmployee(this.state);
  };
  render() {
    const { name, departmentId } = this.state;
    return (
      <Form layout="inline">
        <Form.Item>
          <Input
            placeholder="姓名"
            style={{ width: 120 }}
            allowClear={true}
            value={name}
          />
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="部门"
            style={{ width: 120 }}
            allowClear={true}
            value={departmentId}
            onChange={this.handleDepartmentChange}
          >
            <Option value={1}>技术部</Option>
            <Option value={2}>技术部</Option>
            <Option value={3}>技术部</Option>
            <Option value={4}>技术部</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.handleSubmit}>
            查询
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default QueryForm;