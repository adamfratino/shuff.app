import { Button as SemanticButton } from 'semantic-ui-react'

const Button = (props) => (
  <SemanticButton color="teal" fluid size="big" {...props}>
    {props.children}
  </SemanticButton>
)

export default Button
