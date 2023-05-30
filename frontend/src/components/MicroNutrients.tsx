import React from "react"
import MicroCircle from "./MicroCircle"
import "../styles/MicroNutrients.css"

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
  return (
    <div className="MicroNutrientsPart">
      <p className="h5">{nutrientName}</p>
      <p className="pMed">{nutrientAmount} g</p>
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
    <div className="MicroNutrients">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
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
      <p className="pMed totalCal">
        <span style={{ fontWeight: "600" }}>Totalt:</span> {kcal} kcal
      </p>
    </div>
  )
}

export default MicroNutrient
