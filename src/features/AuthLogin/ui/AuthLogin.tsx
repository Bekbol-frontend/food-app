import { Card } from "antd";
import styles from "./AuthLogin.module.scss";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import type { IAuthLoginForm } from "../model/types";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { fetchLogin } from "../model/services/fetchLogin";
import { useSelector } from "react-redux";
import type { IStateSchema } from "@/app/providers/AppStoreProvider";

function AuthLogin() {
  const dispatch = useAppDispatch();

  const { isLoading } = useSelector((state: IStateSchema) => state.login);

  const onFinish: FormProps<IAuthLoginForm>["onFinish"] = (values) => {
    dispatch(fetchLogin(values));
  };

  return (
    <Card className={styles.authWrapperCard}>
      <Form
        name="login-form"
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item<IAuthLoginForm>
          label="Login"
          name="login"
          rules={[{ required: true, message: "Please input your login!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IAuthLoginForm>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={isLoading}>
          Login
        </Button>
      </Form>
    </Card>
  );
}

export default AuthLogin;
