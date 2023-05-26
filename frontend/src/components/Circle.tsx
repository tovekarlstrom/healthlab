import "../styles/Circle.css"

export default function Circle() {
  const nutrientAmount = 20
  const totalSum = 100
  const calories = 1134

  const percentage = Math.round((nutrientAmount / totalSum) * 100)
  const circumference = 2 * Math.PI * 32.5
  const dashOffset = (circumference * (100 - percentage)) / 100

  const circleStyle = {
    strokeDasharray: `${circumference}`,
    strokeDashoffset: dashOffset,
    transform: "rotate(-90deg)",
    transformOrigin: "center",
    transition: "stroke-dashoffset 0.3s ease-in-out",
  }

  return (
    <div className="Circle">
      <div className="CircleBackground">
        <svg viewBox="0 0 70 70">
          <circle
            cx="35"
            cy="35"
            r="32.5"
            fill="transparent"
            stroke="#FFF"
            strokeWidth="5"
          />
        </svg>
      </div>
      <div className="CircleFill">
        <svg viewBox="0 0 70 70">
          <circle
            cx="35"
            cy="35"
            r="32.5"
            fill="transparent"
            stroke="#7ACB94"
            strokeWidth="5"
            style={circleStyle}
          />
        </svg>
        <div className="CircleText">
          <p className="h1"> {calories} </p>
          <p>kcal kvar</p>
        </div>
      </div>
    </div>
  )
}
