import * as Yup from "yup";
export function initialValues() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
    conditionsAcepted: false,
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("El email no es válido")
      .required("Campo obligatorio"),
    password: Yup.string().required("Campo obligatorio"),
    repeatPassword: Yup.string()
      .required("Campo obligatorio")
      .oneOf([Yup.ref("password")], "Las contraseñas tienen que ser iguales"),
    conditionsAcepted: Yup.bool().isTrue(true),
  });
}
