const Countdown = ({ parseForm }) => {
  return (
    <div>
      <h1>{}</h1>
      <p>Cuantos segundos quieres contar ?</p>
      <form action="" onSubmit={(e) => parseForm(e)}>
        <input type="number" name="seconds" />
        <br />
        <br />
        <button>iniciar</button>
      </form>
    </div>
  )
}

export default Countdown
