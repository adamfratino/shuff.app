const Input = ({ name, score, handleSetScore }) => (
  <label htmlFor={name} className={`is-${name}`}>
    <span>{name}</span>
    <input
      name={name}
      inputMode="numeric"
      pattern="[0-9]*"
      placeholder={score[name]}
      onChange={(e) =>
        handleSetScore({
          ...score,
          [name]: e.target.value,
        })
      }
    />
  </label>
)

export default Input
