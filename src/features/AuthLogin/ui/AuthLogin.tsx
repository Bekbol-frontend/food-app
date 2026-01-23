import { Card } from "antd";
import styles from "./AuthLogin.module.scss";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import type { IAuthLoginForm } from "../model/types";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { fetchLogin } from "../model/services/fetchLogin";
import { useSelector } from "react-redux";
import type { IStateSchema } from "@/app/providers/AppStoreProvider";
import { useMessageContext } from "@/shared/hooks/useMessageContext";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function AuthLogin() {
  const dispatch = useAppDispatch();

  const { isLoading, error } = useSelector(
    (state: IStateSchema) => state.login
  );
  const { messageApi } = useMessageContext();
  const { t } = useTranslation();

  const onFinish: FormProps<IAuthLoginForm>["onFinish"] = async (values) => {
    const res = await dispatch(fetchLogin(values));

    if (res.meta.requestStatus === "fulfilled") {
      messageApi.success(t("You are logged in!"));
    }
  };

  useEffect(() => {
    if (error) {
      messageApi.error(`${t("Login error")} ${error}`);
    }
  }, [error, messageApi, t]);

  return (
    <Card className={styles.authWrapperCard}>
      <Form
        name="login-form"
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item<IAuthLoginForm>
          label={t("Login")}
          name="login"
          rules={[{ required: true, message: t("Please input your login!") }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IAuthLoginForm>
          label={t("Password")}
          name="password"
          rules={[
            { required: true, message: t("Please input your password!") },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          danger={Boolean(error)}
        >
          {t("Login")}
        </Button>
      </Form>
    </Card>
  );
}

export default AuthLogin;
