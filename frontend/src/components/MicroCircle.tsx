import "../styles/Circle.css"

interface MicroCircleProps {
  nutrientAmount: number
  totalSum: number
}
export default function MicroCircle(props: MicroCircleProps) {
  const { nutrientAmount, totalSum } = props
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
      <div className="MicroCircleBackground">
        <svg viewBox="0 0 70 70">
          <circle
            cx="32.5"
            cy="32.5"
            r="27.5"
            fill="transparent"
            stroke="#FFF"
            strokeWidth="5"
          />
        </svg>
      </div>

      <div className="MircoCircleFill">
        <svg viewBox="0 0 70 70">
          <circle
            cx="32.5"
            cy="32.5"
            r="27.5"
            fill="transparent"
            stroke="#7ACB94"
            strokeWidth="5"
            style={circleStyle}
          />
          <text
            x="50%"
            y="54%"
            textAnchor="middle"
            dominantBaseline="central"
            className="MicroCircleText"
          >
            {percentage}%
          </text>
        </svg>
      </div>
    </div>
  )
}
