import { Component } from "react";
import { IStyledTheme } from "@config";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode | React.ReactNode[] | any;
  error: string;
}

export class ErrorBoundaryHOC extends Component<IProps> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError || this.props.error) {
      return (
        <>
          {this.props.children}
          <H1>{this.props.error}</H1>
        </>
      );
    }

    return <>{this.props.children}</>;
  }
}

const H1 = styled.h1`
  color: ${(props: IStyledTheme) => props.theme.colors.error};
`;
