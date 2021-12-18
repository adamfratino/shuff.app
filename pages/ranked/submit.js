import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useUser } from '@auth0/nextjs-auth0'
import { BGCOLOR_RANKED } from '../../tokens'

const formatName = (name) => {
  const spaces = name.replace('_', ' ')
  const words = spaces.split(' ')
  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')
}

const RankedSubmit = () => {
  const { user } = useUser()
  const [users, setUsers] = useState([])

  const [winner, setWinner] = useState(undefined)
  const [loser, setLoser] = useState(undefined)
  const [court, setCourt] = useState(undefined)
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isValidated, setIsValidated] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const submittedBy = user.nickname
    const result = { winner, loser, court, date, submittedBy }
    axios
      .post('https://sheet.best/api/sheets/2e60faec-9701-4de5-92c9-ef31251553df', result)
      .then((response) => {
        // console.log(response)
        setIsSubmitted(true)
      })
  }

  useEffect(() => {
    if (!!winner && !!loser && !!court && !!date) setIsValidated(true)
  }, [winner, loser, court, date])

  useEffect(() => {
    // get all users
    axios
      .request({
        method: 'GET',
        url: 'https://dev-jjd1078t.us.auth0.com/api/v2/users',
        params: { q: '', search_engine: 'v3' },
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImRvVFUwNU85dWw0cnZxS3JuV084SiJ9.eyJpc3MiOiJodHRwczovL2Rldi1qamQxMDc4dC51cy5hdXRoMC5jb20vIiwic3ViIjoiQXJVMVA1Q0VxaGJRVW84dFhyS3pLSEIwVGZWdER4amtAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LWpqZDEwNzh0LnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjM5ODAwMTQxLCJleHAiOjE2Mzk4ODY1NDEsImF6cCI6IkFyVTFQNUNFcWhiUVVvOHRYckt6S0hCMFRmVnREeGprIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGNyZWF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgcmVhZDpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBjcmVhdGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.td_K1zXk869NHmlN97Im-p857bWTkqMi_7VxgA0OmXK2RZaVaU2evn-4BKiblpYW5D1pt6iaFFRR7-_lRxIGzUrUppqKdRTHNEcjAztRy4xgYYm6g-BkRUTKJGQfRgArgFb2wmX9wBo5WTO74lS2IVq8QrVGiKVmozRNIFA2SFAsxApNgWjheF98cj-cZWWph-xjrvNszQasvHYt6Og-wj_XtfrUhMc4RyfqoGkOTsBNgOX0AGjfDnh6DDoMQU79WZcPFHHW6fj1vhyR5DRC1vAeJH_Zghx5-bN0UZtDTOi9XEeNiQjUg3xgT4yIoBv0fXoBY0Q9eY7WIxhnbizO6A',
        },
      })
      .then((response) => {
        response.data.map((user) => setUsers((oldUsers) => [...oldUsers, user.name]))
      })
  }, [])

  return user ? (
    <StyledFormContainer>
      <h1>Submit a Result</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          <span className={`validation ${winner ? 'is-validated' : ''}`}>✅</span>
          <span>
            Winner<span className="required">*</span>:
          </span>
          <select
            required
            onChange={(e) => setWinner(formatName(e.target.value))}
            defaultValue="default"
          >
            <option value="default" disabled>
              Select a winner
            </option>
            {users.map((user) => {
              const userValue = user.replace(' ', '_').toLowerCase()
              return (
                <option key={userValue} value={userValue}>
                  {user}
                </option>
              )
            })}
          </select>
        </label>
        <label>
          <span className={`validation ${loser ? 'is-validated' : ''}`}>✅</span>
          <span>
            Loser<span className="required">*</span>:
          </span>
          <select
            required
            onChange={(e) => setLoser(formatName(e.target.value))}
            defaultValue="default"
          >
            <option value="default" disabled>
              Select a loser
            </option>
            {users.map((user) => {
              const userValue = user.replace(' ', '_').toLowerCase()
              return (
                <option key={userValue} value={userValue}>
                  {user}
                </option>
              )
            })}
          </select>
        </label>
        <div>
          <label>
            <span className={`validation ${court ? 'is-validated' : ''}`}>✅</span>
            <span>
              Court<span className="required">*</span>:
            </span>
          </label>
          <select
            required
            onChange={(e) => setCourt(e.target.value)}
            defaultValue="default"
          >
            <option value="default" disabled>
              Select a court number
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label>
            <span>
              <span className={`validation ${date ? 'is-validated' : ''}`}>✅</span>
              Date<span className="required">*</span>:
            </span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" disabled={!isValidated}>
          Submit Result
        </button>
        <a
          href="/ranked"
          style={{
            fontSize: '10px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textDecoration: 'underline',
          }}
        >
          &larr; Back to Ranked
        </a>
      </StyledForm>
      {isSubmitted && (
        <Overlay>
          <div className="inner">
            <h1>Thanks for your submission!</h1>
            <a href="/ranked" className="button">
              Go back to results
            </a>
          </div>
        </Overlay>
      )}
    </StyledFormContainer>
  ) : (
    <a href="/api/auth/login">Please Sign Up or Login</a>
  )
}

export default RankedSubmit

const StyledFormContainer = styled.section`
  padding: 16px;
  height: 100vh;
  background-color: ${BGCOLOR_RANKED};

  h1 {
    font-size: 22px;
  }
`
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;

  .inner {
    border: 4px;
    background: ${BGCOLOR_RANKED};
    padding: 16px;
  }

  .button {
    appearance: none;
    outline: 0;
    text-align: center;
    border: 0;
    color: white;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.1px;
    text-transform: uppercase;
    border-radius: 4px;
    display: block;
    transition: all 150ms ease;
    padding: 16px 8px;
    margin-top: 16px;
    background-color: #222;
    cursor: pointer;

    &:hover {
      background-color: #000;
    }
  }
`

const StyledForm = styled.form`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, 1fr);

  span {
    display: inline-block;
    margin-bottom: 4px;
  }

  label {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: bold;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    position: relative;

    .validation {
      position: absolute;
      right: 0;
      display: none;

      &.is-validated {
        display: block;
      }
    }

    .required {
      color: red;
    }
  }

  input,
  select {
    padding: 8px;
    width: 100%;
    font-family: Helvetica;
    outline: 0;
    border: 1px solid #ccc;
  }

  button {
    appearance: none;
    outline: 0;
    border: 0;
    color: white;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.1px;
    text-transform: uppercase;
    border-radius: 4px;
    display: block;
    transition: all 150ms ease;
    padding: 16px 8px;
    margin-top: 16px;
    background-color: #222;
    cursor: pointer;

    &:disabled {
      opacity: 0.65;
      pointer-events: none;
      cursor: disabled;
    }

    &:hover {
      background-color: #000;
    }
  }
`
