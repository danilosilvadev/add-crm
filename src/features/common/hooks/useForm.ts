import { useState } from "react";

export const useForm = ({ initialState = {}, schema = {} }: any) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>(
    initialState
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitTouched, setSubmitTouched] = useState<boolean>(false);

  const handleChange = (key: string) => {
    return (value: string) => {
      setFormData((prevState) => {
        return {
          ...prevState,
          [key]: value,
        };
      });
    };
  };

  const handleSubmitForm = async (
    callback: (formData: { [key: string]: string }) => void,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setSubmitTouched(true);
    handleValidation();
    if (Object.keys(errors).length === 0 && Object.keys(formData).length > 2) {
      return callback(formData);
    }
  };

  const handleValidation = () => {
    schema
      .validate(formData, { abortEarly: false })
      .then((valid: boolean) => {
        if (Object.keys(errors).length !== 0) setErrors({});
      })
      .catch(async (error: any) => {
        const errors: { [key: string]: string } = {};
        await error.inner.forEach((e: any) => {
          const { path, message } = e;
          errors[path] = message;
        });
        setErrors(errors);
      });
  };

  const handleBlur = async () => {
    if (!submitTouched) return;
    handleValidation();
  };

  const register = {
    onChange: handleChange,
    onBlur: handleBlur,
    errors: errors,
    formData: formData,
  };

  return { formData, handleSubmitForm, register, errors };
};
