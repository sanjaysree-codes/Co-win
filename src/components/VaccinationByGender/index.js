// Write your code here
import {Pie, PieChart, Cell, Legend} from 'recharts'

const VaccinationByGender = props => {
  const {vaccineBYGenderDetails} = props
  return (
    <>
      <h1 className="head">Vaccination by gender</h1>

      <PieChart width={1000} height={300}>
        <Pie
          cy="40%"
          data={vaccineBYGenderDetails}
          nameKey="gender"
          startAngle={180}
          endAngle={0}
          innerRadius="40%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" layout="horizontal" align="center" />
      </PieChart>
    </>
  )
}
export default VaccinationByGender
