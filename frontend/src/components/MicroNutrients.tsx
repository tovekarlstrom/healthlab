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
  return (
    <div style={{ textAlign: "center", width: "100px" }}>
      <p className="h5" style={{ marginBottom: "24px" }}>
        {nutrientName}
      </p>
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
        // maxWidth: "358px",
        // height: "237px",
        height: "100%",
        width: "100%",
        boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        // margin: "0 auto",
      }}
    >
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
      <p style={{ fontSize: "16px", marginTop: "24px", fontWeight: "500" }}>
        <span style={{ fontWeight: "600" }}>Totalt:</span> {kcal} kcal
      </p>
    </div>
  )
}

export default MicroNutrient
