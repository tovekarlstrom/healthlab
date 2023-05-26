import React from "react"
import MicroCircle from "./MicroCircle"

interface MicronutrientCircleProps {
  nutrientName: string
  nutrientAmount: number
  totalSum: number
}

const MicronutrientCircle: React.FC<MicronutrientCircleProps> = ({
  nutrientName,
  nutrientAmount,
  totalSum,
}) => {
  const percentage = Math.round((nutrientAmount / totalSum) * 100)
  const circumference = 2 * Math.PI * 32.5
  const dashOffset = (circumference * (100 - percentage)) / 100

  return (
    <div style={{ textAlign: "center", width: "100px" }}>
      <h1 style={{ fontSize: "16px", marginBottom: "24px" }}>{nutrientName}</h1>
      <p style={{ fontSize: "14px", marginBottom: "24px", fontWeight: "500" }}>
        {nutrientAmount} g
      </p>
      <MicroCircle nutrientAmount={nutrientAmount} totalSum={totalSum} />
    </div>
  )
}

interface MicroNutrientProps {
  carbs: number
  fat: number
  protein: number
  kcal: number
}

const MicroNutrient: React.FC<MicroNutrientProps> = ({
  carbs,
  fat,
  protein,
  kcal,
}) => {
  const totalSum = protein + carbs + fat

  return (
    <div
      style={{
        width: "290px",
        height: "237px",
        boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <MicronutrientCircle
          nutrientName="Protein"
          nutrientAmount={protein}
          totalSum={totalSum}
        />
        <MicronutrientCircle
          nutrientName="Kolhydrater"
          nutrientAmount={carbs}
          totalSum={totalSum}
        />
        <MicronutrientCircle
          nutrientName="Fett"
          nutrientAmount={fat}
          totalSum={totalSum}
        />
      </div>
      <p style={{ fontSize: "16px", marginTop: "24px", fontWeight: "500" }}>
        <span style={{ fontWeight: "600" }}>Totalt:</span> {kcal} kcal
      </p>
    </div>
  )
}

export default MicroNutrient
