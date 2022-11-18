import styled from "styled-components";
import { ITheme } from "@config";

interface IProps {
  name: string;
  label: string;
  placeholder: string;
  register: any;
}

export const ControlledInput = (props: IProps) => {
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
      <Label data-testid="dti-controlled-input-label" error={name in errors}>
        {label}
      </Label>
      <TextInput
        data-testid="dti-controlled-input"
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
        <Label data-testid={`dti-error-message-${name}`} error={name in errors}>
          {errors?.[name as keyof typeof errors]}
        </Label>
      ) : null}
    </>
  );
};

const Label = styled.label`
  color: ${(props: { theme: ITheme; error: boolean }) =>
    props.error ? props.theme.colors.error : "grey"};
`;

const TextInput = styled.input`
  padding-left: 0.5rem;
  margin: 1rem 0;
  height: 2rem;
  border-radius: 0.3rem;
  border: ${({ theme, error }: { theme: ITheme; error: boolean }) =>
    `1px solid ${error ? theme.colors.error : theme.colors.darkGrey}`};
`;
