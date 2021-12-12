import React, { useState } from 'react';
import { Input, Message, Form, Divider, Checkbox, Icon } from '@alifd/next';
import { useInterval } from './utils';
import styles from './index.module.scss';
import {useHistory } from 'ice';
import { useRequest } from 'ice';
import userApi from '@/service/api';


const { Item } = Form;
const DEFAULT_DATA = {
  name: '',
  // eslint-disable-next-line @iceworks/best-practices/no-secret-info
  password: '',
  autoLogin: true,
  phone: '',
  code: '',
};

const LoginBlock = (
  props = {
    dataSource: DEFAULT_DATA,
  },
) => {

  const history = useHistory();

  const { dataSource = DEFAULT_DATA } = props;
  const [postData, setValue] = useState(dataSource);
  const [isRunning, checkRunning] = useState(false);
  const [isPhone, checkPhone] = useState(false);


  const { data, error, loading, request } = useRequest({
    url: '/flint/login',
    method: 'post',
    headers:{contentType: "application/json; charset=utf-8"},
    data: {
      username: "18698581176",
      password: "zh1991218."
    }
  });

  const formChange = (values) => {
    setValue(values);
  };

  const sendCode = (values, errors) => {
    if (errors) {
      return;
    } // get values.phone

    checkRunning(true);
  };

  const handleSubmit = (values, errors) => {
    if (errors) {
      console.log('errors', errors);
      return;
    }

    request();

    // 登录请求
    // useRequest(userApi.getDetail({username:"18698581176", password:"zh1991218."}),{
    //   manual: true
    // });

    // 存储登录标识

    // 登录跳转
    // history.push('/today/task');
  };

  const accountForm = (
    <>
      <Item 
      // required 
      requiredMessage="必填">
        <Input name="name" maxLength={20} placeholder="用户名" />
      </Item>
      <Item
        // required
        requiredMessage="必填"
        style={{
          marginBottom: 0,
        }}
      >
        <Input.Password name="password" htmlType="password" placeholder="密码" />
      </Item>
    </>
  );

  const byAccount = () => {
    checkPhone(false);
  };

  const byForm = () => {
    checkPhone(true);
  };

  return (
    <div className={styles.LoginBlock}>
      <div className={styles.innerBlock}>
        <div className={styles.desc}>
          <span className={styles.active}>Flint管理后台</span>
        </div>

        <Form value={postData} onChange={formChange} size="large">
          {isPhone ? phoneForm : accountForm}

          <div className={styles.infoLine}>
            <Item
              style={{
                marginBottom: 0,
              }}
            >
              <Checkbox name="autoLogin" className={styles.infoLeft}>
                自动登录
              </Checkbox>
            </Item>
            <div>
              <a href="/" className={styles.link}>
                忘记密码
              </a>
            </div>
          </div>

          <Item
            style={{
              marginBottom: 20,
            }}
          >
            <Form.Submit type="primary" onClick={handleSubmit} className={styles.submitBtn} validate>
              登录
            </Form.Submit>
          </Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginBlock;
