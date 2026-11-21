// Write your code here
import {Cell, Pie, PieChart, Legend} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props

  return (
    <>
      <h1 className="head">Vaccination by Age</h1>

      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="40%"
          nameKey="age"
          data={vaccinationByAgeDetails}
          startAngle={0}
          endAngle={360}
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend iconType="circle" layout="horizontal" align="center" />
      </PieChart>
    </>
  )
}
export default VaccinationByAge
