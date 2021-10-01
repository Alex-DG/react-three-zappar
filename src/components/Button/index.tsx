import styled from 'styled-components'

type ButtonProps = {
  primary?: boolean
}

const Button = styled.button<ButtonProps>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? 'palevioletred' : 'transparent')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  cursor: pointer;

  :hover {
    background: ${(props) => (props.primary ? 'transparent' : 'palevioletred')};
    color: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  }

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default Button
