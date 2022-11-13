import styled from "styled-components";

interface IRegister {
  errors: any;
  formData: any;
}

interface IProps {
  name: string;
  label: string;
  placeholder: string;
  register: any;
}

export const Input = (props: IProps) => {
  const {
    name,
    label,
    placeholder,
    register: { errors, formData },
    register,
    ...rest
  } = props;
  return (
    <>
      <Label error={name in errors}>{label}</Label>
      <TextInput
        {...register}
        onChange={(e) => {
          register.onChange(name)(e.target.value);
        }}
        error={name in errors}
        placeholder={placeholder}
        value={formData[name] || ""}
        {...rest}
      />
      {name in errors ? (
        <Label data-test-id="error-message" error={name in errors}>
          {errors?.[name as keyof typeof errors]}
        </Label>
      ) : null}
    </>
  );
};

const Label = styled.label`
  color: ${(props: { error: boolean }) => (props.error ? "red" : "grey")};
`;

const TextInput = styled.input`
  padding-left: 0.5rem;
  margin: 1rem 0;
  height: 2rem;
  border-radius: 0.3rem;
  border: ${({ theme, error }: { theme: any; error: boolean }) =>
    `1px solid ${error ? theme.colors.error : theme.colors.darkGrey}`};
`;
