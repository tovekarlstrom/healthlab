import React from 'react';

interface MicronutrientCircleProps {
  nutrientName: string
  nutrientAmount: number
}

const MicronutrientCircle: React.FC<MicronutrientCircleProps> = ({
  nutrientName,
  nutrientAmount,
}) => {
  const percentage = Math.min(Math.max(nutrientAmount, 0), 100) // lägger value mellan 0 and 100

  const circumference = 2 * Math.PI * 32.5; // omkretsen av cirkeln 2 * PI * radius
      console.log(circumference)
  const dashOffset = (circumference * (100 - percentage)) / 100

  const circleStyle = {
    strokeDasharray: `${circumference}`,
    strokeDashoffset: dashOffset,
    transform: 'rotate(-90deg)',
    transformOrigin: 'center',
    transition: 'stroke-dashoffset 0.3s ease-in-out'
  };

  console.log('Rendering MicronutrientCircle:', nutrientName, nutrientAmount)
  console.log(dashOffset)


  return (
    <div style={{ textAlign: 'center', width: '100px' }}>
      <h1 style={{ fontSize: '16px', marginBottom: '24px' }}>{nutrientName}</h1>
      <p style={{ fontSize: '14px', marginBottom: '24px' }}>{nutrientAmount} grams</p>
      <svg width="65" height="65">
        <circle
          cx="32.5"
          cy="32.5"
          r="27.5"
          fill="transparent"
          stroke="#7ACB94"
          strokeWidth="5"
          style={circleStyle}
        />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="14">
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

const MicroNutrient: React.FC = () => {
  console.log('renderar MicroNutrient')

  return (
    <div
      style={{
        width: '290px',
        height: '237px',
        boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.25)',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <MicronutrientCircle nutrientName="Protein" nutrientAmount={75} />
        <MicronutrientCircle nutrientName="Kolhydrater" nutrientAmount={12} />
        <MicronutrientCircle nutrientName="Fett" nutrientAmount={12} />
      </div>
      <p style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '24px' }}>
        Totalt: {"{nummer}"}kcal
      </p>
    </div>
  )
}

export default MicroNutrient;
