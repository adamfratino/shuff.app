import debounce from 'lodash.debounce'
import { useEffect, useState, useCallback, useContext } from 'react'
import { Header, Input, Form, Message, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { firestore } from '../../lib/firebase'
import { UserContext } from '../../lib/context'
import { Button } from './'

const UsernameForm = () => {
  const [formValue, setFormValue] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [loading, setLoading] = useState(false)

  const { user, username } = useContext(UserContext)

  const onSubmit = async (e) => {
    e.preventDefault()

    // Create refs for both documents
    const userDoc = firestore.doc(`users/${user.uid}`)
    const usernameDoc = firestore.doc(`usernames/${formValue}`)

    // Commit both docs together as a batch write.
    const batch = firestore.batch()
    batch.set(userDoc, {
      username: formValue,
      photoURL: user.photoURL,
      displayName: user.displayName,
    })
    batch.set(usernameDoc, { uid: user.uid })

    await batch.commit()
  }

  const onChange = (e) => {
    // Force form value typed in form to match correct format
    const val = e.target.value.toLowerCase()
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/

    // Only set form value if length is < 3 OR it passes regex
    if (val.length < 3) {
      setFormValue(val)
      setLoading(false)
      setIsValid(false)
    }

    if (re.test(val)) {
      setFormValue(val)
      setLoading(true)
      setIsValid(false)
    }
  }

  useEffect(() => {
    checkUsername(formValue)
  }, [formValue])

  // Hit the database for username match after each debounced change
  // useCallback is required for debounce to work
  const checkUsername = useCallback(
    debounce(async (username) => {
      if (username.length >= 3) {
        const ref = firestore.doc(`usernames/${username}`)
        const { exists } = await ref.get()
        console.log('Firestore read executed!')
        setIsValid(!exists)
        setLoading(false)
      }
    }, 500),
    [],
  )

  return (
    !username && (
      <div>
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <label style={{ marginBottom: '4px' }}>Search available usernames:</label>
            <Input
              icon={
                formValue.length > 2 &&
                (isValid ? (
                  <Icon name="check" color="green" />
                ) : (
                  <Icon name="ban" color="red" />
                ))
              }
              // iconPosition="right"
              name="username"
              placeholder="BiscuitBully84"
              value={formValue}
              onChange={onChange}
              loading={loading}
              size="big"
              fluid
            />
          </Form.Field>
          <UsernameMessage username={formValue} isValid={isValid} loading={loading} />
          <Button type="submit" disabled={!isValid} color="teal" fluid size="big">
            Lock It In
          </Button>
        </Form>
      </div>
    )
  )
}

export default UsernameForm

const UsernameMessage = ({ username, isValid, loading }) => {
  if (username && username.length > 2 && !isValid && !loading) {
    return <StyledTakenWarning>That username is taken!</StyledTakenWarning>
  }
  return null
}

const StyledTakenWarning = styled.span`
  color: #f00;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 11px;
  font-style: italic;
`
