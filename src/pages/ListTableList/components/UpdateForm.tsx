import React, { useState } from 'react';
import { Form, Input, Modal, Button } from 'antd';

import { TableListItem, TableListItemParams } from '../data.d';


export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: TableListItemParams) => void;
  onSubmit: (values: TableListItemParams) => void;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
}
const FormItem = Form.Item;
const { TextArea } = Input;

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [formVals, setFormVals] = useState<TableListItemParams>({
    id: props.values.id,
    title: props.values.title,
    dynasty: props.values.dynasty,
    author: props.values.author,
    content: props.values.content,
  });

  const [form] = Form.useForm();

  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    values
  } = props;

  const handleSubmit = async () => {
    const fieldsValue = await form.validateFields();

    setFormVals({ ...formVals, ...fieldsValue });

    handleUpdate(formVals);
  };

  const renderContent = () => {
    return (
      <>
        <FormItem
          name="title"
          label="题目"
          rules={[{ message: '请输入题目！' }]}
        >
          <Input placeholder="请输入题目" />
        </FormItem>
        <FormItem
          name="dynasty"
          label="朝代"
          rules={[{ message: '请输入朝代！' }]}
        >
          <Input placeholder="请输入朝代" />
        </FormItem>
        <FormItem
          name="author"
          label="作者"
          rules={[{ message: '请输入作者！' }]}
        >
          <Input placeholder="请输入作者" />
        </FormItem>
        <FormItem
          name="content"
          label="内容"
          rules={[{ message: '内容' }]}
        >
          <TextArea rows={4} placeholder="请输入诗词内容" />
        </FormItem>
      </>
    );
  };
  const renderFooter = () => {
    return (
      <>
          <Button onClick={() => handleUpdateModalVisible(false, values)}>取消</Button>
          <Button type="primary" onClick={() => handleSubmit()}>
            完成
          </Button>
      </>
    );
  }

  return (
    <Modal
      width={640}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title="修改诗词"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible()}
    >
      <Form
        {...formLayout}
        form={form}
        initialValues={{
          id: formVals.id,
          title: formVals.title,
          dynasty: formVals.dynasty,
          author: formVals.author,
          content: formVals.content,
        }}
      >
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default UpdateForm;
