import React from 'react';
import { Drawer, Form, Button, Col, Row, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// import { ReactMarkdown } from 'react-markdown'


class DrawerForm extends React.Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <>
                <Button type="primary" onClick={this.showDrawer}>
                    <PlusOutlined /> New Idea
        </Button>
                <Drawer
                    title="Show your imagination"
                    width={720}
                    onClose={this.onClose}
                    placement="top"
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                Cancel
              </Button>
                            <Button onClick={this.onClose} type="primary">
                                Submit
              </Button>
                        </div>
                    }
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="name"
                                    label="Title"
                                    rules={[{ required: true, message: 'Please enter the title' }]}
                                >
                                    <Input placeholder="Please enter the title" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="content"
                                    label="Content"
                                    rules={[{ required: true, message: 'Please enter the content' }]}
                                >
                                    {/* <ReactMarkdown

                                        // style={{ width: '100%' }}
                                        // addonBefore="http://"
                                        // addonAfter=".com"
                                        source="Please enter what you think"
                                    /> */}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Drawer>
            </>
        );
    }
}

export default DrawerForm;