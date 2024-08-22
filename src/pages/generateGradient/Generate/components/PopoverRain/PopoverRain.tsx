import React from 'react';
import { Button, Checkbox, Col, Popover, Row } from 'antd';

const content = (
  <Row>
    <Col>
      <Checkbox />
    </Col>
  </Row>
);

export const PopoverRain: React.FC = () => (
  <Popover content={content} title="Rain" >
    <Button type="primary">Hover me</Button>
  </Popover>
);
