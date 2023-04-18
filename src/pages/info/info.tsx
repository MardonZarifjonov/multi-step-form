import { Form, Input, Typography } from 'antd';

export function Info() {
  return (
    <Form colon={false} layout='vertical' className='mt-6 '>
      <Typography.Title
        level={2}
        style={{ color: '#00255A', fontWeight: 'bold' }}
        className='font-medium'
      >
        Personal info
      </Typography.Title>
      <Typography.Paragraph type='secondary'>
        Please provide your name, email address, and phone number.
      </Typography.Paragraph>
      <Form.Item
        label={
          <Typography.Title level={5} style={{ color: '#00255A' }}>
            Name
          </Typography.Title>
        }
      >
        <Input
          style={{ width: '100%' }}
          size='large'
          placeholder='Enter your name'
        />
      </Form.Item>
      <Form.Item
        label={
          <Typography.Title level={5} style={{ color: '#00255A' }}>
            Email address
          </Typography.Title>
        }
      >
        <Input
          style={{ width: '100%' }}
          size='large'
          placeholder='Enter your email'
        />
      </Form.Item>{' '}
      <Form.Item
        label={
          <Typography.Title level={5} style={{ color: '#00255A' }}>
            Phone number
          </Typography.Title>
        }
      >
        <Input
          style={{ width: '100%' }}
          size='large'
          placeholder='Enter your phone number'
        />
      </Form.Item>
    </Form>
  );
}
