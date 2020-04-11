import React from "react";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 16 },
};

function CreateProject() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="create-project container">
      <div className="create-project__title">Create Project</div>
      <div className="create-project__form">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>

          <Form.Item label="Content" name="content">
            <TextArea />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default CreateProject;
