import React, { useState } from "react";
import { Tab } from "semantic-ui-react";
import { RegisterForm, LoginForm } from "../../../components/Admin/Auth";
import LogoWhite from "../../../assets/svg/tincode-white.svg";
import "./Auth.scss";

export function Auth() {
  const [activeIndex, setActiveIndex] = useState(0);
  const openLogin = () => setActiveIndex(0);

  const panes = [
    {
      menuItem: "Entrar",
      render: () => (
        <Tab.Pane>
          <LoginForm />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Nuevo usuario",
      render: () => (
        <Tab.Pane>
          <RegisterForm openLogin={openLogin} />
        </Tab.Pane>
      ),
    },
  ];
  return (
    <div className="auth">
      <img src={LogoWhite} alt="tincodeLogo" className="logo" />
      <Tab
        panes={panes}
        className="auth_forms"
        activeIndex={activeIndex}
        onTabChange={(_, data) => setActiveIndex(data.activeIndex)}
      />
    </div>
  );
}
